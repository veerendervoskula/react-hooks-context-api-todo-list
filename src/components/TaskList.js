import React, { useEffect, useState } from 'react';
import Task from './Task';
import { useStateValue } from '../context/StateProvider';
import './TaskList.css';

const TaskList = () => {
    const [filter, setFilter] = useState('All');
    const { tasks } = useStateValue();
    useEffect(() => {
        // console.log('am in tasklist useeffect');
    }, [tasks])

    const blockName = "TaskList";
    const FILTER_MAP = {
        All: () => true,
        Active: task => !task.completed,
        Completed: task => task.completed
    };

    const renderButtonGroup = () => {
        return Object.keys(FILTER_MAP).map(value => {
            return <button key={value} onClick={(e) => { e.preventDefault(); setFilter(value); }}
                className={`btn ${blockName}-toggle-btn`}>{value}</button>
        });
    }
    const filteredTasks = tasks.filter(FILTER_MAP[filter]);
    const tasksLengthTitle = filteredTasks.length > 1 ? 'Tasks remaining' : 'Task remaining';
    return (
        <div className={blockName}>
            {/* buttons for applying filters */}
            <div className={`${blockName}-btn-group`}>
                {renderButtonGroup()}
            </div>
            {/* task count remaining  */}
            <h2>{filteredTasks.length} {tasksLengthTitle}</h2>
            {/* display list of all tasks/filtered tasks */}
            {
                filteredTasks.map(item => {
                    return <Task key={item.id} title={item.title} id={item.id} completed={item.completed} />
                })
            }
        </div>
    )
}

export default TaskList;