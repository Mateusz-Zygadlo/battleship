const shipStatusComputer = (obj) => {
    const shipsStatusTwo = document.querySelector('.shipsStatusTwo');
    shipsStatusTwo.textContent = '';

    for(let i = 0; i < obj.length; i++){
        if(obj[i].name){
            const shipStat = document.createElement('div');
            shipStat.classList.add('ship');

            const shipName = document.createElement('div');
            shipName.classList.add('shipName');
            shipName.textContent = obj[i].name;

            shipStat.appendChild(shipName);

            const shipSize = document.createElement('div');
            shipSize.classList.add('shipSize');
            shipSize.textContent = obj[i].position.length;

            shipStat.appendChild(shipSize);

            shipsStatusTwo.appendChild(shipStat);
        }
    }
}

export default shipStatusComputer;