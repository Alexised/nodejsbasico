const fs = require("fs");
const ops = require("./src/fileops");

let incrementValue;
fs.readFile("./resources/number.txt","utf8",(err,text)=>{
    if(err) throw err;
    const numbers  =text.split("\r\n").map(n=>Number(n))
    incrementValue =ops.incrementValues(numbers)
        fs.writeFile("./resources/numbernew.txt",incrementValue.join("\r\n"),(err,result)=>{
            if(err) throw err;
            
        
        })
});

