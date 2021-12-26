//the reverse method is used to reverse an array
//it modifies the existing array

const numbers = [1,2,3,4,5]

numbers.reverse()

console.log(numbers)

//to uses reverse without modifying the existing array

const nums = [1,2,3,4,5]

const reverseCopy = nums.concat().reverse() 
//OR
const revCody = [...nums].reverse()

console.log(nums)
console.log(reverseCopy)
console.log(revCody)

//ex3
//reverse characters of a string
const str = 'coding is fun'

const newStr = str.split('').reverse().join('')

console.log(newStr)