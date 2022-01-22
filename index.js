//Array/Object destructuring and spread operator

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

const numbers = ['1', '2', '3', '4', '5', '6']

//destructuring alphabet by direct item positions

const [a, b, c] = alphabet

console.log(a)
console.log(b)

//destructuring alphabet by skipping item positions
const [x,,,y] = alphabet

console.log(x)
console.log(y)

//destructuring alphabet by skipping item positions and getting the rest of the items in the array

const [i,,,j, ...rest] = alphabet
console.log(rest)

//joining two arrays with the spread operator
const joinArray = [...alphabet, ...numbers]
console.log(joinArray)

//useing array destructuring for functions with return value

function sumAndMutiply (a, b) {
    return [a+b, a*b, a/b]
}

const [sum, mult, div = "no division"] = sumAndMutiply(2, 3)

console.log(sum)
console.log(mult)
console.log(div)


//OBJECTS
const personOne = {
    name: 'Abass',
    age: 20,
    address: {
        city: 'somewhere',
        state: 'Lagos'
    }
}

const personTwo = {
    address: {
        city: 'another place',
        state: 'Ogun'
    }
}

//destructuring personOne
const newPerson = {...personOne, name: 'segun'}

console.log(newPerson)
const { name: newName, age, address: { city } } = personOne

console.log(age)
console.log(newName)
console.log(city)

//joining two similar (with exact/some same properties) objects with spread operator, 
//the second object similar property will override the initial object dame property

const joinedObject = {...personOne, ...personTwo} //address will be overriden in personOne by the one in personTwo

console.log(joinedObject)

const obj = {
    names: "abass",
    age: 14
}

obj.newNames = obj.names
delete obj.names



// console.log(obj, "object")


const newObj = {...obj, newNames: "new"}

console.log(newObj, "new obj")

// var array=[{'a':'man', 'age':'35'},{'b':'woman', 'age':'30'}];
// var newArray = array.map(function(item){
//    return {
//      age: item.age,
//      gender: item.a || item.b
//    };
// });
// console.log(newArray, "new array");


