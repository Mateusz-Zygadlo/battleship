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

let dragged;


document.addEventListener("dragstart", (e) => {
    dragged = e.target;

    e.target.style.opacity = .3;

}, false);

document.addEventListener("dragend", (e) => {
    e.target.style.opacity = "";
    e.target.dataset.row = e.target.firstChild.dataset.row;
    e.target.dataset.column = e.target.firstChild.dataset.column;
}, false);

document.addEventListener("dragover", (e) => {
    e.preventDefault();
}, false);

document.addEventListener("dragenter", (e) => {
    if(e.target.className == "gameField"){
        e.target.style.background = "yellow";
    }
}, false);

document.addEventListener("dragleave", (e) => {

    if (e.target.className == "gameField"){
        e.target.style.background = "";
    }
}, false);

document.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.target.className == "gameField") {
        e.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        e.target.appendChild(dragged);
        console.log(e.target.nextSibling);
        console.log(e.target.childNodes[0].firstChild);
        console.log(e.target.childNodes[0].lastChild);
    }
}, false);