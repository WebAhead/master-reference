function parallel (tasks, callback) {
  // create array to hold results
  var resultsArr = [];
  // counter to count the loop as resultsArr.length will be misleading
  var counter = 0;
  //loop through each task
  tasks.forEach((task, i) => {
      task((err, result) => {
        // if err call the callback
        if (err) {
          callback(err)
          return
        }
        // if no error add to the resultsArr and increase the counter
        resultsArr[i] = result
        counter++
        // when all the tasks are done, call the callback with arr
        if (counter === tasks.length){
          callback(null, resultsArr)
        }
      })
    })
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
  if (err) {
    console.log('err',err); // undefined
  } else {
    console.log('result',result); // [1,2,3]
  }
});
