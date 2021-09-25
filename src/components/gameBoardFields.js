const gameBoardFields = () => {
    const gameBoardClass = document.querySelector('.gameboard');

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            if(i == 0 && j == 0){
                const gameField = document.createElement('div');
                gameField.classList.add('gameField');
                gameField.dataset.row = i;
                gameField.dataset.column = j;

                const draggableDiv = document.createElement('div');
                draggableDiv.id = 'draggable';
                draggableDiv.draggable = true;
                draggableDiv.dataset.row = i;
                draggableDiv.dataset.column = j;


                gameField.appendChild(draggableDiv);

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