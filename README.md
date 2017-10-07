# Chat Asapp
> By Stephen White <stwhite@mit.edu>

Completed as part of the coding challenge for ASAPP.
https://www.asapp.com/

---------------------------------------------

## Overview
Chat Asapp is an exciting place where you get to have a conversation with the most important person you know! (yourself)

To get you chatting as soon as possible, you act as both ends of the conversation. Two chat windows are displayed, to really enhance the feel that someone else is talking.

When you're typing in one window, yourself will see a typing animation in the other window to let yourself know yourself is typing.

Since you log in at the beginning of the experience, your entire chat history will be saved to the cloud! That way, you can always scroll up and reminisce at the conversations you've had with yourself.


#### Accounts / Login
- Sign in is managed by Auth0, through Firebase.
  - I decided to use existing technologies rather than re-invent the wheel here. I consider user-creation a "front-end" task given all the libraries that handle doing this without a server now.
- rather than chatting with other users, accounts are used to record and persist your own chat histories. This is keep the app in line with the spec of having 2 chat windows on the same screen which interact with each other.
- TODO? Anon?


#### Persistent Data
- Data storage is handled by Firebase directly from the React-app on the client-side.

#### Styling / CSS
- In lieu of crammed CSS style sheets, I use `styled-components` to contain all styles inside of their corresponding JS files. This keeps all the things you want and need in the same file.
  - [styled-components](https://github.com/styled-components/styled-components)

## Development

To run the app locally:

1. Clone the repo
2. from inside the repo, run: `yarn` to install all dependencies and node modules
3. run : `npm run start` to launch a dev server
