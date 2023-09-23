// Perform Array method (length, join , push, pop, shift , unshift)
let arr = [13,15,178,87,89,35]
let s = arr.toString()
//console.log(s, typeof s)
let j = arr.join(" and ")   //join method add value to the middle of the array
//console.log(j)
console.log(arr.pop())
let p = arr.push(67)  //push method add value to the end of the array and return new length of the array
console.log(arr, p)

//shift method is same as pop but it remove from begining of the array
let cift = arr.shift()
console.log(cift," and ", arr)
//unshift method is add a element to the begining of the array and return a new array length
let uncift = arr.unshift(999)
console.log(uncift , " and " , arr)