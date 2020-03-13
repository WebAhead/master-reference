# DOM-manipulation-Challenge
Introduction to DOM manipulation

## Exercise

1. Go to [this repl](https://repl.it/@Karyum1/DOM-manipulation-Challenge-A).

2. Open `exercise.js` and follow the instructions.

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
