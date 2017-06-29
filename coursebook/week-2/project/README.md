# Project

## Use TDD to build a To-do app

The aim for the next couple of days is to build a basic To-do app. This file will help you get started and give you an introduction to unit testing and TDD for client-side code.

This project is split into three parts:

  * The first part should be done TDD. You will create the logic needed to modify your to-do list and will not interact with the DOM. Write your tests in `skeleton/test.js`
  * The second part involves rendering the to-do list to the DOM;
  * The third part involves adding your own features.

Some things you might want to add for the third part:

  * Edit to-do text
  * Style using css
  * Remove the mark button and listen for clicks on the whole todo item.

## Setup

Todo:
  * Read through `skeleton/logic.js`. Do not worry if it does not all makes sense at first.
  * Set up a new repo for your project this week.
  * Copy and commit the files inside skeleton folder into your repository. **warning** only one person in your team should do this, then everyone else can pull the same repo.
  * Install Tape and anything else you want to test with.

## The project

### Part one: create some pure functions

For the first part of the project you will be creating three functions using TDD. You do not need to understand the rest of the code to complete this. The three functions can be thought of in isolation to the rest of the project.

These functions are in the `todoFunctions` object in `logic.js`


#### What is a to-do array? What is a to-do?

We will represent a todo as an object with three properties:

```js
{
  id: 0, // this is a unique number, it will be needed to find a to-do in a to-do list
  description: "make tea", // this is a string that describes what you need to do
  done: false, // This is true or false, it tells us whether a todo is done or not
};
```

We will represent a to-do array as an array of todo objects:

```js
[
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
];
```
#### What does generateId do?
You do not need to understand this function. Each time you call generateId it will give you a unique number!

#### Functions that manage a todoList

##### `addTodo`

Add to-do takes two arguments, a to-do array and a to-do element. The to-do element may be missing some of the data that a to-do needs.

```js
var todos = [];
var newTodo = { description: 'make smoothie out of things that should really be cooked' };
var updatedTodos = todo.todoFunctions.addTodo(todos, newTodos);
console.log(updatedTodos)
//  [
//    {
//      id: 0,
//      description: make smoothie out of things that should really be cooked,
//      done: false,
//    }
//  ]
```

```js
var todos = [{ description: 'make tea' }];
var makeEggs = { description: 'make eggs' };
var updatedTodos = todo.todoFunctions.addTodo(todos, makeEggs);
console.log(updatedTodos)
//  [
//    {
//      description: 'make tea',
//    },
//    {
//      id: 0,
//      description: 'make eggs',
//      done: false,
//     }
//  ]
console.log(todos) // [{ description: 'make eggs' }]
```

##### `markTodo`

`markTodo` marks as to-do as completed.

```js
var todos = [
  {id: 0, description: 'make tea', done: false},
  {id: 1, description: 'make eggs', done: true},
]
todo.todoFunctions.markTodo(todos, 0);
// [
//   {id: 0, description: 'make tea', done: true},
//   {id: 1, description: 'make eggs', done: true},
// ]
todo.todoFunctions.markTodo(todos, 1);
// [
//   {id: 0, description: 'make tea', done: false},
//   {id: 1, description: 'make eggs', done: false},
// ]
```

### Part 2: use the TDD functions to build the app!

#### `createTodoNode`

You need to complete this function. It take one argument, this is a to-do element.

This function returns a DOM node. This node is a list item (`<li>`).

If you build this function correctly the render function will take care of inserting all the to-do nodes onto the page!

#### Create new todo
see: `addTodoForm.addEventListener('submit', function(event) {`

Inside this function you need to create a new state with a new to-do.

### Part 3: have fun!

You can add features, like sort or update description.

You can make it look pretty, using CSS.

You can add integration tests!
