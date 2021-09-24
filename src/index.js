import gameBoardFields from "./components/gameBoardFields";
import createShip from "./components/createShip";

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

gameBoardFields();
createShip();

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('gameField')){
        console.log(e.target.dataset.row, e.target.dataset.column);
    }

    return;
})