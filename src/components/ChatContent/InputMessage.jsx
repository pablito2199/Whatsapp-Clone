import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faPaperclip } from "@fortawesome/free-solid-svg-icons";
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

    const microphoneIcon = useMemo(() => (
        <FontAwesomeIcon icon={faMicrophone} className="ml-2 h-6 p-2 text-gray-500 cursor-pointer" />
    ), []);

    return (
        <div className="dark:border-t p-1 border-gray-700 bg-gray-100 dark:bg-intro-background">
            <div className="flex justify-between items-center bg-gray-100 dark:bg-intro-background py-2 px-4 w-full">
                <div className="flex items-center w-full">
                    <EmojiButton faSmile={faSmile} pickerRef={pickerRef} handleEmojiClick={handleEmojiClick} showEmojiPicker={showEmojiPicker} setShowEmojiPicker={setShowEmojiPicker} />
                    <AttachButton faPaperclip={faPaperclip} attachRef={attachRef} showDropDown={showDropDown} setShowDropDown={setShowDropDown} />
                    <ReactTextareaAutosize
                        ref={textareaRef}
                        type="text"
                        placeholder="Type a message here"
                        className="w-full outline-none rounded-lg p-4 resize-none overflow-hidden overflow-y-hidden max-h-32 dark:bg-gray-700 dark:caret-gray-200 dark:text-gray-200"
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
                {microphoneIcon}
            </div>
        </div>
    );
}