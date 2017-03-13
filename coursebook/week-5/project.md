# Project

News feed web app

A news feed is a service that provides users with frequently updated content on a regular or continuous basis. 

### Description

Create a website that will provide a news feed, with the content sourced via an API. 

### Example:

User Story:
'As a student at F&C I want to know all the train departure times from Bethnal Green tube station, so that I can get home in time for dinner'.

This news feed could be created with data provided via the [TFL API](https://api.tfl.gov.uk/).

### Specs:

1) Use at least 1 API 

2) Make your API calls from the back-end using the Request module (or one you build yourself)

3) Your server should contain a minimum of 2 routes

4) We expect back-end testing using tape (test as many components as you can) and basic front-end testing.

5) Test your server by injecting fake HTTP requests using Shot. 

6) Host your project on heroku, see resource.

7) Use module.exports and require to break a single large server file into smaller modules.

8) Consider a good server file structure based on what we have discussed over the week.

9) Employ continuous intergration on your project with Travis or a similar tool.

10) Use CodeCov or a similar tool for test coverage.

11) Display continuous intergration and code coverage badges on your project README. 

12) Ensure that errors are handled, if for example a user attempts to make a request to a non-existent route to your server, provide the user with a custom response.    
