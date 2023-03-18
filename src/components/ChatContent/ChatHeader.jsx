import React, { useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'

import IconButton from "../Buttons/IconButton";
const images = require.context("../../assets/images");

export default function ChatHeader({ chat, windowWidth, setSelectedChatId }) {

    const handleChatHeaderClick = useCallback(() => {
        if (windowWidth < 1039) {
            setSelectedChatId(null);
            chat.isSelected = false;
        }
    }, [chat, setSelectedChatId, windowWidth]);

    return (
        <div className="flex items-center w-full bg-gray-100 dark:bg-intro-background">
            <div className="flex w-[90%] py-2 px-4 dark:border-b border-gray-700 bg-gray-100 dark:bg-intro-background dark:text-white items-center">
                <div className="flex gap-2 items-center hover:cursor-pointer" onClick={handleChatHeaderClick}>
                    {windowWidth < 1039 && (
                        <div className="left-0 top-1/2">
                            <FontAwesomeIcon icon={faArrowLeft} className="text-gray-500 dark:text-gray-300" />
                        </div>
                    )}
                    <img src={images(chat.image)} alt={chat.name} className="w-10 h-10 rounded-full mr-3" />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-md flex-grow">{chat.name}</h2>
                    {
                        chat.online !== "" && <span className="text-gray-500 dark:text-gray-300 text-sm">{chat.online}</span>
                    }
                </div>
            </div>
            <div className="flex flex-row-reverse w-full mr-4">
                <IconButton icon={faBars} className="h-5 p-2 text-gray-400 rounded-full cursor-pointer" title="Menu" />
            </div>
        </div>
    );
};