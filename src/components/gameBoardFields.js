const gameBoardFields = () => {
    const gameBoardClass = document.querySelector('.gameboard');

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            const gameField = document.createElement('div');
            gameField.classList.add('gameField');
            gameField.dataset.row = i;
            gameField.dataset.column = j;

            gameBoardClass.appendChild(gameField);
        }
    }
}

export default gameBoardFields;