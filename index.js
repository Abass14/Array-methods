//for loops with in and of


const colors = ['red', 'blue', 'orange']
const alphabets = ['A', 'B', 'C']

for (let i in colors) {
    const element = colors[i];
    console.log(element, "in")    
}

for(let i of colors) {
    console.log(i, "of")
}

let count = 0
for(let letter of alphabets){
    count++
    console.log(letter, `${count}`)
}

