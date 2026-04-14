// Mobile menu toggle
const toggleMenu = () => {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('active');
};

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', toggleMenu);

// Form validation
const validateForm = () => {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    let valid = true;

    inputs.forEach(input => {
        if(!input.value) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return valid;
};

form.addEventListener('submit', (event) => {
    if(!validateForm()) {
        event.preventDefault();
    }
});

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animations
const animatedElements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

animatedElements.forEach(el => {
    observer.observe(el);
});
