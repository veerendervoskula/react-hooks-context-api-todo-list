import React, { useState } from 'react';

import './AddTaskBar.css';
import { useStateValue } from '../context/StateProvider';


function AddTaskBar() {
    const { addTask } = useStateValue();
    const [taskValue, setTask] = useState('');
    const blockName = "AddTaskBar";

    const insertTask = (e) => {
        e.preventDefault();
        addTask({ id: Math.floor(Math.random() * 1 + 1), title: taskValue, completed: false });
        setTask('');
    }
    return (
        <div className={blockName}>
            <form>
                <h2 className={`${blockName}-label`}>
                    <label htmlFor="search-input">what needs to be done?</label>
                </h2>
                <input htmlFor="search-input" id="search-input" value={taskValue} 
                       className={`${blockName}-input`} type="text" onChange={e => setTask(e.target.value)} />
                <button onClick={insertTask} className={`${blockName}-cta`} type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTaskBar
