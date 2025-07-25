# 30-Day JavaScript Challenge V1

**Hints:**

```javascript
let shoppingList = ["milk", "eggs", "bread", "apples", "chocolate"];
console.log(`First item: ${shoppingList[0]}`);
shoppingList.push("cheese"); // Add to end
shoppingList.shift(); // Remove from beginning
```

---

## Day 6: Loops Part 1

**Concepts:** for loops, while loops, loop control

**Challenge:** Number pattern generator

1. Use a for loop to print numbers from 1 to 10
2. Use a while loop to print even numbers from 2 to 20
3. Create a loop that counts down from 10 to 1
4. Bonus: Create a multiplication table for a number of your choice (1-10)

**Hints:**

```javascript
// Counting up
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Even numbers
let num = 2;
while (num <= 20) {
  console.log(num);
  num += 2;
}
```

---

## Day 7: Functions Part 2

**Concepts:** Arrow functions, function expressions, scope

**Challenge:** Temperature converter revisited

1. Rewrite your temperature converter from Day 2 using arrow functions
2. Create one function for Celsius to Fahrenheit conversion
3. Create another function for Fahrenheit to Celsius conversion
4. Create a third function that takes a temperature and a unit ('C' or 'F') and converts it to the other unit
5. Test with various temperatures

**Hints:**

```javascript
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

const convertTemperature = (temp, unit) => {
  if (unit === "C") {
    return `${temp}°C is ${celsiusToFahrenheit(temp)}°F`;
  } else if (unit === "F") {
    return `${temp}°F is ${fahrenheitToCelsius(temp)}°C`;
  }
};
```

---

## Day 8: Objects Part 1

**Concepts:** Object creation, properties, methods, dot notation

**Challenge:** Pet profile creator

1. Create an object to represent a pet with properties for name, type, age, and favorite toys (array)
2. Add a method that returns a string describing the pet
3. Access and output specific properties
4. Modify some properties and observe the changes
5. Add a new property to the object

**Hints:**

```javascript
const pet = {
  name: "Buddy",
  type: "Dog",
  age: 3,
  favoriteToys: ["ball", "rope", "frisbee"],
  describe: function () {
    return `${this.name} is a ${this.age} year old ${
      this.type
    } who loves playing with ${this.favoriteToys.join(", ")}.`;
  },
};

console.log(pet.describe());
pet.age = 4; // Modify a property
pet.breed = "Golden Retriever"; // Add a new property
```

---

## Day 9: Arrays Part 2

**Concepts:** Array iteration, map, filter, forEach

**Challenge:** Student grade analyzer

1. Create an array of student objects, each with name and grade properties
2. Use forEach to display all students and their grades
3. Use filter to find all students with passing grades (above 60)
4. Use map to create a new array with just the names of all students
5. Bonus: Use map to add a "passing" property to each student object (true/false)

**Hints:**

```javascript
const students = [
  { name: "Alex", grade: 85 },
  { name: "Sarah", grade: 92 },
  { name: "Michael", grade: 58 },
  { name: "Jessica", grade: 72 },
];

students.forEach((student) => console.log(`${student.name}: ${student.grade}`));
const passingStudents = students.filter((student) => student.grade >= 60);
const studentNames = students.map((student) => student.name);
```

---

## Day 10: DOM Basics

**Concepts:** Accessing DOM elements, modifying content, handling events

**Challenge:** Interactive color changer

1. Create an HTML page with a button and a div element
2. Write JavaScript to change the div's background color when the button is clicked
3. Start with a fixed color, then modify to cycle through at least 3 colors
4. Add text inside the div that updates to show the current color name

**Hints:**

