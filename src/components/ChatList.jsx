import React from "react";

import Chat from "./Chat";

export default function ChatList({ chatList, setSelectedChatId }) {

    return (
        <div className="w-full shadow-md rounded-lg divide-y divide-gray-700 bg-white dark:bg-app-background">
            {
                chatList.map((chat) => (
                    <Chat chat={chat} setSelectedChatId={setSelectedChatId} />
                ))
            }
        </div >
    );
}