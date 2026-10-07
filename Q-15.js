// Section 4 – reduce() and Accumulator Pattern
// 15. Calculate the Total Cart Price
// Create an array of product prices and use reduce() to calculate the total price of all items in the cart.
// Example:
// Input:
// [500, 1200, 300]
// Output:
// 2000

let arr= [500, 1200, 300]

let newarr= arr.reduce((total, price)=>{
    return total + price

},0)

console.log(newarr);