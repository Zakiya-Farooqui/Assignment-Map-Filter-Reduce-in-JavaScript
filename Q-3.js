// 3. Extract User Names
// Create an array of user objects containing name and email. Use map() to create a new array containing
// only the names.
// Example:
// Input:
// [
//  { name: "Rahul", email: "rahul@example.com" },
//  { name: "Priya", email: "priya@example.com" }
// ]
// Output:
// ["Rahul", "Priya"]

let user= [
 { name: "Rahul", email: "rahul@example.com" },
 { name: "Priya", email: "priya@example.com" }
]

let newarr= user.map((name)=>{
return name.name
})
console.log(newarr);