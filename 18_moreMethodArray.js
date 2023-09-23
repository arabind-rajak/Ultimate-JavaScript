// let num  =[1,7,9,3,8,2]
//sort method in java sort the array alphatically mean suppose you have a array 10,2,28,19 if u use sort method o/p will be 10,19,2,28 not if you want to do you can use a compare method for assending sortin use b-a for decending use a-b
let compare =(b,c) =>{
    return   c-b
}
let num = [10,23,38,2,87,89,28]
console.log(num.sort(compare))

let marks = [89,78,83,90]
let newArr = num.concat(marks);
console.log(newArr)
console.log(newArr.reverse())

//splice method take four value as argument first from where we want delete second how many element you want to delete, third what value you want to add, new value and return deleted element of the array
let num1 = [10,23,38,2,87,89,28]
 let splicee = num1.splice(3,3,20,25,30)
 console.log(num, " and ", splicee)

