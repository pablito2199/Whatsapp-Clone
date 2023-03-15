import React, { useEffect, useRef, useState } from "react";
import InputMessage from "./InputMessage";

import monthNames from "../../data/months.json"

export default function ChatContent({ chatId, chatList, setChatList }) {

    const chat = chatList.find((c) => c.id === chatId);

    const [message, setMessage] = useState("");

    const containerRef = useRef(null);
    const chatContainer = useRef(null);

    useEffect(() => {
        chatContainer.current.scrollTo({
            top: chatContainer.current.scrollHeight,
            behavior: "smooth"
        });
    }, [chat]);

    function formatMessage(message) {
        return message.replace(/\n/g, '<br>');
    }

    const handleSendMessage = (e) => {
        const regexSpaces = /^\s*$/;

        if (e.shiftKey && e.key === 'Enter') {
            e.preventDefault();
            setMessage(message + '\n');
        } else if (!(e.shiftKey && e.key === 'Enter') && e.key === "Enter" && !regexSpaces.test(message)) {

            const messageData = {
                "id": chat.messages.length,
                "message": formatMessage(message),
                "timestamp": new Date(),
                "fromMe": true
            };

            chat.messages.push(messageData);
            setChatList((prevChatList) => {
                const updatedChatList = [...prevChatList];
                const chatIndex = updatedChatList.findIndex((c) => c.id === chatId);
                updatedChatList[chatIndex] = chat;
                updatedChatList.sort((a, b) => {
                    return new Date(b.messages[b.messages.length - 1].timestamp) - new Date(a.messages[a.messages.length - 1].timestamp);
                })
                localStorage.setItem("chatList", JSON.stringify(updatedChatList));
                return updatedChatList;
            });
            localStorage.setItem('chatList', JSON.stringify(chatList.sort((a, b) => {
                const aLastMessage = a.messages[a.messages.length - 1];
                const bLastMessage = b.messages[b.messages.length - 1];
                const aTimestamp = new Date(aLastMessage.timestamp);
                const bTimestamp = new Date(bLastMessage.timestamp);
                return bTimestamp - aTimestamp;
            })));

            setMessage("");

            chatContainer.current.scrollTo({
                top: chatContainer.current.scrollHeight,
                behavior: "smooth"
            });
        }
    };

    function formatMessageBack(message) {
        return message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace('&lt;br&gt;', '<br>');
    }

    const formatFecha = (fecha) => {
        const period = new Date(fecha).getHours() >= 12 ? 'pm' : 'am';
        const standardHour = new Date(fecha).getHours() > 12 ? new Date(fecha).getHours() - 12 : new Date(fecha).getHours();

        return `${standardHour}:${new Date(fecha).getMinutes().toString().padStart(2, '0')} ${period}`;
    }

    function formatDayHeader(day) {
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


    return <div className="flex flex-col h-full w-full chat-background" ref={containerRef}>
        <div className="flex-grow overflow-y-scroll p-4" ref={chatContainer}>
            <div className="flex flex-col gap-2 mb-2">
                {
                    Object.entries(messagesByDay).map(([day, messages]) => {
                        return <div key={day} className="flex flex-col gap-2 mb-2 items-center">
                            <div className="text-gray-600 dark:text-gray-400 text-xs font-medium py-1 px-3 text-center bg-gray-200 dark:bg-intro-background w-fit rounded-md">{formatDayHeader(day)}</div>
                            {messages.map(m => {
                                if (!m.fromMe) {
                                    return <div key={"mR" + m.id} className="w-full flex flex-col justify-end">
                                        <div className="max-w-[66.66%] mr-auto">
                                            <div className="bg-gray-100 dark:bg-intro-background dark:text-white px-4 py-2 rounded-t-lg rounded-br-lg">
                                                <div className="break-all">{m.message}</div>
                                                <span className="text-gray-600 dark:text-gray-400 text-sm ml-1 flex flex-row-reverse">{formatFecha(m.timestamp)}</span>
                                            </div>
                                        </div>
                                    </div>
                                } else {
                                    return <div key={"mS" + m.id} className="w-full flex flex-col justify-end">
                                        <div className="max-w-[66.66%] ml-auto justify-end">
                                            <div className="bg-message-light dark:bg-message-dark dark:text-white px-4 py-2 rounded-t-lg rounded-bl-lg ml-auto">
                                                <div className="flex flex-row-reverse break-all" dangerouslySetInnerHTML={{ __html: formatMessageBack(m.message) }}></div>
                                                <span className="text-gray-500 dark:text-gray-300 text-sm ml-1 flex flex-row-reverse">{formatFecha(m.timestamp)}</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                            })}
                        </div>
                    })
                }
            </div>
        </div>
        <InputMessage handleSendMessage={handleSendMessage} message={message} setMessage={setMessage} />
    </div >
}