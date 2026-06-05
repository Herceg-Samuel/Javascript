// ## Day 12: Objects Part 2

// **Concepts:** Object destructuring, Object.keys(), Object.values(), nested objects

// **Challenge:** Book catalog

// 1. Create an array of book objects with properties for title, author, year, and ratings (object with average and count)
// 2. Use destructuring to extract properties when processing books
// 3. Use Object.keys() to list all available properties for a book
// 4. Create a function that finds books by a specific author
// 5. Add a method to each book that returns whether it's "recent" (published in the last 5 years)

let book = [
  {
    title: "Book",
    author: "Writer",
    year: "2026",
    ratings: {
      average: 4,
      count: 44,
    },
  },
  {
    title: "Buk",
    author: "Writa",
    year: "2020",
    ratings: {
      average: 4.5,
      count: 334,
    },
  },
  {
    title: "Bok",
    author: "Writerr",
    year: "2026",
    ratings: {
      average: 4.1,
      count: 440,
    },
  },
  {
    title: "Booker",
    author: "Writeer",
    year: "2016",
    ratings: {
      average: 3.4,
      count: 404,
    },
  },
];

const { title, author, year, rating } = book;

const keys = Object.keys(book);
console.log(keys);

// 4. Create a function that finds books by a specific author
// 5. Add a method to each book that returns whether it's "recent" (published in the last 5 years)

const bookAuthor = () => {};
