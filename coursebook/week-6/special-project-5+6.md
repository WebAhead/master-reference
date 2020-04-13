## Project

### Autocomplete website/widget

#### Description

- A website that enables users to quickly find and select words from a list of suggestions, as they type.
- The list is dynamically generated from a pre-populated list of values, leveraging searching and filtering.
- Consider how implementation affects user experience and web performance.
- Import your list of words(the dictionary) from an API, you will need to provide users with content from an API. 

#### Task

Your task is to build a site which will update as you type (an autocompleter) where the words are pre-filled from an external API, as per the description above.

#### Goals

1. Use at least 1 API 

2. Make your API calls from the back-end using the axios module.

3. Your server should contain a minimum of 2 routes

4. We expect to see lots of tests! Modularise your code and test all your pure functions. Write tests for as much of your back-end and front-end logic as you can. Focus more on the backend and less on the frontend.

5. Host your project on **heroku**, [see resource](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

6. Use **module.exports** and **require** to break a single large server file into smaller modules.

7. Consider what would be a good **server file structure** based on what we have discussed over the week.

8. Employ continuous integration on your project with Travis or a similar tool. (If you decide to use Travis, we strongly recommend that you host this project in your own repo rather than in your cohort's FAC repository to avoid all builds getting queued together)

9. Use CodeCov or a similar tool to report and track test coverage.

10. Include Error Handling. For example:
  - if a user attempts to make a request to a non-existent route to your server (404 - as mentioned above), provide the user with a custom response.    
  - if there is a [programmer error](https://github.com/foundersandcoders/error-handling-workshop#kinds-of-errors) on your server (e.g. a handler function does not act as intended), provide the user with a custom response (500 status code).

11. *Stretch goal* include server-side validation to protect your server from crashing.

12. *Stretch goal* Display continuous integration and code coverage badges on your project README. 

#### Example

[Dwyl autocompleter](https://github.com/dwyl/autocomplete).

