## Make Me Hapi

**makemehapi** is a workshop that will run you through a series of challenges ranging from a basic "hello world" server to more advanced exercises dealing with rendering views and helpers functions.

The official workshop lives in this [GitHub repo](https://github.com/hapijs/makemehapi). It's a great workshop but the instructions for some exercises can be a little confusing. To help you out, we've written the guidelines below, and rephrased the exercise instructions.

To get set up:  
1) Install makemehapi globally by running `npm install -g makemehapi`  
2) Create a folder on your computer, e.g. `makemehapi-workshop` and `cd` into it  
3) Run `npm init` to initialise a `package.json`, and install `hapi`. You will use this one and only `package.json` to install additional plugins as specified in the exercises.

For each exercise:  
1) Create a new subfolder, e.g. `exercise-1` and `cd` into it  
2) Follow the instructions below for that exercise  
3) To test your code:  
~ run `makemehapi` in the Terminal  
~ navigate to the relevant exercise using the command-line tool  
~ run `makemehapi verify path-to-file` (e.g. `makemehapi verify server.js`, provided you are already in `exercise-1` subfolder)  

### HELLO HAPI
Exercise 1

Create a hapi server that listens on a port passed from the command line and
replies with "Hello hapi" when an HTTP GET request is sent to the path `/`.

#### HINTS

Create a server that listens to the port passed from the command
line, or defaults to 8080, using the following code:

```js
var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
```

Routes are added using the `route` function:

```js
server.route({
    path: '/',
    method:'GET',
    handler: anonOrYourFunction
});
```

Handlers can be anonymous functions or separately declared (just like in
javascript :P), but all of them should have this signature:

```js
function handler(request, reply) {

    // Request has all information
    // Reply handles client response

    reply();
}
```

Calling the `start` function gets a server listening on the assigned port. Note
that a callback is required when calling `start`, for example:

```js
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
```

### ROUTES
Exercise 2

Create a hapi server that listens on a port passed from the command line and
outputs "Hello [name]", where [name] is obtained from the URL of the GET request (i.e. request to the path `/{name}`).

#### HINTS

Create a server that listens to the port passed from the command
line, or defaults to `8080`, using the same code as in Exercise 1.

```js
var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
```

Add a route handler similar to the following:

```js
function handler (request, reply) {
    reply('Hello ' + request.params.name);
}
```

### HANDLING
Exercise 3

Create a server which responds to requests to the path `/` with a static HTML file named
`index.html` containing the following:

```html
<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handling
    </body>
</html>
```

#### HINTS

This exercise requires you to install the `inert` module, which is a hapi plugin
for serving static files and directories. You'll need to register the plugin in
your code in order to serve static files:

```js
var Inert = require('inert');

server.register(Inert, function (err) {
    if (err) throw err;
});
```

You can declare handlers as objects instead of functions. The object must
contain one of the following: `file` (requires `inert` plugin), `directory`
(requires `inert` plugin), `proxy` (requires `h2o2` plugin), or `view` (requires
`vision` plugin).

For example, `handler` can be assigned an object with the `file` property:

```js
handler: {
    file: "index.html"
}
```

Be careful: in practice, you'll need to provide an absolute path to an
`index.html` file in your program's directory. To achieve this, you'll probably
need the core Node module `path`, its `join()` method, and the global
variable `__dirname`.

### DIRECTORIES
Exercise 4

Create a server which routes requests to the path `/foo/bar/baz/file.html` to a
file in a directory, e.g. `public/file.html`. The file should contain the following content:

```html
<html>
    <head><title>Hello Directories</title></head>
    <body>
        Hello Directories
    </body>
</html>
```

#### HINTS

As before, you'll need to `require` and `register` the `inert` plugin to serve the static directory's
contents.

Handlers can be declared as an object with a `directory` property, which is itself an object containing the directory `path`.

```js
handler: {
    directory: {
      path: './public'
    }
}
```

Routes using the directory handler must include a path parameter at the end of
the path string. The path defined for the route does not need to correspond to
the file system directory structure, and the parameter name does not matter.

```js
path: "/path/to/somewhere/{param}"
```

Note the hint from the previous exercise about using `path`, `join()` and `__dirname`.

