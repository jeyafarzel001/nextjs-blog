import React, { createContext, useState } from "react";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: "",
    });


    return (
        <Provider
            value={{
                authState,
                setAuthState,
            }}
        >
            {children}
        </Provider>
    );
};

export { AuthContext, AuthProvider };