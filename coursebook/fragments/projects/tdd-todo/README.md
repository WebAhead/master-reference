# Project

## Use TDD to build a Todo app

The aim for the next couple of days is to build a basic todo list app. This file will help you get started and give you an introduction to unit testing and tdd for client side code.

This project is split into three parts:
  * the first part should be done tdd, here you will create the logic needed to modify your list, and will not interact with the DOM. Use qunit to do this. create an extra file called test
  * the second part involves rendering the todo list to the dom;
  * the third part involves adding your own features.

Some things you might want to add for the third part
  * edit todo text
  * style using css
  * remove the mark button and listen for clicks on the whole todo item.

### setup

Todo:
  * read through the file todo.js. Do not worry if it does not all makes sense at first.
  * set up a new repo for your project this week.
  * copy and commit the files inside skeleton folder into your repository. **warning** only one person in you time should do this, then everyone else can pull down
  * set up a qunit testing environment inside your index.html
  * add some style.
  * now feel free to experiment and add features!


### Part one: create some pure functions

For the first part of the project you will be creating three functions using tdd. You do not need to understand the rest of the code to complete this. The three functions can be thought of in isolation to the rest of the project.

This functions are in the todoFunctions object in `todo.js`


#### What is a todo array? What is a todo?

We will represent a todo as an object with three properties:
```js
var makeTea = {
  id: 0, // this is a unique number, it will be needed to find a todo in a todo list,
  description: "make tea", // this is a string that describes what you need to do,
  done: false // This is true or false, it tells us whether a todo is done or not
};
```
We will represent a todo array as an array of todo objects. ie
```js
var breakfastTodos = [
  { id: 0, description: 'smash avocados', done: true }, // only for London
  { id: 1, description: 'make coffie', done: false } // useful in morning
];
```
##### What does generateId do?
You do not need to understand this function. Each time you call generateId it will give you a unique number!

##### Functions that manage a todoList

###### `addTodo`
Add todo takes two arguements, a todo array and a todo element. The todo element may be missing some of the data that a todo needs.

eg
```js
var todos = [];
var newTodo = { description: 'make smoothie out of things that should really be cooked' };
var updatedTodos = todo.todoFunctions.addTodo(todos, newTodos);
console.log(updatedTodos)
//  [
//    { id: 0, description : make smoothie out of things that should really be cooked, done: false }
//  ]
```
and
```js
var todos = [{ description: 'make tea' }];
var makeEggs = { description: 'make eggs' };
var updatedTodos = todo.todoFunctions.addTodo(todos, makeEggs);
console.log(updatedTodos)
//  [
//    { description: 'make tea' },
//    { id: 0, description: 'make eggs', done: false }
//  ]
console.log(todos) // [{ description: 'make eggs' }]
```

###### `markTodo`
eg
```js
var todos = [
  {id: 0, description: 'make tea', done: false},
  {id: 1, description: 'make eggs', done: true},
]
var teaMade = todo.todoFunctions.markTodo(todos, 0);
// [
//   {id: 0, description: 'make tea', done: true},
//   {id: 1, description: 'make eggs', done: true},
// ]
var coffeeNotMade = todo.todoFunctions.markTodo(todos, 1);
// [
//   {id: 0, description: 'make tea', done: false},
//   {id: 1, description: 'make eggs', done: false},
// ]
```

### Part 2: use the tdd functions to build the app!

#### `createTodoNode`
You need to complete this function. It take one argument, this is a todo element.

This function returns a DOM node. This node is a **l**ist **i**tem (`li`).

If you build this function correctly the render function will take care of inserting all the todo nodes onto the page!

#### Create new todo
see :`addTodoForm.addEventListener('submit', function(event) {`

Inside this function you need to create a new state with a new todo. 

### Part 3: have fun!

You can add features, like sort or update description.

You can make it look pretty, using css.

You can add integration tests!
