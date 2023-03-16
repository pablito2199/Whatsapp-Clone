import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialBrandButton({ href, faIcon, title }) {

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="p-2">
            <FontAwesomeIcon icon={faIcon} className="h-6 w-6 p-2 border-2 border-unread-light dark:border-unread-dark rounded-full text-unread-light dark:text-unread-dark" title={title} />
        </a>
    );
}