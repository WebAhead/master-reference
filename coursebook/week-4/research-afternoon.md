# Research Afternoon

## Code Coverage

1. Research what Code Coverage is and why it's useful for TDD.
2. Create a basic Node project on Github that includes some tests with Tape, then use a code coverage tool to generate a report and upload it to be visible online.
3. (Bonus) after uploading the report online, display the [coverage](https://camo.githubusercontent.com/f6d345530f0293eb1b2bbe0efe2d1af354483ffa/68747470733a2f2f636f6465636f762e696f2f67682f6e6a736669656c642f6d79736974652f6272616e63682f6d61737465722f67726170682f62616467652e737667) .svg file provided and display it at the top of your projects' README.md file.

## Continuous Integration

1. Research what Continuous Integration is and what assurances it can provide when building an application.
2. Create a basic Node project on Github that includes some tests with Tape, then sync your project with an online CI tool. Add a new feature to your project, commit your changes, then check on your CI tool to ensure your tests are still passing and your project build is passing.
3. (Bonus) after verifying the latest changes, display the [build](https://camo.githubusercontent.com/3de407029531b1bcff394070e6d820d3f883a8c5/68747470733a2f2f7472617669732d63692e6f72672f6e6a736669656c642f6d79736974652e7376673f6272616e63683d6d6173746572) .svg file provided and display it at the top of your projects' README.md file.

## Streams and Buffers

1. Research what streams and buffers are in Node, how are they used in conjunction?
2. Create a Node project that lets a user run the command `node bigtextfile.txt` in the same directory as bigtextfile.txt and **stream** the contents of the file to the users terminal. Need a big file? How about a [book](https://www.gutenberg.org/).
3. (Bonus) Allow an additional argument to be provided in the command to specify a time interval of how often a line of text from the file is streamed to the terminal. E.G `node bigtextfile.txt 1s`

## Events and Event Emitters

1. Research how events are handled in Node under the hood, and how many of Node's core modules emit events.
2. Create a small Node module called **notify.js**, import it into a project so you can subscribe to these events...

```javascript
notify.on('five seconds', function(message) {
  console.log(message);
  // outputs "It's been five seconds" every 5 seconds     
})

notify.on('FIVE SECONDS', function(message) {
  console.log(message);
  // outputs "IT'S BEEN FIVE SECONDS!!!!" every 5 seconds     
})
```
``(Bonus) Add functionality to the **notify.js** module so the user can provide a string as the first argument so the message is customised...

```javascript
var notify = new Notify('Jimmy');

notify.on('five seconds', function(message) {
  console.log(message);
  // outputs "it's been 5 seconds Jimmy" every 5 seconds     
})
```
and deal with errors if the user provides a non-string argument...
```javascript
var notify = new Notify(666);

notify.on('error', function(message) {
  console.log(message);
  // outputs "666 is a number not a name you animal"    
})
```
