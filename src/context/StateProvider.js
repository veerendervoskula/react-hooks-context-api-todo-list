import React, { createContext, useContext, useReducer } from "react";
import useHttp from "../hooks/http";

//for creating react global context
export const StateContext = createContext();

//build a provider for wrapping entire application with the provider to get access to entire app state
export const StateProvider = ({ reducer, initialState, children }) => {
    console.log('am in StateProvider');
    // const [isLoading, data] = useHttp('https://api-nodejs-todolist.herokuapp.com/task',[]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const removeTask = (id) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        });
    };

    const addTask = (task) => {
        dispatch({
            type: 'ADD_TASK', 
            payload: task
        });
    }

    const updateTask = (task) => {
        dispatch({
            type: 'UPDATE_TASK',
            payload: task
        });
    }

    const completeTask = (task) => {
        dispatch({
            type: 'COMPLETE_TASK',
            payload: task
        });
    }

    return <StateContext.Provider
            value={{
                tasks: state.tasks,
                completeTask,
                removeTask,
                addTask,
                updateTask
            }}>
        {children}
    </StateContext.Provider>
}

export const useStateValue = () => useContext(StateContext)