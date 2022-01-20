//Rest operator with functions: This is useful when passing an array of unknown values as parameter to a function

//ex:

function restOperation (message, ...colors) {
    console.log(message)

    for (let i = 0; i < colors.length; i++) {
        const element = colors[i];
        console.log(element)
    }
}

const message = "This is how rest operator works in functions"

restOperation(message, 'blue')
restOperation(message, 'blue', 'red')
restOperation(message, 'blue', 'red', 'green')


