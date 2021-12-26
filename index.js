//fill method changes all the items in an array with a provided value
//modifies the existing array

//ex1
const numbers = [1,2,3,4,5]

numbers.fill(0)

console.log(numbers)

//start and end index can be specified => value, startIndex, endIndex
const nums = [1,2,3,4,5,6]

nums.fill(0, 1, 3)

console.log(nums)

//ex3

const fillInNumbers = (n) => {
    return Array(n).fill(0).map((_, index) => index + 1)
}

console.log(fillInNumbers(10))