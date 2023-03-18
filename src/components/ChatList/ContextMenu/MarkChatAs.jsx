import React, { useCallback } from "react";

import { saveChatList } from "../../../utils";

export default function MarkChatAs({ chatList, setChatList, chatSelectedId, setContextMenuVisible, titleReaded, setTitleReaded }) {

    const handleMarkAsUnread = useCallback(() => {
        const updatedChatList = chatList.map(chat => {
            setTitleReaded(chat.unread ? "Mark as not readed" : "Mark as readed");

            if (chat.id === chatSelectedId) {
                return {
                    ...chat,
                    unread: !chat.unread,
                    unreadMessages: 0
                }
            }
            return chat;
        });
        saveChatList(updatedChatList, setChatList);

        setContextMenuVisible(null);
    }, [chatList, setChatList, chatSelectedId, setContextMenuVisible, setTitleReaded]);

    return (
        <div className="block px-4 py-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={handleMarkAsUnread}>
            {titleReaded}
        </div>
    );
}