### VIEWS
Exercise 5

Create a server which responds to requests to `/?name=Handling` using a template
located at `templates/index.html`. The server should respond with the following HTML:

```html
<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handling
    </body>
</html>
```

#### HINTS

The following flow may help you conceptualise the problem:  
1) The server receives some information from the request, and stores that information. For example, query
parameters that are passed in via a URL are made available in the `query` object.  
2) The information is used to generate the response. In our example, the query parameters are used to fill in the template and produce the final HTML document.

This exercise requires you to install the `vision` module, which is a hapi plugin
for rendering templates. You'll need to register the plugin in your code in
order to render your templates:

```js
var Vision = require('vision');

server.register(Vision, function (err) {
    if (err) throw err;
});
```

`server.views()` is the server method that we use to configure the templates
used on our server. This method receives a configuration object in which we can
set different templating engines based on file extension (e.g. `html`). This object can also set a
directory path for your templates.

```js
server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});
```

To specify the template that will be used to generate the
response, you need to add the `view` property to the handler:

```js
handler: {
    view: "index.html"
}
```

In this exercise, we'll be using Handlebars. To install Handlebars:

```sh
npm install handlebars
```

With Handlebars templates, you can render a variable directly in HTML by
surrounding the variable with curly braces, e.g. `{{foo}}`.

Note: Query params get
automatically parsed and aren't declared in the route `path`. They can be accessed as follows:

```html
<div>{{query.paramName}}</div>
```

### PROXIES
Exercise 6

A proxy lets you relay requests from one server/service to another.

Create a server which listens on a port passed from the command line, takes any
requests to the path `/proxy` and proxies them to `http://localhost:65535/proxy`.

See the [wiki article](en.wikipedia.org/wiki/Proxy_server) for more information.

#### HINTS

This exercise requires you to install the `h2o2` module, which is a hapi plugin
for handling proxies. You'll need to register the plugin in your code in
order to use the `proxy` configuration:

```js
var H2o2 = require('h2o2');

server.register(H2o2, function (err) {
    if (err) throw err;
});
```

The `proxy` property can be used to generate a reverse proxy handler.

```js
handler: {
    proxy: {
        host: '127.0.0.1',
        port: 65535
    }
}
```

### HELPING
Exercise 7

Create a server which responds to requests to `/?name=Helping&suffix=!` using
the template from the VIEWS exercise.

This time, instead of placing the query parameter directly in the template, use a helper. Helpers are functions used within templates to manipulate the data passed to the template and/or other inputs.

Create a helper at `helpers/helper.js` and use it in the template to output the `name`
query parameter. The final HTML file should be as follows:

```html
<html>
    <head><title>Hello Helping!</title></head>
    <body>
        Hello Helping!
    </body>
</html>
```

The helper should concatenate the `name` and `suffix` query parameters.

#### HINTS

You can define a helpers path in the server options. All `.js` files in this
directory will be loaded and the file name will be used as the helper name.

```js
var options = {
    views: {
        ...
        helpersPath: 'helpers'
    }
};
```

Each file must export a single method with the signature `function(context)` and
return a string. The query parameters can be accessed from the object `context.data.root.query`.

``` javascript
module.exports = function(context) {
    return context.data.root.query.foo;
}
```

The helper function can then be used in the template by specifying its name:

```html
<div>{{helper}}</div>

```

Be sure to register the `vision` plugin when attempting to render the template.

### STREAMS
Exercise 8  

Create a hapi server which responds to `GET` requests to the path `/` by streaming a
transformed version of a given file. The transform you should use is ROT13, which is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.

See the [wiki article](https://en.wikipedia.org/wiki/ROT13) for more information.

Your input file should contain:

```
The Pursuit of Hapi-ness
```

And the output should be:

```
Gur Chefhvg bs Uncv-arff
```

#### HINTS

**Streams**

The hapi handler `reply` function can accept a stream as an argument.

**File**

The `fs` module has a `createReadStream(pathToFile)` function that would be useful.

**Simple ROT13**

In this exercise, we'll be using `rot13-transform`. To install rot13-transform:

``` sh
npm install rot13-transform
```
