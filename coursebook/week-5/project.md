# Project

Web app that provides users with frequently updated content on a regular or continuous basis and allows users to search its content.

A good example could be a news app but feel free to be creative!

### Description

Create a website that will include user input and content that can be updated regularly, with the content sourced via an API.

### Example:

Example User Stories:
'As a student at F&C I want to know all the train departure times from Bethnal Green tube station, so that I can get home in time for dinner'.

'As a regular commuter, I want to input which direction of travel I am interested in so that I can see information that is relevant to me.'

This news feed could be created with data provided via the [TFL API](https://api.tfl.gov.uk/).

You can build on this user story or create your own user stories as long as they are consistent and the below specs are fulfilled.

### Specs:

1) Use at least 1 API 

2) Make your API calls from the back-end using the Request module (or one you build yourself)

3) Your server should contain a minimum of 2 routes

4) We expect back-end testing using tape (test as many components as you can) and basic front-end testing.

5) Test your server by injecting fake HTTP requests using Supertest. 

6) Host your project on heroku, see [resources](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-5/resources.md)

7) Use module.exports and require to break a single large server file into smaller modules.

8) Consider a good server file structure based on what we have discussed over the week.

9) Employ continuous intergration on your project with Travis or a similar tool. (If you decide to use Travis, we strongly recommend that you host this project in your own repo rather than in your cohort's FAC repository to avoid all builds getting queued together)

10) Use CodeCov or a similar tool for test coverage.

11) Display continuous intergration and code coverage badges on your project README. 

12) Ensure that errors are handled, if for example a user attempts to make a request to a non-existent route to your server, provide the user with a custom response.    

13) Include a user input field on your web app and include server-side validation to protect your server from potentially malicious user input.
