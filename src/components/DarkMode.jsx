import React, { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext('dark')

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const themeData = window.localStorage.getItem('theme')
        document.querySelector('body').setAttribute("data-theme", themeData)
        setTheme(themeData)
    }, [])

    const setDarkMode = () => {
        document.querySelector('body').setAttribute("data-theme", "dark")
        window.localStorage.setItem('theme', 'dark')
        setTheme('dark')
    }

    const setLightMode = () => {
        document.querySelector('body').setAttribute("data-theme", "light")
        window.localStorage.setItem('theme', 'light')
        setTheme('light')
    }

    const toggleMode = () => {
        if (theme === "light") {
            setDarkMode()
        } else setLightMode()
    }

    return (
        <ThemeContext.Provider value={{ setDarkMode, setLightMode, toggleMode, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider