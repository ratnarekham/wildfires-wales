

// popups when user clicks on area of image

let gamePopup = null;

function initializePopup() {
    gamePopup = document.createElement('div');
    gamePopup.classList.add('popup');
    gamePopup.style.display = 'none';
    
    const gameContainer = document.querySelector('.game-container');
    gameContainer.addEventListener('click', handleGameClick);
    gameContainer.appendChild(gamePopup);
}

function showPopupWithClue(clueText) {
    gamePopup.textContent = '';
    gamePopup.style.display = 'block';
    typeWriter(clueText, gamePopup, 50); // set speed of animation 
}

function handleGameClick(event) {
    if (event.target.closest('.popup')) {
        return; 
    }
    
    if (event.target.classList.contains('clickable-area')) {
        return; 
    }
    
    if (gamePopup && gamePopup.style.display !== 'none') {
        gamePopup.style.display = 'none';
    }
}

initializePopup();

// clickable areas

const clickableAreas = document.querySelectorAll('.clickable-area');
clickableAreas.forEach(area => {
    area.addEventListener('click', e => {
        e.stopPropagation()
        const clue = area.dataset.clue;
        showPopupWithClue(clue);
    });
});



// typewriter animation for clue text 

let currentTypewriterTimeout = null;

function typeWriter(text, element, speed) {
    if (currentTypewriterTimeout) {
        clearTimeout(currentTypewriterTimeout);
    }
    
    let i = 0; 
    element.textContent = '';

    function typeNextCharacter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            currentTypewriterTimeout = setTimeout(typeNextCharacter, speed);
        } else {
            currentTypewriterTimeout = null; 
        }
    }
    
    typeNextCharacter();
}
