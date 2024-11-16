const navbar = document.querySelector('.navbar');
let lastScrollTop = window.scrollY;

window.addEventListener('scroll', () => {
    let currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
        // User is scrolling down
        navbar.classList.add('hidden'); // Hide the navbar
    } else {
        // User is scrolling up
        navbar.classList.remove('hidden'); // Show the navbar
    }

    lastScrollTop = currentScrollTop; // Update last scroll position
}); 
