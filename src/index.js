import gameBoardFields from "./components/gameBoardFields";
import createShip from "./components/createShip";
import computerGameBoardField from "./components/computerGameBoardField";

const gameFieldsArr = [];

const addCountInTenArr = (arr) => {
    let count = 0;

    for(let i = 0; i < 10; i++){
        const newArr = [];
    
        for(let j = 0; j < 10; j++){
            newArr.push(count);
            count++;
        }
        arr.push(newArr);
    }
}

addCountInTenArr(gameFieldsArr);

const shipNameAndSize = [
    {name: 'Destroyer', size: 2, id: 2, land: false, position: []},
    {name: 'Submarine', size: 3, id: 3, land: false, position: []},
    {name: 'Cruiser', size: 3, id: 3, land: false, position: []},
    {name: 'Battleship', size: 4, id: 4, land: false, position: []},
    {name: 'Carrier', size: 5, id: 5, land: false, position: []},
]

const shipNameAndSizeComputer = [
    {name: 'Destroyer', size: 2, position: []},
    {name: 'Submarine', size: 3, position: []},
    {name: 'Cruiser', size: 3, position: []},
    {name: 'Battleship', size: 4, position: []},
    {name: 'Carrier', size: 5, position: []},
]

let computerPlaysRandom = [];
let playerIndexPlays = [];

const addHundredNumbers = (arr) => {
    for(let i = 0; i < 100; i++){
        arr.push(i);
    }
}

addHundredNumbers(playerIndexPlays);
addHundredNumbers(computerPlaysRandom);

const trueOrFalse = (item) => {
    return item !== 'X';
}

let computerArr = [];

addCountInTenArr(computerArr);

const randomPosition = (num) => {
    return Math.floor(Math.random() * 94) + shipNameAndSizeComputer[num].size;
}

