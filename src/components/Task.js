import React, { useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import './Task.css';

function Task(task) {
    // console.log('am in task');
    const [isEditMode, setEdit] = useState(false);
    const [taskValue, setTaskValue] = useState('');
    const [isChecked, setCompletedTask] = useState(false);
    const { completeTask, removeTask, updateTask } = useStateValue();
    const { id, title } = task;

    const editTask = (e) => {
        e.preventDefault();
        setEdit(true);
    };

    const deleteTask = (e) => {
        e.preventDefault();
        removeTask(id)
    };

    const saveTask = (e) => {
        e.preventDefault();
        updateTask({...task, title: taskValue});
        setEdit(false);
    };

    const cancelTask = (e) => {
        e.preventDefault();
        setEdit(false);
    };

    const toggleCheckboxChange = (e) => {
        e.preventDefault();
        completeTask({ id: id, title: title, completed: !isChecked })
        setCompletedTask(!isChecked);
    };

    return (
        <div className="Task">
            <div className={`Task-selection`}>
                {!isEditMode && <><input className="Task-selectbox" type="checkbox" id="task-title"
                    checked={isChecked}
                    onChange={toggleCheckboxChange} />
                    <label className="Task-title" htmlFor="task-title">{title}</label>
                </>
                }
                {isEditMode && <div className="Task-edit" ><label className="Task-edit-title" htmlFor="task-title">New name for {title}</label>
                    <input className="Task-edit-input" type="text" id="task-title" onChange={e => setTaskValue(e.target.value)} />
                </div>
                }
            </div>
            <div className={`Task-btn-group`}>
                {!isEditMode && <><button onClick={editTask} className={`btn Task-toggle-btn btn-white`}>Edit</button>
                    <button onClick={deleteTask} className={`btn Task-toggle-btn btn-danger`}>Delete</button>
                </>
                }
                {isEditMode && <><button onClick={cancelTask} className={`btn Task-toggle-btn btn-white`}>Cancel</button>
                    <button onClick={saveTask} className={`btn Task-toggle-btn btn-black`}>Save</button>
                </>
                }
            </div>
        </div>
    )
}

export default Task
