import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import EmojiPicker from "../Pickers/EmojiPicker";

export default function EmojiButton({ faSmile, pickerRef, handleEmojiClick, showEmojiPicker, setShowEmojiPicker }) {

    const handleIconClick = useCallback(() => {
        setShowEmojiPicker(prevState => !prevState);
    }, [setShowEmojiPicker]);

    const smileIcon = <FontAwesomeIcon icon={faSmile} onClick={handleIconClick} className="text-gray-500 h-6 mr-4 cursor-pointer" />;

    return (
        <div ref={pickerRef} className="relative">
            {smileIcon}
            {showEmojiPicker && <div className="absolute bottom-10"><EmojiPicker onEmojiClick={handleEmojiClick} /></div>}
        </div>
    );
}