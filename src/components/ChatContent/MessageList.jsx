import React from "react";

import ReceivedMessage from "./MessageTypes/ReceivedMessage";
import SentMessage from "./MessageTypes/SentMessage";
import monthNames from "../../data/months.json"

export default function MessageList({ chat, chatContainer }) {

    const formatDayHeader = (day) => {
        const date = new Date(day);
        const today = new Date();
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);

        if (date.toDateString() === today.toDateString()) {
            return "Today";
        } else if (date.toDateString() === yesterday.toDateString()) {
            return "Yesterday";
        } else {
            return `${date.getDate().toString()} ${monthNames[date.getMonth().toString()]} ${date.getFullYear().toString().padStart(2, '0')}`;
        }
    }

    const messagesByDay = chat.messages
        .sort((a, b) => a.timestamp - b.timestamp)
        .reduce((messagesByDay, message) => {
            const day = new Date(message.timestamp).toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            messagesByDay[day] = messagesByDay[day] || [];
            messagesByDay[day].push(message);
            return messagesByDay;
        }, {});

    return (
        <div className="flex-grow overflow-y-scroll p-4" ref={chatContainer}>
            <div className="flex flex-col space-y-2 mb-2">
                {
                    Object.entries(messagesByDay).map(([day, messages]) => {
                        return (
                            <div key={day} className="flex flex-col space-y-2 mb-2 items-center">
                                <div className="text-gray-600 dark:text-gray-400 text-xs font-medium py-1 px-3 text-center bg-gray-200 dark:bg-intro-background w-fit rounded-md">{formatDayHeader(day)}</div>
                                {messages.map(({ id, fromMe, message, status, timestamp }) => {
                                    if (!fromMe) {
                                        return <ReceivedMessage key={"mR" + id} message={message} timestamp={timestamp} />
                                    } else {
                                        return <SentMessage key={"mS" + id} message={message} status={status} timestamp={timestamp} />
                                    }
                                })}

                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}