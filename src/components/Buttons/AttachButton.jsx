import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faFile, faUser, faSquarePollVertical, faImages, faStickyNote } from "@fortawesome/free-solid-svg-icons";

import DropDownItem from "../ChatContent/DropDownItem";

export default function AttachButton({ faPaperclip, attachRef, showDropDown, setShowDropDown }) {

    const handleIconClick = useCallback(() => {
        setShowDropDown(prevState => !prevState);
    }, [setShowDropDown]);

    const paperClipIcon = <FontAwesomeIcon icon={faPaperclip} title="Attach" className="text-gray-500 h-6 cursor-pointer" onClick={handleIconClick} />;

    return (
        <div ref={attachRef} className="relative">
            {paperClipIcon}
            {showDropDown && (
                <div className="absolute bottom-12 right-5 py-2 px-3 flex flex-col gap-3 w-full">
                    <DropDownItem icon={faSquarePollVertical} text="Poll" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-teal-600 to-teal-400" />
                    <DropDownItem icon={faUser} text="Contact" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-cyan-600 to-cyan-400" />
                    <DropDownItem icon={faFile} text="File" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-indigo-600 to-indigo-400" />
                    <DropDownItem icon={faCamera} text="Camera" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-rose-600 to-rose-400" />
                    <DropDownItem icon={faStickyNote} text="Sticker" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-blue-700 to-blue-500" />
                    <DropDownItem icon={faImages} text="Gallery" className="flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-purple-700 to-purple-500" />
                </div>
            )}
        </div>
    );
}