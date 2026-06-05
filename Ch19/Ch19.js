// ## Day 19: Classes and OOP

// **Concepts:** Classes, constructors, methods, inheritance

// **Challenge:** Library management system

// 1. Create a Book class with properties for title, author, ISBN, and availability
// 2. Add methods to check out and return books
// 3. Create a Library class that contains an array of Book objects
// 4. Add methods to add books, find books by title or author, and display all books
// 5. Create a specialized class for EBook that extends Book with additional properties

class Book {
  constructor(title, author, ISBN, availability) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availability = availability;
  }

  checkOut() {
    if (this.availability) {
      return true;
    } else {
      return false;
    }
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  bookByTitle(title) {
    this.books.filter((book) => book.title).includes(title);
  }
  bookByAuthor(author) {
    this.books.filter((b) => b.author).includes(author);
  }
  allBooks() {
    return this.books.forEach((b) => b);
  }
}

class Ebook extends Book {
  constructor(publisher, format) {
    this.publisher = publisher;
    this.format = format;
  }
}

// console.log(Library.addBook("Title", "Author", "ISBN", "available"));
