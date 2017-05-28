# Technology choices
Here is a non-exhaustive list of technologies you may want to learn about.

This document will be in two parts. The first part will list technologies that you might be interested in using, while the second will propose some tech stacks you may want to use to build you app.

## Contents
* [Possible Technologies](#possible-technologies)
  * [Client-side](#client-side)
    * [Tachyons](#tachyons)
    * [SASS](#sass)
    * [D3](#d3)
    * [Offline-First Progressive Web App](#offline-first-progressive-web-app)
    * [React](#react)
    * [Redux](#redux)
    * [Elm](#elm)
    * [Angular](#angular)
  * [Server-side](#server-side)
    * [Express](#express)
    * [Redis](#redis)
    * [Web-Sockets](#web-sockets)
    * [MongoDB](#mongodb)
  * [Advanced JavaScript](#advanced-javascript)
    * [Webpack](#webpack)
    * [Babel](#babel)
    * [Functional Programming with Ramda](#functional-programming-with-ramda)
    * [Async/Await](#asyncawait)
  * [Advised Tech Stacks](#advised-tech-stacks)
    * [Hapi + Handlebars + PostgreSQL](#hapi--handlebars--postgresql)
    * [Express + MongoDB + Handlebars](#express--mongodb--handlebars)
    * [Hapi + PostgreSQL + React + Redux](#hapi--postgresql--react--redux)

## Possible Technologies

### Client-side

#### Tachyons
[Site](http://tachyons.io) | [Github](https://github.com/tachyons-css/tachyons) | [NPM](https://www.npmjs.com/package/tachyons)

A CSS framework. Provides the user with an extensive set of small focused classes. Mobile first.

#### SASS
[Site](http://sass-lang.com/) | [Github](https://github.com/sass/node-sass) | [NPM](https://www.npmjs.com/package/node-sass)

A CSS preprocessor providing language extensions allowing the use of variables, nested styles, modularised styles, and simple for-loops and functions.

Alternatives:
* [PostCSS](https://www.npmjs.com/package/postcss)
* [Stylus](https://www.npmjs.com/package/stylus)

#### D3
[Site](http://d3js.org) | [Github](https://github.com/d3/d3) | [NPM](https://www.npmjs.com/package/d3)

A data visualisation libary. Very powerful with a steep learning curve.

#### Offline-First Progressive Web App
[Google PWA Guide](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/) | [Service Worker API](https://developer.mozilla.org/en/docs/Web/API/Service_Worker_API)

> Service workers essentially act as proxy servers that sit between web applications, and the browser and network (when available). They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. They will also allow access to push notifications and background sync APIs.

Related APIs:
* [Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
  * Allows web apps to control system notifications (e.g. desktop notifications).
* [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
  * Allows web apps to receive messages pushed from a server.
  * Useful [server-side library](https://www.npmjs.com/package/web-push).
* [Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
  * Allows web apps to run operations in background threads, separate from the main UI thread.


#### React
[Site](https://facebook.github.io/react/) | [Github](https://github.com/facebook/react) | [NPM](https://www.npmjs.com/package/react)

A front-end framework. Mostly used to create the view layer of client side applications.
Used by [many](https://github.com/facebook/react/wiki/sites-using-react) startups and corporates in London, a good thing to learn if trying to get a job as a front end developer in London.

#### Redux
[Site](http://redux.js.org/) | [Github](https://github.com/reactjs/redux) | [NPM](https://www.npmjs.com/package/redux)

A state management framework for client-side web applications. Most react projects use redux.

#### Elm
[Site](http://redux.js.org/) | [Github](https://github.com/elm-lang) | [Install](https://guide.elm-lang.org/install.html)

A functional, strongly-typed language used to create client-side applications. The choice technology for many people in FAC, but not widely used in the industry. _Steep learning curve_.

#### Angular
[Site](https://angularjs.org/) | [Github](https://github.com/angular/angular.js) | [NPM](https://www.npmjs.com/package/angular)

Like React, a front-end framework. Part of the `MEAN` stack, widely used in the industry in Israel. Also common in the UK.

### Server-side

#### Express
[Site](https://expressjs.com) | [Github](https://github.com/expressjs/express) | [NPM](https://www.npmjs.com/package/express)

Most commonly used Node framework. Easier to learn than `Hapi.js`. Also part of the `MEAN` stack.

#### Redis
[Site](https://redis.io) | [Install](https://redis.io/download) | [Node Client](https://www.npmjs.com/package/redis)

NoSQL database. Fast and scaleable in-memory key-value store. Used for session management and caching. Also has a powerful pub-sub mechanism.

#### Web-Sockets
[Native API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) | [Socket.io](https://socket.io/) | [ws](https://www.npmjs.com/package/ws)

Allows servers to push data to clients, used for push notifaction, real-time collaboration, PWAs.

#### MongoDB
[Site](https://www.mongodb.com/) | [Install](https://docs.mongodb.com/master/administration/install-community/) | [Node Client](https://www.npmjs.com/package/mongoose)

A NoSQL document database. Easy to use. Part of the `MEAN` stack.

### Advanced JavaScript

#### Webpack
[Site](https://webpack.github.io) | [Github](https://github.com/webpack/webpack) | [NPM](https://www.npmjs.com/package/webpack)

> webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

Allows you to use Node-style `CommonJS` modules in the browser, or (since v2.0) `ES Modules`, the modern module syntax for JavaScript. Ubiquitous in industry.

There are _LOTS_ of configuration options and plugins available to use with Webpack, which can make the learning curve quite steep.

Alternatives:
* [Rollup](https://www.npmjs.com/package/rollup)
* [Google Closure Compiler](https://www.npmjs.com/package/google-closure-compiler)

#### Babel
[Site](https://babeljs.io) | [Github](https://github.com/babel/babel) | [NPM](https://npmjs.com/package/babel-core)

A [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) that transforms JavaScript that uses new features (ES6, ES7, etc.) into older-style JavaScript (e.g. ES5). This is typically used to allow developers to use modern language features without sacrificing browser compatibility.

#### Functional Programming with Ramda
[Site](http://ramdajs.com/) | [Github](https://github.com/ramda/ramda) | [NPM](https://www.npmjs.com/package/ramda)

Best to start with [this introduction to functional programming in JavaScript](https://github.com/MostlyAdequate/mostly-adequate-guide). The first six chapters should be sufficient.

#### Async/Await
[API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

Now in Node v7, and can be transpiled in browsers (using [Babel](#babel)). Allows asynchronous code to be written in a synchronous style. There is also a [version of express](http://koajs.com/) that uses it heavily.

## Advised Tech Stacks

#### Hapi + Handlebars + PostgreSQL

 1. Both are great technologies, and will get you a long way. Further to that, rendering on the server can give very fast initial load time, which can result in better UX than a purely client-side rendered React/Angular app.
 2. This will allow you both to consolidate what you have learned in the first 8 weeks and focus on your product.
 3. If you want to technologies like d3, Leaflet, PWA's or web-sockets. You may want choose backend technologies you are familiar with, so you enough time to investigate unfamiliar technologies.

Further, I would advise learning Tachyons or SASS if you are using this stack.

#### Express + Mongo + Handlebars
The `ME` in `MEAN` stack (Mongo, Express, Angular with Node). Express and Mongo are commonly used in the Industry. In London, we would advise learning React over Angular.

#### Hapi + PostgreSQL + React + Redux
Here you would use React + Redux are used together to create an app the renders in the client. We would advise this if you have a small focused team, who all would like to focus on learning react. If using Redux, you should first aim to understand what Redux is, why you need it, and the paradigm is represents.

#### Choose your own!?
Good Luck!

## Finally
Try to find a mentor in the space with experience using your desired tech. Run them though the basic functionality and how you expect everything to fit together.
