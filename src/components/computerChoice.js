const compterChoice = () => {
    const rowChoice = Math.floor(Math.random() * 9);
    const columnChoice = Math.floor(Math.random() * 99);

    return{
        rowChoice,
        columnChoice,
    }
}

export default compterChoice;