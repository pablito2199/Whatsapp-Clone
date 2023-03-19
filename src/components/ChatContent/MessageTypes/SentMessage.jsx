import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { formatDateToHours, formatMessageHTML } from "../../../utils";

export default function SentMessage({ message, status, timestamp }) {

    const icon = status === "seen" || status === "received" ? faCheckDouble : faCheck;

    return (
        <div className="w-full flex flex-col justify-end">
            <div className="max-w-[66.66%] ml-auto justify-end">
                <div className="bg-message-light dark:bg-message-dark dark:text-white px-4 py-2 rounded-t-lg rounded-bl-lg ml-auto">
                    <div
                        className="flex flex-row-reverse break-all"
                        dangerouslySetInnerHTML={{ __html: formatMessageHTML(message) }}
                    />
                    <span className="text-gray-500 dark:text-gray-300 text-sm ml-1 flex flex-row-reverse items-center gap-1">
                        {status !== "sent" && (
                            <FontAwesomeIcon
                                icon={icon}
                                className={`h-4 pr-1 rounded-full ${status === "seen" ? "text-blue-400" : "text-gray-400"}`}
                            />
                        )}
                        {formatDateToHours(timestamp)}
                    </span>
                </div>
            </div>
        </div>
    );
}