```html
<!-- HTML Structure -->
<button id="colorBtn">Change Color</button>
<div
  id="colorBox"
  style="width: 200px; height: 200px; border: 1px solid black;"
>
  Current color: <span id="colorName">white</span>
</div>

<script>
  const colorBtn = document.getElementById("colorBtn");
  const colorBox = document.getElementById("colorBox");
  const colorName = document.getElementById("colorName");

  const colors = ["red", "green", "blue"];
  let currentIndex = 0;

  colorBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % colors.length;
    const newColor = colors[currentIndex];
    colorBox.style.backgroundColor = newColor;
    colorName.textContent = newColor;
  });
</script>
```

---

## Day 11: Loops Part 2

**Concepts:** Nested loops, for...of, for...in

**Challenge:** Multi-dimensional data processing

1. Create a 2D array representing a week's worth of daily temperatures (e.g., 7 days with high/low temps)
2. Use nested loops to calculate the average high and low temperatures for the week
3. Find and output the warmest and coldest days
4. Use for...of to iterate through the days and output each day's temperature range

**Hints:**

```javascript
const weekTemps = [
  [76, 59], // Day 1 [high, low]
  [70, 52], // Day 2
  [80, 61], // Day 3
  [82, 62], // Day 4
  [77, 58], // Day 5
  [75, 60], // Day 6
  [79, 63], // Day 7
];

let totalHigh = 0;
let totalLow = 0;

for (let i = 0; i < weekTemps.length; i++) {
  totalHigh += weekTemps[i][0];
  totalLow += weekTemps[i][1];
}

// Continue with averages and finding warmest/coldest days...
```

---

## Day 12: Objects Part 2

**Concepts:** Object destructuring, Object.keys(), Object.values(), nested objects

**Challenge:** Book catalog

1. Create an array of book objects with properties for title, author, year, and ratings (object with average and count)
2. Use destructuring to extract properties when processing books
3. Use Object.keys() to list all available properties for a book
4. Create a function that finds books by a specific author
5. Add a method to each book that returns whether it's "recent" (published in the last 5 years)

**Hints:**

```javascript
const books = [
  {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    ratings: { average: 4.6, count: 1842 },
    isRecent: function () {
      return new Date().getFullYear() - this.year <= 5;
    },
  },
  // Add more books...
];

// Destructuring example
for (const { title, author, year } of books) {
  console.log(`${title} by ${author} (${year})`);
}

// Find books by author
function findBooksByAuthor(bookArray, authorName) {
  return bookArray.filter((book) => book.author === authorName);
}
```

---

## Day 13: Error Handling

**Concepts:** try...catch blocks, throwing errors, finally

**Challenge:** Form validator

1. Create a simple form with name, email, and age fields
2. Write validation functions that throw errors for:
   - Empty name
   - Invalid email format (must include @ and .)
   - Age not being a number or outside reasonable range (0-120)
3. Use try...catch to handle these errors and display appropriate messages
4. Include a finally block that logs completion of the validation process

**Hints:**

```javascript
function validateEmail(email) {
  if (!email.includes("@") || !email.includes(".")) {
    throw new Error("Invalid email format");
  }
  return true;
}

try {
  validateEmail("user@example.com"); // Valid
  validateEmail("invalid-email"); // Will throw error
} catch (error) {
  console.error("Validation error:", error.message);
} finally {
  console.log("Email validation complete");
}
```

---

## Day 14: Strings & Regular Expressions

**Concepts:** String methods, regular expressions, pattern matching

**Challenge:** Text analyzer

1. Create functions to analyze a text string:
   - Count words
   - Count sentences
   - Find the longest word
   - Calculate frequency of a specific word
2. Use regular expressions to identify:
   - Email addresses in text
   - URLs in text
   - Phone numbers in a standard format

**Hints:**

```javascript
function countWords(text) {
  return text.split(/\s+/).filter((word) => word.length > 0).length;
}

function findEmails(text) {
  const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g;
  return text.match(emailRegex) || [];
}

const sampleText =
  "Contact me at john.doe@example.com or visit our website https://example.com. Call 555-123-4567 for more info.";
```

---

## Day 15: Arrays Part 3

**Concepts:** reduce(), sort(), some(), every()

