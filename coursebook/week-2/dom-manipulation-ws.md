# DOM-manipulation-Challenge
Introduction to DOM manipulation

## Exercise

1. Go to [this repl](https://repl.it/@Karyum1/DOM-manipulation-Challenge-A).

2. Go through the `index.html` file.

3. Open `exercise.js` and follow the instructions.

## What is the DOM?

The DOM is the _Document Object Model_. It is the browser's interpretation of the page once it has been [_parsed_](https://developer.mozilla.org/en-US/docs/Glossary/Parse).

It's something implemented by web browsers rather than provided by the JavaScript language itself.

## DOM elements

An _element_ is the JavaScript representation of something on the page.

If you right click on a page you should see an "Inspect" option.

![inpect element](https://raw.githubusercontent.com/foundersandcoders/DOM-manipulation-Challenge/master/assets/inspect-element.png)

In the image below, `article` is a DOM element.

![article DOM element](https://raw.githubusercontent.com/foundersandcoders/DOM-manipulation-Challenge/master/assets/article-element.png)

Any HTML elements you write will be DOM elements in the browser, for example: `div`, `span`, `input`, `section`, etc.

## Accessing DOM elements using Javascript

You can access DOM elements with javascript.

`document.getElementById("myId")` returns the element with ID "myId";
```html
<article id="featured-article">
  Lorem ipsum...
</article>
<script>
  var featuredArticleElement = document.getElementById("featured-article");
  // <article id="featured-article">...</article>
</script>
```

`document.getElementsByClassName("myClass")` returns a live [HTML Collection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) of all elements with the class "myClass";

```html
<li class="menu-item">London
</li>
<li class="menu-item">Nazareth</li>
<script>
  var menuItems = document.getElementsByClassName("menu-item");
  // [li.menu-item, li.menu-item]
</script>
```

It's important to note that this collection is _live_. If you change one of the elements within it, then try to access the collection again it will be updated. This is different to how most function return values work, so be careful.

`document.querySelector(myCssSelector)` returns the first element matching `myCssSelector`, where `myCssSelector` is any valid [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors). For example "#myId", ".myClass", "myTag", etc etc.

```js
document.querySelector("#myId"); // logs first element with ID of "myId"
document.querySelector(".myClass"); // logs first element with class name of "myClass"
document.querySelector("p > a.active"); // logs first anchor element with class name of "active" that is within a paragraph
```

`document.querySelectorAll(myCssSelector)` returns a static [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) of all elements matching myCssSelector.

```html
<button id="btn-1">Sign up</button>
<button id="btn-2">Sign in</button>
<script>
  var buttons = document.querySelectorAll("button");
  // [button#btn-1, button#btn-2];
</script>
```
It's important to note that this NodeList is _not_ live. Whatever `querySelectorAll` returns will stay the same even if the underlying elements later change. Think of it as a snapshot of the DOM at the time you ran the function.

NodeLists are similar to arrays, but with fewer properties. For example they have a `.forEach()` method, but no `.map()` or `.filter()`. If you need to do more complex operations you can turn them into arrays using `Array.from(myNodeList)`.

```html
<button id="btn-1">Sign up</button>
<button id="btn-2">Sign in</button>
<script>
  var buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    console.log(button);
  });
  // <button id="btn-1">Sign up</button>
  // <button id="btn-2">Sign in</button>
</script>
```

`docuemnt.getElementById('someId').children` world return the children of the selected element.

```html
<div id="sign-buttons-container">
    <button id="btn-1">Sign up</button>
    <button id="btn-2">Sign in</button>
</div>
<script>
  var buttons = document.getElementById("sign-buttons-container").children;
  // [button#btn-1, button#btn-2];
</script>
```

The returned array is also a NodeList.

## DOM element properties

We can access _properties_ of DOM elements using javscript.

```html
<section id="featured-section" class="highlight large">
  <p>Lorem ipsum...</p>
</section>
<script>
  var section = document.querySelector("#featured-section");
  var id = section.id; // "featured-section"
  var className = section.className; // "highlight large"
</script>
```

- [What are object properties in javascript?](https://www.w3schools.com/js/js_properties.asp)

- [Here is a list of the DOM element properties](https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties)

## DOM element methods

- [What are object methods in javacript?](https://www.w3schools.com/js/js_object_methods.asp)

- [Here is a list of the DOM element methods](https://developer.mozilla.org/en-US/docs/Web/API/Element#Methods)


## Hints to the Repl Challenge

### Question 1
<details><summary>Hint 1</summary>
<p>
The first step is to simply access the DOM 'introduction' element. 
  
By convention, we put this into a variable, like so:
  ```var introductionElement = document.getElementById('introduction');```
</p>
</details>

<details><summary>Hint 2</summary>
<p>
The second step is to add or remove the class '.highlight', depending on whether or not it is currently being applied to the introduction paragraph element. As we can see, there we only have the class 'introduction currently within the <p> tag:

![](https://i.imgur.com/KVcxk7w.png)

As in the above guide, we can use the .contains() method to check if a property on the DOM object:

```
introductionElement.classList.contains('highlight');

```

We can also use the 'add', 'remove', or toggle methods to add or remove classes, ID's, etc from DOM elements - eg:


```

    introductionElement.classList.remove('highlight')

    introductionElement.classList.add('highlight')

```  
</p>
</details>

<details><summary>Solution</summary>
<p>

```javascript

var toggleHighlight = function () {

// Code here
console.log(1);

let introductionElement = document.querySelector('#introduction');

if (introductionElement.classList.contains('highlight')) {
    introductionElement.classList.remove('highlight')}
  }
  else {
    introductionElement.classList.add('highlight');
    }
}

```

Or, if you want to be extra concise:

```

document.getElementById("introduction").classList.toggle("highlight");

```

</p>
</details>


### Question 2

<details><summary>Hint 1</summary>
<p>
This one's super easy. The text content of an element can be retrieved with:

``` DOMelement.textContent ```
</p>
</details>

<details><summary>Solution</summary>
<p>

``` javascript

  let introductionParagraph = document.getElementById('introduction');

  return introductionParagraph.textContent
  
```

</p>
</details>

### Question 3

<details><summary>Hint 1</summary>
<p>
So, in the previous question, we found out how to get the text content ('.textContent') of a DOM element. Now we simply need to check if a given string 'str' is included in that element - eg,

``` javascript 

"hereisastringofletters".includes("str") //returns true 

```

</p>
</details>

<details><summary>Solution</summary>
<p>

``` javascript

var containsString = function (str) {

  let introductionParagraph = document.getElementById('introduction');

    if(introductionParagraph.textContent.includes(str)) {
    return true
  }
  else {
    return false
  }

}

```

</p>
</details>

### Question 4
<details><summary>Hint 1</summary>
<p>
We need to retrieve the 'firstName' text input. If we look at the index.html file, we can see the <form> element, which has a 'value' query containing the text 'John':

![form](https://i.imgur.com/8khxvgr.png)

We can also see this in the browser window. It's the left-most box:

![form-in-window](https://i.imgur.com/iHGCfvJ.png)

First, we need to select the correct query selector. There are three <input> elements and we need to only select the one for 'firstName'. We can do this by using

``` document.querySelector('input') //gets us the first input ``` 

``` document.querySelector('input[name="firstName"]') //gets us the first input containing the name="firstName" property ```

</p>

</details>
<details><summary>Solution</summary>
<p>

``` javascript

var getFirstNameValue = function () {

return document.querySelector('input[name="firstName"]').value;

}

```

</p>
</details>

### Question 5
<details><summary>Hint 1</summary>
<p>
Perhaps someone on the next cohort can write the hints to questions 5-9?
</p>
</details>
<details><summary>Hint 2</summary>
<p>

</p>
</details>
<details><summary>Solution</summary>
<p>

```

var getValue = function (inputName) {

// Code here
  return document.querySelector(`input[name="${inputName}"]`).value;

}

```

</p>
</details>

### Question 6
<details><summary>Hint 1</summary>
<p>

</p>
</details>
<details><summary>Hint 2</summary>
<p>

</p>
</details>
<details><summary>Solution</summary>
<p>

```

var updateStateValue = function (formState, inputName) {

// Code here
  let clone = Object.assign({},formState);
  clone[inputName]= getValue(inputName);
  return clone;
}

```

</p>
</details>

### Question 7
<details><summary>Hint 1</summary>
<p>

</p>
</details>
<details><summary>Hint 2</summary>
<p>

</p>
</details>
<details><summary>Solution</summary>
<p>

```

var updateStateValues = function (formState, inputNames) {

// Code here
  let clone = Object.assign({},formState);
  inputNames.forEach(name=>clone[name]= getValue(name));
  return clone;
}

```

</p>
</details>

### Question 8
<details><summary>Hint 1</summary>
<p>

</p>
</details>
<details><summary>Hint 2</summary>
<p>

</p>
</details>
<details><summary>Solution</summary>
<p>

```

var getInputValues = function (className) {

// Code here
let elements = document.querySelectorAll(`input.${className}`)
return Array.from(elements).map(e=>e.value);

}

```

</p>
</details>

### Question 9
<details><summary>Hint 1</summary>
<p>

</p>
</details>
<details><summary>Hint 2</summary>
<p>

</p>
</details>
<details><summary>Solution</summary>
<p>

```
var generateUl = function (array) {

let ul = document.createElement("ul");
array.forEach(element=>{

  let li = document.createElement("li");
  li.textContent= element;

  ul.appendChild(li);

});
return ul;
}
```

</p>
</details>