const computer = () => {
    let countArr = 0;
    computerArr.length = 0;

    addCountInTenArr(computerArr);
    computerGameBoardField(computerArr);

    for(let b = 0; b < 1000; b++){
        for(let x = 0; x < shipNameAndSizeComputer.length; x++){
            if(shipNameAndSizeComputer[x].position.every(trueOrFalse)){

            }else{
                shipNameAndSizeComputer[x].position.length = 0;
            }
        }

        if(shipNameAndSizeComputer[0].position.length && shipNameAndSizeComputer[1].position.length && shipNameAndSizeComputer[2].position.length && shipNameAndSizeComputer[3].position.length && shipNameAndSizeComputer[4].position.length){
            for(let o = 0; o < 10; o++){
                if(computerArr[o].filter(item =>  item == 'X')){
                    countArr += computerArr[o].filter(item => item == 'X').length;
                };
            }
            console.log(countArr);
            
            return {
                computerArr,
                shipNameAndSizeComputer,
            };
        }else{
            for(let i = 0; i < shipNameAndSizeComputer.length; i++){
                if(shipNameAndSizeComputer[i].position.length > 1){
                
                }else{
                    const value = randomPosition(i);
                    let row;
                    let column;
        
                    if(value.toString().length == 1){
                        row = 0;
                        column = Number(value.toString().split('')[0]);
                    }else{
                        row = Number(value.toString().split('')[0]);
                        column = Number(value.toString().split('')[1]);
                    }
        
                    const findIndexComputer = computerArr[row].findIndex(item => item == value);
        
                    if(findIndexComputer > 0){
                        if(findIndexComputer - shipNameAndSizeComputer[i].size >= 0){             
                            for(let j = 0; j < shipNameAndSizeComputer[i].size; j++){
                                shipNameAndSizeComputer[i].position.push(computerArr[row][findIndexComputer - j]);
                                computerArr[row][findIndexComputer - j] = 'X';
                            }
                            if(row == 0 && findIndexComputer == 0){
                                computerArr[row + 1][findIndexComputer + 1] = 'Y';
                                // for(let q = 0; q < shipNameAndSizeComputer[i].size; q++){
                                //     computerArr[row + 1][findIndexComputer - q];
                                // }
                            }else if(row == 0 && findIndexComputer == 9){
                                computerArr[row][findIndexComputer - shipNameAndSizeComputer[i].size] = 'Y';
                                // for(let q = 0; q < shipNameAndSizeComputer[i].size; q++){
                                //     computerArr[row + 1][findIndexComputer - q];
                                // }
                            }else if(row >= 0 && findIndexComputer == 0){
                                computerArr[row + 1][findIndexComputer + 1] = 'Y';
                                // for(let q = 0; q < shipNameAndSizeComputer[i].size; q++){
                                //     computerArr[row + 1][findIndexComputer - q];
                                //     computerArr[row - 1][findIndexComputer - q];
                                // }
                            }else if(row == 9 && findIndexComputer == 9){
                                computerArr[row][findIndexComputer - shipNameAndSizeComputer[i].size] = 'Y';
                                // for(let q = 0; q < shipNameAndSizeComputer[i].size; q++){
                                //     computerArr[row - 1][findIndexComputer - q];
                                // }
                            }else if(row >= 1 && findIndexComputer >= 1){
                                computerArr[row][findIndexComputer + 1] = 'Y';
                                computerArr[row][findIndexComputer - shipNameAndSizeComputer[i].size] = 'Y';
                            }else if(row >= 0 && findIndexComputer == 9){
                                computerArr[row][findIndexComputer - shipNameAndSizeComputer[i].size] = 'Y';
                                // for(let q = 0; q < shipNameAndSizeComputer[i].size; q++){
                                //     computerArr[row + 1][findIndexComputer - q];
                                //     computerArr[row - 1][findIndexComputer - q];
                                // }
                            }else if(row == 0 && findIndexComputer > 0){
                                computerArr[row][findIndexComputer + 1] = 'Y';
                                computerArr[row][findIndexComputer - shipNameAndSizeComputer[i].size] = 'Y';
                                // for(let q = 0; q < shipNameAndSizeComputer[i].size; q++){
                                //     computerArr[row + 1][findIndexComputer - q];
                                // }
                            }else{
                                computerArr[row][findIndexComputer + 1] = 'Y';
                                computerArr[row][findIndexComputer - shipNameAndSizeComputer[i].size] = 'Y';
                            }
                            computerGameBoardField(computerArr); 
                            console.log(computerArr);
                        }
                    }
                }
            }
        }
    }
}
computer();

const coppyComputerArr = [];

addCountInTenArr(coppyComputerArr);

let countComputerCoppy = 0;

const computerArrTwo = () => {
    for(let i = 0; i < shipNameAndSizeComputer.length; i++){
        for(let j = 0; j < shipNameAndSizeComputer[i].position.length; j++){
            
            let row;
            let column;
    
            if(shipNameAndSizeComputer[i].position[j].toString().split('').length == 1){
                row = 0;
                column = Number(shipNameAndSizeComputer[i].position[j].toString().split('')[0]);
            }else{
                row = shipNameAndSizeComputer[i].position[j].toString().split('')[0];
                column = shipNameAndSizeComputer[i].position[j].toString().split('')[1];
            }
    
            countComputerCoppy++;
    
            coppyComputerArr[row][column] = 'X';

            for(let m = 0; m < computerArr.length; m++){
                for(let p = 0; p < computerArr[m].length; p++){
                    if(computerArr[m][p] == 'Y'){
                        coppyComputerArr[m][p] = 'Y';
                    }
                }
            }
        }
    }
}

computerArrTwo();

console.log(coppyComputerArr, countComputerCoppy);


computerGameBoardField(coppyComputerArr);

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

let dragged;

gameBoardFields(gameFieldsArr);
createShip(shipNameAndSize);

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
    if(e.target.className == "gameField"){
        e.target.style.background = "";
    }
}, false);

