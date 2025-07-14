import { createBrowserRouter } from "react-router-dom";
import Signin from "./Components/Signin.tsx";
import Signup from "./Components/Signup.tsx";
import Layout from "./Layout.tsx";
import ProtectedRoute from "./Components/ProtectedRoute.tsx";
import Home from "./Components/Home.tsx";

export const router = createBrowserRouter([{
    path: "/",
    element: <ProtectedRoute />,
    children: [{
        index: true,
        element: <Home />
    }]
},
{
    path: "/",
    element: <Layout />,
    children: [
        { path: "/signup", element: <Signup /> },
        { path: "/signin", element: <Signin /> },
    ]
}
])