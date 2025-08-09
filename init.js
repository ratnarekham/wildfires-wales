const clickableAreas = document.querySelectorAll('.clickable-area');
clickableAreas.forEach(area => {
    area.addEventListener('click', () => {
        const clue = area.dataset.clue;
        createPopup(clue);
    });
});

function createPopup(clueText) {
    const element = document.createElement('div');
    element.classList.add('popup');
    element.textContent = clueText;
    document.body.appendChild(element);
}