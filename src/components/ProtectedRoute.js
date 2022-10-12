import React from "react"
import { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { LoggedInStatus } from "../contexts/LoggedInStatus"

// этот компонент принимает другой компонент в качестве пропса component
// он также может взять неограниченное число пропсов ...props и передать их новому компоненту 
const ProtectedRoute = ({ component: Component, ...props }) => {

    const loggedIn = useContext(LoggedInStatus)
    
    return (
        <Route>
            {() =>
                loggedIn ? <Component {...props} /> : <Redirect to="./sign-in" />
            }
        </Route>
    )
}

export default ProtectedRoute