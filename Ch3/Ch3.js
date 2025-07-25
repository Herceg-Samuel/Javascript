let score;
let grade;
score = 78;

if (score >= 70 && score <= 100) {
  grade = "A";
} else if (score >= 60) {
  grade = "B";
} else if (score >= 50) {
  grade = "C";
} else if (score >= 40) {
  grade = "D";
} else if (score >= 0) {
  grade = "E";
} else {
  console.log("Invalid input!");
}

console.log(`You got ${score} and your grade is ${grade}`);
