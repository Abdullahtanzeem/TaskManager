import { useEffect, useState } from 'react';  // Import React hooks
import Logo from '../assets/Logo.png';  // Import the logo image

export const Header = () => {
    // State to store the theme, initialized from local storage (if available) or default to "medium"
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium");

    // useEffect to update the theme in local storage and apply it to the document when `theme` changes
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));  // Save the selected theme in local storage
        document.documentElement.removeAttribute("class");  // Remove any previous theme class from <html>
        document.documentElement.classList.add(theme);  // Add the new theme class to <html>
    }, [theme]);  // Runs whenever `theme` state changes

    return (
        <header>
            {/* Logo section */}
            <div className="logo">
                <img src={Logo} alt="TaskManager Logo" /> 
                <span>TaskManager</span>
            </div>

            {/* Theme selector buttons */}
            <div className="themeSelector">
                {/* Each span represents a theme button. Clicking it changes the theme */}
                <span 
                    onClick={() => setTheme("light")} 
                    className={theme === "light" ? "light activeTheme" : "light"}
                ></span>

                <span 
                    onClick={() => setTheme("medium")} 
                    className={theme === "medium" ? "medium activeTheme" : "medium"}
                ></span>

                <span 
                    onClick={() => setTheme("dark")} 
                    className={theme === "dark" ? "dark activeTheme" : "dark"}
                ></span>

                <span 
                    onClick={() => setTheme("gOne")} 
                    className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
                ></span>

                <span 
                    onClick={() => setTheme("gTwo")} 
                    className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
                ></span>

                <span 
                    onClick={() => setTheme("gThree")} 
                    className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
                ></span>
            </div>
        </header>
    );
};
