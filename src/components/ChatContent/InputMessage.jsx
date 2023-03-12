import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faMicrophone, faCamera, faFile, faUser, faSquarePollVertical, faImages, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import DropDownItem from "./DropDownItem";
import ReactTextareaAutosize from "react-textarea-autosize";

export default function InputMessage({ message, handleSendMessage, setMessage }) {

    const [showDropDown, setShowDropDown] = useState(false);

    return <div className="dark:border-t p-1 border-gray-700 bg-gray-100 dark:bg-app-background">
        <div className="flex justify-between items-center bg-gray-100 dark:bg-app-background py-2 px-4 w-full">
            <div className="flex items-center w-full">
                <FontAwesomeIcon icon={faSmile} className="text-gray-500 h-6 mr-4 cursor-pointer" />
                <div className="relative">
                    <FontAwesomeIcon icon={faPaperclip} title="Attach" className="text-gray-500 h-6 mr-4 cursor-pointer" onClick={() => setShowDropDown(!showDropDown)} />
                    {
                        showDropDown && (
                            <div className="absolute bottom-12 right-5 py-2 px-3 flex flex-col gap-3 w-full">
                                <DropDownItem icon={faSquarePollVertical} text="Poll" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-teal-600 to-teal-400" />
                                <DropDownItem icon={faUser} text="Contact" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-cyan-600 to-cyan-400" />
                                <DropDownItem icon={faFile} text="File" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-indigo-600 to-indigo-400" />
                                <DropDownItem icon={faCamera} text="Camera" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-rose-600 to-rose-400" />
                                <DropDownItem icon={faStickyNote} text="Sticker" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-blue-700 to-blue-500" />
                                <DropDownItem icon={faImages} text="Gallery" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-purple-700 to-purple-500" />
                            </div>
                        )
                    }
                </div>
                <ReactTextareaAutosize
                    type="text"
                    placeholder="Type a message here"
                    className="w-full outline-none rounded-lg p-4 resize-none overflow-hidden overflow-y-hidden max-h-32 dark:bg-intro-background dark:caret-gray-200 dark:text-gray-200"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleSendMessage}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                        }
                    }}
                    maxRows={5}
                />
            </div>
            <FontAwesomeIcon icon={faMicrophone} className="ml-2 h-6 p-2 text-gray-500 cursor-pointer" />
        </div>
    </div>
}