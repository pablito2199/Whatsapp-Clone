import React from "react";

import user1 from '../../images/user1.jpg'

export default function ChatHeader({ chatId, chatList }) {

    const chat = chatList.find((c) => c.id === chatId);

    return <div className="flex py-2 px-4 dark:border-b border-gray-700 bg-gray-100 dark:bg-intro-background dark:text-white items-center">
        <img alt={chat.name} src={user1} className="w-10 h-10 rounded-full mr-3" />
        <div className="flex flex-col">
            <h2 className="text-md flex-grow">{chat.name}</h2>
            {
                chat.online !== "" && <span className="text-gray-500 dark:text-gray-300 text-sm">{chat.online}</span>
            }
        </div>
    </div>
};