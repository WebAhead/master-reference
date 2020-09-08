## Project
### Task

You are free to create any kind of site that you like, so get creative!

Make sure you're creating your site from a user-centred design perspective, by starting your planning phase with user stories. You always want to be building the most important features first.

The only limits are that your project must fulfill the requirements below.

### Requirements
+ [ ] Login form with 2 fields - username and password
+ [ ] Users only have to log in once (i.e. implement a cookie-based session on login)
+ [ ] Username is visible on each page of the site after logging in
+ [ ] Any user-submitted content should be labelled with the authors username
+ [ ] There should be protected routes and unprotected routes that depend on the user having a cookie or not (or what level of access they have).
+ [ ] Website content should be stored in a database
+ [ ] Include thorough tests on the back-end, testing pure functions and testing routes using Supertest. If you make external API calls, use Nock to mock the response for your tests.
+ [ ] Test front-end logic, we don't expect tests on the DOM.

#### Possible stretch goals
+ [ ] Client-side _and_ server-side validation on login form, including error handling that provides feedback to users
+ [ ] Add roles and permissions - Have an "admin" level user (role) who can edit and delete all content :scream: (permissions)
+ [ ] Add comment functionality to content
+ [ ] Add like functionality to content
+ [ ] Allow users to delete the content that they have submitted

#### Examples
You could use auth to make a game, a todo app, a [twitter clone](http://canaryapp.herokuapp.com/) :heart: or whatever.
