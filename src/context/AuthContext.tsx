// Import necessary dependencies
import { useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";

import { IUser } from "@/types";
import { getCurrentUser } from "@/lib/appwrite/api";

// Define initial user state
export const INITIAL_USER = {
    id: "",
    name: "",
    username: "",
    email: "",
    imageUrl: "",
    bio: "",
};

// Define initial state for the context
const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => { },
    setIsAuthenticated: () => { },
    checkAuthUser: async () => false as boolean,
};

// Define the shape of the context
type IContextType = {
    user: IUser;
    isLoading: boolean;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    checkAuthUser: () => Promise<boolean>;
};

// Create the context
const AuthContext = createContext<IContextType>(INITIAL_STATE);

// Define the provider for the context
export function AuthProvider({ children }: { children: React.ReactNode }) {
    // Hook for navigation
    const navigate = useNavigate();
    // State hooks for user, authentication status and loading status
    const [user, setUser] = useState<IUser>(INITIAL_USER);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Function to check if user is authenticated
    const checkAuthUser = async () => {
        setIsLoading(true);
        try {
            const currentAccount = await getCurrentUser();
            if (currentAccount) {
                setUser({
                    id: currentAccount.$id,
                    name: currentAccount.name,
                    username: currentAccount.username,
                    email: currentAccount.email,
                    imageUrl: currentAccount.imageUrl,
                    bio: currentAccount.bio,
                });
                setIsAuthenticated(true);

                return true;
            }

            return false;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    // Effect hook to check user authentication on component mount
    useEffect(() => {
        const cookieFallback = localStorage.getItem("cookieFallback");
        // cookieFallback === "[]" ||
        // cookieFallback === null ||
        // cookieFallback === undefined
        if (
            cookieFallback === "[]" ||
            cookieFallback === null
        ) {
            navigate("/sign-in");
        }

        checkAuthUser();
    }, []);

    // Define the value to be provided
    const value = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser,
    };

    // Return the provider component
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use the AuthContext
export const useUserContext = () => useContext(AuthContext);