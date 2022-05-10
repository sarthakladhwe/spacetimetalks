import axios from "axios";
import React from "react";

const Context = React.createContext();

function ContextProvider({ children }) {

    const [userDetails, setUserDetails] = React.useState();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [error, setError] = React.useState({
        error: false,
        errorMessage: ""
    });

    React.useEffect(() => {
        if(!userDetails) {
            const storedDetails = JSON.parse(localStorage.getItem("user")) || null
            if(storedDetails) {
                setUserDetails(storedDetails);
                setIsLoggedIn(true);
            }
        }
    },[])

    function userUpdated(data) {
        setUserDetails(data)
        localStorage.setItem("user", JSON.stringify(data))
    }

    // React.useEffect(() => {
    //     const alreadyUser = localStorage.getItem("user") || null;
    //     if(alreadyUser) {
    //         setUserDetails(alreadyUser)
    //     }
    // },[])

    function logoutUser() {
        localStorage.removeItem("user");
        setUserDetails();
        setIsLoggedIn(false);
    }

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
                localStorage.setItem("user", JSON.stringify(res.data))
                window.location.replace("/");
            }
        } catch(err) {
            console.log(err.response.data);
            setError({
                error: true,
                errorMessage: err.response.data
            });
            setIsLoggedIn(false);
        }
    }

    console.log("User details context: ",userDetails);

    return (
        <Context.Provider value={{userDetails, loginWithDetails, logoutUser, userUpdated, isLoggedIn, error}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}