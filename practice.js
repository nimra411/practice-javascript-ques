const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 88 }
  ];
  
const fields = students.map((student)=>{
    student.age = 20
    student.gender = "female"
    return student
})
console.log(fields)

const fields2 = students.filter((student)=>{
    return student.score >90

})
console.log(fields2)

const fields3 = students.reduce((total,student)=>{
    total+= student.age 
    return total
},0)

console.log(fields3)