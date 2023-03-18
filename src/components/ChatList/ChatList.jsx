import React, { useCallback, useState } from "react";

import Chat from "./Chat";
import ContextMenu from "./ContextMenu/ContextMenu";

export default function ChatList({ chatList, setChatList, handleClick, setSelectedChatId }) {

    const [chatSelectedId, setChatSelectedId] = useState(null);
    const [contextMenuX, setContextMenuX] = useState(0);
    const [contextMenuY, setContextMenuY] = useState(0);
    const [contextMenuVisible, setContextMenuVisible] = useState(false);

    const handleContextMenu = useCallback((e, chatId) => {
        e.preventDefault();
        setContextMenuVisible(true);
        setChatSelectedId(chatId);
        const rect = e.currentTarget.getBoundingClientRect();
        setContextMenuX(window.innerWidth < 1039 ? rect.x + window.innerWidth * 0.7 : rect.x + window.innerWidth * 0.15);
        setContextMenuY(rect.y + 50);
    }, [setContextMenuVisible, setContextMenuX, setContextMenuY]);

    return (
        <div className="flex w-full">
            <div className="flex flex-col w-full shadow-md divide-y dark:divide-gray-700 bg-white dark:bg-app-background overflow-y-scroll">
                {
                    chatList.map(chat => (
                        <Chat key={chat.id} chat={chat} handleClick={handleClick} handleContextMenu={handleContextMenu} setChatSelectedId={setChatSelectedId} setContextMenuVisible={setContextMenuVisible} />
                    ))
                }
            </div>
            {contextMenuVisible && <ContextMenu chatList={chatList} setChatList={setChatList} chatSelectedId={chatSelectedId} contextMenuX={contextMenuX} contextMenuY={contextMenuY} setContextMenuVisible={setContextMenuVisible} setSelectedChatId={setSelectedChatId} />}
        </div>
    );
}