**Challenge:** Product inventory analyzer

1. Create an array of product objects with name, price, quantity, and category properties
2. Use reduce() to calculate the total value of inventory (price \* quantity for each product)
3. Use sort() to sort products by price (low to high)
4. Use some() to check if any products are out of stock (quantity 0)
5. Use every() to check if all products in a specific category are above a certain price

**Hints:**

```javascript
const products = [
  { name: "Laptop", price: 999.99, quantity: 5, category: "Electronics" },
  { name: "T-shirt", price: 19.99, quantity: 20, category: "Clothing" },
  // Add more products...
];

const totalValue = products.reduce(
  (sum, product) => sum + product.price * product.quantity,
  0
);
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
const anyOutOfStock = products.some((product) => product.quantity === 0);
```

---

## Day 16: Local Storage

**Concepts:** localStorage, JSON stringification, data persistence

**Challenge:** Task list app

1. Create a simple to-do list interface with an input field and "Add" button
2. Allow users to add tasks that display in a list
3. Enable task completion by clicking on them (add a strikethrough style)
4. Save tasks to localStorage whenever the list changes
5. Load saved tasks when the page is refreshed or reopened

**Hints:**

```javascript
// Save tasks to localStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
}

// Add event listeners to handle task additions and updates
// Remember to call saveTasks() whenever the task list changes
```

---

## Day 17: Date and Time

**Concepts:** Date object, formatting dates, calculating time differences

**Challenge:** Calendar and countdown app

1. Create a function to display the current date and time in a readable format
2. Add a function that calculates days remaining until a target date
3. Create a countdown timer that updates every second
4. Add a function to convert between different time zones
5. Bonus: Display a calendar view of the current month

**Hints:**

```javascript
// Current date formatting
function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

// Days until target
function daysUntil(targetDate) {
  const current = new Date();
  const target = new Date(targetDate);
  const diffTime = target - current;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}
```

---

## Day 18: ES6 Features

**Concepts:** let and const, template literals, destructuring, spread operator, default parameters

**Challenge:** Modernize legacy code

1. Start with "old-style" JavaScript code that uses var, concatenation, etc.
2. Convert all variables to use let/const as appropriate
3. Replace string concatenation with template literals
4. Use destructuring to extract data from objects and arrays
5. Apply the spread operator to simplify array/object operations
6. Add default parameters to functions

**Hints:**

```javascript
// Before
var user = {
  name: "John",
  age: 28,
  hobbies: ["reading", "swimming", "coding"],
};

var greeting = "Hello, " + user.name + "! You are " + user.age + " years old.";
var firstHobby = user.hobbies[0];

// After
const user = {
  name: "John",
  age: 28,
  hobbies: ["reading", "swimming", "coding"],
};

const greeting = `Hello, ${user.name}! You are ${user.age} years old.`;
const [firstHobby, ...otherHobbies] = user.hobbies;
```

---

## Day 19: Classes and OOP

**Concepts:** Classes, constructors, methods, inheritance

**Challenge:** Library management system

1. Create a Book class with properties for title, author, ISBN, and availability
2. Add methods to check out and return books
3. Create a Library class that contains an array of Book objects
4. Add methods to add books, find books by title or author, and display all books
5. Create a specialized class for EBook that extends Book with additional properties

**Hints:**

```javascript
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.available = true;
  }

  checkOut() {
    if (this.available) {
      this.available = false;
      return true;
    }
    return false;
  }

  returnBook() {
    this.available = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBooksByTitle(title) {
    return this.books.filter((book) => book.title.includes(title));
  }

  // Add more methods...
}
```

---

## Day 20: Asynchronous JavaScript Part 1

**Concepts:** setTimeout, setInterval, callbacks

**Challenge:** Simple animation and timer

1. Create a ticking clock that updates every second
2. Create a progress bar that fills up over 10 seconds
3. Implement a setTimeout-based countdown that executes an action at zero
4. Use nested setTimeout calls to create a sequence of actions with delays
5. Create a function that simulates loading data with a callback

