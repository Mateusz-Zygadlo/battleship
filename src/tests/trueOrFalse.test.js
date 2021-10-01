const trueOrFalse = require('../components/trueOrFalse');

const shipNameAndSizeComputer = [
    {name: 'Destroyer', size: 2, position: [0, 1]},
    {name: 'Submarine', size: 3, position: [6, 7, 8]},
    {name: 'Cruiser', size: 3, position: [43, 44, 45]},
    {name: 'Battleship', size: 4, position: [74, 75, 76, 77]},
    {name: 'Carrier', size: 5, position: [22, 23, 24, 25, 26]},
];

const shipComputerFunction = () => {
    let count = 0;
    for(let i = 0; i < shipNameAndSizeComputer.length; i++){
        if(shipNameAndSizeComputer[i].position.every(trueOrFalse)){
            count++;
        }
    }

    if(count == 5){
        return true;
    }

    return false;
}

test('should return true', () => {
    expect(shipComputerFunction()).toEqual(true);
})