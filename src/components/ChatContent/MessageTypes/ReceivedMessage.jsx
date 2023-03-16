import React from "react";

import { formatDateToHours } from "../../../utils";

export default function ReceivedMessage({ message, timestamp }) {

    return (
        <div className="w-full flex flex-col justify-end">
            <div className="max-w-[66.66%] mr-auto">
                <div className="bg-gray-100 dark:bg-intro-background dark:text-white px-4 py-2 rounded-t-lg rounded-br-lg">
                    <div className="break-all">{message}</div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm ml-1 flex flex-row-reverse">{formatDateToHours(timestamp)}</span>
                </div>
            </div>
        </div>
    );
}