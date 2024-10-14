// Vifert Jenuben Daniel V - CH.EN.U4AIE21061

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");
const User = require("./model/user");

const app = express();

mongoose.connect("mongodb://localhost/27017");

// Set up view engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error('Username and password are required');
        }
        const user = new User({ username });
        await User.register(user, password);
        req.login(user, (err) => {
            if (err) {
                console.error(err);
                return res.render("register", { error: "An error occurred during registration" });
            }
            return res.redirect("/secret");
        });
    } catch (error) {
        console.error(error);
        res.render("register", { error: error.message });
    }
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login",
    failureFlash: true
}));


app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

app.get("/secret", isLoggedIn, (req, res) => {
    res.render("secret");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else{
    res.redirect("/login");
    }
}

app.get("/check-user/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Only send non-sensitive information
        res.json({
            username: user.username,
            hasPassword: !!user.hash,
            hasSalt: !!user.salt
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error retrieving user" });
    }
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});