import React from "react";

export default function ChatList({ contextMenuX, contextMenuY }) {

    return (
        <div className="absolute z-10 top-0 left-0 border border-gray-700" style={{ left: contextMenuX, top: contextMenuY }}>
            <div className="bg-white dark:bg-gray-800 shadow-lg divide-y dark:divide-gray-700">
                <div className="block px-4 py-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => console.log("Delete chat clicked")}>
                    Delete chat
                </div>
                <div className="block px-4 py-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => console.log("Mark as read clicked")}>
                    Mark as read
                </div>
                <div className="block px-4 py-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => console.log("Mute clicked")}>
                    Mute
                </div>
            </div>
        </div>
    );
}