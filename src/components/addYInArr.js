const addYInArr = (gameFieldsArr, firstPosition, lengthShip, indexObj, lastShipPosition, shipNameAndSize) => {
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

export default addYInArr;