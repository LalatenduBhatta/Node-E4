// const os = require("os")
import os from "os"
console.log(os.totalmem());//8470630400
console.log(os.freemem());//1057239040
console.log(os.arch()); //x64
console.log(os.hostname());//Venom
console.log(os.version());//Windows 11 Home Single Language
console.log(os.platform());//win32
console.log(os.type());//Windows_NT
console.log(os.cpus().length);//8

