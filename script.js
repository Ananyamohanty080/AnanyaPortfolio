// Automatically display the current year in the footer.
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Add a small reveal animation when sections enter the screen.
const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.08 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
}