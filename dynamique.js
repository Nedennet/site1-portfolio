// On sélectionne la barre de navigation
        const banniere = document.querySelector('.banniere');

        // On écoute l'événement de défilement (scroll) de la fenêtre
        window.addEventListener('scroll', () => {
            // Si on descend de plus de 50 pixels
            if (window.scrollY > 50) {
                banniere.classList.add('scrolled'); // On ajoute la classe qui rétrécit
            } else {
                banniere.classList.remove('scrolled'); // On l'enlève si on est tout en haut
            }
        });
        const cartesAccroche = document.querySelectorAll('.carte-accroche');

const accrocheObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 /* Déclenche dès que 10% de l'image dépasse en bas de l'écran */
});

cartesAccroche.forEach(carte => {
    accrocheObserver.observe(carte);
});
   const sections = document.querySelectorAll('.anim-scroll');
        
        const options = { 
            threshold: 0.1, // Déclenche dès que 10% de la section est visible
            rootMargin: "0px 0px -100px 0px" // Donne un petit décalage pour que ce soit plus fluide
        };

        const observerMenu = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active'); // On descend -> ça apparaît
                } else {
                    entry.target.classList.remove('active'); // On remonte -> ça redisparaît
                }
            });
        }, options);

        sections.forEach(section => observerMenu.observe(section));
    // Sélection des éléments de la modale
const modalTrigger = document.querySelector('.btn-book-trigger');
const modalOverlay = document.querySelector('#bookingModal');
const modalClose = document.querySelector('.close-modal-btn');

if (modalTrigger && modalOverlay && modalClose) {
    // Fonction pour ouvrir la modale
    modalTrigger.addEventListener('click', () => {
        modalOverlay.classList.add('modal-active');
        document.body.style.overflow = 'hidden'; // Empêche de scroller le site derrière
    });

    // Fonction pour fermer la modale (via la croix)
    modalClose.addEventListener('click', () => {
        modalOverlay.classList.remove('modal-active');
        document.body.style.overflow = ''; // Réactive le scroll du site
    });

    // Sécurité : fermer aussi si l'utilisateur clique en dehors de la boîte blanche
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.classList.remove('modal-active');
            document.body.style.overflow = '';
        }
    });
}

const menuToggle = document.querySelector('#mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}
