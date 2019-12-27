// Add your functions here
function map(array, mapfxn){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(mapfxn(array[i]))
    }
    return newArray
}

function reduce(array, reducefxn, starting){
    let memo = (!!starting) ? starting : array[0]
    let i = (!!starting) ? 0 : 1
    for(; i < array.length; i++){
            memo = reducefxn(array[i], memo)
    }
    return memo
}