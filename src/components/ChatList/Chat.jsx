import React, { useEffect } from "react";

import LastMessage from "./LastMessage";
import UnreadBadge from "./UnreadBadge";
import { formatDateForListDisplay } from "../../utils";

const images = require.context("../../assets/images");

export default function Chat({ chat, handleClick, handleContextMenu, setChatSelectedId, setContextMenuVisible }) {

    const { id, name, image, messages, isSelected, unread, unreadMessages } = chat;
    const lastMessage = messages[messages.length - 1];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".context-menu")) {
                setContextMenuVisible(false);
                setChatSelectedId(null);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [setChatSelectedId, setContextMenuVisible]);

    return (
        <div
            key={id}
            className={`w-full max-w-[100%] flex p-4 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer relative ${isSelected ? "bg-gray-100 dark:bg-gray-800" : ""}`}
            onClick={() => handleClick(chat)}
            onContextMenu={(e) => handleContextMenu(e, id)}
        >
            <div className="flex justify-between items-center w-full max-w-[100%]">
                <div className="flex items-center w-full space-x-2 max-w-[100%]">
                    <img src={images(image)} alt={name} className="h-12 w-12 rounded-full" />
                    <div className="flex flex-1 chat-item-list w-3/4">
                        <div className="flex flex-col w-11/12">
                            <div className={`text-lg dark:text-white ${unread && "font-semibold"}`}>
                                {name}
                                <span className={`flex items-center justify-center h-6 absolute top-4 right-4 text-sm ${unread ? "text-unread-light dark:text-unread-dark" : "text-gray-400"}`}>
                                    {formatDateForListDisplay(lastMessage.timestamp)}
                                </span>
                            </div>
                            <div className="flex items-center">
                                {(lastMessage.fromMe && lastMessage.status !== "sent") && <LastMessage status={lastMessage.status} />}
                                <div className={`text-gray-500 truncate text-sm dark:text-white ${unread && " font-semibold"}`}>
                                    {lastMessage.message.replace(/<br>/g, " ")}
                                </div>
                            </div>
                        </div>
                    </div>
                    {unread && <UnreadBadge unreadMessages={unreadMessages} />}
                </div>
            </div>
        </div>
    );
}