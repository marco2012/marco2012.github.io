//https://medium.com/@riteshbhagat/implementing-theme-in-react-using-context-api-196149967c9d
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem("isDarkTheme");
        return savedTheme ? JSON.parse(savedTheme) : true;
    });

    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => {
            const newTheme = !prevTheme;
            localStorage.setItem("isDarkTheme", JSON.stringify(newTheme));
            return newTheme;
        });
    };

    useEffect(() => {
        document.body.classList.toggle("dark", isDarkTheme);
        document.body.style.backgroundColor = isDarkTheme ? "#000" : "#fff";
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};