import axios from "axios";
import React from "react";

const Context = React.createContext();

function ContextProvider({ children }) {

    const [userDetails, setUserDetails] = React.useState({});
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [error, setError] = React.useState({
        error: false,
        errorMessage: ""
    });

    async function loginWithDetails(loginDetails) {
        try {
            const res = await axios.post("/auth/login", {
                username: loginDetails.username,
                password: loginDetails.password
            });
            if(res.data) {
                setUserDetails(res.data);
                setIsLoggedIn(true);
                setError(false);
            }
            res.data && window.location.replace("/");
        } catch(err) {
            console.log(err.response.data);
            setError({
                error: true,
                errorMessage: err.response.data
            });
            setIsLoggedIn(false);
        }
    }

    console.log(userDetails);

    return (
        <Context.Provider value={{userDetails, loginWithDetails, isLoggedIn, error}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}