import React, { createContext, useEffect, useMemo, useState, useCallback } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }, [theme]);

    const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};