const  greet= require("./src/greet")


greet.emit("clap")
greet.emit("shout", "hola")
greet.emit("call", "alexis",(name)=>{
    console.log(`estamos llamando a: ${name}`)
})

