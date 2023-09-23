//Q1 create a string varible and store a number to it.

let a = "Arabind";
let b = 67;
console.log(a+b);

// Q2 using typeof find  datatypes of last string varible.

console.log(typeof (a+b));

//Q3 create a const object can you change it to hold a number to it.

const obj = {
    fruitName : "apple",
    price : "80/kg"
}
//obj = 55; we can't add number to an object
console.log(obj);


//Q4 try to add a new key in in const object

obj['taste'] = "Mitha(Sweet)"
console.log(obj);

//Q5 write a code to make dictionary of 5 words

const dict = {
   Ikigai : "find your goal, moto in your life ",
   Yaka : "do hardWork for your succes",
   consistent : "do regularly no matter what is the situtaion",
   love : "to express some one how care you about him or her",
   sde : "softwere engineer who work in mnc and pwc" 
}
console.log(dict.Ikigai)
console.log(dict['sde'])
console.log(dict.love);
console.log(typeof dict)