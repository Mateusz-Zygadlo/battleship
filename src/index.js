const ship = (bodyLength, whereHits, sunk) => {
    
    return{
        bodyLength,
        whereHits,
        sunk,
    }
}

const hit = (hitPosition) => {
    
    return{
        hitPosition,
    }
}

const isSunk = (bodyLength) => {

    const hits = bodyLength - ship().sunk;

    if(hits == 0){
        return 'ship is sunk';
    }

    return hits;
}

const gameBoard = () => {
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

gameBoard();

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('gameField')){
        console.log(e.target.dataset.row, e.target.dataset.column);
    }

    return;
})