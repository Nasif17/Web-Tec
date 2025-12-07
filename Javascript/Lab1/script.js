const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    document.getElementById('nameError').innerText = '';
    document.getElementById('mailError').innerText = '';
    document.getElementById('passError').innerText = '';
    document.getElementById('confirmError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('Message').innerText = '';


    let name = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value;
    let confirm = document.getElementById('Password').value;
    let phone = document.getElementById('phone').value.trim();

    let isValid = true;


    if (name === '') {
        document.getElementById('nameError').innerText = 'Full Name is required.';
        isValid = false;
    }

    if (!email.includes('@gmail') || !email.includes('.com')) {
        document.getElementById('mailError').innerText = 'Email must contain @gmail and .com';
        isValid = false;
    }


    if (password.length < 8) {
        document.getElementById('passError').innerText = 'Password must be at least 8 characters.';
        isValid = false;
    }


    if (password !== confirm) {
        document.getElementById('confirmError').innerText = 'Passwords do not match.';
        isValid = false;
    }

    if (isNaN(phone) || phone === '') {
        document.getElementById('phoneError').innerText = 'Phone number must contain only digits.';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('Message').innerText = 'Registration Successful!';
    }
});