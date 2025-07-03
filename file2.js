console.log("start")


setTimeout(() => console.log("timeout1"), 1000)
setTimeout(() => console.log("timeout2"), 0)
setTimeout(() => console.log("timeout3"), 100)

console.log("end")