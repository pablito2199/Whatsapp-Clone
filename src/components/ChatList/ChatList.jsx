import React from "react";

import Chat from "./Chat";

export default function ChatList({ chatList, setChatList, setSelectedChatId }) {

    return <div className="w-full shadow-md divide-y dark:divide-gray-700 bg-white dark:bg-app-background">
        {
            chatList.map((chat, index) => (
                <Chat key={index} chat={chat} chatList={chatList} setChatList={setChatList} setSelectedChatId={setSelectedChatId} />
            ))
        }
    </div>
}