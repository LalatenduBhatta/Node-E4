// import addition, { mult, sub } from "./operations.js"
// let num1 = 10
// let num2 = 20
// let num3 = 30

// console.log(addition(num1, num2))
// console.log(mult(num1, num2))
// console.log(sub(num1, num3))


let { add, mult, sub } = require("./operations")
let num1 = 10
let num2 = 20
let num3 = 30

console.log(add(num1, num2))
console.log(mult(num1, num2))
console.log(sub(num1, num3))