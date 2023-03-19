import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function DropDownItem({ icon, text, className }) {

    return (
        <div className="group flex gap-2 w-full ">
            <button
                className={className}>
                <FontAwesomeIcon icon={icon} className="text-white h-6 w-6" />
            </button>
            <div className="hidden group-hover:block bg-intro-background dark:bg-white rounded-full p-2 text-white dark:text-gray-500">
                <span className="text-sm font-semibold">{text}</span>
            </div>
        </div>
    );
}