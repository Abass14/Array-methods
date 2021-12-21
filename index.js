//the map method executes a given function on every element in an array and returns a new array
//it does not return a modified existing array, rather a new array gotten from a modified existing array

//ex1
const numbers = [1,2,3,4,5]

const numbersDouble = numbers.map((value, index, arr) => {
    return value * 2
})

const multiplyIndex = numbers.map((value, index) => {
    return value * index
})


console.log(numbersDouble)
console.log(multiplyIndex)
console.log(numbers)


//ex2

const products = [
    {
        name: 'dell',
        price: 1000,
        count: 5
    }, 
    {
        name: 'hp',
        price: 2000,
        count: 3
    }, 
    {
        name: 'apple',
        price: 7500,
        count: 2
    }, 
]

const totalProductValues = products.map((items) => {
    // return items.price * items.count
    return {
        name: items.name,
        value: items.price * items.count
    }
})

console.log(totalProductValues)


//ex3
const str = ['1', '2', '3', '4', '5']

const num = str.map(Number)

console.log(str)