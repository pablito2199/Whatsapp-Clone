import React, { useCallback, useEffect, useRef, useState } from "react";

import MessageList from "./MessageList";
import InputMessage from "./InputMessage";
import { formatMessageJSON } from "../../utils";

export default function ChatContent({ chat, chatList, setChatList }) {

    const [message, setMessage] = useState("");

    const containerRef = useRef(null);
    const chatContainer = useRef(null);

    useEffect(() => {
        chatContainer.current.scrollTo({
            top: chatContainer.current.scrollHeight,
            behavior: "smooth"
        });
    }, [chat]);

    const handleSendMessage = useCallback((e) => {

        const regexSpaces = /^\s*$/;

        const saveMessage = (messageData) => {
            const updatedChat = {
                ...chat,
                messages: [...chat.messages, messageData]
            };
            const updatedChatList = chatList
                .filter(c => c.id !== chat.id)
                .concat(updatedChat)
                .sort((a, b) => new Date(b.messages[b.messages.length - 1].timestamp) - new Date(a.messages[a.messages.length - 1].timestamp));
            localStorage.setItem("chatList", JSON.stringify(updatedChatList));
            setChatList(updatedChatList);
        }

        if (e.shiftKey && e.key === 'Enter') {
            e.preventDefault();
            setMessage(message + '\n');
        } else if (!(e.shiftKey && e.key === 'Enter') && e.key === "Enter" && !regexSpaces.test(message)) {

            const messageData = {
                "id": chat.messages.length,
                "message": formatMessageJSON(message),
                "timestamp": new Date(),
                "fromMe": true,
                "status": chat.online === "online" ? "received" : "not-received"
            };

            saveMessage(messageData);

            setMessage("");

            chatContainer.current.scrollTo({
                top: chatContainer.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [chat, message, chatList, setChatList,]);

    return (
        <div className="flex flex-col h-full w-full chat-background" ref={containerRef}>
            <MessageList chat={chat} chatContainer={chatContainer} />
            <InputMessage chatId={chat.id} message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
        </div>
    );
}