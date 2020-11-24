import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue === null ? defaultValue : JSON.parse(storedValue);
    });

    useEffect(() => {
        const listener = (e) => {
            if (e.storageArea === localStorage && e.key === key) {
                setValue(JSON.parse(e.newValue));
            }
        };
        window.addEventListener("storage", listener);

        return () => {
            window.removeEventListener("storage", listener);
        };
    }, []);

    const setValueInLocalStorage = (newValue) => {
        setValue((currValue) => {
            const result = typeof newValue === 'function' ? newValue(currValue) : newValue;
            localStorage.setItem(key, JSON.stringify(result))
            return result;
        })
    }

    return [value, setValueInLocalStorage];
}