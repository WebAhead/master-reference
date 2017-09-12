## General
Piotr:
+ Haven't been here on Monday. Experience has been really positive.
+ Reviewed 2 apps today. Nice full stack apps. Seems like the cohort really got it.
+ Wasn't here for Monday afternoon but definitely sounds like the weaker part of the week.

Akin:
+ We planned this week with the thought process that we would be physically there. Didn't think about Nazareth having to deliver it.
+ Over the course of the week, we've gone over stuff and changed it.
+ This is the first time we've done express in the curriculum so we only had each other to rely on, in terms of what the content should be (no prior material / experience of a cohort to base decisions on). Next time, they should be heavily encouraged to hear each other's feedback of how they found the week & feed each other's experience (and the opinions of the rest of their cohort) back into curriculum planning.

Jen:
+ Problems due to material being heavily reliant on the person writing it being the same person who delivers it. FAC needs to make it much clearer that workshop designers are responsible for ensuring that this is repeatable across campuses.
+ I consider it severely problematic if everything in this week is delivered via code-alongs. The node/express code along makes sense, because students just need to know how to implement the basic setup. But students should know how to write tests by this point, so they can have more of a "guided discovery"-style workshop on that (if we were to put a testing workshop in here, as was the original plan)
+ Maybe we should introduce handlebars earlier in the course? It's great for students to struggle passing info from the front to the back end without a templating engine, so they feel the value of it by the time it is introduced. But I don't think they need to wait until week 8 for it. Handlebars is pretty simple & I reckon it could easily be introduced via a well-written morning challenge.

### [Introduction to express](https://github.com/foundersandcoders/introduction-to-express)
Jen:
+ Readme is really good. But not convinced that the Q&A with the cohort works. Felt like the students were just being asked to read sections of the file back to mentors & didn't necessarily learn anything from this, or even necessarily understand the content that they were parroting back.

## [Express code-along](https://github.com/foundersandcoders/express-workshop)
Akin:
+ The got a little lost with the router bit
+ Every step before this was really small and then modularisation was big.

Akin:
+ Inspired by the fact that code alongs in node week were done so well.

Jen:
+ Layout of code-along absolutely perfect. Best pattern so far.
+ Moving files needs to be much slower. Modularisation section just needs to be divided into a few separate steps.
+ Akin did an amazing job! Went through every step super clearly. I was observing and writing notes in comments as I went. Would be good to push this up at some point, because they could act as mentor notes.
+ Mentors need to come to an agreement about what should be in a workshop and what shouldn't so they present a united front to students. There were a few occasions where the person delivering and the person writing the workshop clearly had different opinions about what the content should be - easily ironed out through user testing each other's material in advance.

### [Handlebars workshop](https://github.com/foundersandcoders/express-handlebars-workshop)
Akin:
+ Second workshop went really rough.

Piotr:
+ Needs to be a code-along.

Akin:
+ They're thinking of changing it.
+ Future mentors need to be across the material.
+ As it currently stands, it's someone else's codebase.

Piotr:
+ Monday afternoon is a fullstack app, like what they're going to produce (except without a database).

Akin:
+ Comes down to the sheer size of it.
+ Especially if the person delivering it hasn't seen the pattern of how it all flows through together.

Piotr:
+ They struggled to design the architecture of their apps.

Akin:
+ It was the balance of seeing a full-fledged thing - as an introduction that's quite hard.
+ But the reverse is that you only get a brief intro like FAC10, just a couple of partials.
+ Need to make it clear that the

Akin:
+ Rough on boarding but I don't know how we would introduce it in a better way.

Piotr:
+ Struggled on Monday but all understood it during project times.

Jen:
+ Really doesn't need to be a code along. Problems were a combination of jumping into a huge codebase with little introduction & the instructions for what students were expected to do being very opaque.
+ Handlebars really isn't particularly complex. All students need is a very clear high level understand of what a templating engine does for you, a clear description of how that relates to the file structure that it requires of you & then tasks that point students to the documentation. After they've got the basics, you could actually set them pretty open ended, fun tasks that require some creativity e.g. writing your own helper functions.
+ Biggest problem here is tying the introduction of handlebars to the introduction to express

### Handlebars workshop vs morning challenge
Piotr:
+ FAC11 feedback - switch handlebars workshop & challenge?

Akin:
+ Understand what they mean but it wouldn't work. One is an intro to handlebars, the other is assuming that you know it, now go use it.
+ Code-along instead with mentor notes
+ Reason they liked morning challenge was that it was a nice smaller step.
+ Scope should be smaller

Piotr:
+ Crucial thing is a mentor completely understanding what they're doing

## [Handlebars morning challenge](https://github.com/foundersandcoders/express-handlebars-challenge)
Piotr:
+ Did half an hour recap before morning challenge

Akin:
+ Style it a little :smile:. Boring if it's a wall of text.

Jen:
+ Piotr's explanation of handlebars during that morning was excellent! If we can distill that knowledge into a peer-led workshop, that would be the ideal.

## [Testing workshop](https://github.com/foundersandcoders/express-and-testing-workshop)
Akin:
+ Tape & supertest
  + Big problem was that tape and supertest are not a common pattern. It's a constraint that I had, so I had to use them. There are 4 tutorials anywhere that test with those.
  + Future: look into other frameworks.
  + Whole reason we switched to express was you'll be able to google properly.
  + Mocha and chai are by far the most common.
  + I've added example to readme of how tape & supertest should work together

+ Linux issue - authentication when running `createdb`

+ Clarification in readme
  + I made some assumptions about how comfortable they'd be with postman.
  + Using supertest, I said go to the docs. Now I've put an example block in there.
  + Been more explicit in the readme about what needs to go in the server file.
  + That the objective is integration testing

Jen:
+ Primary issue with this workshop is clarity of instructions. Without these clearly written, it was heavily reliant on Akin to explain verbally.

## [Research afternoons](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-8/research-afternoon.md)
Akin:
+ Take fetch and promises out. They should be taught it via a workshop.
+ I definitely spent a long while with one group
+ If the group who does it doesn't come back with a very clear explanation, they can provide each other with a lot of misinformation.
+ I fed them a lot of links.
+ The moment I saw their sychronous functions wrapped in promises, I realised it had gone wrong.
+ Added more confusion than helpfulness.

+ Middleware group gave back exatly what I showed them.

+ Templating & server-side rendering - did a really good job on it.

+ Session one - I did say don't worry about implementing it.
  + Go to the docs, find the example in the docs & show people that.

+ Needed to know all of the last 3 things.

## [Projects](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-8/project.md)
Akin:
+ 95% of problems were caused by SQL syntax errors
+ SQL lint.
+ Spent a solid hour with passport. Some middleware is a much bigger rabbit hole than others.
+ If I had known at any point that they were intending to use it, I would have suggested that they don't.
+ There were questions about the structuring of the app. Whether they fit into models or controllers.
+ MVC is an idea, you should understand that and not be prescriptive about it. Otherwise, you'll get them raising issues on each other's saying it's wrong.
+ So long as it's logical, that's fine.

Jen:
+ Perfect to make this project open ended, because express / handlebars doesn't enable students to create new/different features (e.g. authentication week).
+ A framework is a brilliant way to round off the 8 weeks! Students are free to focus on whatever they want to learn technologically.

## Presentations
+ Most teams didn't really seem to know what to present
+ express-session: looked in the docs & couldn't figure out what the initial options were for
