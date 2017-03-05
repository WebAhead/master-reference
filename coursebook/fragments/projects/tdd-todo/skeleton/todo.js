var todo = (function() {

  // Part 1. Fill in any missing parts of the todoFunction object!
  // you can access these on todo.todoFunctions
  // For part one we expect you to use tdd

  // each of these functions takes an array todos
  // [todo]
  // where a todo has the form
  // {
  //   id: /*the id of the todo*/,
  //   description: /*the description of the todo item*/,
  //   done: /*true or false, indicates whether the todo is done*/
  // }

  var todoFunctions = {
    generateId: (function() {
      var idCounter = 0;
      return function () {
        return idCounter++;
      }
    })(),
    addTodo: function (todos, newTodo) {
      // should leave the input argument todos unchanged
      // return a new array, it should contain todos with the newTodo added to the end.
      // add an id to the newTodo. You can use the generateId function to create an id.
      // hint: array.concat
    },
    deleteTodo: function (todos, idToDelete) {
      // should leave the input argument todos unchanged
      // return a new array, this should not contain any todo with an id of idToDelete
      // hint: array.filter
      return state; //change me!
    },
    markTodo: function(todos, idToMark) {
      // should leave the input argument todos unchanged
      // in the new todo array, all elements will remain unchanged except the one with id: idToMark
      // this element will have its done value toggled
      // hint: array.map
    },
    sortTodos: function(todos, sortFunction) {
      // stretch goal! Do this last
      // should leave the input arguement todos unchanged
      // sortFunction will have same signature as the sort function in array.sort
      // hint: array.slice, array.sort
    }
  }

  // part 2. the Dom
  var state = [
    { id: -3, description: 'first todo'},
    { id: -2, description: 'second todo'},
    { id: -1, description: 'third todo'}
  ]; // this is our todoList

  var controller = {
    container: document.getElementById('todo-container'),
    createTodoNode: function(todoData) {
      var todoNode = document.createElement('li');
      // you will need to use addEventListener

      // add span holding description

      // this adds the delete button
      var deleteButtonNode = document.createElement('button');
      deleteButtonNode.addEventListener('click', function(event) {
        state = todoFunctions.deleteTodo(state, todoData.id);
        controller.render(state);
      })
      todoNode.appendChild(deleteButtonNode);

      // add markTodo button

      // add classes for css

      return todoNode;
    },
    render: function(state) {
      var container = controller.container
      var todoListNode = document.createElement('ul');
      state.forEach(function(todoData) {
        todoListNode.appendChild(controller.createTodoNode(todoData))
      });

      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
    }
  }

  // bind create todo form
  var addTodoForm = document.getElementById('add-todo');
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      var description = "?" // event.target ....

      state = state // change this!! you should use todoFunctions.addTodo
      controller.render(state);
    })
  }

  if (controller.container) controller.render(state);

  return { todoFunctions }
})();
