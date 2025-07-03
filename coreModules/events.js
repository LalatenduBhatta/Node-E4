import events from "events"
const eventEmitter = new events.EventEmitter()
//adding events // creating events
eventEmitter.addListener("printMessage", () => {
    console.log("HELLO WOLRD")
})

eventEmitter.on("greet", greet)
function greet() {
    console.log("Good AfterNoon")
}
eventEmitter.on("greet", () => {
    console.log("Have a Good Day")
})
//executing events //emitting events

// eventEmitter.emit("greet")
// eventEmitter.emit("printMessage")

//remove events

// eventEmitter.removeListener("greet", greet)

// eventEmitter.removeAllListeners("greet")

eventEmitter.emit("greet")