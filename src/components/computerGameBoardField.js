const computerGameBoardField = () => {
    
    const computerGameboard = document.querySelector('.computerGameBoard');
    computerGameboard.textContent = '';

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const gameField = document.createElement('div');
            gameField.classList.add('field');
            gameField.dataset.row = i;
            gameField.dataset.column = j;
                
            computerGameboard.appendChild(gameField);
        }
    }
}

export default computerGameBoardField;