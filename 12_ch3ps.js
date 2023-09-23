// problem 1 write a code to print value of object using normal for loop

let marks ={
    Arabind : 78,
    Shubham : 76,
    Ankur : 97
}
/*
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("Marks of " + Object.keys(marks)[i] + " is "+ marks[Object.keys(marks)[i]])
}*/

//problem 2 write above code using for in loop
 
/*for(let key in marks){
    console.log("marks of " + key +" is " + marks[key])
}*/

//problem 3 
let cn = 87 ;
let input;
while (input != cn ){
    input = promt("Enter a number")
    console.log("try again")
}
console.log("Congratulation you done it")