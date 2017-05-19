# Before you start the course

+ [Precourse Material](#precourse-material)
+ [Installation List](#installation-list)

## Precourse Material

The purpose of the precourse material is to make sure everyone is familiar with the key concepts that we will be using throughout the course. A solid grounding in the fundamentals will help you immensely. Please make sure you have finished this before day 1 of your course.

1. [Command Line](#command-line)
2. [Git & GitHub](#git-and-github)
3. [Markdown](#markdown)
4. [Semantic HTML](#semantic-html)
5. [CSS](#css)
6. [DOM Manipulation](#dom-manipulation)
7. [Practical project](#practical-project)

Please do not forget that **we don't use frameworks at FAC** – ignore Bootstrap and JQuery, and make sure you work in vanilla HTML, CSS and JavaScript. No [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) either. Head over to our [house rules](../general/house-rules.md) to find out why.

If you have any problems with the following material, feel free to reach out to us through your cohort's gitter channel!


### Command Line

**Learning outcome:**  
+ Be familiar with navigating around your computer without using a GUI.

**Resources:**  
Learn Python The Hard Way has a great [Command Line Interface Crash Course](https://learnpythonthehardway.org/book/appendixa.html).

### Git & GitHub

**Learning outcomes:**
+ Understand the purpose of using Git and GitHub  
+ Know basic git commands like git add, git commit and git push

**Resources:**  
[Udacity's git & GitHub course](https://www.udacity.com/course/how-to-use-git-and-github--ud775) is a brilliant set of videos. The course is quite long, so don't worry about completing the whole thing. We will go into more depth in week 1. For now, _just complete lesson 1 (Navigating A Commit History section)_.

### Markdown

**Learning outcome:**  
+ Know markdown syntax well enough to create readmes

**Resources:**  
No GitHub repo is complete without proper documentation. Follow this [markdown tutorial](http://www.markdowntutorial.com/lesson/1/) to learn the syntax that you need to write a banging Readme!

### Semantic HMTL

**Learning outcome:**  
+ Be familiar with new HTML5 elements.

**Resources:**  
[Here](https://www.youtube.com/watch?gl=GB&hl=en-GB&v=OGg8A2zfWKg) is a 6 minute youtube video to introduce you to the concept of the semantic web. You will be expected to write semantically during week 1, so brush up with the following:

Read [this article](https://www.smashingmagazine.com/2013/01/the-importance-of-sections/#the-problem-with-div) to stop using too many divs (divitis). Don't be fooled by the scroll bar - the article isn't particularly long, but there are many comments below.

Head to [this article](https://codepen.io/mi-lee/post/an-overview-of-html5-semantics) for more specific examples of useful semantic tags.

### CSS

**Learning outcomes:**  
+ Be able to apply positioning and layout techniques to solve common problems  
+ Understanding basic CSS rules  
+ Understand the differences between em and rem units and how to combine them effectively  

**Resources:**  
This section includes condensed articles/videos that will be beneficial when tackling CSS throughout the course;

1. [**Learn Layout**](http://learnlayout.com) is a helpful, lightweight, well-ordered guide that covers a lot of concepts in CSS to help you understand how to create a super basic layout. Additional links are provided in each section for more detailed explanations of concepts.
2. [**Relative & Absolute Positioning**](https://www.youtube.com/watch?v=aFtByxWjfLY) this great 7 minute video will cover the position property, after watching you’ll be able to apply positioning techniques with layout techniques from the [Learn Layout](http://learnlayout.com) video to accomplish many important tasks like [centering](https://css-tricks.com/centering-css-complete-guide/).
3. [**CSS Specificity**](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/) is an essential guide to understanding how CSS rules are applied and how CSS works in general.
4. [**Rem/Em Units**](https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984) this is another essential guide to help you understand the differences between em and rem units and how to combine them effectively.

### DOM Manipulation

**Learning outcomes:**  
- Understand what the DOM is
- Create, access, and style a DOM element

**Resourcs:**  
1. [Call Me Nick - DOM Manipulation Basics](http://callmenick.com/post/basics-javascript-dom-manipulation) will cover a lot of the basics.
2. [Appspot's DOM Tutorials: Exercises 1,2 & 3 only](https://dom-tutorials.appspot.com/static/index.html) will help put that into practice.

### Practical Project

The main [objective](learning-outcomes.md) of your precourse material is to become comfortable with the topics in the material above. However, from our experience, you'll find working on a personal project _very_ useful to cement this knowledge. We recommend that you build (a calculator)[FCC Advanced Front End Development Projects](https://www.freecodecamp.com/challenges/build-a-javascript-calculator)], to apply some of what you've learnt in these resources. Make sure to host your project on GitHub pages. Remember, no frameworks ;)

Rather than using Codepen or JS Fiddle, you should do this directly with your text editor, terminal and browser. Start by creating your repo on GitHub and try to stick to the command line for adding, commiting and pushing your changes as you go. Don't forget to add some documentation ;)

Have fun, and don't hesitate to use your gitter channel! If anyone has already made a calculator and feels that they need a different challenge, please message one of us on there.

### Fun optional extras

We do not expect you to do more than what is listed above, but if you have any extra time and would like some more things to look at, here are a few [interesting resources](./optional-extras.md) that you could look at for fun.

## Installation List

**We'll be having an installation party before the beginning of the course. If you decide to install solo and run into difficulties, just get in touch.**

For OSX Users:

- Install [Brew](http://brew.sh/)
- Optional: iTerm2

For Linux Users:  

| Distro        | Base           | Package Manager | Package Management Helper |  
|-------------|-------------|-----|-----|  
| [Ubuntu](https://www.ubuntu.com/) | [Debian](https://www.debian.org/) | [Apt](https://help.ubuntu.com/lts/serverguide/apt.html) | [Linuxbrew](http://linuxbrew.sh/) |  
| [Antergos](https://antergos.com/) | [Arch](https://www.archlinux.org/) | [pacman](https://wiki.archlinux.org/index.php/pacman) | [packer](https://dominicm.com/install-packer-on-arch-linux/) or [yaourt](https://archlinux.fr/yaourt-en) |

For Windows Users:

- [Dual boot Linux](https://www.howtogeek.com/214571/how-to-dual-boot-linux-on-your-pc/) (we can help!)

Chromebook Users:

- [Crouton](https://www.howtogeek.com/162120/how-to-install-ubuntu-linux-on-your-chromebook-with-crouton/) (or remove ChromeOS and install Linux)

For Everyone:

- Install and manage Node.js using [nvm](https://github.com/creationix/nvm).
- Install [Atom](https://atom.io/) - download the file or click "Build from source"
- Install Chrome
- [Setup SSH access to your Github account](https://help.github.com/articles/generating-an-ssh-key/)
- Atom plugins:
  - linter & linter-eslint
  - open-in-browser
  - autocomplete-paths
  - pigments
  - color-picker
- Chrome extensions:
  - JSONView
  - Google Cast
  - Postman
