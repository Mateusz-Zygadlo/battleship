const gameBoardFields = (gameFieldsArr) => {
    const gameBoardClass = document.querySelector('.gameboard');

    gameBoardClass.textContent = '';

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            if(gameFieldsArr[i][j] == 'x'){
                const gameField = document.createElement('div');
                gameField.classList.add('checked');
                gameField.dataset.row = i;
                gameField.dataset.column = j;

                gameBoardClass.appendChild(gameField);
            }else if(gameFieldsArr[i][j] == 'y'){
                const gameField = document.createElement('div');
                gameField.classList.add('blocked');
                gameField.dataset.row = i;
                gameField.dataset.column = j;

                gameBoardClass.appendChild(gameField);
            }else if(gameFieldsArr[i][j] == 'C'){
                const gameField = document.createElement('div');
                gameField.classList.add('Clicked');
                gameField.dataset.row = i;
                gameField.dataset.column = j;

                gameBoardClass.appendChild(gameField);
            }else if(gameFieldsArr[i][j] == 'D'){
                const gameField = document.createElement('div');
                gameField.classList.add('delete');
                gameField.dataset.row = i;
                gameField.dataset.column = j;

                gameBoardClass.appendChild(gameField);
            }else{
                const gameField = document.createElement('div');
                gameField.classList.add('gameField');
                gameField.dataset.row = i;
                gameField.dataset.column = j;
                
                gameBoardClass.appendChild(gameField);
            }
        }
    }
}

export default gameBoardFields;