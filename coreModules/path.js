import path from "path"

let myPath = "myFolder/myFile.html"

console.log(path.basename(myPath)) //  myFile.html
console.log(path.dirname(myPath)) //   myFolder
console.log(path.extname(myPath)) //   .html

console.log(path.sep) //  \

let newPath = path.join("newFolder", myPath)
console.log(newPath)  //  newFolder\myFolder\myFile.html