const fs = require("fs");
let f1KaPromise = fs.promises.readFile("./f1.txt" , "utf8");
f1KaPromise.then( function(data){
    console.log(data);
} );
let f2KaPromise = fs.promises.readFile("./f2.txt" , "utf8");
f2KaPromise.then( function(data){
    console.log(data);
} );
let f3KaPromise = fs.promises.readFile("./f3.txt" , "utf8");
f3KaPromise.then( function(data){
    console.log(data);
} );