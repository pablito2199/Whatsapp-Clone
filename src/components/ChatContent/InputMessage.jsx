import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from '@fortawesome/free-regular-svg-icons';

import EmojiButton from "../Buttons/EmojiButton";
import AttachButton from "../Buttons/AttachButton";

export default function InputMessage({ chatId, message, setMessage, handleSendMessage }) {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);

    const pickerRef = useRef(null);
    const attachRef = useRef(null);
    const textareaRef = useRef(null);

    const handleEmojiClick = useCallback((emoji) => setMessage(prevMessage => prevMessage + emoji.native), [setMessage]);

    useEffect(() => {
        function handleClickOutsideEmojiButton(event) {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setShowEmojiPicker(false);
            }
        }

        document.addEventListener("click", handleClickOutsideEmojiButton);
        return () => {
            document.removeEventListener("click", handleClickOutsideEmojiButton);
        };
    }, [pickerRef]);

    useEffect(() => {
        function handleClickOutsideAttachButtom(event) {
            if (attachRef.current && !attachRef.current.contains(event.target)) {
                setShowDropDown(false);
            }
        }

        document.addEventListener("click", handleClickOutsideAttachButtom);
        return () => {
            document.removeEventListener("click", handleClickOutsideAttachButtom);
        };
    }, [attachRef]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [chatId]);

    const emojiIcon = useMemo(() => (
        <EmojiButton faSmile={faSmile} pickerRef={pickerRef} handleEmojiClick={handleEmojiClick} showEmojiPicker={showEmojiPicker} setShowEmojiPicker={setShowEmojiPicker} />
    ), [handleEmojiClick, showEmojiPicker]);

    const attachIcon = useMemo(() => (
        <AttachButton faPaperclip={faPaperclip} attachRef={attachRef} showDropDown={showDropDown} setShowDropDown={setShowDropDown} />
    ), [showDropDown]);

    const microphoneIcon = useMemo(() => (
        <FontAwesomeIcon icon={faMicrophone} className="ml-2 h-6 p-2 text-gray-500 cursor-pointer" />
    ), []);

    const microphoneIconMobile = useMemo(() => (
        <FontAwesomeIcon icon={faMicrophone} className="w-6 h-6 p-3 text-gray-100 cursor-pointer bg-teal-500 rounded-full" />
    ), []);

    const sendIcon = useMemo(() => (
        <FontAwesomeIcon icon={faPaperPlane} title="Send" className="w-6 h-6 p-3 text-gray-100 cursor-pointer bg-teal-500 rounded-full" onClick={handleSendMessage} />
    ), [handleSendMessage]);

    return (
        <div className={`flex items-center justify-center ${window.innerWidth < 1039 && "mb-4"}`}>
            <div className={`dark:border-t border-gray-700 bg-gray-100 dark:bg-intro-background ${window.innerWidth < 1039 ? "flex ml-4 mr-1 rounded-full items-center w-[90%]" : "w-full"}`}>
                <div className={`flex justify-between items-center ${window.innerWidth < 1039 ? "mx-8 w-full" : "bg-gray-100 dark:bg-intro-background w-full px-4 py-2"}`}>
                    <div className="flex items-center w-full">
                        {emojiIcon}
                        {window.innerWidth >= 1039 && attachIcon}
                        <ReactTextareaAutosize
                            ref={textareaRef}
                            type="text"
                            placeholder={window.innerWidth < 1039 ? "Message" : "Type a message here"}
                            className={`w-full outline-none rounded-lg p-4 resize-none overflow-hidden overflow-y-hidden max-h-32 dark:caret-gray-200 dark:text-gray-200 ${window.innerWidth < 1039 ? "bg-gray-100 dark:bg-intro-background" : "ml-4 dark:bg-gray-700"}`}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={window.innerWidth >= 1039 ? handleSendMessage : null}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey && window.innerWidth >= 1039) {
                                    e.preventDefault();
                                }
                            }}
                            maxRows={5}
                        />
                        {window.innerWidth < 1039 && attachIcon}
                    </div>
                    {window.innerWidth >= 1039 && microphoneIcon}
                </div>
            </div>
            {(window.innerWidth < 1039 && message === "") && microphoneIconMobile}
            {(window.innerWidth < 1039 && message !== "") && sendIcon}
        </div>
    );
}