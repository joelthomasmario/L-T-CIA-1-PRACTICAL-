let students = [
    { name: "Joel", marks: 85 },
    { name: "John", marks: 40 },
    { name: "David", marks: 90 },
    { name: "Mary", marks: 35 }
];

for (let student of students) {
    if (student.marks < 50) {
        continue;
    }
    console.log(student.name, student.marks);
}
