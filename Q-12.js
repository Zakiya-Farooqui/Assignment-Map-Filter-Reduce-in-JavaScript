// 12. Filter Expensive Products
// Create an array of product objects containing name and price. Use filter() to get products with a price
// greater than 1000.
// Example:
// Input:
// [
//  { name: "Mouse", price: 500 },
//  { name: "Keyboard", price: 1500 }
// ]
// Output:
// [
//  { name: "Keyboard", price: 1500 }
// ]

let arr= [
 { name: "Mouse", price: 500 },
 { name: "Keyboard", price: 1500 }
]

let newarr= arr.filter((value)=>{
    return value.price>1000
})
console.log(newarr);