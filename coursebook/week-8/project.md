## Project

This week you will be working in pairs, and building on your project from last week :open_mouth:

Decide amongst yourselves who, from your week 7 team, you would like to work with this week.

### Don't forget the basics
It's time to bring everything full circle and remind you of the project instructions from the first couple of weeks.
+ Don't forget to include a solid readme! You should aim to document as you go. Documentation is _part_ of building each feature. So don't be tempted to leave it until the end :+1:
+ Issues, commits & PRs should all have descriptive titles. Commits and PRs should have thorough descriptions in the body. Every commit and every PR should reference an issue. Your repo should pass the "abducted by aliens" test :wink:
+ Raise an issue for each user story, with details of the acceptance criteria. You will probably want to break each of these down into more granular issues before you start committing against them. (Don't worry too much about this. We will be going over [DWYL's workflow](https://github.com/dwyl/contributing) more in the second half of the programme.)
+ Now that you have had a number of weeks of writing tests, we expect to see some solid coverage percentages.

### User stories

**As a** member of Founders and Coders, who wants to learn from my fellow devs
> **I want to** log in with my Github account  
> **So that** I can use my Github organisation's info to see posts from my fellow students.

Acceptance criteria:

+ [ ] I can click on a button, which allows me to log in via my Github account
+ [ ] The look of the button should make it obvious that it is this form of login
+ [ ] Once I'm logged in, I should see a list of blog posts
+ [ ] I shouldn't be left with a blank loading screen for too long during the authorisation process, otherwise I will lose confidence in your website and leave.

**As** any user who is logged in
> **I want to** see my username & Github profile picture on the homepage  
> **So that** I benefit from logging in with Github OAuth, and don't have to do any profile setup on your site.

Acceptance criteria:

+ [ ] I can see my username & profile picture on each page that I visit

#### Stretch goals - choose _one_ (ONLY IF YOU HAVE TIME)

**As a** paranoid member of the current cohort, who believes in "what happens at FAC stays at FAC"
> **I want** others' viewing rights to my posts to be restricted  
> **So that** I feel free to be wildly opinionated with my crazy blogging.

Acceptance criteria:

+ [ ] Only logged-in members of Founders and Coders can see any of the content on this site
+ [ ] Anyone who is logged in, but not part of the current cohort, should still see a list of blogs. But they should see nothing that I (the paranoid user) have posted.

**As** the author of my own posts (any authenticated user)
> **I want to** be able to edit the posts that I have written (only my own)  
> **So that** I can retain editorial control & make sure my online content is the best it can be.

Acceptance criteria:

+ [ ] I can click on a button next to any of my posts, which takes me to an edit view
+ [ ] I can't see an edit button next to anyone else's posts
+ [ ] Each user has the same experience (but with their own posts)
+ [ ] Clicking "done" / "submit" changes the content for every user to see
+ [ ] Clicking "done" / "submit" takes me to a view of the new, edited version of my blog post

### Priorities
+ For the purposes of your learning, implementing OAuth is your top priority!
+ It is your choice whether you would like to perfect every detail of the 2 mandatory user stories, or to move on to a third user story. Either way, your choice should be explained in your readme.

### How are both pairs going to work on the same project on Github?

Normally, if you were working off someone's existing repo, you would fork it. But forks work under the assumption that they will, at some point, get merged into the original. So you cannot raise issues on a forked repo. That's no good for our purposes in week 8.

Instead:
1. Create a new, blank repo. Initialise it _without_ a `README.md` or a `.gitignore`
2. Clone your week 7 project on Github. You will need to run `git clone` from inside a different local directory than the one that contains your first version of the week 7 project.
3. `cd` into the new local directory (now the second version of your project)
4. Remove the contents of the `README.md`, except for the installation instructions, and maybe the overarching user story/ies that got your project to its current state.
5. Go to the blank repo that you created in step 1 and copy the URL in the same way that you would if you were going to clone it.
6. Your local project is connected to a `remote` URL - the Github repo that files get sent to/pulled from with `git push`, `git fetch` or `git pull`. To see the URL of your `remote`, type:  
> git remote -v  

6. Now you want to change that URL from week 7's Github repo (your local repo's `remote` repository) to the blank repository that you just created. (You should still be inside the new local version of your week 7 project.) Type the following command into your terminal, and paste in the blank repo's URL:
> git remote set-url origin <blank-repo-url>

You can see an explanation [in the Github docs](https://help.github.com/articles/changing-a-remote-s-url/).
