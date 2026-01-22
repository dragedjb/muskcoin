import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if(!user) {
            axios.get('/profile', { withCredentials: true })
            .then(({data}) => {
                setUser(data);
                setReady(true);
            })
            .catch(() => setReady(true))
        }
    }, [user])

    const logout = () => {
        setUser(null);
    }
    return(
        <UserContext.Provider value={{user, setUser, ready, logout}}>
            {children}
        </UserContext.Provider>
    )
}