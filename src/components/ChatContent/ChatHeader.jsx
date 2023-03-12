import React from "react";

import user1 from '../../images/user1.jpg'

export default function ChatHeader({ chatId, chatList }) {

    const chat = chatList.find((c) => c.id === chatId);

    return <div className="flex items-center py-2 px-4 border-b border-gray-700 bg-gray-200 dark:bg-intro-background dark:text-white">
        <img alt={chat.name} src={user1} className="w-10 h-10 rounded-full mr-3" />
        <h2 className="font-semibold text-lg">{chat.name}</h2>
    </div>
};