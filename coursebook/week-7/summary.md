# Week 7

This week you will be introduced to a Node framework called *hapi.js*, and to a JavaScript templating engine called *Handlebars.js*. You will then write your own hapi server and build a blog site using a postgreSQL database and server-side template rendering.

As this is the first week when you are introduced to a framework, it's worth saying a few words about abstractions, libraries and frameworks before diving into hapi.js.

### Abstractions

Abstraction is a key concept in computer science and can be described as:
> [A] manner in which a person interacts with a program or system without directly working with more complex details "under the hood". Complex details that may not be of interest are abstracted away so that the programmer works with only what is necessary to him.
-[CS50 wiki](http://cs50.wiki/Abstraction)

There are different levels of abstraction that make it easier for the programmer to interact with the language, e.g. use function calls without needing to know what exactly happens when the function is called.

Examples of different levels of abstraction are the *low-level languages* (closer to the machine language) and *high-level languages* (closer to the human language).

Libraries and frameworks are built on the idea of abstraction: they both abstract the underlying code.

## Libraries and frameworks

A **library** is a collection of prewritten code, such as routines or class definitions, usually to provide specific functionality. The key idea behind libraries is code reuse: someone writes a bundle of code that is generally useful and can be shared across applications, so that other developers don't have to write it from scratch each time.

> Examples of popular JavaScript libraries are jQuery, Underscore, Ramda, Lodash, Moment. Many of the npm modules can be thuought of as libraries, e.g. the Request module.

A **framework** includes library features but it is more than a library. It defines a control flow (or a skeleton) of the application even before any custom code is written. Developers fill in the skeleton with their code, and the framework calls the code appropriately.

> Examples of popular front-end JavaScript frameworks are Angular and React. Back-end (Node) frameworks include Express, Hapi, Koa, Sails, Meteor and many more.

The key difference between a library and a framework is that with the library, you are in control. With the framework, the control is inverted: the framework calls you (_'the Hollywood principle'_).

<img src="assets/library-framework.png" height="230"/>

_Whilst libraries and frameworks are incredibly useful, it's usually a good idea to get comfortable writing vanilla code first, and understand what is happening under the hood._

## hapi.js

hapi.js is an open-source Node framework for building RESTful & Real-Time web applications and services. It has built-in support for input validation, caching, authentication, and other essential facilities for building web and services applications.

It is configuration-centric, fairly heavy-weight, and is renowned for its security and scalability. It was developed by Walmart (!) and was battle-tested during Black Friday without incident.

hapi provides different objects and methods for abstracting HTTP, and gives you the ability to easily build in other capabilities using smaller, independent modules (i.e. plugins). It allows you to use plugins by registering them directly into the instance of the server you are working on.

## Handlebars.js

Handlebars.js is one of the most popular JavaScript templating engines that builds on top of the Mustache templating engine. A template engine is basically software that is designed to combine templates with data in order to generate HTML. Handlebars can be used for both client-side and server-side rendering.

Handlebars templates are reusable and look like regular HTML with embedded placeholders that can "hold" data. It is generally good practice to separate the view (presentation/ aesthetics) and the model (actual data), as this encourages clean code organisation.

hapi has extensive support for template rendering and can load and leverage Handlebars.js with the full use of layouts (i.e. templates), partials (smaller templates within templates) and helpers (functions used in templates to manipulate data) to ultimately render views.
