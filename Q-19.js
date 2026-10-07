// 19. Create a Comma-Separated String
// Create an array of frontend technologies and use reduce() to combine them into a single
// comma-separated string.
// Example:
// Input:
// ["HTML", "CSS", "JavaScript"]
// Output:
// "HTML, CSS, JavaScript"

let tech= ["HTML", "CSS", "JavaScript"]
let single= tech.reduce((comma,value)=>{
    return comma+" , "+value
})
console.log(single);