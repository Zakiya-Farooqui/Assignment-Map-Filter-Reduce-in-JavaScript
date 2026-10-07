// 4. Create Updated Product Prices
// Create an array of product prices. Use map() to create a new array where every price is increased by
// 10%. Keep the original array unchanged.
// Example:
// Input:
// [100, 200, 300]
// Output:
// Original: [100, 200, 300]
// New: [110, 220, 330]
let arr= [100, 200, 300]

let newarr= arr.map((value)=>{
    return value*10/100 + value
})
console.log(newarr); 