**Hints:**

```javascript
// Simple clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// Simulated data loading
function loadData(callback) {
  console.log("Loading data...");
  setTimeout(() => {
    const data = { items: [1, 2, 3, 4, 5] };
    console.log("Data loaded!");
    callback(data);
  }, 2000);
}

loadData(function (data) {
  console.log("Processing data:", data);
});
```

---

## Day 21: DOM Manipulation Advanced

**Concepts:** Creating elements, event delegation, DOM traversal

**Challenge:** Dynamic list builder

1. Create an interface with an input field, "Add" button, and an empty list
2. Allow users to add new items to the list dynamically
3. Add a delete button for each item
4. Implement event delegation for efficient event handling
5. Add drag-and-drop functionality to reorder items

**Hints:**

```javascript
// Create new list item
function createListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  li.appendChild(deleteBtn);
  return li;
}

// Event delegation for delete buttons
document.getElementById("itemList").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
```

---

## Day 22: Asynchronous JavaScript Part 2

**Concepts:** Promises, async/await, fetch API

**Challenge:** Weather app

1. Use a free weather API (like OpenWeatherMap) to fetch weather data
2. First implement the API call using Promises (.then/.catch)
3. Then refactor to use async/await
4. Create a simple interface to display the weather for a given city
5. Add error handling for failed API requests

**Hints:**

```javascript
// Using Promises
function getWeather(city) {
  const apiKey = "your_api_key";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      return {
        temp: data.main.temp,
        description: data.weather[0].description,
        city: data.name,
      };
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      throw error;
    });
}

// Using async/await
async function getWeatherAsync(city) {
  try {
    const apiKey = "your_api_key";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    return {
      temp: data.main.temp,
      description: data.weather[0].description,
      city: data.name,
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
}
```

---

## Day 23: JSON and APIs

**Concepts:** JSON parsing/stringifying, API requests, data handling

**Challenge:** Movie database app

1. Use a free movie API (like OMDB) to search for movies
2. Create a search form that fetches and displays movie information
3. Parse the JSON response and display relevant information (title, year, poster, etc.)
4. Add functionality to save favorite movies to localStorage
5. Create a separate page to view saved favorites

**Hints:**

```javascript
// Search for movies
async function searchMovies(query) {
  const apiKey = "your_api_key";
  const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      return data.Search;
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
}

// Save a favorite movie
function saveFavorite(movie) {
  let favorites = JSON.parse(localStorage.getItem("favoriteMovies") || "[]");

  // Check if already in favorites
  if (!favorites.some((fav) => fav.imdbID === movie.imdbID)) {
    favorites.push(movie);
    localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
    return true;
  }
  return false;
}
```

---

## Day 24: Modules and Import/Export

**Concepts:** ES6 modules, import/export, code organization

**Challenge:** Calculator app with modules

1. Create separate JavaScript modules for different functionality:
   - A math module with basic operations
   - A UI module for DOM manipulation
   - A storage module for saving calculation history
2. Use import/export to connect the modules
3. Create a simple calculator interface that uses all modules
4. Add a history feature to view past calculations

**Hints:**

```javascript
// math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// main.js
import { add, subtract } from "./math.js";
import { displayResult } from "./ui.js";
import { saveCalculation, getHistory } from "./storage.js";

// Use the imported functions to build the calculator functionality
```

---

## Day 25: Form Validation and Processing

**Concepts:** Form events, validation techniques, FormData API

**Challenge:** Registration form

1. Create a user registration form with fields for username, email, password, and confirm password
2. Implement live validation with feedback:
   - Username: Alphanumeric, 3-20 characters
   - Email: Valid email format
   - Password: At least 8 characters with at least one number and one special character
   - Confirm password: Must match password
3. Use the FormData API to collect and process form data
4. Display success message on successful submission
5. Store submitted user data in localStorage

