# Let's get linting!

## Intro
Linters are really useful as they detect and flag errors in your code. This readme is going to walk through how to set up `eslint` on your projects. This is useful because it:
- it checks your syntax before code is run to catch errors
- allows you to share a config file between your team to avoid merge conflicts

It does this by highlighting errors with a :red_circle: and telling you what's wrong so you can fix it. Whilst learning it is recommended that you do this manually so you can embed good coding practises.

## Let's do the thing

### Setup eslint config
The following instructions need to be followed by **one person on your team** 

1. `cd [project-name]` - cd into your project
1. `npm init -y` - create a `package.json` (if this is a new directory)
1. `npx eslint --init` - initialises eslint on your project
1. Answer the questions like so:
    - **How would you like to use ESLint?** `To check syntax and find problems`
    - **What type of modules does your project use?** `CommonJS (require/exports)`
    - **Which framework does your project use?** `None of these`
    - **Where does your code run?** `Browser, Node`
    - **What format do you want your config file to be in?** `JavaScript`
1. ESLint will offer to install the `eslint` package as a `devDependency` - enter `Y`

![linter gif](https://user-images.githubusercontent.com/9408641/61289887-5ac71000-a7c2-11e9-8405-a69232fbb820.gif)

Note - only one person needs to set eslint up for each project. Everyone else can get the packages by running `npm i`

:boom: BOOM :boom: you've set up your linting configuration!

Yay. Wait. Now what?!

### Lint your files!

You can run your linter on a single file with:

`npx eslint [filename.js]`

You can run it on all files with:

`npx eslint .`

Hopefully you should see something like this:

![linter running in the terminal](https://user-images.githubusercontent.com/9408641/61290933-f8234380-a7c4-11e9-8f9c-69365b9492bb.png)

You can even set up a linting script in your package.json if you want. Cool huh? :ice_cream:

```json
"scripts": {
  "lint": "eslint ."
}
```

But wait, this isn't actually that useful when it comes to writing code - I have to run this and manually compare it to my editor to fix things... :confused: 

Well, what if you could live see your linting errors as you go, in your editor? 

You can! :tada: 

### Setup your editor
To get your linter configuration working with your editor you need to install the following packages:

**Atom** - `linter`, `linter-eslint`, `linter-ui-default`  
**VS Code** - `eslint`  
**VIM** - `¯\_(ツ)_/¯`

Restart your editor and linting will be enabled :heart:
