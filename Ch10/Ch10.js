// ## Day 10: DOM Basics

// **Concepts:** Accessing DOM elements, modifying content, handling events

// **Challenge:** Interactive color changer

// 1. Create an HTML page with a button and a div element
// 2. Write JavaScript to change the div's background color when the button is clicked
// 3. Start with a fixed color, then modify to cycle through at least 3 colors
// 4. Add text inside the div that updates to show the current color name

let div = document.getElementById("div");
color = div.style.backgroundColor = "blue";

colors = ["blue", "red", "green"];

let btn = document.getElementById("btn");
