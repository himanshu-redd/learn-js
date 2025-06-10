## **Beginner Level: The Fundamentals**

Focus on understanding basic syntax, data types, operators, control flow, and functions.

1. **Variables and Data Types:**
    
    - **Problem 1.1:** [Declare variables for your name (string), age (number), and whether you are a student (boolean). Print each variable and its data type to the console.](variable.js)
    - **Problem 1.2:** [Write a function that takes two numbers as input, adds them, and returns the result. Call the function and print the sum.](sum.js)
2. **Operators:**
    
    - **Problem 2.1:** [Calculate the area of a rectangle. Declare variables for `length` and `width`, then use the multiplication operator to find the `area`. Print the `area`.](rect_area.js)
    - **Problem 2.2:** [Write a program that checks if a given number is even or odd using the modulo operator (`%`).](even-odd.js)
3. **Control Flow (if/else, switch):**
    
    - **Problem 3.1:** Create a program that prompts the user for their age. If they are 18 or older, print "You are an adult." Otherwise, print "You are a minor."
    - **Problem 3.2:** Write a `switch` statement that takes a day of the week (e.g., "Monday") and prints a corresponding message (e.g., "Start of the work week!"). Handle a default case for invalid input.
4. **Loops (for, while):**
    
    - **Problem 4.1:** Print numbers from 1 to 10 using a `for` loop.
    - **Problem 4.2:** Calculate the sum of all numbers from 1 to 100 using a `while` loop.
    - **Problem 4.3:** Iterate through an array of names and print each name.
5. **Functions:**
    
    - **Problem 5.1:** Write a function `greet(name)` that takes a name as an argument and prints "Hello, [name]!".
    - **Problem 5.2:** Create a function `calculateAverage(numbers)` that takes an array of numbers and returns their average.
    - **Problem 5.3:** Implement a function that converts Celsius to Fahrenheit and vice versa.

---

## **Intermediate Level: Building Blocks & Practicality**

Dive into more complex data structures, higher-order functions, and basic DOM manipulation (if you're learning for web development).

1. **Arrays & Objects:**
    
    - **Problem 1.1 (Arrays):**
        - Given an array of numbers, find the largest and smallest number.
        - Remove duplicate elements from an array.
        - Sort an array of strings alphabetically.
    - **Problem 1.2 (Objects):**
        - Create an object representing a book with properties like `title`, `author`, `pages`, and `isAvailable`.
        - Write a function that takes a book object and prints its details in a formatted way.
        - Add a new property to the book object (e.g., `genre`) and update an existing one (e.g., `pages`).
2. **Higher-Order Functions (map, filter, reduce, forEach):**
    
    - **Problem 2.1 (map):**
        - Given an array of numbers, create a new array where each number is doubled.
        - Convert an array of strings to uppercase.
    - **Problem 2.2 (filter):**
        - From an array of ages, filter out only those who are 18 or older.
        - Given an array of products with `name` and `price`, filter out products that cost less than $50.
    - **Problem 2.3 (reduce):**
        - Calculate the sum of all elements in an array.
        - Count the occurrences of each word in a given sentence.
    - **Problem 2.4 (forEach):**
        - Iterate through an array of objects (e.g., users with `name` and `email`) and print a greeting for each user.
3. **Closures:**
    
    - **Problem 3.1:** Create a function `createCounter()` that returns an inner function. The inner function should increment a counter variable declared in the outer function's scope and return the current count.
    - **Problem 3.2:** Implement a simple "private" variable using closures.
4. **`this` Keyword & Arrow Functions:**
    
    - **Problem 4.1:** Explain and demonstrate the difference in `this` binding between regular functions and arrow functions within an object method.
    - **Problem 4.2:** Create an object with a method that uses `setTimeout` to log a message after a delay. Show how arrow functions can help preserve the `this` context.
5. **Basic DOM Manipulation (if applicable for web):**
    
    - **Problem 5.1:** Create an HTML button. When clicked, change the text of a paragraph element.
    - **Problem 5.2:** Add a new list item to an unordered list dynamically when a button is clicked.
    - **Problem 5.3:** Change the background color of a `div` element based on user input (e.g., a color picker).

---

## **Advanced Level: Mastering JavaScript**

Focus on asynchronous programming, error handling, advanced object-oriented concepts, and performance.

1. **Asynchronous JavaScript (Callbacks, Promises, Async/Await):**
    
    - **Problem 1.1 (Callbacks):** Simulate an asynchronous operation (e.g., fetching data from a server) using `setTimeout` and demonstrate the "callback hell" scenario.
    - **Problem 1.2 (Promises):** Refactor the previous problem to use Promises, showing how to chain `.then()` and handle errors with `.catch()`.
    - **Problem 1.3 (Async/Await):** Further refactor the Promise-based solution using `async/await` for cleaner, more readable asynchronous code.
    - **Problem 1.4:** Fetch data from a public API (e.g., JSONPlaceholder) using `fetch` with `async/await` and display it on the console or in a web page. Handle potential network errors.
2. **Error Handling (try...catch, Custom Errors):**
    
    - **Problem 2.1:** Write a function that performs division. Use `try...catch` to handle the case where the divisor is zero.
    - **Problem 2.2:** Create a custom error class (e.g., `InvalidInputError`) and throw it when a function receives invalid arguments. Catch and handle this custom error.
3. **Object-Oriented Programming (Classes, Inheritance):**
    
    - **Problem 3.1:** Create a `Person` class with properties like `name` and `age`, and a method `greet()`.
    - **Problem 3.2:** Create a `Student` class that extends `Person` and adds a `studentId` property and an `study()` method.
    - **Problem 3.3:** Demonstrate method overriding in the `Student` class (e.g., override `greet()` to be more specific).
4. **Generators & Iterators:**
    
    - **Problem 4.1:** Implement a simple generator function that yields a sequence of numbers (e.g., Fibonacci sequence).
    - **Problem 4.2:** Create a custom iterable object using the `Symbol.iterator` property.
5. **Modules (ES Modules):**
    
    - **Problem 5.1:** Create two separate JavaScript files. Export a function from one file and import it into the other, then use it.
6. **Web APIs (if applicable for web):**
    
    - **Problem 6.1 (LocalStorage/SessionStorage):** Store and retrieve user preferences (e.g., dark mode setting) using `localStorage`.
    - **Problem 6.2 (Geolocation API):** Get the user's current latitude and longitude and display it. Handle permission denials.
    - **Problem 6.3 (Canvas API):** Draw a simple shape (e.g., a rectangle or circle) on an HTML canvas.
7. **Performance Optimization (Conceptual):**
    
    - **Problem 7.1:** Given a large array, discuss and demonstrate how you might optimize a loop that performs a computationally intensive task. (e.g., using `requestAnimationFrame` for animations, debouncing/throttling event handlers).
    - **Problem 7.2:** Explain the concept of memoization and provide a simple example where it could be applied to improve performance.

---

## **Project-Based Learning (Crucial for Advanced Mastery)**

Once you've tackled individual problems, try building small projects that combine multiple concepts.

- **To-Do List Application:** (DOM manipulation, event handling, local storage)
- **Simple Calculator:** (DOM manipulation, event handling, basic arithmetic)
- **Quiz Application:** (Arrays of objects, control flow, DOM manipulation, scoring)
- **Weather App:** (Asynchronous programming with APIs, DOM manipulation)
- **Recipe Finder:** (More complex API interaction, filtering, display)
- **Basic Game (e.g., Tic-Tac-Toe, Simon Says):** (Game logic, DOM manipulation, event listeners)