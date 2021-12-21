//for each method
//for each method takes a callback function
// the call back takse in the arrayItem, index and arr itself

//1
const arr = [1,2,3,4,5]

//summing all items
let sum = 0

arr.forEach((arrayItem, index, arr) => {
    // console.log(arrayItem)
    // console.log('arr'+index+ ' = '+ arrayItem)
    // console.log(arr)
    sum += arrayItem
})

console.log(sum)

//2
//to check how many times a character appear in an array
const characters = ['a', 'b', 'a', 'd', 'a', 'f', 'f']

const count = {}
let counter = 0

characters.forEach(items => {
    // if (count[items]) {
    //     count[items]++
    // }else{
    //     count[items] = 1
    // }

    if (items == 'f') {
        counter++
    }
})

console.log(counter)


