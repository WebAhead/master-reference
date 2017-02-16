## Learning outcomes

### Hapi server basics
- Understand what is Hapi
- Learn how to set up a Hapi Server and routing using `server.route([...])`
- Understand how to get data out of the request params and payload
- Learn how to set up a route with a dynamic url using *wildcard* parameters
- Learn how to register plugins using the `server.register([....], cb)` method
- Learn how to serve static files using the `Inert` plugin

### Serving files using Hapi and Handlebars
- Be introduced to the Model-View-Controller model
- Learn how to serve dynamic files using `Handlebars` templates and Hapi's `Vision` plugin
- Understand and use Handlebars views, layouts and partials
- Be introduced to helper functions in Handlebars

### More Hapi plugins and testing
- Understand how to validate user's input using the `Joi` plugin
- Learn how session management works using cookies
- Learn how to set up a basic user login with the `Hapi Auth Basic` and `Hapi Auth Cookie` plugins
- Understand how to do Hapi testing to make fake requests using `server.inject`
