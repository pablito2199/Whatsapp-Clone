import React from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function SwitchModeButton() {
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    return <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
}