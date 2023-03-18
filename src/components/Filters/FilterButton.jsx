import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function FilterButton({ filterUnread, setFilterUnread, title }) {

    const handleFilterClick = () => {
        setFilterUnread(!filterUnread);
    };

    return (
        <FontAwesomeIcon
            icon={faFilter}
            onClick={handleFilterClick}
            className={`text-gray-400 h-5 cursor-pointer ${filterUnread && "text-gray-200 bg-unread-dark p-2 rounded-full"}`}
            title={title}
        />
    );
}