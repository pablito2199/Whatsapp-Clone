import React, { useCallback, useState } from "react";

import Chat from "./Chat";
import ContextMenu from "./ContextMenu";

export default function ChatList({ chatList, handleClick }) {

    const [contextMenuVisible, setContextMenuVisible] = useState(false);
    const [contextMenuX, setContextMenuX] = useState(0);
    const [contextMenuY, setContextMenuY] = useState(0);

    const handleContextMenu = useCallback((e) => {
        e.preventDefault();
        setContextMenuVisible(true);
        const rect = e.currentTarget.getBoundingClientRect();
        setContextMenuX(rect.x + 300);
        setContextMenuY(rect.y + 50);
    }, [setContextMenuVisible, setContextMenuX, setContextMenuY]);

    return (
        <div className="flex w-full">
            <div className="flex flex-col w-full shadow-md divide-y dark:divide-gray-700 bg-white dark:bg-app-background">
                {
                    chatList.map(chat => (
                        <Chat key={chat.id} chat={chat} handleClick={handleClick} handleContextMenu={handleContextMenu} setContextMenuVisible={setContextMenuVisible} />
                    ))
                }
            </div>
            {contextMenuVisible && <ContextMenu contextMenuX={contextMenuX} contextMenuY={contextMenuY} />}
        </div>
    );
}