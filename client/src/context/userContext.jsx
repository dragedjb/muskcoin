import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

// Export this so Login.jsx and Register.jsx can use it!
export const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
    withCredentials: true
});

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if(!user) {
            API.get('/profile')
            .then(({data}) => {
                setUser(data);
                setReady(true);
            })
            .catch(() => {
                setUser(null);
                setReady(true);
            });
        }
    }, [user]);

    const logout = () => {
        setUser(null);
    };

    return(
        <UserContext.Provider value={{user, setUser, ready, logout}}>
            {children}
        </UserContext.Provider>
    );
}