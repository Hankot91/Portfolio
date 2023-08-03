import { actualizarAnho, calcularEdad } from "./modules/ageFuntions.js";
import { loadBubbles, loadCards } from "./modules/loadSections.js";
import { skillsEvents } from "./modules/skillsEvents.js";
import { contacEvent } from "./modules/contacEvents.js";
import { searchEvent } from "./modules/searchEvent.js";

(() => {
    const typed = new Typed(".auto-type", {
        strings: ['Frontend', 'Dev web', 'Programador'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    })
    searchEvent();
    loadBubbles();
    loadCards();
    skillsEvents();
    contacEvent();
    calcularEdad();
    actualizarAnho();


})();