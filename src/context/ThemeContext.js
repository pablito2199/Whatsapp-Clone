import React, { createContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(theme === "light" ? "dark" : "light");
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
};