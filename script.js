// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation class to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .hero h1, .hero p');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if(elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Form validation for login and signup
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#loginModal form');
    const signupForm = document.querySelector('#signupModal form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.querySelector('#loginEmail').value;
            const password = document.querySelector('#loginPassword').value;
            
            // Add your login logic here
            console.log('Login attempt:', { email });
            
            // For demo purposes, show success message
            alert('Login successful!');
            bootstrap.Modal.getInstance(document.querySelector('#loginModal')).hide();
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.querySelector('#signupName').value;
            const email = document.querySelector('#signupEmail').value;
            const password = document.querySelector('#signupPassword').value;
            
            // Add your signup logic here
            console.log('Signup attempt:', { name, email });
            
            // For demo purposes, show success message
            alert('Sign up successful!');
            bootstrap.Modal.getInstance(document.querySelector('#signupModal')).hide();
        });
    }
});

// Add tooltip initialization
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
