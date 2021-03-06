# Chat Asapp
> By Stephen White <stwhite@mit.edu>

https://chat-asapp-43a5e.firebaseapp.com/chat

---------------------------------------------

Completed as part of the coding challenge for ASAPP.
https://www.asapp.com/


## Overview
Chat Asapp is an exciting place where you get to have a conversation with the most important person you know! (yourself)

To get you chatting as soon as possible, you act as both ends of the conversation. Two chat windows are displayed, to really enhance the feel that someone else is talking.

When you're typing in one window, yourself will see a typing animation in the other window to let yourself know yourself is typing.

Since you log in at the beginning of the experience, your entire chat history will be saved to the cloud! That way, you can always scroll up and reminisce at the conversations you've had with yourself.


#### Accounts / Login
- Sign in is managed by Auth0, through Firebase.
  - I decided to use existing technologies rather than re-invent the wheel here. I consider user-creation a "front-end" task given all the libraries that handle doing this without a server now.
- rather than chatting with other users, accounts are used to record and persist your own chat histories. This is keep the app in line with the spec of having 2 chat windows on the same screen which interact with each other.

#### Formatted Text
- currently only basic features included:
  - `":)"` => 😀
  - `":("` => 😢
  - `"<3"` => ❤️

#### Persistent Data
- All messages are saved.
- Data storage is handled by Firebase directly from the React-app on the client-side.
- Data is stored in my personal Firebase console.

#### Styling / CSS
- In lieu of crammed CSS style sheets, I use `styled-components` to contain all styles inside of their corresponding JS files. This keeps all the things you want and need in the same file.
  - [styled-components](https://github.com/styled-components/styled-components)

#### Routing
Routing is implemented on the client-side with `react-router-dom`. There is currently only one route,
- `/chat` - render the chat windows


------------------------------------------------
## Development

#### Local Serving
To run the app locally:

1. Clone the repo
2. from inside the repo, run: `$ yarn` to install all dependencies and node modules
3. run : `$ npm run start` to launch a dev server


#### Testing
Testing is done with the Jest test framework.
To run all tests, simply run:
- `$ jest`

For rendering of React Components to the test runner, the Enzyme library is used.

Test coverage is currently low. I have omitted unit tests in the sake of saving time. However, high-level integration tests are located in  `src/Root/tests`

For more, see:
- https://facebook.github.io/jest/

#### PropTypes and Type Safety
Typically, any large web-app I would make would include PropTypes to introduce some level of type safety to the component props. However, due to the small scope of this project, I have decided to omit them.

Additionally, for larger scope projects, or projects dealing with a breadth of possible datatypes from the back-end, I would typically also add full type-safety to the app via the Flow library. Due to the relatively low complexity of the scope of this app, I have decided not to add Flow as it has a decent amount of overhead.
  - https://flow.org/


#### Deployment to Staging:
NOTE: You must have proper Firebase credentials to deploy.

To deploy, simply run:
  - `$ firebase deploy -m "message"`

------------------------------------------------
## Original Spec

Your challenge is to build a split screen chat interface. In one browser tab, there should be two side-by-side chat windows. On the left is Laura's chat window and she's talking to Rob. On the right is Rob's chat window and he's talking to Laura.

In her window, Laura is able to type and send a message to Rob. The message should appear as a sent message in her window and as a received message in his window. Additionally, when Laura is in the middle of typing, there should be an indicator in Rob's window that she's typing. And all this should work in the other direction for Rob sending a message to Laura.

This challenge is contained to one browser tab, but in real life, Laura and Rob would be on different devices and messages would be sent over a central server. Building a server isn’t part of this challenge, but we ask that you structure your code in such a way that it’d be straightforward to get rid of the split screen and plug in a server to support real remote chatting.
