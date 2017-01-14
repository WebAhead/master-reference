## Week 11 - Learn Something New, Build Something Simple and Get Feedback from Real (_Potential_) Users

> For mentors to insert the schedule for the week including specific timelines for each day + links to the
workshops & morning challenges to be used. Plus a menu to each item of the folder. [![contributions welcome](https://img.shields.io/badge/help-wanted-brightgreen.svg?style=flat)](https://github.com/foundersandcoders/master-reference/issues)

_So far_ in the "course" we have not "_imposed_" or even "_suggested_" a particular
programming paradigm for learning or building the mini-projects.

This was _deliberate_ to not "_overwhelm_" anyone, but we
have seen with `F&C9` that _actually_ everyone grasped Functional Programming quite quickly.

The ***objective*** of this week is to ***learn Functional Programming***
(_for those who don't already know it_) by **making** something _fun & useful_ and testing it with real people!

> **Note**: there is still an **Open Question/Discussion** around ***when***
Functional programming could/should be introduced:
https://github.com/foundersandcoders/master-reference/issues/62 `discuss` `help-wanted`  

## Day 1 - Functional Programming (Refresher)


+ Why are the multiple paradigms for programming. http://cs.lmu.edu/~ray/notes/paradigms/
  + Why is OOP so Popular (_dominant_)?
  + (_if FP is simpler_) Why doesn't _everyone_ do Functional Programming...?
+ _What_ is functional programming?
  + _What_ are the ***key benefits***?
    + Functions do only one thing. but can be chained in "pipelines"
    to form more advanced functionality.
    + Avoid (_or eliminate_) Side-effects.
    + Transform data (_don't mutate it!_)
    + State is immutable and thus predictable/testable
+ How? Learn functional programming by following The "**Mostly Adequate Guide**":
  https://github.com/MostlyAdequate/mostly-adequate-guide

Tip: you can learn quite a lot by watching the videos in "Fun Fun Function":

[![funfunfunction-part-1](https://cloud.githubusercontent.com/assets/194400/21855184/65a3cfc4-d815-11e6-9098-6cf9efab5176.png)](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84 "Click to Watch!")

Make sure you _try_ (_practice_) all the things presented in the videos!


## Day 2 - Some theory and coding practice get the neurons firing.

+ Attempt to complete the "Game of Life" (**GoL**) coding exercise:
http://coderetreat.org/gol in JavaScript.
  + make sure everyone _understands_ GoL
  even if they resort to "_borrowing_" the solution from [Google](https://github.com/pmav/game-of-life/).
  Its "_better_" if people _solve_ the challenge from scratch,
  but it's fine to share/walk-through the "_solution_" with the group on
  the morning of Day 3, to ensure everyone is up-to-speed.
  (_then if people want to re-implement it in their own time
    to solidify learning, they can!_)

> **Note**: the Game of Life exercises could be moved to a different day
earlier in the course. The purpose of doing them here is for people
to have a set of solutions they can refer to when solving the GoL
challenges in a _different programming language_ later on...

## Day 3 - Client-side State Management in-a-day!

And now for something a bit more practical...

+ _Why_ is building a client-side application a good/bad idea?
+ _Why_ (_would I want to_) "Manage" Client-side State?
(_get people to list the pros & cons.
  if people can't think of the "cons" gently advise them to investigate "Progressive Enhancement"_)

![learn-redux-header](https://cloud.githubusercontent.com/assets/194400/12328626/12f025de-bad4-11e5-9ebd-c0994b8f2f24.png)

+ Learn Redux Following the "Official" Redux Videos see: https://github.com/dwyl/learn-redux#how


## Day 4 - Build Something Basic to _Exercise_ your Skills

Yesterday you learned enough Redux to be _dangerous_!
If you followed Dan Abramov's videos you will have made a _simple_ todo list
using Redux and React...

Your mission today is to make something a bit more _useful_ ... (_what ever that means to you!_)

![todo list](http://www.productivity501.com/wp-content/uploads/2006/11/todo-list.jpeg)

+ Build a **Todo List Application** based on your **`Redux` Knowledge**
+ You may chose to write your "views" in _plain_ JavaScript or using a "view library".
+ Ensure you get _basic_ todo-list with ***Tests*** built
+ `.then` think of another feature you `"as a user"` would like to have,
and _sketch_ ***without writing any code***!

> Note: if you _already_ use a todo list app for your personal task management e.g: ["Things"](https://culturedcode.com/things/)
or [Todoist](https://en.todoist.com/)
or [Clear](https://www.realmacsoftware.com/clear/)
or [Wunderlist](https://www.wunderlist.com/), etc. that's _great_! think of your _favourite_ feature (_the one you couldn't live without_) and describe it!
Or... if there is a feature you _wish_ it had, but you're unable to add
to the commercial product/app  (_because it's closed source!_) describe that!


Yes, we know that Todo lists are quite "_generic_",
the _reason_ why that's a _good_ thing is if you get
_stuck_ someone can help you fairly quickly.

If you manage to get yours done _fast_ you can get started on "Bonus Level" (_see below_)

## Day 5 - Grab Your Clip Boards it's Customer Development Day! Where you go out and do UX-Testing with Real People!!

> Ever wondered why Founders & Coders has the word "_Founders_" in it...?

[![the-lean-approach-steve-blank](https://cloud.githubusercontent.com/assets/194400/21869207/6069c322-d84e-11e6-9292-6f5e262d88e7.png)](https://www.youtube.com/watch?v=sOkmAbZNTik&list=PLkplm4nc4fY9SXanjrWQuRCi0-aw6sh5e&index=2)


Today you will _finally_ get _out_ of the classroom and speak to real people!
This is _by far_ the most "_challenging_" day of the course,
so be prepared to be _way_ out of your comfort zone!

### This Exercise is to be done in ***pairs***.

+ Step 1: Formulate a *hypothesis* or *question* you want to test.
(_this can be done at the end of day 4 if people want to get ahead_)
+ Step 2: Decide who the target end-user is and write a "_persona_" for them.
+ Step 3: Sketch the idea using the "Crazy 8's" method you learned with [**Mr. Fox**](https://github.com/harrygfox)!
+ Step 4: UX Test with _Real_ (_Potential_) Users/People!
  + [ ] Prepare your interview questions before hand (_if you need any help ask_!)
  + [ ] Go to Campus London: https://www.campus.co/london
  (Tip: Aim to arrive at 08:50 so you can get your pass an grab a seat before they run out of space! Go downstairs to the cafe and find a spot near the bar where you can stand and wait for people to appear...)
  + [ ] Scope out what's going on in the space. e.g: are there people who look "_social_" (_hint: it's **not** the ones wearing noise-cancelling-headphones!_)?
  + [ ] **Start** a stopwatch/timer as you are walking up to the person you are attempting to interview. (_so you can keep track of time! duh! remember to stop it when your interview ends!_)
  + [ ] **Approach** your "_target_" interviewee! (if you are new to "user research" this is the "most _difficult_" part. But you don't _need_ to "_fear_" approaching "_strangers_", the worst that can happen is they say "_no_" or "_I'm busy_"...)
  + [ ] **Introduce yourself** with a greeting and state our aim succinctly  e.g: "Hi, I'm `Alex`. I'm a web app development student and you are researching features people find useful and only need a minute of your time." (_keep it deliberately vague/broad so you can move onto your next question... subtly nod your head to get their agreement after your greeting._)
  + [ ] **Ask** them if they don't mind you ***recording*** the conversation on your phone so that you don't have to write everything down. (_people will usually say "yes"... but if they don't that's fine, just make short notes of their answers._)
  + [ ] **Ask** your ***research questions*** and record the answers using the voice recorder on your phone. (_this is why you must to do this in pairs, one person records while the other person conducts the interview_)
  + [ ] Don't be "_afraid_" of going off on a "_tangent_" if you think you will get some _valuable_ and relevant insight about your interviewees and their usage of apps that are related to what you are building. e.g. asking them what their most used app is besides "Social Media" apps.
  + [ ] ***Finally*** give your "interviewees" a sharpie and a piece of paper and ask them to ***sketch their thoughts*** for the "_feature_". (_Joke with them that it doesn't have to be a work of art..._)
  + [ ] **Write-up**! go back to your "desk" and write up your findings.

+ Step 5: Write-up your findings with sketches, sound-bites of what people said.
+ Step 6: present your findings to the cohort/group back at F&C!

> Note: each interview should only last a couple of minutes. and you are aiming to get 20 of them! _Don't worry if you get fewer than this, and don't get disheartened if people dismiss your question ... just wait a few mins for someone else you can approach. (_make a note of what the "rejection/excuse" was!_)
If you find that you have "**exhausted the supply**" of interviewees you can always do the lunch-time-queue trick and walk over to [Whitecross Street Food Market](https://www.tripadvisor.co.uk/Attraction_Review-g186338-d2094743-Reviews-Whitecross_Street_Market-London_England.html) pick a popular food stall (with a long queue) and "target" the punters who are waiting for to be served! it's friday so it will be busy! make a joke about how good the food smells and how waiting is such a pain, but then dive into your interview!!_
