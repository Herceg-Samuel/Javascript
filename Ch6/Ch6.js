let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers = 2;
while (numbers <= 20) {
  console.log(numbers);
  numbers += 2;
}

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i = 10; i < num.length; i--) {
  console.log("new");
  console.log(i);
  i -= 1;
}
