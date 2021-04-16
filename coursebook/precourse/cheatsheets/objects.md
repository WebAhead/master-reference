# Javascript Objects

#### `Create and use an objects`:

```javascript

const obj = {
    name: 'Webahead'
}

obj.name // 'Webahead'
obj['name'] // 'Webahead'

const keyName = 'name'

obj[keyName] // 'Webahead'

```

#### `Dynamic object key`

```javascript

const key = 'name'

const obj = {
    [key]: 'Wehahead'
}

// obj = {
//     name: 'Webahead'
// }


```

#### Objects valus can be anythig!

```javascript

const obj = {
    numb: 1,
    str: 'Hello',
    isTrue: true,
    someArr: [1, 2, 3],
    someObj: {
        randomKey: 2
    },
    func: function () {
        return 'Hello there'
    }
}

obj.func()

```


#### Be careful when using objects

```javascript

const obj = {
    name: 'John'
}

const person = obj

person.name = 'Dan'

// In this case the following would happen

person.name // => Dan
obj.name // => Dan


```

- To fix this we copy the object using `Object.assign`

```javascript

const obj = {
    name: 'John'
}

const person = Object.assign({}, obj)

person.name = 'Dan'

person.name // => Dan
obj.name // => John


```


#### Spread operator also works for objects.

> Although it might not in some browsers' but there are ways to get around that/

```javascript

const nameObj = {
    name: 'John'
}

const courseObj = {
    course: 'X'
}

const combinedObj = {
    ...nameObj,
    ...courseObj   
}

```

#### looping objects

```javascript

const obj = {
    name: 'John',
    age: 35
}

for (key in obj) {
    console.log(key) // name | age
    console.log(obj[key]) // John | 35
}

```

#### Delete keys

```javascript

const obj = {
    name: 'John',
    age: 35
}

delete obj.age

// obj = {
//     name: 'John'
// }

```

#### `Object.keys(obj)`: returns an array of the object's keys

```javascript

const obj = {
    name: 'John',
    age: 35
}

Object.keys(obj) // [ 'name', 'age' ]

```
