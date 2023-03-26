import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from "./Layout";
import Login from "./Login";
import Profile from "./Profile";
import SignUp from "./SignUp";
import Tenant from "./Tenant";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "tenant",
        element: <Tenant />,
      },
    ],
  },
]);
