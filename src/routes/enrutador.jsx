import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
export let enrutadorApp = [
    {
        element: <Login />,
        path: "/login",
    },
    {
        path: "/",
        element: <Dashboard />,
    },
]