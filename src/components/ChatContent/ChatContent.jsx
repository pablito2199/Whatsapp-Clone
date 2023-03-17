import React, { useCallback, useEffect, useRef, useState } from "react";

import MessageList from "./MessageList";
import InputMessage from "./InputMessage";
import ScrollDownButton from "../Buttons/ScrollDownButton";
import { formatMessageJSON } from "../../utils";

export default function ChatContent({ chat, chatList, setChatList }) {

    const [message, setMessage] = useState("");
    const [showScrollButton, setShowScrollButton] = useState(false);

    const containerRef = useRef(null);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth"
        });
    }, [chat]);

    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        const handleScroll = () => {
            const currentScrollPosition = chatContainer.scrollTop + 500;
            const maxScrollPosition = chatContainer.scrollHeight - chatContainer.offsetHeight;
            setShowScrollButton(currentScrollPosition < maxScrollPosition);
        };
        chatContainer.addEventListener("scroll", handleScroll);
        return () => {
            chatContainer.removeEventListener("scroll", handleScroll);
        };
    }, []);

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

        const sendMessage = () => {
            const messageData = {
                "id": chat.messages.length,
                "message": formatMessageJSON(message),
                "timestamp": new Date(),
                "fromMe": true,
                "status": chat.online === "online" ? "received" : "not-received"
            };

            saveMessage(messageData);

            setMessage("");

            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }

        if (window.innerWidth >= 1039) {
            if (e.shiftKey && e.key === 'Enter') {
                e.preventDefault();
                setMessage(message + '\n');
            } else if (!(e.shiftKey && e.key === 'Enter') && e.key === "Enter" && !regexSpaces.test(message)) {
                sendMessage();
            }
        } else {
            sendMessage();
        }
    }, [chat, message, chatList, setChatList,]);

    return (
        <div className="flex flex-col h-full w-full chat-background relative" ref={containerRef}>
            {showScrollButton && <ScrollDownButton chatContainerRef={chatContainerRef} title="Scroll to bottom" />}
            <MessageList chat={chat} chatContainerRef={chatContainerRef} />
            <InputMessage chatId={chat.id} message={message} setMessage={setMessage} handleSendMessage={handleSendMessage} />
        </div>
    );
}