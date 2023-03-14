import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import user1 from '../../images/user1.jpg'

export default function ChatHeader({ chatId, chatList, windowWidth, setSelectedChatId }) {

    const chat = chatList.find((c) => c.id === chatId);

    return <div className="flex py-2 px-4 dark:border-b border-gray-700 bg-gray-100 dark:bg-intro-background dark:text-white items-center">
        <div className="flex gap-2 items-center hover:cursor-pointer" onClick={() => { windowWidth < 768 && setSelectedChatId(null) }} onMouseDown={(e) => e.currentTarget.classList.toggle("bg-gray-200 dark:bg-gray-700")}
            onMouseUp={(e) => e.currentTarget.classList.toggle("bg-gray-200 dark:bg-gray-700")}>
            {
                windowWidth < 768 && <div className="left-0 top-1/2">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-gray-500 dark:text-gray-300" />
                </div>
            }
            <img alt={chat.name} src={user1} className="w-10 h-10 rounded-full mr-3" />
        </div>
        <div className="flex flex-col">
            <h2 className="text-md flex-grow">{chat.name}</h2>
            {
                chat.online !== "" && <span className="text-gray-500 dark:text-gray-300 text-sm">{chat.online}</span>
            }
        </div>
    </div>
};