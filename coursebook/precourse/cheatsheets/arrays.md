# Javascript Arrays 

> A reference for arrays methods that come up a lot during development with Javascript

#### `Array.forEach`: Loops through the array, the output is void.

```javascript
const courses = ['Webahead 6', 'Webahead 7', 'Webahead 8']

courses.forEach((course, index) => {
    console.log(index)
    console.log(course)
})

```
#### `Array.sort`: sorts the array, buy default the sort is in ascending order, the output is void.

- Ascending order
```javascript
const courses = ['Webahead 8', 'Webahead 6', 'Webahead 7']

courses.sort()

// courses = ['Webahead 6', 'Webahead 7', 'Webahead 8']

```


- Descending order

```javascript
const courses = ['Webahead 8', 'Webahead 6', 'Webahead 7']

courses.sort(function ( a, b ) {
    return b - a
})

// courses = ['Webahead 6', 'Webahead 7', 'Webahead 8']

```

- Custom order

```javascript
const numArr = [4, 5, 3]

numArr.sort(function ( a, b ) {
    if (a < b) {
        return -1
    }

    if (b < a) {
        return 1
    }

    return 0
})

// numArr = [3, 4, 5]

```

#### `Array.join`: Joins all element of the array into a 1 string, output os String

```javascript

const nameArr = ['M', 'a', 'r', 'i', 'o']

const defaultJoin= nameArr.join() // 'M,a,r,i,o'

const name =  nameArr.join('') // Mario

const xSeperatedName =  nameArr.join(' X ') // M X a X r X i X o


```

#### `Array.map`: loops over an array and returns a new one depending what the callback function returned, output is Array

```javascript

const numArr = [1, 2, 3]

const NumArrPlusOne = numArr.map((function (num, index) {
    return num + 1
}))

// NumArrPlusOne = [2, 3, 4]

```

```javascript

const numArr = [1, 2, 3]

const NumArrPlusOne = numArr.map((function (num, index) {
    return { number: num } 
}))

// NumArrPlusOne = [{ number: 1 }, { number: 2 }, { number: 3 }]

```



#### `Array.filter`: loops over an array and returns a new *filtered* one depending what the callback function returned, output is Array

```javascript


const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbersArr = numArr.filter((num, index) => {
    if (num % 2 === 0) {
        return true
    }

    return false
})

// evenNumbersArr = [2, 4, 6, 8, 10]

```


#### 'Arrays.reduce`: loops over an array and returns an accumulated value, output can be anything

```javascript

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// the reduce method takes 2 arguments, the callback function and the initial value for the total which is 0
const sum = numArr.reduce(function(total, currentNumber) {
    
    const newTotal = total + currentNumber
    
    return newTotal
}, 0)


```

```javascript

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// a reduce must always return something
const evenNumbersSum = numArr.reduce(function(total, currentNumber) {
    
    if (currentNumber % 2 === 0) {
        const newTotal = total + currentNumber
        
        return newTotal
    }

    return total
}, 0)


```


#### `Array.every`: loops over an array and checks if every single element in the array passes the condition given by the callback function, output is Boolean

```javascript

const multipleOfThree = [3, 6, 9, 12]
const multipleOfThreeGlitch = [3, 6, 9, 11]

const isMultipleOfThree = function (num, index) {
    if (num % 3 === 0) {
        return true
    }
    
    return false
}

const checkOne = multipleOfThree.every(isMultipleOfThree)
const checkTwo = multipleOfThreeGlitch.every(isMultipleOfThree)

// checkOne = true
// checkTwo = false

```


#### `Array.some`:  loops over an array and checks if atleast one element in the array passes the condition given by the callback function, output is Boolean

```javascript

const numOdd = [1, 3, 5, 7]
const numOddGlitch = [1, 3, 5, 6, 7]

const hasAnEvenNumber = function (num, index) {
    if (num % 2 === 0) {
        return true
    }
    
    return false
}

const checkOne = numOdd.every(hasAnEvenNumber)
const checkTwo = numOddGlitch.every(hasAnEvenNumber)

// checkOne = false
// checkTwo = true

```

