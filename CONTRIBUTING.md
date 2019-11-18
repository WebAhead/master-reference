Inspired by [dwyl's contribution workflow](https://www.github.com/dwyl/contributing).

# Contribution guidelines

- [Before starting work](#before-starting-work)
  - [Size of change](#size-of-change)
  - [Labels](#labels)
- [Starting work](#starting-work)
  - [Branches](#branches)
  - [Commits](#commits)
  - [Pull requests](#pull-requests)
- [Instructions for maintainers](#instructions-for-maintainers)

## Before starting work

1. Decide whether your contribution will be a [tiny, minor, or major change](#tiny-vs-minor-vs-major-changes).

- If the change is tiny, [make a pull request](#pull-requests)
- If the change is minor or major, continue to Step 2 below

2. Search this repo's [issues](https://www.github.com/foundersandcoders/master-reference/issues) to see if an issue exists for the problem you are solving.
3. If an issue does not exist, create one. Include a descriptive body.
4. If your new issue relates to any others, reference those issues in the body by typing a `#` followed by the issue number. This enables others to follow the history of the topic.
5. Assign [the appropriate label](#labels).
6. Indicate on the issue that you would like to take it on. Assign the Course Facilitator to it if you need a response.
7. Once you are sure of what you need to do and that it is needed, assign yourself to the issue.
8. Clone, and create a new branch for your work

### Size of change

#### Tiny

- Such as: correcting typos and dead links
- Doesn't need to trouble the MRMs

How to proceed: Make a PR and assign to CF, who can review and merge.

![tiny changes](https://i.ibb.co/kHHtQzK/contributing-tiny-changes.jpg)

#### Minor

- Such as: restructuring a workshop or challenge's README, in order to make the instructions clearer
- Not actually changing the content

How to proceed: First, raise an issue and assign to CF. MRMs should be tagged as reviewers in any related PRs

![minor changes](https://i.ibb.co/Wp0FsCs/contributing-minor-changes.jpg)

#### Major

- Such as: proposing to change the content of a workshop or challenge, proposing a movement away from a certain technology

How to proceed: Raise an issue and assign it to the CF, who then assigns the MRMs. MRMs should be tagged as reviewers in any related PRs.

![major changes](https://i.ibb.co/N7LZk9k/contributing-major-changes.jpg)

### Labels

- `week-<name-here>` - if your new issue relates to a specific week of the course (e.g. `week-toolkit`)
- `bug` - something in this repo is broken (e.g. a link)
- `discuss` - you'd like the community's input before you start any work
- `question` - you're not actually sure whether this is an issue or not and would like confirmation
- `help wanted` - you would like some help in completing work on this issue

## Starting work

### Branches

Branches should have short and descriptive names. Your branch name should follow the following naming convention:

`token/branch-name`

- **Token:** This denotes the nature of the branch. Use the token that best describes the purpose of the branch.

  - `feat` - A feature branch
  - `docs` - A branch for updating or adding to documentation
  - `fix` - A branch for minor fixes (i.e. restructuring a workshop’s readme, but not actually changing the content)

- **Branch name:** This is the name of the branch. Please separate each word with a hyphen.

### Commits

The commit history of each file should tell a story

- [Describe your changes well](https://gist.github.com/mikepea/863f63d6e37281e329f8#describe-your-changes-well-in-each-commit)
- [Commits should be granular](https://gist.github.com/mikepea/863f63d6e37281e329f8#keep-it-small)
- **It is important that you reference an issue in each commit** - use [multiline messages](#multiline-messages)

#### Multiline messages

You will want to space your commit messages over more than one line. Commit without the `-m` to bring up a text editor in which to write the commit message.

You may want to configure git to use your preferred text editor, if you do not like the default. ie. [Set atom to be default commit message editor](https://help.github.com/articles/associating-text-editors-with-git/#using-atom-as-your-editor).

The message should have the following format:

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

### Pull Requests

Once you have finished your work, push up your branch and make a pull request. Remember, a pull request should be as small as possible. This makes the review process quick and easy.

Make sure your PR has the following

1. [A descriptive title](https://gist.github.com/mikepea/863f63d6e37281e329f8#ensure-there-is-a-solid-title-and-summary) - distinct from others and therefore searchable
2. [A body with details of everything in the pull.](https://gist.github.com/mikepea/863f63d6e37281e329f8#ensure-there-is-a-solid-title-and-summary)
3. Reference to any/all related issues in description
4. Assignees - add yourself, as well as anyone else who has worked on, or is involved in the PR
5. Reviewers
   - add the [maintainers of `master-reference`](https://github.com/foundersandcoders/master-reference/blob/master/MAINTAINERS.md) to every PR
   - add anyone else that you think should be aware of the contents of your PR before it is merged (e.g. anyone mentioned in the file you are uploading, or mentors delivering this material in another campus)
   - if your PR _requires_ a review from a particular person / people _before_ it is ready to be merged, specify this within the body of your PR

- This means that in general, assignees are those responsible for the code itself, while reviewers (i.e. the maintainers) are responsible for review and merging.

## Instructions for maintainers

Once a pull request has been approved by two maintainers it can be merged. In time critical situations, one approval may suffice, as long a the pull request is small and is not suggesting any major change.

# Thank you!

P.S. please star this repo.
