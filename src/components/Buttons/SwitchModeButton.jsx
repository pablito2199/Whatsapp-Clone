import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function SwitchModeButton() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return <button className="p-2" onClick={toggleTheme}>
        {
            theme === "light"
                ?
                <FontAwesomeIcon icon={faMoon} className="h-6 w-6 p-2 border-2 border-black rounded-full" title="Dark mode" />
                :
                <FontAwesomeIcon icon={faSun} className="h-6 w-6 p-2 border-2 border-yellow-300 rounded-full text-yellow-300" title="Light mode" />
        }
    </button>
}