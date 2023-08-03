export function skillsEvents() {
    const h3 = document.querySelectorAll('.h-hover');

    h3.forEach((h3) => {
        h3.addEventListener('mouseenter', (event) => {
            const hoverText = event.target.nextElementSibling;
            hoverText.style.opacity = '1';
            hoverText.style.visibility = 'visible';
        });

        h3.addEventListener('mouseleave', (event) => {
            const hoverText = event.target.nextElementSibling;
            hoverText.style.opacity = '0';
            hoverText.style.visibility = 'hidden';
        });
    });

};
