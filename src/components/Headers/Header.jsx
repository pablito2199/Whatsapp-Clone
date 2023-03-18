import React from "react";
import { faBars, faCircleNotch, faCommenting, faUserCircle, faUsers } from "@fortawesome/free-solid-svg-icons";

import IconButton from "../Buttons/IconButton";

export default function Header() {

    return (
        <div className="flex flex-1 bg-gray-200 dark:bg-intro-background w-full px-2 py-2 justify-content-end">
            <IconButton icon={faUserCircle} className="h-8 p-2 text-gray-400 rounded-full cursor-pointer" />
            <div className="flex flex-row-reverse items-center w-full">
                <IconButton icon={faBars} className="h-4 p-2 text-gray-400 rounded-full cursor-pointer" title="Menu" />
                <IconButton icon={faCommenting} className="h-4 p-2 text-gray-400 rounded-full cursor-pointer" title="New chat" />
                <IconButton icon={faCircleNotch} className="h-4 p-2 text-gray-400 rounded-full cursor-pointer" title="States" />
                <IconButton icon={faUsers} className="h-4 p-2 text-gray-400 rounded-full cursor-pointer" title="Communities" />
            </div>
        </div>
    );
}