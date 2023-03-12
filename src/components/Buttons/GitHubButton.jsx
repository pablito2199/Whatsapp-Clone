import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GitHubButton() {

    return <a href="https://github.com/pablito2199/Whatsapp-Prototype" target="_blank" rel="noopener noreferrer" className="p-2">
        <FontAwesomeIcon icon={faGithub} className="h-6 w-6 p-2 border-2 border-black dark:border-gray-100 rounded-full dark:text-gray-100" title="GitHub - pablito2199/Whatsapp-Prototype" />
    </a>
}