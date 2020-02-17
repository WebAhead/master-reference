//run this code in node, and look at the console output, or copy and paste it
//into repl.it and look at the console output there, and read through the
//comments.


//For clarity, Zooey was a student on FAC10 who is 186cm tall, wears glasses
// and has long hair. They wrote this explanation using themself as reference.

//initialise an object
var zooey = {
  height: 186,
  glasses: true,
  hair: "long"
};
// assign that variable to another variable
var zooey2 = zooey;

console.log("original: ", zooey);
console.log("zooey2: ", zooey2);
console.log("are zooey and zooey2 the same?", zooey === zooey2, '\n');

//I change the original object
zooey.hair = "short";

//if you look at the output to the console, both zooey and zooey2 have been
// changed, as they refer to the same object.
console.log("original: ", zooey);
console.log("zooey2: ", zooey2, '\n');

//so how can we copy the object without referring to the same object?

//Object.keys gives us an array of strings of the keys in the object passed in
// as an argument
var zooeyKeysArray = Object.keys(zooey);

console.log("array of keys: ", zooeyKeysArray, "\n");

//initialise an empty object
var zooeyCopy = {};


//loop through the array of keys from zooey, and for each key in zooey add that
// key value pair to zooeyCopy, just as it is in our original zooey object
zooeyKeysArray.forEach(function(key) {
  //we have to use square bracket notation for objects when using a variable to
  // refer to a key (rather than the literal name of the key)
  //check out this link for more info if you need
  //https://stackoverflow.com/questions/4968406/javascript-property-access-dot-notation-vs-brackets
  zooeyCopy[key] = zooey[key];
});

console.log("original: ", zooey);
console.log("zooey2: ", zooeyCopy);
console.log("are zooey and zooeyCopy the same?", zooey === zooeyCopy, '\n');

//from the console output we can see that even though zooey and zooeyCopy have
// the same keys, with the same values, the objects are **not** the same

// the zooey copy shaves their head, but this doesn't effect the original zooey
// object as the are not the same
zooeyCopy.hair = "none";

console.log("original: ", zooey);
console.log("zooeyCopy: ", zooeyCopy);


// nb / advanced.
// This will not work for objects nested inside objects. Have a think about why, but don't worry about it until your code starts dealing with nested objects.
