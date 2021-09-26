const createShip = (shipNameAndSize) => {
    const shipsClass = document.querySelector('.ships');

    shipsClass.textContent = '';

    for(let i = 0; i < shipNameAndSize.length; i++){
        if(shipNameAndSize[i].land == true){

        }else{
            const ship = document.createElement('div');
            ship.classList.add('ship');
            ship.dataset.id = shipNameAndSize[i].id;
            ship.classList.add(shipNameAndSize[i].name);
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
}

export default createShip;