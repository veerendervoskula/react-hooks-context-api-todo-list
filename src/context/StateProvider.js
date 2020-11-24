import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import useHttp from "../hooks/http";
import { ThemeProvider } from 'styled-components'
import { themeStyle, GlobalStyles } from '../styles'
import { useLocalStorage } from "../hooks/localStorage";

//for creating react global context
export const StateContext = createContext();

//build a provider for wrapping entire application with the provider to get access to entire app state
export const StateProvider = ({ reducer, initialState, children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [theme, setTheme] = useState(() => {
        const storedValue = localStorage.getItem('theme');
        return storedValue === null ? 'light' : JSON.parse(storedValue);
    });

    const toggleTheme = () => {
        setTheme((prevState) => {
            if (prevState === "light") {
                return "dark";
            } else {
                return "light";
            }
        });
    };

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
    const customTheme = themeStyle[theme];
    
    return <StateContext.Provider
        value={{
            tasks: state.tasks,
            theme: theme,
            toggleTheme,
            completeTask,
            removeTask,
            addTask,
            updateTask
        }}>
        <ThemeProvider theme={customTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    </StateContext.Provider>
}

export const useStateValue = () => useContext(StateContext)