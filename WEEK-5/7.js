// Vifert Jenuben Daniel V - CH.EN.U4AIE21061

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if (name === '' || email === '' || age === '') {
        alert('All fields are required.');
        return false;
    }
    if (!/^[a-zA-Z ]+$/.test(name)) {
        alert('Name should contain only letters and spaces.');
        return false;
    }
    if (age <= 0) {
        alert('Age should be a positive number.');
        return false;
    }
    return true;
}
