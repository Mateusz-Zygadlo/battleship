const addCountInTenArr = (arr) => {
    let count = 0;

    for(let i = 0; i < 10; i++){
        const newArr = [];
    
        for(let j = 0; j < 10; j++){
            newArr.push(count);
            count++;
        }
        arr.push(newArr);
    }
}

export default addCountInTenArr;