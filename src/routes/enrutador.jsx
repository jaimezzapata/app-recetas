import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import Vegetarianas from '../pages/recetas/Vegetarianas'
import NoVegetarianas from '../pages/recetas/NoVegetarianas'
import Register from "../pages/auth/Register";
export let enrutadorApp = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: 'vegetarianas',
                element: <Vegetarianas />
            },
            {
                path: 'no-vegetarianas',
                element: <NoVegetarianas />
            }
        ]
    },
]