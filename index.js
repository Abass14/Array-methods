//the reduce method executes a callback method on all the items of an array and returns one/single output value.
//it takses in a callback function and initial value
//the callback can take 4 params: the accumulator, value, index and array
//the accumulator params keeps track of the value that'll be returned at the end

//ex1

const numbers = [1,2,3,4,5]

const total = numbers.reduce((accumulator, value, index, arr) => {
    return accumulator + value
}, 0)

console.log(total)

//ex2
//returning max val in an array
const listNum = [1,2,3,4,5,6,7]

const maxValue = listNum.reduce((accumulator, value) => {
    if (accumulator > value) {
        return accumulator
    }else{
        return value
    }
}, -Infinity)

console.log(maxValue)

//ex3

const store = [
    {
        product: 'Toshiba',
        value: 1000,
        count: 15
    },
    {
        product: 'Hp',
        value: 3000,
        count: 10
    },
    {
        product: 'Apple',
        value: 15000,
        count: 5
    },
]

const totalStoreValue = store.reduce((acc, item) => {
    return acc + (item.value * item.count)
}, 0)

console.log(totalStoreValue)