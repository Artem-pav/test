"use strict";

  
 /*while (num<= 55) {
        console.log(num);
        num++;
 }*/
 let num = 50;
for(let i = 1;i < 8; i++) {
    console.log(num);
    num++;
}


function showFirstMessage(text) {
   console.log(text)
}
showFirstMessage('Hi');


function calc(a,b) {
    return (a + b);
}

console.log(calc(5,6));

const logger = function() {
      console.log("hi")
};
logger();

const calcS = (a,b) => a + b;  
 
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        boder: 'black',
        bg: 'red',

    }
};
console.log(Object.keys(options).length);