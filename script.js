// slider

const slides = document.querySelector('.slides');
let index = 0;

function showSlides() {
    index++;
    if (index >= slides.children.length) {
        index = 0;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showSlides, 3000);



// Function to animate numbers
function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const increment = target / 200; // Adjust speed here
    let count = 0;

    function updateCounter() {
        if (count < target) {
            count += increment;
            counter.innerText = Math.floor(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
}

// Observer to detect when the section is in view
const counters = document.querySelectorAll('.counter');
const statsSection = document.getElementById('stats');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Reset counters to 0 before animating
            counters.forEach(counter => {
                counter.innerText = '0';
                animateCounter(counter);
            });
        }
    });
}, { threshold: 0.9 });

observer.observe(statsSection);
