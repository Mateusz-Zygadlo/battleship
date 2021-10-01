const winnerPage = (winner) => {
    const game = document.querySelector('.game');
    
    const fixedWinnerPage = document.createElement('div');
    fixedWinnerPage.classList.add('fixedWinnerPage');
    
    const div = document.createElement('div');
    div.classList.add('content');
    
    const h1 = document.createElement('h1');
    h1.textContent = `The winner is [${winner}]`;

    const button = document.createElement('button');
    button.textContent = 'reset';
    button.classList.add('reset');

    div.appendChild(h1);
    
    div.appendChild(button);

    fixedWinnerPage.appendChild(div);

    game.appendChild(fixedWinnerPage);
}

export default winnerPage;