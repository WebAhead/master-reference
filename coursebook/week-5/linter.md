# Let's get linting!

## Intro
Linters are really useful as they detect and flag errors in your code. This readme is going to walk through how to set up `eslint` on your projects. This is useful because it:
- it checks your syntax before code is run to catch errors
- allows you to share a config file between your team to avoid merge conflicts

It does this by highlighting errors with a :red_circle: and telling you what's wrong so you can fix it. Whilst learning it is recommended that you do this manually so you can embed good coding practises.

## Let's do the thing

#### Before you start

You'll be using [`npx`](https://www.npmjs.com/package/npx). This is a way to run npm scripts directly. It'll check your project `node_modules`, then your globally installed `node_modules` and finally fall back to temporarily downloading the package from the npm registry. It's a convenient way to run one-off commands without having to install something permanently. It will already be installed as long as you are running at least npm version 5.2.

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

### Setup your editor
To get your linter configuration working with your editor you need to install the following packages:

**Atom** - `linter`, `linter-eslint`, `linter-ui-default`  
**VS Code** - `eslint`  
**VIM** - `¯\_(ツ)_/¯`

Restart your editor and you should start to see errors highlighted in your code :heart:

### Lint directly in your terminal

If you want to manually lint a file you can do so with:

`npx eslint [filename.js]`

You can run it on all files with:

`npx eslint .`

![linter running in the terminal](https://user-images.githubusercontent.com/9408641/61290933-f8234380-a7c4-11e9-8f9c-69365b9492bb.png)

You can even set up a linting script in your package.json if you want. Cool huh? :ice_cream:

```json
"scripts": {
  "lint": "eslint ."
}
```

Run this with `npm run lint`.

This can be useful for ensuring your code gets linted before you commit (using something like [Husky](https://github.com/typicode/husky/) for pre-commit hooks). You could also set up Travis to lint your code as well as run your tests to ensure you don't merge any PRs with errors.
