import React, { createContext, useState, useEffect } from "react";

import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUserId = localStorage.getItem("userId");
        return storedUserId ? storedUserId : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("userId", user);
        } else {
            localStorage.removeItem("userId");
        }
    }, [user]);

    const login = (token) => {
        const tokenObj = jwtDecode(token);
        const userId = tokenObj.userId;

        setUser(userId);
        localStorage.setItem("userId", userId);
        localStorage.setItem("authToken", token);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("userId");
        localStorage.removeItem("authToken");
    };

    const contextValue = { user, login, logout };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
