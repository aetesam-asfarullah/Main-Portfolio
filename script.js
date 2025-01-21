// Typing Animation for Hero Title and Roles
const heroTitle = document.querySelector('.hero-content h1');
const typedTextElement = document.querySelector('.typed-text');
const greetingText = "Aetesam Asfar";
const rolesArray = ['Web Developer', 'Designer', 'Problem Solver'];
let charIndex = 0;
let roleIndex = 0;
let isTypingGreeting = true;

function typeGreeting() {
    if (charIndex < greetingText.length) {
        heroTitle.textContent = greetingText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeGreeting, 70);
    } else {
        isTypingGreeting = false;
        charIndex = 0;
        setTimeout(typeRole, 300);
    }
}

function typeRole() {
    if (charIndex < rolesArray[roleIndex].length) {
        typedTextElement.textContent = rolesArray[roleIndex].substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeRole, 70);
    } else {
        setTimeout(eraseRole, 1500);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        typedTextElement.textContent = rolesArray[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 35);
    } else {
        roleIndex++;
        if (roleIndex >= rolesArray.length) roleIndex = 0;
        setTimeout(typeRole, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    heroTitle.textContent = '';
    setTimeout(typeGreeting, 300);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Active Navigation Highlight
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
