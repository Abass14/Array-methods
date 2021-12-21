//splice methode removes or replace an existing element from an array
//has startingIndex, Count, and elements to add
//modifies existing array 

//ex1
const numbers = [1,2,3,4,5,6]

const deleted = numbers.splice(3, 3, 7, 8) //saving in a variable returns the deleted items

console.log(numbers) //returns items left in array
console.log(deleted) //returns deleted items in the array