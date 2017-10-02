# A beginners guide to code review

![](https://media.giphy.com/media/zOvBKUUEERdNm/giphy.gif)


---
> “*Any fool can write code that a computer can understand.  
> Good programmers write code that humans can understand*.”
> ~ Martin Fowler


## Why review code? :sunglasses:

Reading other people's code is the ***fastest way to learn***,
not only do you gain insight into how other people solve a problem,
you also gain experience in what makes code ***readable*** (*and thus* ***maintainable***).

While it may *feel* like the focus of your first 8 weeks of Founders &
Coders is on learning to *write* code, as a coder you will spend *considerably* more time *reading* other people's code than writing your own. (*get used to that idea... embrace it! if you can write less code by reading other people's modules and using existing solutions, you save everyone time!*)



## How we conduct code reviews :sparkles:

### 1. Locate the GitHub repository you are planning to review :mag:

The first step is locate the repository for the code you are going to be reviewing. If you can't find the code, you don't have much hope of reviewing it... (* this is obvious but you would be surprised how many times people have requested code reviews and failed to provide a link to the repo*...)

----

### 2. Overview of Files in the repo :file_folder:

Have a quick read through the list of files in the repo.

+ is there a **README.md** or other documentation?
  + Understand the purpose of the project through the documentation
  + Follow any instructions that are in the README.

if either of there is no READEME.md, go straight to the issues section of the repo and check if someone else has already raised this as an issue. If no issue exists highlighting the lack of documentation, raise one.

---
### 3. Explore the code :eyes:


+ Look at the user stories then open the app and try following these specific stories
  + Chances are, if you run the app, you will do something slightly different than what the author tried when testing their change. You may discover important cases they missed.
+ Look for obvious mistakes: typos, poor variable names, unclear function names.
+ See if there is any commented out code that should be deleted.
+ Are there alternative implementations or refactors that increase readability/understandability and/or maintainability?
+ Do you understand the way the code is written?
  + If it is not obvious then the code is written for computers and not humans!
 + Don't feel like you have to look at all the code that's written. Take your time exploring fewer things in more detail
 ![](https://media.giphy.com/media/naXyAp2VYMR4k/giphy.gif)

---
### 4. Raise issues :space_invader:
* Raise issues on their repo if you spot any gaps in clarity in the code or documentation.

* Make sure these have clear titles and and useful commentary. Consider linking to relevant documentation or the lines of code that you're talking about. See how to add in line comments [here]( https://help.github.com/articles/commenting-on-the-diff-of-a-pull-request/ so that your feedback is contextual.  )

* We like using emojis as well. [This](https://www.webpagefx.com/tools/emoji-cheat-sheet/) has a list of all the emojis in a markdown friendly form :boom:

*Here's a nice example:*
![Good example](https://files.gitter.im/Jen-Harris/SZRE/image.png)

---


### A quick note on etiquette :innocent:

* As the person reviewing code, always phrase your issues in an open-minded way (avoid *"this is bad code"* type issues) use questions and *seek to understand*.

* If you (*think* you) know a "better way" of solving a problem, phrase the issue as a question: e.g:  

    >*Would you consider using `this` here instead of `that` because of xyz reason...?*

* If you are referring to a section of code, provide a full link to the line(s) including the branch/commit id. e.g: https://github.com/foundersandcoders/beekeeper/blob/e92ef2d3625ea5e5f7cf29e7daa11c86fa3741bd/test/auth.test.js#L20

---

### Feeling stuck? Ask yourself the following questions :bulb:

+ Does the commit history tell a coherent story?
+ Is the file/project structure clear?
+ Are any functions poorly/confusingly named?
+ Could a comment be removed if your function was better named?
+ Do any of your functions do more than one thing?
+ Is the code appropriately commented?
+ Is indentation consistent?
+ Is the flow of the program clear? (are there too many branches?)

__Week 2 onwards__
+ Does the repository have tests? (*if not, red-flag it*)
+ Do the tests pass?
+ Are instructions for running tests complete? (*try running the tests!*)
+ Do you understand the *point* of all the tests? (are there are any "tests" without assertions?)



## Background Reading :books:

+ Is code for computers or humans?
http://stackoverflow.com/questions/522828/is-code-for-computers-or-for-people
+ Writing code for humans:  https://medium.com/@ilyothehorrid/writing-code-for-humans-5b80a89f439c
+ ***Maintainable*** JavaScript:
https://github.com/jasonzhuang/tech_books/blob/master/js/Oreilly.Maintainable.JavaScript.May.2012.pdf

## Credit :trophy:
README condensed from Bradley's more detailed [document on code review](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/general/code-reviews.md)
