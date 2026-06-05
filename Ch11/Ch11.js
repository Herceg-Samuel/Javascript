// ## Day 11: Loops Part 2

// **Concepts:** Nested loops, for...of, for...in

// **Challenge:** Multi-dimensional data processing

// 1. Create a 2D array representing a week's worth of daily temperatures (e.g., 7 days with high/low temps)
// 2. Use nested loops to calculate the average high and low temperatures for the week
// 3. Find and output the warmest and coldest days
// 4. Use for...of to iterate through the days and output each day's temperature range

const weekTemps = [
  [76, 59],
  [70, 52],
  [80, 61],
  [82, 62],
  [77, 58],
  [75, 60],
  [79, 63],
];

let totalHigh = 0;
let totalLow = 0;
let warmest = 0;
let coldest = 0;

for (let i = 0; i < weekTemps.length; i++) {
  totalHigh += weekTemps[i][0];
  totalLow += weekTemps[i][1];
  console.log(totalHigh);
  console.log(totalLow);
}

// for (let j = 0; j < weekTemps.length; j++) {
//   let comp = weekTemps[i][j] < weekTemps[i][j];
//   if (comp) return comp[i][j];
// }

// 3. Find and output the warmest and coldest days
// 4. Use for...of to iterate through the days and output each day's temperature range

for (const temp of weekTemps) {
  return weekTemps[temp];
}
