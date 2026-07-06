// Menu mobile
const toggleButton = document.querySelector('.navbar-toggle');
const navbarMenu = document.getElementById('navbarMenu');

if (toggleButton && navbarMenu) {
    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('show');
    });

    navbarMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('show');
        });
    });
}

// Cards interativos
const notasGrids = document.querySelectorAll('.notas-grid');

notasGrids.forEach((notasGrid) => {
    const cardsOriginais = Array.from(notasGrid.querySelectorAll('.notas-card'));

    if (cardsOriginais.length === 0) return;

    const cardExpandido = document.createElement('div');
    cardExpandido.classList.add('notas-card', 'expanded');
    cardExpandido.innerHTML = `
        <button type="button" class="minimize-button" aria-label="Fechar">×</button>
        <div class="expanded-body">
            <h1>EM CONSTRUÇÃO</h1>
        </div>
    `;

    cardExpandido.querySelector('.minimize-button').addEventListener('click', () => {
        notasGrid.innerHTML = '';
        cardsOriginais.forEach(card => notasGrid.appendChild(card));
    });

    cardsOriginais.forEach(card => {
        card.addEventListener('click', () => {
            notasGrid.innerHTML = '';
            notasGrid.appendChild(cardExpandido);
        });
    });
});
