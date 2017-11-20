# Notes on Code Reviewing

**Note**  
Parts of these notes are based on the [notes on code reviewing](https://github.com/foundersandcoders/master-reference/blob/44ba2217b6386758545f07af136bd6879436ca5a/coursebook/general/code-reviews.md) by [@nelsonic](https://github.com/nelsonic) that were previously used by Founders & Coders. The style guide is inspired by [this one](https://github.com/thoughtbot/guides/tree/master/code-review) from [thoughtbot](https://github.com/thoughtbot).


## Contents
0. [Style Guide](#style-guide)
1. [Reviewing Pull Requests](#reviewing-pull-requests)
   1. [Step 1: Documentation](#pr-step-1-documentation)
   2. [Step 2: Features](#pr-step-2-features)
   3. [Step 3: Implementation](#pr-step-3-implementation)
   4. [Step 4: Security](#pr-step-4-security)
2. [Reviewing a Codebase](#reviewing-a-codebase)
   1. [Step 1: Documentation](#codebase-step-1-documentation)
   2. [Step 2: Features](#codebase-step-2-features)
   3. [Step 3: Implementation](#codebase-step-3-implementation)
   4. [Step 4: Security](#codebase-step-4-security)
3. [Technology Specific Tips](#technology-specific-tips)
   1. [JavaScript](#javascript)
   2. [NodeJS](#nodejs)
   3. [HTML](#html)
   4. [CSS](#css)
   5. [SQL](#sql)


## Style Guide
* No sarcasm
* Be humble
* Be explicit
* Ask questions
* Assume the author had the best intentions
* Don't take it personally
* Offer specific advice and examples, but don't re-write the code for them

## Reviewing Pull Requests
### [PR] Step 1: Documentation
* PR title?
* PR description?
* Linked issues?
* Labels/Milestones/Assignees/Reviewers
* README updated?
* Commit messages
  * Coherent story?
  * Meaningless/repeated?

### [PR] Step 2: Features
* Tests & coverage
  * Do tests pass
  * Is the test output (test names, assertion names) meaningful?
  * Is the level of test coverage appropriate?
  * If a bug-fix, has a test been added to exercise the bug?
  * If tests have been added, are they meaningful?
* Running & reproducibility
  * Can you manually use the feature that is being added/fixed?
  * If a bug-fix, can you manually establish that the bug is fixed?

### [PR] Step 3: Implementation
Use what you discover in [step 1](#pr-step-1-documentation) and [step 2](#pr-step-2-features) to focus your attention in this step.
* Consistent return types?
* Consistent (or existent) error-handling?
* Deeply nested code?
* Lots of repetition?
* Meaningful and concise naming?
* Lots of branches (high cyclomatic complexity)?
* Consistent code formatting?
  * If the project uses a linter, are there any linter warnings?
* Readability/comprehensibility
  * Are other team members likely to be able to maintain it?
  * Appropriately commented?
* Excessively large files?
* Design issues
  * Mixed concerns
  * Leaky abstractions
* Is the data flow clear?

### [PR] Step 4: Security
* Identify any areas that deal with user input or user data
* Are there any API keys, encryption secrets, or credentials in the codebase?

## Reviewing a Codebase
### [Codebase] Step 1: Documentation
* Is there a README?
* Does the README:
  * explain the purpose of the codebase/application?
  * have a link to the live site (if appropriate)?
  * have instructions for installing & running the application?
  * have instructions for running tests?
* Are dependencies explicitly declared?
* Linked issues
* Labels/Milestones/Assignees/Reviewers
* Commit messages
  * Coherent story?
  * Meaningless/repeated?

### [Codebase] Step 2: Features
* Testing & coverage
  * Do tests pass
  * Is the level of test coverage appropriate?
  * If a bug-fix, has a test been added to exercise the bug?
  * Is the test output (test names, assertion names) meaningful?
* Is the file structure clear/sensible?
* Can you get the application(s) running?
  * Go through a few different user flows
  * Try to break things

### [Codebase] Step 3: Implementation
Look at the parts of the codebase that are changing the most often. Also look at more critical parts of the codebase: business logic.
* Consistent return types?
* Consistent (or existent) error-handling?
* Deeply nested code?
* Lots of repetition?
* Meaningful and concise naming?
* Lots of branches (high cyclomatic complexity)?
* Consistent code formatting?
  * If the project uses a linter, are there any linter warnings?
* Readability/comprehensibility
  * Are other team members likely to be able to maintain it?
  * Appropriately commented?
* Excessively large files?
* Design issues
  * Mixed concerns
  * Leaky abstractions

### [Codebase] Step 4: Security
* Identify any areas that deal with user input or user data
* Are there any API keys, encryption secrets, or credentials in the codebase?

## Technology Specific Tips

### JavaScript
* Variable scoping issues

### NodeJS
* Error-first callback
* `return` callback bug
* Appropriate `npm` scripts (e.g. `npm test` and `npm start`)
* Prevent blocking loop with async functions

### HTML
TBD

### CSS
* Styling on classes, not ids

### SQL
TBD
