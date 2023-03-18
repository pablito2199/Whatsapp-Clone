import React, { useCallback } from "react";

import { saveChatList } from "../../../utils";

export default function DeleteChat({ chatList, setChatList, chatSelectedId, setContextMenuVisible, setSelectedChatId }) {

    const handleDeleteChat = useCallback(() => {
        const updatedChatList = chatList.filter(chat => chat.id !== chatSelectedId);
        saveChatList(updatedChatList, setChatList);

        setContextMenuVisible(null);
        setSelectedChatId(null);
    }, [chatList, setChatList, chatSelectedId, setContextMenuVisible, setSelectedChatId]);

    return (
        <div className="block px-4 py-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={handleDeleteChat}>
            Delete chat
        </div>
    );
}