import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function LinkedInButton() {

    return <a href="https://www.linkedin.com/in/pablo-tarr%C3%ADo-otero-806b52204/" target="_blank" rel="noopener noreferrer" className="p-2">
        <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 p-2 border-2 border-black dark:border-gray-100 rounded-full dark:text-gray-100" title="LinkedIn - Pablo Tarrío Otero" />
    </a>
}