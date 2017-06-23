# Minutes from 2017 (1) Curriculum Meeting (30/05/17)

**Facilitator:** @bradreeder

**Time Keeper:** @alexis-l8

**Mood Monitor:**

**Record Keeper:** @eliascodes, @smarthutza, @ZooeyMiller

**Vote Taker:** @Samatar26

**Tech (hangouts):** @des-des

**Tech (screencast & edit proposals):** @des-des

## Attendance and voting
[Voting](https://docs.google.com/spreadsheets/d/1_pqo-2Gzzba16rJYretpgZpgUx1GgkEv2-s4NqhzgHo/edit#gid=2014897855)

---

## Agenda

The agenda has been ordered by:
 + proposed changes to the [ideal week structure](../../coursebook/general/week-schedule.md)
 + proposed changes to [curriculum overview](../../coursebook/general/curriculum-overview.md)

Changes to each particular week are usually left to [the planning of that week](../planning-weeks.md), but may be discussed if there is time.

1. [Research afternoons](#research-afternoons)
2. [Lightning Talks from your Cohort](#lightning-talks-from-your-cohort)
3. [Teach a lot more HTML/CSS](#teach-a-lot-more-html-css)
4. [Hapi vs. Express](#hapi-vs-express)
5. [Redistribute content of week 8](#redistribute-content-of-week-8)
6. [React](#react)
7. [Bundling Workshop](#front-end-engineering-content)

---

## Research afternoons
[#261](https://github.com/foundersandcoders/master-reference/issues/261)

**Record Keeper:** @ZooeyMiller

**Status:** blocked

**Minutes:**
sohil communicates research afternoon is there so that each group condenses 4 hrs of research into 30 mins so each other group just has to read 30 mins of info

jen brings up scrapping research afternoon entirely rather than reformulating in terms of this proposal.

eoin suggests there being 'spike mornings' directly before projects where people in groups do research on each project.

sohil asks for clarification on what a spike is and how it will happen during 'spike mornings' (who would do it, how many etc etc)

zooey clarifies a part of this proposal was also taking out irrelevant research/spike topics

eoin suggests pulling out main things that are most important from research afternoon fro spike mornings.

oli concurs that some topics should be broken out into proper workshops and some should be left as spikes/research

jen suggests that rebranding research afternoon as spike afternoon is a bad choice

jessica suggests that optional spikes are not a good idea because people can often forget.

antonio suggests that good readmes on projects are as good as if not better that research afternoons

there was a lot of clarification of what we were voting on

straw polling:
* modify research afternoons as proposed in this issue
* scrap research afternoon, add extra time to start of projects
* scrap research afternoon, replace with a workshop/tbd.

Clarification of proposal was scrapping vs. keeping, and not what would take up the time left by it not being there

1 block

conversation diverged to process

**Action point(s):**
+ Research afternoons will not be scrapped for this curriculum. A task group needs to form to suggest how research afternoons should be approached for this curriculum.

---

## Lightning Talks from your Cohort
[#254](https://github.com/foundersandcoders/master-reference/issues/254)  

**Record Keeper:** @ZooeyMiller

**Status:**  was not taken to vote

**Minutes:**
(I forgot to take minutes sorry)

general conversation was clarification of whether it would be mandatory vs. set some time aside

then clarification about what time and particularities of how this would happen.
Time suggested:
* monday morning
* thursday afternoon
* tuesday morning 15 mins
* post 6pm or lunch time.

straw poll:
* happen in curriculum hrs - 5 ldn
* out of curriculum hrs - 9 ldn 7naz
* not at all

time is tight and we have decided not to vote on this.

**Action point(s):**
+ We form a working group and we sit down and find a solution  

## Teach a lot more HTML/CSS
[#258](https://github.com/foundersandcoders/master-reference/issues/258)  

**Record Keeper:** @eliascodes

**Status:**  PASSED.

**Minutes:**
Clarification: workshops would be only an hour or so not a full half day

Comment: Could pair with project specs to reinforce it.

Reservation: Where are we going to find time for it?

Can find time for it early in the weeks, plus could increase the number of morning challenges throughout the week.

Bigger problem is that someone needs to make them, and someone needs to teach them. Not everyone will be comfortable.

But that’s good because you learn through teaching.

Generally, we want to create an environment where it’s OK to say “I don’t know, lets find out together”.

JS: Have quite a lot of morning challenges already, especially in the first half of the course. We are talking about taking out stuff that exists.

Ollie: A morning challenge wouldn’t necessarily be the right fit for all concepts, some need to be taught. (But still an hour slot)

Zooey: FAC is inherently chaotic, time allocated as needed, so timings needn’t be so exact. The things that are being proposed to be taught are vital, so they should be in the course.

Elias: Maybe the last few hours of the projects would be a good time to focus on CSS/HTML

Jessica: Disagree, because the point is that we don’t learn CSS/HTML best practise. Doing it in projects just reinforces bad practise or we end up not doing it.

Martha: What about dedicating 1 hour immediately after lunch on Tuesdays (compressing research days)?

Brad: Can we delegate the timing decision to the people running individual weeks? They just have the responsibility to find an hour at some point in the week?

Jen: Clarification: is it mandatory to find an hour?

Yes.

Jen: Who has the autonomy to decide when the hour is? What happens if there is disagreement?

Brad: Discussion can continue online via PRs and issues.

Eoin: Need to update the contributing file.

Gone voting…

PASSED.


**Action point(s):**
* each set of mentors, when designing the overview of their week, to find space for a 1 hour HTML/CSS workshop

---

## Hapi vs. Express
[#251](https://github.com/foundersandcoders/master-reference/issues/251)  

**Record Keeper:** @eliascodes

**Status:** PASSED

**Minutes:**
Eran Hammer asking for money now because can’t maintain it.
Eoin:  His patreon just doubled

Zooey: Is there anyone who is willing to completely reformulate the course post-hapi? Everything relies on it after it’s introduced? Basically is anyone going to do this?

Elias: If auth is in vanilla, reduces burden.

Can do 1-week of hapi last.

Should limit the discussion during this issue to what we want to use, and leave whether it can be done to the people who are responsible for the week

Antonio: Would be relatively easy to write new workshop for express since there are so many more resources.

Alex: Goes beyond how much effort to make the week, it’s more about how much documentation there is to support students throughout the course and beyond it.

Jen: Should we have this discussion now or after the auth week?

Finn: Regardless of the other proposal, we’ll still have one framework week, so important to know what should go into that week.

Zooey: The decision can stand, but the time horizon for actioning it might not be in the next cohort.

Olli: What are the reasons for Hapi?

Eoin: More security by default that Express. Important for MVPs, means fewer things can go wrong.

Ronan: Good to know so there are things that we can include in vanilla node weeks

Olli: So we don’t trust ourselves, or its too hard?

Eoin: There’s no “secure”/“not secure”, but “less secure”/“more secure”

Ines: Security, Fully, Open source, Battle tested, Great community, 100% coverage.

Olli: Beginner community good? Not in my experience. Really hard. Loads of people use express so imagine it’s also battle tested

Eoin: Bring up Ronan’s point of Hapi being a config based framework. Good for someone who understands the domain, but not so good for beginners, because you have to know what flags to look for.

Edgar: my concerns are about practicality, but understand that’s separate discussion.

Ronan: Dislike hapi vs express framing. What we’re doing is teaching auth and templating in Hapi.

Zoey: As a framework free course, why do we use a framework at all?

Olli: Idea is to be able to build a full-stack app. No-one really rolls their own node server.

Gone voting…

PASSED



**Action point(s):**
* Mentors for the new week 8 are to assess whether they think that writing this week from scratch is do-able in the timeframe.
* Mentors are encouraged to ask for help from the alumni network
* If mentors think it is too much of a stretch, revert to using hapi week 1 materials

---

## Redistribute content of week 8
[#263](https://github.com/foundersandcoders/master-reference/issues/263)

**Record Keeper:** @eliascodes

**Status:** Passed

**Minutes:**

Eoin can help with developing authentication workshops.

Ronan would also support a vanilla Node authentication workshop.

Setting up a cookie in vanilla Node would make students have a better understanding of how it all works; hapi-auth-cookie makes everything seem too abstract

Week 5: server side validation  
Week 6: stays the same  
Week 7: authentication  
Week 8: server side frame framework and templating  

**Action point(s):**

+ Authentication week resources to be developed by alumni (with the support of FAC10)
+ Server side validation workshop for week 5 to be developed by FAC10.

---

## React
[#259](https://github.com/foundersandcoders/master-reference/issues/259)

**Record Keeper:** @smarthutza

**Status:** Not taken to vote

**Minutes:**
The first 8 weeks are too packed. There would be no room for React. So perhaps it should be week 9 or 10.

A single day React workshop as a small introduction (similar to the chatbot workshop) would make people understand there is a different way of writing front end code.

One day workshop would not be enough. An introduction is not interesting enough and it does not cover all the necessary things to learn.

An optional workshop is a bad idea. Whoever wants to learn React should use the online tutorials.
Perhaps a design pattern workshop would be better if we make the IP Cortex workshop much shorter.

Action point(s):
+ Dwyl workshop about Elm architecture in JS should be moved into week 10
+ FAC10 should focus on developing the existing week 1-8 curriculum
+ We form a working group and we sit down and find a solution  

---

## Bundling Workshop
[#276](https://github.com/foundersandcoders/master-reference/issues/276)

**Record Keeper:** @smarthutza

**Status:** Passed

**Minutes:**

Everybody agrees that our course wasn’t very front end oriented. Everybody agrees that the curriculum should contain more front end workshops/morning challenges.

Action point(s):

+ Ronan will create a half a day workshop
+ We will discuss where exactly to insert it, perhaps in week 10.
