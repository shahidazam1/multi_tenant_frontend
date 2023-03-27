import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div>
        <Link style={{ marginLeft: "20px" }} to="/profile">
          profile
        </Link>
        <Link style={{ marginLeft: "20px" }} to="/address">
          address
        </Link>
        <Link style={{ marginLeft: "20px" }} to="/signup">
          signup
        </Link>
        <Link style={{ marginLeft: "20px" }} to="/tenant">
          tenant
        </Link>
        <Link style={{ marginLeft: "20px" }} to="/login">
          login
        </Link>
        <Link
          style={{ marginLeft: "20px" }}
          to="http://localhost:3000/login"
          onClick={() => localStorage.removeItem("token")}
        >
          logout
        </Link>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
