//the filter method is like test on the items in array
//for example in an array of numbers, if any item is > 2 return them and remove others


//ex1

const numbers = [1,2,3,4,5,6]

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0
})

console.log(evenNumbers)

//ex2

const applicants = [
    {
        name: 'Abass',
        age: 28
    },
    {
        name: 'John',
        age: 17
    },
    {
        name: 'Jerry',
        age: 21
    },
]

const noUnderAge = applicants.filter((applicants) => {
    return applicants.age > 18
})

console.log(noUnderAge)


//ex3
//removing duplicates

const duplicatedNums = [1,2,3,2,3,4,2,1,4,5,6,3,2]

const uniqueValue = duplicatedNums.filter((value, index, arr) => {
    //indexOf(item) this returns the first occurrence of a value in a list
    return arr.indexOf(value) === index
})

console.log(uniqueValue)