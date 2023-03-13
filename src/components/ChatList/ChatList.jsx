import React from "react";

import Chat from "./Chat";

export default function ChatList({ chatList, handleClick }) {

    return <div className="w-full shadow-md divide-y dark:divide-gray-700 bg-white dark:bg-app-background">
        {
            chatList.map(chat => (
                <Chat key={chat.id} chat={chat} handleClick={handleClick} />
            ))
        }
    </div>
}