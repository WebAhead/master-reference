# Style Guide for Master Reference Resources

## Contents
1. [Creating weeks](#creating-weeks)
1. [Creating resources](#creating-resources)
1. [Maintaining weeks](#maintaining-weeks)
1. [Maintaining resources](#maintaining-resources)

<hr>

## Creating weeks
Every part of a week should be designed to fulfill one more of the weekly learning outcomes and be designed in keeping with the [overall course outcomes](https://github.com/foundersandcoders/master-reference/issues/48).

Traditionally, weeks contain the following elements:
- 2-4 workshops
- 2-3 morning challenges
- 1 project
- 1 research afternoon

We have found this to be a good structure for fulfilling learning outcomes, and recommend that these elements are maintained in any newly designed weeks, but new elements will definitely be considered if good arguments can be made for them.

Each week 1 - 8 folder should contain the following files:
- [README.md](#readmemd)
- [learning-outcomes.md](#learning-outcomesmd)
- [project.md](#projectmd)
- [resources.md](#resourcesmd)

Optionally, week folders may, if applicable, also hold:
- [research-afternoon.md](#research-afternoonmd)
- [slides.md](#slidesmd)

### README.md
This should:
- begin with a link to the weeks `learning-outcomes.md`
- contain a timetable of **Day 1** - **Day 5** with links to each scheduled workshop or morning challenge

### learning-outcomes.md
Outline the expected goals of the week. They should:
- describe concepts and processes rather than specifics of a workshop
- be broken into subsections
- worded as statements that could follow _"Students are learning..."_

Example:
> How to set up a local instance of Postgres :ok_hand:

> Postgres setup :warning: _not a statement_

> How to test an app that uses a database :ok_hand:

> How to setup an environment variable for a test database :warning: _too specific to workshop_

### project.md
Projects are a chance for students to apply the knowledge they've acquired by building a web app from scratch. They should include:
- a link to the week's learning objectives
- a description of the aims of the app
- technical requirements
- user requirements in the form of user stories for weeks 1-4.
- instruction that students should create their own user stories weeks 5-8.

### research-afternoon.md
This should include:
- a descriptive heading for each topic to be researched
- a set of questions each research topic aims to answer

### resources.md
A collection of links to extra material students can use to prepare/revise the learning of the week. They should:
- be separated under the same subsections as week LO's

### slides.md
A collection of links to slides mentors have previously created. They are kept as reference as it is not nessesary for them to delivered as part of the curriculum.

<hr>

## Creating resources
* Create a repo within the `foundersandcoders` organisation
* Repo names should be prepended with `mc-` for morning-challenges and `ws-` for workshops
* Add a link to the new repo in the [resource index](https://github.com/foundersandcoders/master-reference/blob/master/curriculum-planning/resource-index.md).
* The repo should contain a README.md with:
  - learning outcomes
  - link to the CONTRIBUTING.md in master-reference
* Learning outcomes should outline what students are learning during the exercise. These can be workshop/morning-challenge specific, but should be linked to weekly LO's. Think of them as the finer details of weekly LO's, for example: `"How to set and remove cookies using headers"` or `"When to use the most effective error handling method"`
* Add a file or folder containing notes that would be useful for mentors who are delivering the workshop/morning-challenge. This can include guidance pacing, which concepts to explain in more detail, or how to guide students to solutions without giving the answers. It could also advise mentors on how to prepare for delivering the workshop.
* When writing the workshop, try to think about how many step-by-step instructions are actually needed. Sometimes we can substitute _instructions_ for _guidance_ and allow the student to work out the steps to take themselves.
* Usually, solutions to exercises should be located in the same repository. Create an appropriately named file or directory to contain these solutions (typically `solutions` or `.solutions`). Do not store solutions on a branch, as this makes maintenance of the resource more difficult.

### Slides
Slides should:
- follow the naming convention `sd-[workshopname]` or `sd-[week#]`; eg `sd-password-management` or `sd-week7`
- have a short description of what they include
- be stored in either `FAC Shared` google drive or a repo in `foundersandcoders` organisation
- have notes either on the slides or in accompanying mentor notes

<hr>

## Maintaining weeks
TBD

<hr>

## Maintaining resources

### Minor Changes
* Create a new branch from `master`
* Make your changes
* Open a pull request with an _informative description_ which _links back to an issue_ describing the reason for the change
  * Optionally, you can use keywords `fixes`, `resolves` or `closes` directly before the issue reference to auto-close the linked issue when the PR is merged

### Bigger Changes
* Sometimes when there has been an issue with a workshop or morning challenge, the root can be a mixture of issues with the material and issues with the delivery. When it comes to making changes, think about whether the workshop could be improved by updating the _mentor notes_ as well as the actual workshop. Sometimes, well thought out mentor notes (and well prepared mentors) can make lots of step-by-step instructions unnecessary.
* All of the points from `Minor Changes` apply here too

<hr>
