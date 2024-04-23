import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import Counter from "../components/Counter";
import Layout from "../components/Layout";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Counter />,
            },
            {
                path: "/about",
                element: <h3>About</h3>,
            },
        ],
    },
    { path: "/login", element: <h3>Login</h3> },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                index: true,
                element: <h3>Admin</h3>,
            },
            {
                path: "/admin/about",
                index: true,
                element: <h3>admin about</h3>,
            },
        ],
    },
]);

export default MainRouter;