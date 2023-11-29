import React from "react";
import "../Theme.css";

const Theme = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", 'dark')
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", 'light')
    }

    const selectedTheme = localStorage.getItem('selectedTheme')

    if (selectedTheme === 'dark') {
        setDarkMode()
    }
    if (selectedTheme === 'light') {
        setLightMode()
    }

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode()
        } else {
            setLightMode()
        }
    }

    return (
        <div className='theme'>
            <input onChange={toggleTheme} className='themeInput' type='checkbox' id='theme-toggle' defaultChecked={selectedTheme === 'dark'} />

            <label className='themeLabel' htmlFor='theme-toggle'>
                <span className="material-symbols-rounded sun"> Wb_sunny</span>
                <span className="material-symbols-rounded moon">dark_mode</span>
            </label>
        </div>
    );
};

export default Theme;
