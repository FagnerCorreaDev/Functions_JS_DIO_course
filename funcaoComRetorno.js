// -> 1
// let result = add(5, 10)
// console.log("The sum between the numbers is: " + result)

// function add(num1, num2) {
//     // let calc = num1 + num2
//     return num1 + num2
// }

// ->2
fName = getFirstName("Raquel Ferreira da Silva")
console.log("Welcome: " + fName)

function getFirstName(name) {
    let firstName = name.split(" ")[1]
    return firstName
}
