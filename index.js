//concat allows merging of two arrays into a new array to be returned

//ex1
const a = [1,2,3]
const b = [3,4,5,6]
const d = [7,8,9]

const c = a.concat(b, d)

console.log(c)

//ex2
//using as push method
const y = [1,2,3,4]

const z = y.concat(5,6, a)

console.log(z)