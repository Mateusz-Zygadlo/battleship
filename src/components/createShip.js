const createShip = () => {
    const shipNameAndSize = [
        {name: 'Destroyer', size: 2},
        {name: 'Submarine', size: 3},
        {name: 'Cruiser', size: 3},
        {name: 'Battleship', size: 4},
        {name: 'Carrier', size: 5},
    ]
    const shipsClass = document.querySelector('.ships');

    for(let i = 0; i < shipNameAndSize.length; i++){
        const ship = document.createElement('div');
        ship.classList.add('ship');
        ship.classList.add(shipNameAndSize[i].name);
        ship.style.gridTemplateColumns = `repeat(${shipNameAndSize[i].size}, 1fr)`;

        for(let j = 0; j < shipNameAndSize[i].size; j++){
            const square = document.createElement('div');
            square.classList.add('square');

            ship.appendChild(square);
        }   

        shipsClass.appendChild(ship);
    }
}

export default createShip;