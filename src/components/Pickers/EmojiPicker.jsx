import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import React from "react";

export default function EmojiPicker({ onEmojiClick }) {

    return (
        <Picker data={data} onEmojiSelect={onEmojiClick} theme={document.documentElement.classList.contains("light") ? "light" : "dark"} previewEmoji="smiley" autoFocus={true} />
    );
}