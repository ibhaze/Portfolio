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
// Function to hide the arrow on zoom
function handleZoomOrResize() {
    const arrow = document.querySelector('.scroll-down-arrow');

    // Get current width and height of the viewport
    const widthRatio = window.innerWidth / screen.width;

    // Hide the arrow if zoomed in (widthRatio > 1) or zoomed out (widthRatio < 1)
    if (widthRatio !== 1) {
        arrow.style.display = 'none';
    } else {
        arrow.style.display = 'block';
    }
}

// Listen for resize and orientation changes
window.addEventListener('resize', handleZoomOrResize);
window.addEventListener('orientationchange', handleZoomOrResize);

// Initial check on load
handleZoomOrResize();
