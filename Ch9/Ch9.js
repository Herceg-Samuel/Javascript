// ## Day 9: Arrays Part 2

// **Concepts:** Array iteration, map, filter, forEach

// **Challenge:** Student grade analyzer

// 1. Create an array of student objects, each with name and grade properties
// 2. Use forEach to display all students and their grades
// 3. Use filter to find all students with passing grades (above 60)
// 4. Use map to create a new array with just the names of all students
// 5. Bonus: Use map to add a "passing" property to each student object (true/false)

let student = [
  { studentName: "Jaden", grade: "89" },
  { studentName: "Mike", grade: "67" },
  { studentName: "John", grade: "55" },
];

student.forEach((k) => {
  console.log(k.studentName + " : " + k.grade);
});
