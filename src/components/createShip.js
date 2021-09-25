const createShip = () => {
    const shipNameAndSize = [
        {name: 'Destroyer', size: 2, id: 2},
        {name: 'Submarine', size: 3, id: 3},
        {name: 'Cruiser', size: 3, id: 3},
        {name: 'Battleship', size: 4, id: 4},
        {name: 'Carrier', size: 5, id: 5},
    ]
    const shipsClass = document.querySelector('.ships');

    for(let i = 0; i < shipNameAndSize.length; i++){
        const ship = document.createElement('div');
        ship.classList.add('ship');
        ship.dataset.id = shipNameAndSize[i].id;
        ship.style.gridTemplateColumns = `repeat(${shipNameAndSize[i].size}, 1fr)`;
        ship.style.width = `calc(${shipNameAndSize[i].id} * 50px)`;
        ship.style.height = '50px';
        ship.style.backgroundColor = 'black'; 
        ship.draggable = true;

        for(let j = 0; j < shipNameAndSize[i].size; j++){
            const square = document.createElement('div');
            square.classList.add('square');

            ship.appendChild(square);
        }   

        shipsClass.appendChild(ship);
    }
}

export default createShip;