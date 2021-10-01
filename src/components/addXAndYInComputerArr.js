import addCountInTenArr from "./addCountInArr";

const notY = (item) => {
    return item != 'Y';
}

const addXAndYInComputerArr = (row, findIndexComputer, computerArr, shipNameAndSizeComputer, i) => {
    if(row == 0 && findIndexComputer == 0){
        computerArr[row + 1][findIndexComputer + 1] = 'Y';
        for(let q = 0; q < shipNameAndSizeComputer[i].size; q++){
            computerArr[row + 1][findIndexComputer - q] = 'Y';
        }
    }else if(row == 9 && findIndexComputer > 0){
        computerArr[row][findIndexComputer - shipNameAndSizeComputer[i].size] = 'Y';
        for(let q = 0; q < shipNameAndSizeComputer[i].size; q++){
            computerArr[row - 1][findIndexComputer - q] = 'Y';
        }
    }else if(row == 9 && findIndexComputer == 0){
        computerArr[row][findIndexComputer + 1] = 'Y';
        computerArr[row][findIndexComputer - shipNameAndSizeComputer[i].size] = 'Y';
    }else if(row == 0 && findIndexComputer > 0){
        computerArr[row][findIndexComputer + 1] = 'Y';
        computerArr[row][findIndexComputer - shipNameAndSizeComputer[i].size] = 'Y';
        for(let q = 0; q < shipNameAndSizeComputer[i].size; q++){
            computerArr[row + 1][findIndexComputer - q] = 'Y';
        }
    }else{
        computerArr[row][findIndexComputer + 1] = 'Y';
        computerArr[row][findIndexComputer - shipNameAndSizeComputer[i].size] = 'Y';
        for(let q = 0; q < shipNameAndSizeComputer[i].size; q++){
            computerArr[row + 1][findIndexComputer - q] = 'Y';
            computerArr[row - 1][findIndexComputer - q] = 'Y';
        }
    }
    for(let e = 0; e < shipNameAndSizeComputer.length; e++){
        if(!shipNameAndSizeComputer[e].position.every(notY)){
            for(let c = 0; c < shipNameAndSizeComputer.length; c++){
                shipNameAndSizeComputer[c].position.length = 0;
            }
            computerArr.length = 0;
            addCountInTenArr(computerArr);

            break;
        }
    }
}

export default addXAndYInComputerArr;