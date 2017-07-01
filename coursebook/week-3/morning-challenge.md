**Author**: [@besarthoxhaj](https://github.com/besarthoxhaj)  

**Maintainer**: TBC
## Parallel Functions Workshop

When making API calls, exactly how quickly you receive a response can depend on several factors: the speed of your connection, the performance of your code, and the performance of the API that you're calling.
Often, you will want to process the response that you receive for an API (like perhaps updating the DOM, or even making more API calls based on the response of the first), but you will probably only want to run that processes ONLY once you've received a response from the API call. Otherwise you may get an error message like ```cannot read property of null```.

This is where parallel functions come in handy....

## Morning challenge - day 3

Below is an array of functions (the ```tasks``` array), each one set to run at different delays (kind of like the delays you might experience when retrieving data form an API).

Complete the 'parallel' function. It should fire all the tasks at the same time, and invoke the final callback when they are all done.

In case of an error, the final callback should be fired immediately.

TIP: You might want to use [Repl.it](https://repl.it/languages/javascript) to complete this challenge so you can see whats happening in your code.

While you're working on this, think about when this function might be useful (in the context of what you've been studying this week).

More info: http://caolan.github.io/async/docs.html#parallel


```js

function parallel (tasks, callback) {
  // write your code here
}

parallel([
  function(callback) {
    setTimeout(function() {
      callback(undefined,1);
    },2000);
  },
  function(callback) {
    setTimeout(function() {
      callback(undefined,2);
    },1000);
  },
  function(callback) {
    setTimeout(function() {
      callback(undefined,3);
    },1500);
  },
  // function(callback) {
  //   setTimeout(function() {
  //     callback('boom',undefined);
  //   },1200);
  // }
], function(err,result) {
  console.log('err',err); // undefined
  console.log('result',result); // [1,2,3]
});
