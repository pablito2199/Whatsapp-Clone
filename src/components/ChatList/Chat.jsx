import React from "react";

import user1 from '../../images/user1.jpg'

export default function Chat({ chat, chatList, setChatList, setSelectedChatId }) {

    const handleClick = () => {
        chat.unread = 0;
        setSelectedChatId(chat.id);
        setChatList([...chatList]);
    }

    return <div key={chat.id}
        className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer relative"
        onClick={handleClick}>
        <div className="flex justify-between items-center">
            <div className="flex items-center max-w-[100%] space-x-2">
                <img alt={chat.name} src={user1} className='h-12 w-12 rounded-full' />
                <div className="max-w-[80%]">
                    <div className={`text-lg dark:text-white ${chat.unread > 0 && "font-semibold"}`}>{chat.name}</div>
                    <div className={`text-gray-500 truncate text-sm dark:text-white ${chat.unread > 0 && " font-semibold"}`}>{chat.messages[chat.messages.length - 1].message}</div>
                </div>
            </div>
            <div className={`flex items-center justify-center h-6 absolute top-4 right-4 text-sm ${chat.unread > 0 ? "text-unread" : "text-gray-400"}`}>{chat.messages[chat.messages.length - 1].timestamp}</div>
            {
                chat.unread > 0 && (
                    <div className="flex items-center justify-center h-6 w-6 bg-unread text-white text-sm rounded-full absolute top-10 right-4">
                        {chat.unread}
                    </div>
                )
            }
        </div>
    </div>
}