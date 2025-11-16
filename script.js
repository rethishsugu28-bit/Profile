document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL-TRIGGERED SECTION ANIMATIONS (Intersection Observer)
    // Selects all elements marked for animation (using the 'slide-up' class in HTML)
    const sections = document.querySelectorAll('.slide-up');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        // Trigger when 10% of the element is visible
        threshold: 0.1 
    };

    // Callback function executed when elements enter or exit the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the section is visible, add the 'visible' class to trigger the CSS transition (slide-up)
                entry.target.classList.add('visible');
                // Optional: Stop observing after it becomes visible
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Apply the observer to all sections with the 'slide-up' class
    sections.forEach(section => {
        observer.observe(section);
    });

    // 2. SMOOTH SCROLLING FOR NAVIGATION LINKS
    // Selects all links whose href starts with '#' (i.e., internal links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target section's position
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

});