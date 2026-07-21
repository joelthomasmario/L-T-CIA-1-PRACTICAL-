let students = [
    { name: "Joel", marks: 85 },
    { name: "John", marks: 72 },
    { name: "David", marks: 90 }
];

students.push({ name: "Mary", marks: 95 });

let highest = students[0];

for (let student of students) {
    if (student.marks > highest.marks) {
        highest = student;
    }
}

console.log("Highest Marks:", highest.name, highest.marks);
