import React from "react";

import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";

export default function FilterBar({ filterUnread, setFilterUnread, setSearchQuery }) {

    return (
        <div className="flex justify-center items-center w-full gap-3 p-3">
            <SearchBar setSearchQuery={setSearchQuery} />
            <FilterButton filterUnread={filterUnread} setFilterUnread={setFilterUnread} title="Not readed chats' filter" />
        </div>
    );
}