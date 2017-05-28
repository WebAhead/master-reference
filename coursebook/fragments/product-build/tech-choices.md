# Technology choices
Here is a non-exhaustive list of technologies you may want to learn about. This document will be in two parts.

The first part will list technologies that you might be interested in using, while the second will propose some tech stacks you may want to use to build you app.

## Possible technologies

### Client-side

#### Tachyons
A CSS framework. Provides the user with an extensive set of small focused classes. Mobile first.

#### D3
A data visualisation libary. Very powerful with a steep learning curve.

#### Service Worker Background Push notifications
Here's the [API](https://developer.mozilla.org/en/docs/Web/API/Push_API), here's a useful backend [library](https://www.npmjs.com/package/web-push).

#### Offline-First Progressive Web App
Good guide [here](https://developers.google.com/web/fundamentals/getting-started/codelabs/your-first-pwapp/).

#### React
A front-end framework. Mostly used to create the view layer of client side applications.
Used by [many](https://github.com/facebook/react/wiki/sites-using-react) startups and corporates in London, a good thing to learn if trying to get a job as a front end developer in London.

#### Redux
A state management framework for client-side web applications. Most react projects use redux.

#### Elm
An fp language used to create client-side applications. The choice technology for many people in FAC, but not widely used in the
industry.

#### Angular
Like react, a front-end framework. Part of the `MEAN` stack, widely used in the industry in Israel. Also common in England.

### Server-side

#### Express
Most commonly used node framework. Easier to learn than Hapi. Also part of the `MEAN` stack.

#### Redis
No Sql database. Fast and scaleable in-memory key-value store. Used for session management and caching. Also has a powerful pub-sub mechanism.

#### Web-Sockets
Allows servers to push data to clients, used for push notifaction, real-time colaboration, PWAs.

#### Mongo
A no sql document db. Easy to use. Part of the `MEAN` stack.

### Advanced JavaScript

#### Functional Programming with Ramda
[Ramda](http://ramdajs.com/docs/). Best to start with [this](https://github.com/MostlyAdequate/mostly-adequate-guide).

#### Async/Await
Now in Node v7, can be transpiled in browsers. Allows promise code to be written that appears synchronous. [API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). (There is also a [version of express](http://koajs.com/) that uses it heavily.

## advised tech stacks

#### Hapi + Handlebars + Postgres

 1. Both are great technologies, and will get you a long way. Further to that, rendering on the server can give very fast initial load time, which can result in better ux than a purely client-side rendered react/angular app.
 2. This will allow you both to consolidate what you have learned in the first 8 weeks and focus on your product.
 3. If you want to technologies like d3, leaflet, PWA's or sockets. You may want choose backend technologies you are familiar with, so you enough time to investigate unfamiliar technologies.

Further, I would advise learning tachyons or sass if you are using this stack.

#### Express + Mongo + handlebars
The `ME` in `MEAN` stack (mongo, express, angular with node). Express and Mongo are commonly used in the Industry. In London, we would advise learning React over Angular.

#### Hapi + postgres + React + Redux
Here you would use react + redux are used together to create an app the renders in the client. We would advise this if you have a small focused team, who all would like to focus on learning react. If using redux, you should first aim to understand what redux is, why you need it, and the paradigm is represents.

#### Choose your own!?
Good Luck!

## Finally
Try to find a mentor in the space with experience using your desired tech. Run them though the basic functionality and how you expect everything to fit together.
