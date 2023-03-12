import React from "react";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'


function EmojiPicker({ onEmojiClick }) {
    return (
        <Picker data={data} onEmojiSelect={onEmojiClick} />
    );
}

export default EmojiPicker;