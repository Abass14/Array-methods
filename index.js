//sort method sorts the array by manipulating the array

//ex1
const names = ['Rukayat', 'Abass', 'Mustapha', 'Richard', 'Martins', 'Joyce']

names.sort()

console.log(names)

//ex2
//to use sort on numbers you need to add a compareFunction callback
const numbers = [82, 35, 269, 267, 5, 62, 83, 9]

//compare function => (a, b) => a - b
numbers.sort((a, b) => a - b)

console.log(numbers)

//ex3
const products = [
    {
        name: 'Dell',
        price: 2500
    },
    {
        name: 'Hp',
        price: 3500
    },
    {
        name: 'Apple',
        price: 1000
    },
]

products.sort((a, b) => {
    return a.price - b.price
})

console.log(products)