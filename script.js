// Velger alle elementer med klassen "animate"
const animatedElements = document.querySelectorAll('.animate');

// Funksjon for å sjekke om elementet er i visning
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Funksjon for å vise animasjon når elementet er i visning
function handleScrollAnimation() {
    animatedElements.forEach(el => {
        if (isElementInViewport(el)) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
}

// Lytter til scroll-event
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation); // Sjekker ved last
