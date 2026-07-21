let students = [
    { name: "Joel", marks: 85 },
    { name: "John", marks: 72 },
    { name: "David", marks: 90 },
    { name: "Mary", marks: 65 }
];

students.pop();

students.sort((a, b) => a.marks - b.marks);

console.log(students);
