## Morning challenge - day 3

Complete the 'parallel' function. It should fire all the tasks at the same time, and invoke the final callback when they are all done.

In case of an error, the final callback should be fired immediately.

More info: [http://caolan.github.io/async/docs.html#parallel]

While you're working on this, think about when this function might be useful (in the context of what you've been studying this week).

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
