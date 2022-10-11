import React from "react"
import { Route, Redirect } from "react-router-dom"

// этот компонент принимает другой компонент в качестве пропса component
// он также может взять неограниченное число пропсов ...props и передать их новому компоненту 
const ProtectedRoute = ({ component: Component, ...props }) => {
    debugger
    return (
        <Route>
            {() =>
                props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-in" />
            }
        </Route>
    )
}

export default ProtectedRoute