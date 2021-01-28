# Project

For this week we are going to continue off last week's projects with a few additions or modifications to the functionality. when a user selects one of the suggestions (of the autocomplete) he would then see further data on that suggestion.

Example:
    
- I have a search engine for car companies and when someone starts typing I want to try and autocomplete the car company's names for him.
- Once he clicks on the car company's name, he would be shown extra details on that car company.


**Important note: those "extra details" would come from our server, and our server would fetch them from a different API**.


### Goals

- use atleast 1 API to fetch data from the server.
- draw a diagram (either on a board or a software) of your project's architecture and add it to the README.
- make sure you handle all the errors in the server and provide feedback to the user when a nerror occurs.
- test your router / server functionaliy. (look into [nock](https://github.com/nock/nock) for faking the API requests)
- Add more features!
- Have fun!


### Helpful steps to draw the diagram

1. When the user selects a suggestion, that suggestion (or the complete word) would be sent to our server.
2. Our server based on that suggestion would fetch the appropriate from an API
3. The api would respond with the data.
4. Our server would send the relevant data back to our frontend.
5. The frontend takes the data and shows it on the page.
