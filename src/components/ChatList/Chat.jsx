import React from "react";

const images = require.context("../../assets/images");

export default function Chat({ chat, handleClick }) {

    const formatFecha = (fecha) => {
        const date = new Date(Date.parse(fecha));
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            const period = new Date(fecha).getHours() >= 12 ? 'pm' : 'am';
            const standardHour = new Date(fecha).getHours() > 12 ? new Date(fecha).getHours() - 12 : new Date(fecha).getHours();

            return `${standardHour}:${new Date(fecha).getMinutes().toString().padStart(2, '0')} ${period}`;
        } else if (date.toDateString() === yesterday.toDateString()) {
            return "Yesterday";
        } else {
            return `${date.getDate().toString()}/${(date.getMonth() + 1).toString()}/${date.getFullYear().toString()[2]}${date.getFullYear().toString()[3]}`;
        }
    }

    return <div key={chat.id}
        className={`w-full max-w-[100%] flex p-4 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer relative ${chat.isSelected ? "bg-gray-100 dark:bg-gray-800" : ""}`}
        onClick={() => handleClick(chat)}>
        <div className="flex justify-between items-center w-full max-w-[100%]">
            <div className="flex items-center w-full space-x-2 max-w-[100%]">
                <img src={images(chat.image)} alt={chat.name} className="h-12 w-12 rounded-full" />
                <div className="flex flex-1 chat-item-list w-3/4">
                    <div className="flex flex-col w-11/12">
                        <div className={`text-lg dark:text-white ${chat.unread > 0 && "font-semibold"}`}>{chat.name}<span className={`flex items-center justify-center h-6 absolute top-4 right-4 text-sm ${chat.unread > 0 ? "text-unread-light dark:text-unread-dark" : "text-gray-400"}`}>{formatFecha(chat.messages[chat.messages.length - 1].timestamp)}</span></div>
                        <div className={`text-gray-500 truncate text-sm dark:text-white ${chat.unread > 0 && " font-semibold"}`}>{chat.messages[chat.messages.length - 1].message.replace(/<br>/g, ' ')}</div>
                    </div>
                </div>
                <div className="h-full mt-6 flex flex-row-reverse">
                    {
                        chat.unread > 0 && (
                            <div className="flex flex-row-reverse items-center justify-center h-6 w-6 bg-unread-light dark:bg-unread-dark text-white text-sm rounded-full">
                                {chat.unread}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
}