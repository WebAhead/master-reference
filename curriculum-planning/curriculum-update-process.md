# Curriculum Planning Process

## Contents

1. [Why](#why)
1. [What](#what)
1. [How](#how)
1. [Week by week schedule](#week-by-week-schedule)
1. [Pros and Cons](#pros-and-cons)
1. [Limits on power](#limits-on-power)
1. [Historical context](#historical-context)
1. [TLDR](#tldr)

## Why

The curriculum planning process needs to be iterated based on lessons learned from the last curriculum planning session.

The newly introduced format of week working groups (WWG) led by week facilitators (WF) had mixed success. Feedback can be seen in the minutes of the [review meeting](https://github.com/foundersandcoders/master-reference/issues/735).

A more general issue raised was around a lack of clarity over who had ultimate responsibility over maintaining the coherence, direction and tone of the master-reference (MR), between the WF, course facilitators (CF) and master-reference maintainers (MRM), since all had been involved in decision making and merging of pull requests to some degree.

It is hoped a clearly defined process with clearer roles and responsibilities will benefit the curriculum planning process and better engage students.

## What

The curriculum working group propose the following:

1. Creation of a statement of overall curriculum outcomes/mission statement/philosophy (see #48)
2. Review week learning outcomes in light of (1) (see #691 and #692)
3. Creation of a style guide for the creation of curriculum resources to reflect (1)
4. Clarification of the roles of Students, CF, WF, MRM and the community with respect to curriculum planning and maintenance
5. Seek _active_ master-reference maintainers
6. Change the WF role to be reactive. Most weeks will not have one; only when there are changes that require closer oversight or coordination should a WF be sought
7. Update contributing guides in MR and other curriculum repos

## How

Elaborating on (4), the proposed breakdown of responsibilities is:

### Community

#### Immediate term

- Approve the overall curriculum outcomes/mission statement/philosophy (1)
- Declare interest in master-reference maintainer and week facilitator roles (5)
- Creation of a style guide reflecting (1) (3)

### Master-reference Maintainers

#### Immediate term

- Bring a proposal on the overall curriculum outcomes/mission statement/philosophy to the community (1)
- Review and update weekly learning outcomes as a result (2)

#### Recurring

- Once per cohort:

  - review curriculum feedback and course learning outcomes and generate reccommendations for changes, split into major/minor changes
  - Major changes should ideally be overseen by an alumnus (this is essentially the extent of the WFs new role)

- Regularly
  - Review & merge pull requests to _MR and all curriculum resources_ ensuring the quality and coherence of the resources

### Course Facilitators

#### Recurring

- Weekly
  - Facilitate retrospective and encourage honest feedback on the master reference course materials. Keep and upload minutes to city-specific repo.
- Once per cohort:
  - Collate cohort's feedback on the curriculum and make available to the MRM for their review session

### Week Facilitators

Don't exist formally but alumni can be called on to serve in this role temporarily by MRM if there are changes to be made which require some level of oversight and coordination.

MRM can serve as week facilitators as a last resort.

### Students

#### Recurring

- Weekly
  - Provide verbal feedback on the resources used that week, while the experience is fresh in their minds.
- Once per cohort
  - Prepare feedback on one week that they are preparing to mentor
  - Raise PRs for any minor changes they identify

## Resource maintainer

The notion of a _"resource maintainer"_, where each curriculum resource would be maintained by one alumnus, is being retired. MRM will effectively be maintainers of every curriculum resource by default.

<hr>

## Week by week schedule

### Rough idea, adaptable to needs of each campus/CF

#### Each week

| Students                                                               | Course facilitators                                                                                                                                                        | MRM                      | Week Facilitator | Community                                    |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------- | -------------------------------------------- |
| Give any relevant feedback on master reference in weekly retrospective | Facilitate weekly retrospective and encourage honest feedback. Make sure minutes are recorded in city-specific organisation and raise any urgent issues to MRM if required | Review any issues raised | nothing          | Review issues and give feedback if they want |

#### Week 14

| Students                                                                                                                                                                                                                               | Course facilitators                           | MRM           | Week Facilitator                                                                                      | Community                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Get into the week groups on the weeks they plan to mentor. Review material more closely for smaller issues (e.g, typos, general copy of a workshop, fixing bugs). Add to a week issue about these problems. Begin trying to solve them | Find time for students to do this (3-6 hours) | Review issues | Review their week issue, just check if there are any big changes that should be flagged up to the MRM | Review the issue and give feedback if they want. |

#### Week 15-16

| students                                                        | Course facilitators                                                                                                     | MRM                                                                                                                                                                                                                               | WF                                                         | Community                                                                   |
| --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------- |
| Raise issues to begin discussion of major changes (if required) | Triage feedback raised in week issues and meet with mentor pairs to discuss required changes and whether minor or major | Should have feedback from all campuses, MRM's should meet and discuss them. Feedback to the community recommend actions that need to be taken (having considered each campus, any community input and also the learning outcomes) | Review pull requests, assign MRM for merge if all is good. | Review the big issue from MRM's, volunteer to make any changes they want to |

#### Week 17

| students                                                                                                                                                                                                                                                                     | Course facilitators                                                                                                 | MRM                                                       | WF                                                         | Community                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------- |
| Raise PRs for minor changes to their week. If they want to they start making major changes (potentially they may already have started it if it was their suggestion). If some alumni has volunteered, they should be aware as they will be teaching it in the next iteration | Make sure students are following up on changes they wanted to see. Escalate PRs or issues that still need attention | Be aware of what changes are going ahead, and what aren't | Review pull requests, assign MRM for merge if all is good. | Any alumni can review PR's if they want to. |

## Pros and Cons

### Pros

- Retain community oversight of the whole course
- MR maintainers are tasked with ensuring the overall coherence of the course (missing from FACN/G2/11 round)
- It is clear who has the final say on what goes into the curriculum (the maintainers, who should be speaking for the community (studentss & alumni))
- It removes the pressure on WF's and makes it less burdensome, which could hopefully mean greater community participation.
- Allows space for bigger changes to the curriculum to happen (missing/incohorent for FAC11/N2/G3)
- No one has to chase the up for changes to happen. All proposals are recommendations. It's up to the whole community (mostly the students who will be teaching it) to make those changes. If they don't happen, it doesn't matter.

### Cons

- MRM have a lot of work, and, potentially power.
  - Don't think this will be an issue see below
  - maybe a lot of work, will see how it pans out
- Time constraints, co-ordinating campuses
  - This is always going to be an issue. Need to ensure students are looking at what other students in their WWG are saying (on gitter and through issues)
  - Changes don't _have_ to happen. Will have same (softish) deadline for changes (4 weeks before first delivery, apart from the first few weeks off the course).
- How this fits into campus divergence
  - Unsure, this becomes a question about the philosophy of the master reference (#591)

## Limits on power

MRM, ultimately, are servants of the community and as such their power should be both limited and accountable.

MRM are not empowered to drive any changes they see fit. All reccommendations they make must come about as a result of one or more of:

- Issues with the current curriculum resources identified by _students_ or _current CFs_.
- Identifying shortcomings in the way the course outcomes are embodied in the weekly learning outcomes and/or the curriculum resources. This is a matter of interpretation that is entrusted to MRM, but should be based on curriculum feedback.

> _(How are MRM accountable to the community??)_

This will be documented in a role description for the MRM.

## Historical Context

- FAC0 - 9 had no master reference, each week was taught with mostly non-FAC material chosen by mentors each week - was no real fixed structure
- FAC9 students built the master reference, adding structure. This was necessary due to new campuses and the previous structure being somewhat unsustainable for that
- FAC10/N/G1 were the first to be taught off the master reference
- After these cohorts, curriculum planning involved each cohort going through the MR and coming up with suggested changes. Each change was then voted on by the entire community in a meeting
- This worked to an extent but took a lot of time out of the curriculum and there was no real process for how changes might be affected - mostly fell to FAC10 students making a lot of (excellent) new material.
- For FAC11/N/G2 curriculum planning, the idea of week facilitators was introduced, each week would have a working group consisting of alumni and students from each campus
- Again, worked to some extent, workload was spread out more easily, small changes were able to happen quicker
- However, overview of the entire MR was lost, people were only really aware/could affect changes in their on week. Also responsibility for the changes was unclear, some week facilitators (alumni) being unsure of their role.
- As of FAC14/15 it seems that there is less need for significant revisions of the coursebook to be made for the next iteration, and so less time is required of the cohort (and more student time is now being spent on business development / client workshops). While it makes sense for the cohort to suggest major changes they consider appropriate, major changes require more oversight and are more likely now to come from a top-down review of the curriculum than to be made after each iteration.

## TLDR

Basically proposing something like the following:
![[flow chart]](https://files.gitter.im/eliascodes/HGin/curriculum-planning.png)
