import React, { useState } from "react";

import DeleteChat from "./DeleteChat";
import MarkChatAs from "./MarkChatAs";

export default function ContextMenu({ chatList, setChatList, chatSelectedId, contextMenuX, contextMenuY, setContextMenuVisible, setSelectedChatId }) {

    const [titleReaded, setTitleReaded] = useState(chatList.find(chat => chat.id === chatSelectedId).unread ? "Mark as readed" : "Mark as not readed");

    return (
        <div className="absolute z-10 top-0 left-0 border border-gray-700" style={{ left: contextMenuX, top: contextMenuY }}>
            <div className="bg-white dark:bg-gray-800 shadow-lg divide-y dark:divide-gray-700">
                <DeleteChat chatList={chatList} setChatList={setChatList} chatSelectedId={chatSelectedId} setContextMenuVisible={setContextMenuVisible} setSelectedChatId={setSelectedChatId} />
                <MarkChatAs chatList={chatList} setChatList={setChatList} chatSelectedId={chatSelectedId} setContextMenuVisible={setContextMenuVisible} titleReaded={titleReaded} setTitleReaded={setTitleReaded} />
            </div>
        </div>
    );
}