# Research Afternoon

## Code Coverage

1. Research what Code Coverage is and why it's useful for TDD.
2. Create a basic Node project on Github that includes some tests with Tape, then use a code coverage tool to generate a report and upload it to be visible online. I'd recommend using [Istanbul](https://istanbul.js.org/), [this](https://github.com/dwyl/learn-istanbul#what) excellent tutorial will come in handy.
3. (Bonus) after uploading the report online, display the [coverage](https://camo.githubusercontent.com/f6d345530f0293eb1b2bbe0efe2d1af354483ffa/68747470733a2f2f636f6465636f762e696f2f67682f6e6a736669656c642f6d79736974652f6272616e63682f6d61737465722f67726170682f62616467652e737667) .svg file provided and display it at the top of your projects' README.md file.

## Continuous Integration

1. Research what Continuous Integration is and what assurances it can provide when building an application.
2. Create a basic Node project on Github that includes some tests with Tape, then sync your project with an online CI tool. Add a new feature to your project, commit your changes, then check on your CI tool to ensure your tests are still passing and your project build is passing. A popular tool is [Travis](https://travis-ci.org/), [this](https://github.com/dwyl/learn-travis) excellent tutorial will come in handy.
3. (Bonus) after verifying the latest changes, display the [build](https://camo.githubusercontent.com/3de407029531b1bcff394070e6d820d3f883a8c5/68747470733a2f2f7472617669732d63692e6f72672f6e6a736669656c642f6d79736974652e7376673f6272616e63683d6d6173746572) .svg file provided and display it at the top of your projects' README.md file.

## Streams and Buffers

1. Research what streams and buffers are in Node, how are they used in conjunction?
2. Create a Node project that lets a user run the command `node bigtextfile.txt` in the same directory as bigtextfile.txt and **stream** the contents of the file to the users terminal. Need a big file? How about a [book](https://www.gutenberg.org/).
3. (Bonus) Allow an additional argument to be provided in the command to specify a time interval of how often a line of text from the file is streamed to the terminal. E.G `node bigtextfile.txt 1s`

## Make a request from the server

1. Research what npm modules are available to make a request from a node server to another server (equivalent of XMLHttpRequest for the server).
2. Using a module of your choice, create a node server which makes a request to an online API (it's up to you what one you'd like to use, I'd recommend either [Unsplash.it](https://unsplash.it/), [Guardian](http://open-platform.theguardian.com/), [Tesco](https://devportal.tescolabs.com/), or [Recipe Puppy](http://www.recipepuppy.com/)), then serve the response when a client requests the home ('/') route of your server.
3. (Bonus), when the server receives the API response, instead of serving the response at the home route, make another GET request to a different API, then combine that response with the original response and serve it to the home route.
