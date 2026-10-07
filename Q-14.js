// 14. Filter Gmail Addresses
// Create an array of email addresses and use filter() to get only the emails that include "@gmail.com".
// Example:
// Map, Filter & Reduce in JavaScript Assignment
// PW EARNERS : Coding and Web Development
// By : Nishant Saini Sir
// Input:
// ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]
// Output:
// ["rahul@gmail.com", "aman@gmail.com"]

let email= ["rahul@gmail.com", "priya@yahoo.com", "aman@gmail.com"]
let newemail= email.filter((value)=>{
    return value.includes("@gmail")
})
console.log(newemail);