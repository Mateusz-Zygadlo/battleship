const isTrue = (gameFieldsArr, firstPosition, lastShipPosition, shipIsGoodSize, indexObj, shipNameAndSize) => {
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

export default isTrue;