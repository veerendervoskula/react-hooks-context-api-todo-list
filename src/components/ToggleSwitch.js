import React, { useEffect } from 'react';
import sn from 'classnames';
import './ToggleSwitch.css'
import { useStateValue } from '../context/StateProvider';

function ToggleSwitch() {
    const { theme, toggleTheme } = useStateValue();
    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
      }, [theme]);

    const getTheme = (val) => {
        return val === "light" ? "dark" : "light"
    }

    return (
        <div className="switch">
            <label className="switch-label">
                <input type="checkbox" onClick={toggleTheme}/>
                <span className={sn('slider','round')}></span>
            </label>
            &nbsp;<span>Click for {getTheme(theme)} mode</span>
        </div>
    )
}

export default ToggleSwitch;