import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default function ScrollDownButton({ chatContainerRef, title }) {

    const handleScrollToBottom = useCallback(() => {
        chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth"
        });
    }, [chatContainerRef]);

    return (
        <button onClick={handleScrollToBottom} title={title} className="absolute bottom-24 right-6 bg-light-background hover:bg-gray-200 text-gray-500 dark:bg-intro-background dark:hover:bg-gray-700 dark:text-gray-400 rounded-full w-10 h-10 text-2xl flex items-center justify-center shadow-md z-10">
            <FontAwesomeIcon icon={window.innerWidth < 1039 ? faAngleDoubleDown : faAngleDown} />
        </button>
    );
}