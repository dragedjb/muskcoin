import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

// 1. Configure the API instance (Handles switching between Render and Localhost)
const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Only fetch if we don't have a user and aren't ready yet
        if(!user) {
            // 2. Use the 'API' instance instead of 'axios'
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
        // You might want to call API.post('/logout') here in the future
        setUser(null);
    };

    return(
        <UserContext.Provider value={{user, setUser, ready, logout}}>
            {children}
        </UserContext.Provider>
    );
}