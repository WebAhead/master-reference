## Project

### Autocomplete website/widget

#### Description

- A website that enables users to quickly find and select words from a list of suggestions, as they type.
- The list is dynamically generated from a pre-populated list of values (i.e. a dictionary file), leveraging searching and filtering.
- A large data file is required to search through - consider the best data structure for this (e.g. `.txt` or `.json`).
- Consider how implementation affects user experience and web performance (e.g. time to load and search through the data file).

#### Task

Your task is to build a site which will update as you type (an autocompleter), as per the description above.

#### Goals

1. Test your server routes using `tape` and `supertest`, and if there is javascript logic in the frontend make sure to test it as well.

2. Host your server on **heroku**, [see resource](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).

3. Consider using an [eslint config](https://eslint.org/docs/user-guide/getting-started#configuration) for a consistent code base.

#### Example

[Dwyl autocompleter](https://github.com/dwyl/autocomplete).
[Mahmood's project](https://hello-atlas.herokuapp.com)
