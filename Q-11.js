// 11. Filter Users by Role
// Create an array of user objects containing name and role. Use filter() to get all users whose role is
// "developer".
// Example:
// Input:
// [
//  { name: "Rahul", role: "developer" },
//  { name: "Priya", role: "student" }
// ]
// Output:
// [
//  { name: "Rahul", role: "developer" }
// ]
let arr= [
 { name: "Rahul", role: "developer" },
 { name: "Priya", role: "student" }
]
let newarr= arr.filter((value)=>{
    return value.role==="developer"
})
console.log(newarr);