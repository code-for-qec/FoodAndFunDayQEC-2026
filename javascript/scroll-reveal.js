document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px -50px -50px 0px", // triggers slightly before entering the screen fully
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Export observer to window so dynamic elements can register themselves
    window.scrollObserver = observer;

    // Observe initial static elements
    const revealElements = document.querySelectorAll(".scroll-reveal");
    revealElements.forEach(el => observer.observe(el));
});