**Hints:**

```javascript
// Example of live validation
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("username-error");

usernameInput.addEventListener("input", function () {
  const username = this.value;
  const isValid = /^[a-zA-Z0-9]{3,20}$/.test(username);

  if (!isValid) {
    usernameError.textContent = "Username must be 3-20 alphanumeric characters";
    this.classList.add("invalid");
  } else {
    usernameError.textContent = "";
    this.classList.remove("invalid");
  }
});

// Form submission with FormData
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const userData = {
      username: formData.get("username"),
      email: formData.get("email"),
      // Don't store the actual password in localStorage for security
      // This is just for demonstration
    };

    // Store user data
    localStorage.setItem("userData", JSON.stringify(userData));

    // Show success message
    document.getElementById("successMessage").classList.remove("hidden");
  });
```

---

## Day 26: Browser APIs

**Concepts:** Geolocation, Clipboard, Web Storage, Notifications

**Challenge:** Location-based weather dashboard

1. Use the Geolocation API to get the user's current location
2. Use the coordinates to fetch local weather data (from your Day 22 project)
3. Add a "Copy to clipboard" button for the weather details
4. Store the last fetched location in localStorage to use as a fallback
5. Implement browser notifications for weather alerts (with user permission)

**Hints:**

```javascript
// Get current location
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by your browser"));
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }),
        (error) => reject(error)
      );
    }
  });
}

// Copy to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
}

// Request notification permission
function requestNotificationPermission() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
}
```

---

## Day 27: Event Handling Advanced

**Concepts:** Event bubbling/capturing, preventing defaults, custom events

**Challenge:** Interactive quiz app

1. Create a multiple-choice quiz with at least 5 questions
2. Implement event delegation for handling answers
3. Prevent form submission and handle quiz responses manually
4. Create and dispatch custom events for quiz completion
5. Add a timer that automatically submits the quiz when time expires

**Hints:**

```javascript
// Event delegation for quiz answers
document.getElementById("quiz").addEventListener("click", function (e) {
  if (e.target.matches(".answer")) {
    // Handle answer selection
    const selectedAnswer = e.target;
    const questionContainer = selectedAnswer.closest(".question");

    // Remove previously selected answers
    questionContainer.querySelectorAll(".answer").forEach((answer) => {
      answer.classList.remove("selected");
    });

    // Mark this answer as selected
    selectedAnswer.classList.add("selected");
  }
});

// Custom event for quiz completion
function completeQuiz() {
  const quizCompleteEvent = new CustomEvent("quizComplete", {
    detail: {
      score: calculateScore(),
      timeRemaining: getTimeRemaining(),
    },
  });

  document.dispatchEvent(quizCompleteEvent);
}

// Listen for the custom event
document.addEventListener("quizComplete", function (e) {
  console.log(
    `Quiz completed! Score: ${e.detail.score}, Time remaining: ${e.detail.timeRemaining}`
  );
  // Show results, etc.
});
```

---

## Day 28: Performance and Optimization

**Concepts:** Debouncing, memoization, performance monitoring

**Challenge:** Search autocomplete

1. Create a search input that suggests results as the user types
2. Implement debouncing to prevent excessive API calls
3. Use memoization to cache previous search results
4. Use performance.now() to measure and log execution times
5. Optimize the rendering of suggestion lists

**Hints:**

```javascript
// Debouncing function
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Memoization for search results
const memoizedSearch = (function() {
  const cache = {};

  return async function(query) {
    if (cache[query]) {
      console.log(`Using cached results for "${query}"`);
      return cache[query];
    }

    console.log(`Fetching new results for "${query}"`);
    const start = performance.now();
    const results = await fetchSearchResults(query);
    const end = performance.now();

    console.log(`Search took ${end - start} ms`);
    cache[query] = results;
    return results;
  };
})();

// Usage
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', debounce(async function() {
  const query = this.value.trim();
  if (query.length < 3) return;
```
