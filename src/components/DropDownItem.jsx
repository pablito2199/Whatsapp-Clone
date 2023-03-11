import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropDownItem({ icon, text, className }) {

    return (
        <div className="group flex gap-2 w-full">
            <button
                className={"flex justify-center items-center space-x-2 p-2 rounded-full h-10 w-10 bg-gradient-to-b from-" + className}>
                <FontAwesomeIcon icon={icon} className="text-white h-6 w-6" />
            </button>
            <div className="hidden group-hover:block bg-white rounded-full p-2 text-gray-500">
                <span className="text-sm font-bold">{text}</span>
            </div>
        </div>
    );
}