const isTrue = (gameFieldsArr, firstPosition, lastShipPosition, shipIsGoodSize, indexObj) => {
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

const addYInArr = (gameFieldsArr, firstPosition, lengthShip, indexObj, lastShipPosition) => {
    for(let i = 0; i < gameFieldsArr.length; i++){
        for(let j = 0; j < gameFieldsArr[i].length; j++){
            if(gameFieldsArr[i][j] == firstPosition){
                if(gameFieldsArr[i][j] == 0){
                    for(let k = 0; k < lengthShip; k++){
                        shipNameAndSize[indexObj].position.push(gameFieldsArr[i][j + k]);
                        gameFieldsArr[i][j + k] = 'x';
                    }
                    gameFieldsArr[i + 1][j] = 'y';
                    for(let p = 0; p < lengthShip; p++){
                        gameFieldsArr[i + 1][j + p] = 'y';
                    }
                    gameFieldsArr[i][j + lengthShip] = 'y';
                }else if(gameFieldsArr[i][j] == gameFieldsArr[0][j]){
                    for(let k = 0; k < lengthShip; k++){
                        shipNameAndSize[indexObj].position.push(gameFieldsArr[i][j + k]);
                        gameFieldsArr[i][j + k] = 'x';
                    }
                    gameFieldsArr[i + 1][j] = 'y';
                    for(let p = 0; p < lengthShip; p++){
                        gameFieldsArr[i + 1][j + p] = 'y';
                    }
                    gameFieldsArr[i][firstPosition - 1] = 'y';
                    gameFieldsArr[i][lastShipPosition + 1] = 'y';
                }else if(gameFieldsArr[i][j] == gameFieldsArr[9][j] && j != 0){
                    for(let k = 0; k < lengthShip; k++){
                        shipNameAndSize[indexObj].position.push(gameFieldsArr[i][j + k]);
                        gameFieldsArr[i][j + k] = 'x';
                    }
                    for(let p = 0; p < lengthShip; p++){
                        gameFieldsArr[i - 1][j + p] = 'y';
                    }
                    gameFieldsArr[i][lengthShip + j] = 'y';
                    gameFieldsArr[i][j - 1] = 'y';
                }else if(gameFieldsArr[i][j] == gameFieldsArr[9][j]){
                    for(let k = 0; k < lengthShip; k++){
                        shipNameAndSize[indexObj].position.push(gameFieldsArr[i][j + k]);
                        gameFieldsArr[i][j + k] = 'x';
                    }
                    for(let p = 0; p < lengthShip; p++){
                        gameFieldsArr[i - 1][j + p] = 'y';
                    }
                    gameFieldsArr[i][lengthShip] = 'y';
                }else{
                    for(let k = 0; k < lengthShip; k++){
                        shipNameAndSize[indexObj].position.push(gameFieldsArr[i][j + k]);
                        gameFieldsArr[i][j + k] = 'x';
                    }
                    gameFieldsArr[i + 1][j] = 'y';
                    gameFieldsArr[i - 1][j] = 'y';
                    gameFieldsArr[i][j - 1] = 'y';
                    gameFieldsArr[i][j + lengthShip] = 'y';
                    for(let p = 0; p < lengthShip; p++){
                        gameFieldsArr[i + 1][j + p] = 'y';
                        gameFieldsArr[i - 1][j + p] = 'y';
                    }
                }
            }
        }
    }
}

document.addEventListener("drop", (e) => {
    e.preventDefault();

    if(e.target.className == 'gameField'){
        e.target.style.background = "";
        e.target.appendChild(dragged);

        let shipIsGoodSize = false;
        let resultPosition = e.target.dataset.row + e.target.dataset.column;
        let stringToInt = Number(resultPosition);
    
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

        createShip(shipNameAndSize);

        if(!isTrue(gameFieldsArr, firstPosition, lastShipPosition, shipIsGoodSize, indexObj)){
            e.target.style.background = "";
            dragged.parentNode.removeChild(dragged);
            shipNameAndSize[indexObj].land = false;
            createShip(shipNameAndSize);
            gameBoardFields(gameFieldsArr);
        }else{
            e.target.style.background = "";
            e.target.appendChild(dragged);
            dragged.parentNode.removeChild(dragged);
            
            addYInArr(gameFieldsArr, firstPosition, lengthShip, indexObj, lastShipPosition);
        }
        createShip(shipNameAndSize);  
    }

    const isPositionTrue = (shipNameAndSize) => {
        let count = 0;
        for(let i = 0; i < shipNameAndSize.length; i++){
            if(shipNameAndSize[i].position.length){
                count++;
            }
        }

        if(count == 5){
            return true;
        }else{
            return false;
        }
    }
    
    gameBoardFields(gameFieldsArr);

    if(isPositionTrue(shipNameAndSize)){
        startGame();

        return;
    }
}, false);

const startGame = () => {
    const shipsClass = document.querySelector('.ships');
    shipsClass.parentNode.removeChild(shipsClass);

    const gameboardMain = document.querySelector('.computerGameBoard');
    const testGameBoard = [...gameboardMain.childNodes];

    testGameBoard.forEach(item => {
        item.addEventListener('click', (e) => {                     
            if(e.target.classList.contains('plays')){
                let isLenghtToZero = [];

                const index = Number(String(e.target.dataset.row) + String(e.target.dataset.column));

                for(let i = 0; i < shipNameAndSizeComputer.length; i++){
                    for(let j = 0; j < shipNameAndSizeComputer[i].position.length; j++){
                        if(shipNameAndSizeComputer[i].position[j] == index){
                            shipNameAndSizeComputer[i].position.splice(j, 1);
                        }
                    }
                }

                e.target.classList.add('field');
                e.target.classList.remove('plays');

                for(let o = 0; o < shipNameAndSizeComputer.length; o++){
                    if(shipNameAndSizeComputer[o].position.length == 0){
                        isLenghtToZero.push('true');
                    }
                }

                if(isLenghtToZero.length == 5){
                    winnerPage('you, [player]');
                    return;
                }
            }
            computerRandomPlays();
            console.log(computerPlaysRandom.length);

            console.log(shipNameAndSize);
        })
    })
}

const computerRandomPlays = () => {
    for(let f = 0; f < 1000; f++){
        const randomNumber = Math.floor(Math.random() * 99);

        if(computerPlaysRandom.findIndex(item => item == randomNumber) > -1){
            let index = computerPlaysRandom.findIndex(item => item == randomNumber);
    
            if(randomNumber.toString().split('').length == 1){
                row = 0;
                column = Number(randomNumber.toString().split('')[0]);
            }else{
                row = Number(randomNumber.toString().split('')[0]);
                column = Number(randomNumber.toString().split('')[1]);
            }

            let removedItem = computerPlaysRandom.splice(index, 1);

            if(removedItem){
                for(let i = 0; i < shipNameAndSize.length; i++){
                    for(let j = 0; j < shipNameAndSize[i].position.length; j++){
                        if(shipNameAndSize[i].position[j] == removedItem){
                            let isLenghtToZero = [];
                            shipNameAndSize[i].position.splice(j, 1);
    
                            for(let o = 0; o < shipNameAndSize.length; o++){
                                if(shipNameAndSize[o].position.length == 0){
                                    isLenghtToZero.push('true');
                                }
                            }
            
                            if(isLenghtToZero.length == 5){
                                winnerPage('computer');
                                return;
                            }
    
                            return;
                        }
                    }
                }

                let positionLengthArr = [];

                for(let b = 0; b < shipNameAndSize.length; b++){
                    for(let c = 0; c < shipNameAndSize[b].position.length; c++){
                        positionLengthArr.push(shipNameAndSize[b].position[c]);
                    }
                }

                console.log('You not blow', computerPlaysRandom.length, positionLengthArr.length);

                return;
            }
        }
    }
}

const winnerPage = (winner) => {
    const game = document.querySelector('.game');
    
    const fixedWinnerPage = document.createElement('div');
    fixedWinnerPage.classList.add('fixedWinnerPage');
    
    const h1 = document.createElement('h1');
    h1.textContent = `The winner is [${winner}]`;

    fixedWinnerPage.appendChild(h1);

    game.appendChild(fixedWinnerPage);
}