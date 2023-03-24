import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import SignUp from "./SignUp";

export const router = createBrowserRouter([
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
]);
