import React, { useState, useRef } from 'react';

import './AddTaskBar.css';
import { useStateValue } from '../context/StateProvider';


function AddTaskBar() {
    const { addTask } = useStateValue();
    const [taskValue, setTask] = useState('');
    const inputEl = useRef(null);
    const blockName = "AddTaskBar";

    const insertTask = (e) => {
        e.preventDefault();
        addTask({ id: Math.floor(Math.random() * 10 + 1), title: taskValue, completed: false });
        setTask('');
    }

    const inputChange = (e) => {
        e.preventDefault();
        setTask(inputEl.current.value)
    }
    return (
        <div className={blockName}>
            <form>
                <h2 className={`${blockName}-label`}>
                    <label htmlFor="search-input">what needs to be done?</label>
                </h2>
                <input htmlFor="search-input" id="search-input" value={taskValue}
                    className={`${blockName}-input`} type="text"
                    onChange={inputChange}
                    ref={inputEl} />
                <button onClick={insertTask} className={`${blockName}-cta`} type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTaskBar
