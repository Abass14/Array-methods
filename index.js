//the slice method returns a shallow copy of a portion of an array, similar to substring
//does not modify the original array

//ex1
//returning array from index 3 to 6
//does not include the last index

const numbers = [1,2,3,4,5,6,7,8,9]

const result = numbers.slice(3, 6)

//to get the last 3 items
const lastThree = numbers.slice(-3)

//to get all items starting from a specified index
const startFromIndex2 = numbers.slice(2)

console.log(startFromIndex2)
console.log(lastThree)
console.log(result)