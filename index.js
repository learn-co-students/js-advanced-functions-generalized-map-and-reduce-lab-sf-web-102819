// Add your functions here

let map = function(arr, mapFunction) {
   let newArr = []
   arr.forEach(ele => newArr.push(mapFunction(ele)))

   return newArr
}

let reduce = function(arr, reduceFunction, start ) {

    let ans = start || arr[0]
    let i = start? 0:1

    for (; i < arr.length; i++) {
        ans = reduceFunction(arr[i], ans)

    }

    return ans
}