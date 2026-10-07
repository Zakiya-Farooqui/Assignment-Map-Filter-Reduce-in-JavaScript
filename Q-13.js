// 13. Filter Active Users
// Create an array of users containing name and isActive. Use filter() to get only the active users.
// Example:
// Input:
// [
//  { name: "Rahul", isActive: true },
//  { name: "Priya", isActive: false }
// ]
// Output:
// [
//  { name: "Rahul", isActive: true }
// ]
let user= [
 { name: "Rahul", isActive: true },
 { name: "Priya", isActive: false }
]

let newUser= user.filter((value)=>{
    return value.isActive===true
})
console.log(newUser);