import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faSmile, faMicrophone, faCamera, faFile, faUser, faSquarePollVertical, faImages, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import DropDownItem from "./DropDownItem";

export default function InputMessage({ setMessage, message, handleSendMessage }) {

    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <div className="border-t p-1 border-gray-300 bg-gray-200 dark:bg-app-background">
            <div className="flex justify-between items-center bg-white dark:bg-app-background py-2 px-4 w-full">
                <div className="flex items-center w-full">
                    <FontAwesomeIcon icon={faSmile} className="text-gray-500 h-6 mr-4 cursor-pointer" />
                    <div className="relative">
                        <FontAwesomeIcon icon={faPaperclip} className="text-gray-500 h-6 mr-4 cursor-pointer" onClick={() => setShowDropDown(!showDropDown)} />
                        {
                            showDropDown && (
                                <div className="absolute bottom-12 right-5 py-2 px-3 flex flex-col gap-3 w-full">
                                    <DropDownItem icon={faSquarePollVertical} text="Poll" className="teal-600 to-teal-400" />
                                    <DropDownItem icon={faUser} text="Contact" className="cyan-600 to-cyan-400" />
                                    <DropDownItem icon={faFile} text="File" className="indigo-600 to-indigo-400" />
                                    <DropDownItem icon={faCamera} text="Camera" className="rose-600 to-rose-400" />
                                    <DropDownItem icon={faStickyNote} text="Sticker" className="blue-700 to-blue-500" />
                                    <DropDownItem icon={faImages} text="Gallery" className="purple-700 to-purple-500" />
                                </div>
                            )
                        }
                    </div>
                    <input
                        type="text"
                        placeholder="Type a message here"
                        className="w-full h-12 outline-none rounded-lg p-4 bg-gray-200 dark:bg-intro-background dark:caret-gray-200 dark:text-gray-200"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleSendMessage}
                    />
                </div>
                <FontAwesomeIcon icon={faMicrophone} className="ml-2 h-6 p-2 text-gray-500 cursor-pointer" />
            </div>
        </div>
    );
}