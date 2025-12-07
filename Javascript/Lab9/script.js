// Theme Toggle
let isDark = false;
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        body.classList.remove('light');
        body.classList.add('dark');
        themeToggle.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        themeToggle.textContent = 'Switch to Dark Mode';
    }
});

// Greeting
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting;
    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (12 <= hour && hour < 17) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }
    document.getElementById('greeting').textContent = greeting;
}

updateGreeting();

// Section Toggling
const sections = ['about', 'projects', 'contact'];

function showSection(sectionId) {
    sections.forEach(id => {
        document.getElementById(id).style.display = id === sectionId ? 'block' : 'none';
    });
}

document.getElementById('aboutLink').addEventListener('click', () => showSection('about'));
document.getElementById('projectsLink').addEventListener('click', () => showSection('projects'));
document.getElementById('contactLink').addEventListener('click', () => showSection('contact'));

// Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Clear errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Valid email required.';
        valid = false;
    }

    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
        valid = false;
    }

    if (valid) {
        alert('Message sent successfully!');
        contactForm.reset();
    }
});