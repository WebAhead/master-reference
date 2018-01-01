# Style Guide for Master Reference Resources

## Contents
1. [Week Folders](#week-folders)
2. [Workshops & Morning Challenges](#workshops-amp-morning-challenges)
3. [Creation of New Resources](#creation-of-new-resources)

## Week Folders
Each week 1 - 8 folder should _only_ contain the following:
- README.md
- learning-outcomes.md
- project.md
- research-afternoon.md (if scheduled)
- resources.md
- slides.md

### Week README.md
Each week readme should:
- contain a timetable of **Day 1** - **Day 5** with links to each scheduled workshop
- begin with a link to the weeks `learning-outcomes.md`

### Week learning-outcomes.md
Week learning outcomes outline the expected goal of the week. They should:
- describe concepts and processes rather than specifics of a workshop
- be broken into subsections
- worded as statements that could follow _"Students are learning..."_

Eg.
> How to set up a local instance of Postgres :ok_hand:  
> Postgres setup :warning: _not a statement_

> How to test an app that uses a database :ok_hand:  
> How to setup an environment variable for a test database :warning: _too specific to workshop_
>

### Week Project.md
Project's are a chance for students to apply the knowledge they've acquired by building a web app from scratch. They should include:
- a link to the week's LO's
- a description of the aims of the app
- technical requirements
- usability requirements in the form of user stories for weeks 1-4. Md should state that students create their own user stories weeks 5-8.

### Week research-afternoon.md
research-afternoon.md should include:
- 4 heading for each topic to be researched
- a set of questions each research topic aims to answer

### Week resources.md
resources.md is a collection of links to extra material students can use to prepare/revise the learning of the week. They should:
- be separated under the same subsections as week LO's

### Week slides.md
slides.md is a collection of links to slides mentors have previously created. They are kept as reference as it is not nessesary for them to delivered as part of the curriculum.

Slides should:
- follow the naming convention `sd-week[no]-[workshopname]` eg `sd-week7-ws-password-management`
- have a short description of what they include
- be stored in either `FAC Shared` google drive or a repo in `foundersandcoders` organisation 
- be self explanatory by either containing detailing on slides or mentor notes

## Workshops & Morning Challenges
Repo's names should be prepended with:
- ws- for workshops
- mc- for morning challenges

Each workshop/morning challenge should contain a README.md with:
- author of workshop (reference to maintainers should be removed)
- learning outcomes
- link to the CONTRIBUTING.md in master-reference

### Workshop/Morning Challenge Learning Outcomes
Workshop/Morning Challenge learning outcomes should outline what students are learning during the exercise. These can be workshop specific, but should be linked to weekly LO's. Think of them as the finer details of weekly LO's.
eg
> How to set and remove cookies using headers

> When to use the most effective error handling method


## Creation of New Resources
When making a new workshop/morning challenge:
1. Create a new repo within the foundersandcoders GitHub organisation
2. Follow the repo naming convention - prepend the name with:
- ws- for workshops
- mc- for morning challenges
- sd- for repo based slides

3. Make a PR to the master-reference, editing the resource index to add a link to your repo & assign MRM/WF
