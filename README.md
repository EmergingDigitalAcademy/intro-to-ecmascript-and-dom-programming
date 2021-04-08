# Welcome to the Intro to ECMAScript workshop

This is a hands-on workshop. We're going to build a number guessing
game. Some concepts that we'll cover:

  - Basic introduction to html and css (just enough to be dangerous)
  - Review of how javascript, html, and css all link together in `index.html`
  - Review of how the Document Object Model works (DOM)
  - Review of HTML5 input elements and forms
  - ECMAScript6 Features:
    - Code comments
    - data types: strings, numbers, integers, booleans
    - `let` and `const`
    - `forEach` loops
    - String templates (backtick format)
    - arrow functions and anonymous functions
    - function arguments
    - global variables
    - `console.log` for debugging
    - `Math.random()` for random number generation, 
    - `Math.floor` for integer conversion
    - `new Audio(url)` to play browser audio from url
    - using the `document` API for working with the DOM directly

`index.html` contains the game html elements, `script.js` will
hold all of the game logic, and `style.css` holds all of the styles
for the page (colors, padding, etc)

No installation needed, just open `index.html` in a browser and get
to work!

Steps that we'll take:

1. 15min: Review & Intro of the DOM
2. 15min: Layout of the project, intro to JS
3. 30min: Write the game logic and guessing history
4. 30min: Styling, Q&A

## Teaching the class

- `checkpoints/` folder has milestones.
- `checkpoints/10-final-compact.js` is the solution w/o comments
- `checkpoints/10-final-with-comments.js` is the solution, well commented
- `checkpoints/11-final-style.css` is a final stylesheet to use (just has
  a few things uncommented)

## Important DOM Concepts

- html attributes, including `id` vs `class` and `type="number"`
- Finding an element with `document.getElementById`
- Creating a new element with `document.createElement`
- DOM event handlers, including `document.addEventListener`
- Adding children elements with `element.appendChild`
- Getting and setting with `element.innerText` and `element.value`
- Adding a CSS class with `element.classList.add`
- Stopping form submission default behavior with `event.preventDefault`

Party Horn source: http://soundbible.com/1817-Party-Horn.html
