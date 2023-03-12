import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GitHubButton() {

    return <a href="https://github.com/pablito2199/Whatsapp-Prototype" target="_blank" rel="noopener noreferrer" className="p-2">
        <FontAwesomeIcon icon={faGithub} className="h-6 w-6 p-2 border-2 border-unread-light dark:border-unread-dark rounded-full text-unread-light dark:text-unread-dark" title="GitHub - pablito2199/Whatsapp-Prototype" />
    </a>
}