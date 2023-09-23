// nn bb ss u which is number null boolean bigInt symbol String undefined
console.log("JavaScript has 7 primitives");
let a = 78;
let b = null;
let c = true;
let d = BigInt(7878);
let e = Symbol("It is javascript symbol");
let f = "Good codes";
let g = undefined
console.log(a,b,c,d,e,f,g);
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof g);

// Non-primitive in javascript is called Object.
let item ={
    "naam" : "led light",
    "price" : "100 Rs"
}
//console.log(item);
console.log(item.naam);
console.log(item.price)