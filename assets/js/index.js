document.addEventListener("DOMContentLoaded", function() {
    const fadeInUpElements = document.querySelectorAll(".fade-in-up");
    const fadeInLeftElements = document.querySelectorAll(".fade-in-left");

    const scrollHandler = (elements) => {
        elements.forEach(el => {
            const position = el.getBoundingClientRect();
            if (position.top <= window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    };

    // Initial check
    scrollHandler(fadeInUpElements);
    scrollHandler(fadeInLeftElements);

    // Scroll listener to check on scroll
    window.addEventListener("scroll", () => {
        scrollHandler(fadeInUpElements);
        scrollHandler(fadeInLeftElements);
    });
});
