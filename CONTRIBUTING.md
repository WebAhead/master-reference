Inspired by [dwyl's contribution workflow](https://www.github.com/dwyl/contributing).

The following people are available to review pull requests: [@bradreeder](https://github.com/bradreeder), [@des-des](https://github.com/des-des), [@jsms90](https://github.com/jsms90), [@eliascodes](https://github.com/eliascodes), [@sofer](https://github.com/sofer), [@iteles](https://github.com/iteles) or [@nelsonic](https://github.com/nelsonic).

# Contribution guidelines

## Before starting work

 1. Search this repo's [issues](https://www.github.com/foundersandcoders/master-reference/issues) to see if an issue exists for the problem you are solving.
 2. If the issue does not exist, create it.
 3. If your new issue relates to any others, reference those issues in the body. This enables others to follow the history of the topic.
 4. Assign [the appropriate label](#labels).
 5. Indicate on the issue that you would like to take it on. Assign one of the reviewers above if you need a response.
 6. Once you are sure of what you need to do and that it is needed, assign yourself to the issue.
 7. Clone, and create a new branch for your work

### Labels

`week-<name-here>` - if your new issue relates to a specific week of the course (e.g. `week-toolkit`)
`week-epic` - you are conducting a planning phase which encompass many changes to a particular week
`bug` - something in this repo is broken (e.g. a link)
`discuss` - you need the community's decision before you are able to complete any work
`question` - you're not actually sure whether this is any issue or not and would like confirmation
`help wanted` - this is a big task and you would like some help to complete it

## Commits

Remember to keep your commits granular and their messages short but descriptive.

**It is important that you reference an issue in each commit.**

### Multiline messages

You will want to space your commit messages over more than one line. Commit without the `-m` to bring up a text editor in which to write the commit message.

You may want to configure git to use your preferred text editor, if you do not like the default. ie. [Set atom to be default commit message editor](https://help.github.com/articles/associating-text-editors-with-git/#using-atom-as-your-editor).

The message should have the format

replace square braces
```md
short description under 50 chars.
[newline]
more detailed description (may be bullet points)
[newline]
related #[issue number]
```
or
```md
short description under 50 chars.
[newline]
related #[issue number]
```

## Pull Requests

Once you have finished your work, push up your branch and make a pull request. Make sure it has the following

  1. A good title
  2. Description, with detail of everything in the pull.
  3. Reference to any/all related issues in description.
  4. Assignees, assign between two and three of the designated maintainers.

A pull request should be as small as possible, this makes the review process fast and easy.

## Instructions for maintainers
Once a pull request has been approved by two maintainers it can be merged. In time critical situations, one approval may suffice, as long a the pull request is small and is not suggesting any major change.

# Thank you!

P.S. please star this repo.
