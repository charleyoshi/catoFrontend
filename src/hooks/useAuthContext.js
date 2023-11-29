import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// hook function
export const useAuthContext = () => {
    const context = useContext(AuthContext) // This hook returns to us the `value` of the <Provider/> component ({{state, dispatch}})

    if (!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context
}