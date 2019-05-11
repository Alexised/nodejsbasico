const call = require("./src/call");

//call.greet("alexis")

async function callWithPromise(){
    const fullName = await call.withPromise("alexis","rodriguez")
    console.log(fullName)
}                           

callWithPromise()