console.log("var vs let vs const");
// var has global scope, let and const have block scoped, if we write let a = 45; then in next line we do let a = "code" this is line throw an error but we can write a = "code" instead of let a = "code". if we talk about const mean if we declare any varible with const type then we can't change that varible value. ex const author = "Arabind"; in next line if we write author = "Shubham" then this will throw an error.
var a = 445;
var b = "code";
var c = null;
var d = undefined;

console.log(a)
console.log(b)
console.log(c)
console.log(d)
{
    let b ="this is let type varible"
    console.log(b);
}
const authorName = "Arabind";
console.log("Author of this code is " +authorName);
