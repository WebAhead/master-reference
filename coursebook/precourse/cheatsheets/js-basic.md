# Javascripts basics

### Data types

#### Numbers
```javascript=
var x = 10
var y = 1.2

var divide = 10 / 2 // 5
var remainder =  10 % 2 // 0
var multiply = 10 * 2 // 20

```

#### Strings
```javascript=

var name = 'John'

var x = name.length // 4

var fullName = 'John ' + 'Doe' // 'John Doe'

// Double quotes and single quotes are the same
// "John" = 'John'

```

#### Booleans
```javascript=
var isTrue = true
var isFalse = false

// Conditions like '===', '>' '<' returns a boolean
var doesEqual = 1 === 1 // true
var doesNotEqual = 1 === 2 // false
var isBigger = 30 > 20 // true
var alsoDoesNotEqual = 1 !== 1 // false

!isTrue // false
!isFalse // true
```

#### Null

#### undefined

```javascript=

var y = 1

// x is considred undefined, since we only defined y
// and this code will output an error
y + x
// ReferenceError: x is not defined
```

#### NaN
> short for not a number
```javascript=
// You can turn a string number ("1", "60") 
// into a normal number by using the function `Number`

Number("1") // 1

// If you give the function a string
Number('A') // NaN

```

> There are also Arrays and Objects, but we will talk about them later


### Falsy vs Truthy

- Values that are considered falsy will fail an if statement, Javascript has 6 falsy values:
    - Empty string: '', "", ``
    - false
    - 0
    - null
    - undefined
    - NaN

```javascript=

    // the output here is "inside else"
    // same goes to the rest of the falsy values
    if (null) {
        console.log('inside if')         
    } else {
        console.log('inside else')
    }
```

- You can check whether the value is falsy or truthy by using the `Boolean` function

```javascript=
Boolean(1) // true
Boolean(0) // false

// Or you can use !!

!!1 // true
!!0 // false
```


#### Functions

```javascript=

function add(x, y) {
    return x + y
}

console.log(add(3, 6)) // 9

// You can define functions in a variable
// a function without a name is called an anonymous function
// here we are saying that add equals this anonymous function
var add = function (x, y) {
    return x + y
}

// Also this 
var subtract = function (x, y) {
    return x - y
}

// Can be written like this
// this is called an arrow function, you can't give it a name
// and with the current syntax it will return on it's own
var subtract = (x, y) => x + y

// if you want to write more than one line in arrow function
// you will need to add { }
var subtract = (x, y) => {
    // Do something else
    return x + y // since we added the { } now we need to add the return
}
```


### String functions


- **String.indexOf(*value*)**
Returns the index of the value in the string
```javascript= 

var sentence = 'John ate an apple'

sentence.indexOf('apple') // output 12
sentence.indexOf('orange') // output -1
```

- **String.split(value)**
Splits the string by the value into an array
```javascript=
var sentence = 'John ate an apple'

sentence.split('ate') // ['John', ' an apple']

var numbers = '1,2,3,4,5'
numbers.split(',') // ['1', '2', '3', '4', '5']
```


- **String.toLowerCase()**
```javascript=
var name = 'MARIO'

name.toLowerCase() // 'mario'
```


### Switch & operators

- **&&**
&& returns the second value if the first value is truthy. 
if the first value is falsy then it would return it instead of the second.
```javascript=

1 && 2 // returns 2
0 && 2 // returns 0

var x = 'hello'
var y = 'world'

// the && would return y, which is cosidered a truthy value
// so the if will pass
if (x && y) { 

}
```


- **||**
|| returns the first true value
```javascript=
0 || false || 5 // returns 5

// if all are false it would return the last one
0 || null // returns null

var x = 'hello'
var y = null

// since || returns the first true value, here it would return the x
// which will pass the if
if (x || y) {

}
```

- **Switch**
You can think of `switch` statements as multiple `if` statements grouped together

```javascript=
var name = 'John'

switch(name) {
    case 'Matt': 
        console.log('Hi Matt!')
        // break stops the switch statement from continuing downwards
        break;
    case 'John':
        console.log('Hi John!')
        break;
        
    // if all the cases above fail, then the default would run
    default:
        console.log('Hey, what is your name ?')
}
```
