// 16. Count Total Products
// Create an array of product names and use reduce() with an accumulator to count the total number of
// products.
// Example:
// Input:
// ["Laptop", "Mouse", "Keyboard"]
// Output:
// 3
let arr= ["Laptop", "Mouse", "Keyboard"]

let newarr= arr.reduce((total)=>{
return total+1
},0)
console.log(newarr);