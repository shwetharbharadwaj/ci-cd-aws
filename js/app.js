// Simple script to show the page is interactive
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully via CI/CD pipeline!');
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Display last updated time
    const now = new Date();
    console.log('Last deployed:', now.toLocaleString());
});