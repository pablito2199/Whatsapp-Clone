import React, { useEffect, useRef, useState } from "react";
import InputMessage from "./InputMessage";

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


    useEffect(() => {
        const height = containerRef.current.clientHeight;
        containerRef.current.style.maxHeight = `${height}px`;
    }, []);

    function formatMessage(message) {
        return message.replace(/\n/g, '<br>');
    }

    const handleSendMessage = (e) => {
        const regexSpaces = /^[\s\n]*$/;

        if (e.shiftKey && e.key === 'Enter') {
            e.preventDefault();
            setMessage(message + '\n');
        } else if (!(e.shiftKey && e.key === 'Enter') && e.key === "Enter" && !regexSpaces.test(message)) {
            const now = new Date();
            const options = { hour: 'numeric', minute: 'numeric' };
            const timestamp = now.toLocaleString('es-ES', options);

            const messageData = {
                "id": chat.messages.length,
                "message": formatMessage(message),
                "timestamp": timestamp,
                "fromMe": true
            };

            chat.messages.push(messageData);
            setChatList([...chatList]);
            localStorage.setItem('chatList', JSON.stringify(chatList));

            setMessage("");

            chatContainer.current.scrollTo({
                top: chatContainer.current.scrollHeight,
                behavior: "smooth"
            });
        }
    };

    return <div className="flex flex-col h-full w-full chat-background" ref={containerRef}>
        <div className="flex-grow overflow-y-scroll p-4" ref={chatContainer}>
            <div className="flex flex-col gap-2 mb-2">
                {
                    chat.messages.map((m, index) => {
                        if (!m.fromMe) {
                            return <div key={index} className="w-full flex flex-col justify-end">
                                <div className="max-w-[66.66%] mr-auto">
                                    <div className="bg-gray-100 dark:bg-intro-background dark:text-white px-4 py-2 rounded-t-lg rounded-br-lg">
                                        <p className="break-all">{m.message}</p>
                                        <span className="text-gray-600 dark:text-gray-400 text-sm ml-1 flex flex-row-reverse">{m.timestamp}</span>
                                    </div>
                                </div>
                            </div>
                        } else {
                            return <div key={index} className="w-full flex flex-col justify-end">
                                <div className="max-w-[66.66%] ml-auto justify-end">
                                    <div className="bg-message-light dark:bg-message-dark dark:text-white px-4 py-2 rounded-t-lg rounded-bl-lg ml-auto">
                                        <div className="flex flex-row-reverse break-all" dangerouslySetInnerHTML={{ __html: m.message }}></div>
                                        <span className="text-gray-500 dark:text-gray-300 text-sm ml-1 flex flex-row-reverse">{m.timestamp}</span>
                                    </div>
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        </div>
        <InputMessage handleSendMessage={handleSendMessage} message={message} setMessage={setMessage} />
    </div >
}