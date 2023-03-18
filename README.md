# Installation

In the project directory, you can run:

### `npm install --force`

Install all the neccessary dependencies for the project.\

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Project's features

The project is a clone of the WhatsApp web app. It is a single page application that uses ReactJS as the main framework. The project is built using ReactJS, React Context API and React Router. I also used TailwindCSS for the styling of the project, and FontAwesome for the icons. The project is hosted on Vercel.

As a clone, the features of the original app are reduced to the following:

##

- Prototype of the WhatsApp web app's skeleton.
- Change the theme of the app (by default is set to light).
- Preload a list of chats.
- Responsive for mobile devices.

## List of chats

- Group chats by last message's date.
- Filter chats by name, message and readed.
- Delete chats (right click on any chat).
- Mark chats as readed (right click on any chat).

## Chat content

- Chat header with info of the chat.
- Send messages in chats.
- Group messages by date in the chat.
- Send emojis.
- Scroll down button when you go up in the chat.
- Lecture status of messages.
- Send messages with line breaks.

## Chat settings

The clone is built as a serverless app, so for saving the chats data, they are saved in the local storage of your explorer. This means that you will be the only person to see your chats, and you will be the only person to delete them. If you want to delete the chat data, to load the default chats, you can do it in your explorer by doing:

`Inspect (F12) > Application > Local Storage > https://pablito2199-whatsapp.vercel.app/ > Delete the key "chatList"`
