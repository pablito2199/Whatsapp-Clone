import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ setSearchQuery }) {

    const handleSearch = event => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    return (
        <div className="flex justify-center items-center px-3 py-1 rounded-xl bg-gray-200 dark:bg-intro-background w-11/12">
            <div className="flex items-center flex-1">
                <div className="flex items-center justify-center w-8 h-8 mr-2 bg-gray-200 dark:bg-intro-background">
                    <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                </div>
                <input onChange={handleSearch} type="text" placeholder="Search chats and messages" className="bg-transparent outline-none text-sm text-gray-800 dark:text-gray-100 flex-1" />
            </div>
        </div>
    );
}