# Week 8

This week we will build on your learning from last week with a focus on authentication and authorisation. The aim is that you can ensure users are correctly logged in, that you can store user information in a cookie, and that you control what routes and information users can access.

### What's the difference between authentication and authorisation?
**Authentication** is the mechanism whereby systems may securely identify their users. Authentication systems provide answers to the questions:
- Who is the user?
- Is the user really who they say they are?  

**Authorisation**, by contrast, determines what permissions an (authenticated) user might have.
For example: an authenticated blog user does not have authorisation / permission to delete other peoples posts, however, an authenticated admin of the blog does have these permissions.

## Authorisation
As mentioned already, authorisation is the process by which you determine what a user can access. This might determine which routes they can access, or what data they can request from your database, among other things. In Hapi this can be managed through scope. You can read more about it in the [Hapi documentation on route options](https://hapijs.com/api#route-options) and this article, [Authentication and Authorization with hapi.](https://medium.com/@poeticninja/authentication-and-authorization-with-hapi-5529b5ecc8ec)

## Third-party authentication (OAuth)
### What is OAuth?
OAuth is an _authorisation_ protocol that enables a 3rd-party application to obtain limited access a user's info. [OAuth is not an authentication tool.](https://oauth.net/articles/authentication/)

There's a list of OAuth providers on [Wikipedia](https://en.wikipedia.org/wiki/List_of_OAuth_providers).

### Why use OAuth?
- Using a 3rd party to authenticate users means you can skip over issues such as validation of user inputs, the need to ensure that usernames are unique, and the insecurity of storing passwords (even when these are encrypted).  
- Your users likely already have an account with Facebook, Twitter or Google, and may be more inclined to register and use your site if they can do so in a single click.  
- Relying on large, well known and trusted companies for authentication reduces the need for users to remember a ton of different login credentials.
- OAuth places the burden of security on the companies best resourced to provide it.

### Potential issues
Using 3rd-party authentication isn't always a net gain for developers and users. These aren't reasons not to use it, but it's worth knowing some of the pitfalls.
- Organisations authenticating users with 3rd parties mostly find that not only can they not rely on one 3rd party for all users, they also need to offer a conventional login process. So it's not a silver bullet.
- Following on from the previous point, users may not remember which 3rd party they used on subsequent logins (user frustration)
- Users may expect you to have access to information via the authenticator that you do not (e.g. Why are you asking for my contacts when I authenticated with Facebook?)
- Some users may not trust some 3rd party behaviour (i.e. will you post things to my wall if I authenticate using Facebook?)
- Sometimes bugs arise in the code of the 3rd party that you can have no control over (dependency).

### Further reading
- [No more username/passwords: Just use a 3rd party for authentication.](https://medium.com/@sellarafaeli/no-more-username-passwords-just-use-a-3rd-party-for-authentication-59b12db092a4)
- [You can’t get away with just one kind of social login](https://library.launchkit.io/the-unexpected-costs-of-third-party-login-cda41c087653)
- [360 million reasons to destory all passwords](https://medium.freecodecamp.com/360-million-reasons-to-destroy-all-passwords-9a100b2b5001)
