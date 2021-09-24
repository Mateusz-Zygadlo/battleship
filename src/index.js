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

let dragged;


document.addEventListener("dragstart", function(e) {
    dragged = e.target;

    e.target.style.opacity = .3;
}, false);

document.addEventListener("dragend", function(e) {
    e.target.style.opacity = "";
    e.target.dataset.row = e.target.parentNode.dataset.row;
    e.target.dataset.column = e.target.parentNode.dataset.column;

    console.log(e.target.dataset.row, e.target.dataset.column);
}, false);

document.addEventListener("dragover", function(e) {
    e.preventDefault();
}, false);

document.addEventListener("dragenter", function(e) {
    if(e.target.className == "gameField"){
        e.target.style.background = "yellow";
    }
}, false);

document.addEventListener("dragleave", function(e) {

    if (e.target.className == "gameField"){
        e.target.style.background = "";
    }
}, false);

document.addEventListener("drop", function(e) {
    e.preventDefault();
    if (e.target.className == "gameField") {
        e.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        e.target.appendChild(dragged);
    }
}, false);