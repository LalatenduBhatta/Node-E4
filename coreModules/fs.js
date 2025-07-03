import fs from "fs"

//------------------------------create----------------------

////async
// console.log("start")
// fs.writeFile("./demo.txt", "HELLO WORLD !!!", (err) => {
//     if (err) console.log(err)
//     else console.log("file created")
// })
// console.log("end")

////sync
// console.log("start")
// fs.writeFileSync("./demo1.txt", "WELCOME TO NODE JS")
// console.log("end")

//----------------------------read------------------------

//// async
// fs.readFile("./demo.txt", "utf-8", (error, data) => {
//     if (error) console.log(error)
//     else console.log(data)
//     // else console.log(data.toString())
// })

////sync
// let data = fs.readFileSync("./demo.txt", "utf-8")
// console.log(data)

//----------------------------update----------------------

//// async
// fs.appendFile("./demo.txt", "HELLO JSPIDERS", (err) => {
//     if (err) console.log(err)
//     else console.log("file updated")
// })

//// sync

// fs.appendFileSync("./demo1.txt", " ADDED SOMETHING NEW")


//---------------------------DELETE------------------

////async
// fs.unlink("./demo1.txt", (err) => {
//     if (err) console.log(err)
//     else console.log("file deleted")
// })

////sync
// fs.unlinkSync("./demo1.txt")


//--------------------Copy--------------------------

////async
// fs.copyFile("./demo.txt", "./demo1.txt", (error) => {
//     if (error) console.log(err)
//     else console.log("file copied")
// })



//---------------------Link------------------------

////async
// fs.link("./demo.txt", "./demo2.txt", (error) => {
//     if (error) console.log(err)
//     else console.log("file copied")
// })