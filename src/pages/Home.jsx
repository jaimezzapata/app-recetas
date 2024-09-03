import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./Dashboard";
let router = createBrowserRouter([
  {
    element: <Login />,
    path: "/login",
  },
  {
    path: "/",
    element: <Dashboard />,
  },
]);

const Home = () => {
  return <RouterProvider router={router} />;
};

export default Home;
