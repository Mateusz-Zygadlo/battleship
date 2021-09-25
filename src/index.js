import gameBoardFields from "./components/gameBoardFields";
import createShip from "./components/createShip";


const shipNameAndSize = [
    {name: 'Destroyer', size: 2, id: 2, land: false},
    {name: 'Submarine', size: 3, id: 3, land: false},
    {name: 'Cruiser', size: 3, id: 3, land: false},
    {name: 'Battleship', size: 4, id: 4, land: false},
    {name: 'Carrier', size: 5, id: 5, land: false},
]

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
createShip(shipNameAndSize);

let dragged;

const gameFieldsArr = [];
let count = 0;

for(let i = 0; i < 10; i++){
    const newArr = [];

    for(let j = 0; j < 10; j++){
        newArr.push(count);
        count++;
    }
    gameFieldsArr.push(newArr);
}

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

    if(e.target.className == 'gameField'){
        e.target.style.background = "";
        e.target.appendChild(dragged);

        let shipIsGoodSize = false;
 
        let resultPosition = e.target.dataset.row + e.target.dataset.column;

        let stringToInt = Number(resultPosition);

        let row = resultPosition.split('')[0];
        let column = resultPosition.split('')[1];
    
        for(let i = 0; i < resultPosition.split('').length; i++){
            if(resultPosition.split('')[0] == 0){
                resultPosition = resultPosition.split('')[1];
            }
        }   

        const nameShip = e.target.firstChild.className.split(' ')[1];
        let lengthShip;

        let indexObj;
        
        for(let j = 0; j < shipNameAndSize.length; j++){
            if(shipNameAndSize[j].name == nameShip){
                lengthShip = shipNameAndSize[j].size;
                indexObj = j
            }
        }
        const firstPosition = stringToInt;
        const lastShipPosition = stringToInt + lengthShip - 1;
        const shipArrPosition = [];

        for(let x = firstPosition; x <= lastShipPosition; x++){
            shipArrPosition.push(x);
        }

        const isTrue = (gameFieldsArr, firstPosition, lastShipPosition, shipIsGoodSize) => {
            for(let n = 0; n < gameFieldsArr.length; n++){
                if(gameFieldsArr[n].includes(firstPosition)){
                    if(gameFieldsArr[n].includes(lastShipPosition)){
                        shipIsGoodSize = true;
                        shipNameAndSize[indexObj].land = true;
    
                        return shipIsGoodSize;
                    }; 
                
                    return shipIsGoodSize = false;
                }
            }
        }

        if(!isTrue(gameFieldsArr, firstPosition, lastShipPosition, shipIsGoodSize)){
            dragged.parentNode.removeChild(dragged);
            e.target.style.background = "";
            createShip(shipNameAndSize);
            shipNameAndSize[indexObj].land = false;
        }else{
            e.target.style.background = "";
            dragged.parentNode.removeChild(dragged);
            e.target.appendChild(dragged);
        }

        createShip(shipNameAndSize);  
    }
}, false);