let menuIcon = document.querySelector('#menuIcon');
let iconClose = document.querySelector('#iconClose');
let navbar = document.querySelector('.navbar');

// Cacher l'icône de fermeture par défaut
iconClose.style.display = 'none';

// Fonction pour gérer l'ouverture/fermeture du menu
menuIcon.onclick = () => {
    navbar.classList.toggle('active'); // Affiche ou masque le menu
    menuIcon.style.display = 'none'; // Cache l'icône "menu" (bars)
    iconClose.style.display = 'block'; // Affiche l'icône "fermer" (xmark)
};

// Fermer le menu quand on clique sur l'icône de fermeture
iconClose.onclick = () => {
    navbar.classList.remove('active'); // Masque le menu
    menuIcon.style.display = 'block'; // Affiche l'icône "menu" (bars)
    iconClose.style.display = 'none'; // Cache l'icône "fermer" (xmark)
};
