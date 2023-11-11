import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import style from "./AdminLogin.module.css";


function AdminLogin() {
  const [admin, setAdmin] = useState({
    admin_name: "",
    admin_password: "",
  });

  let history = useHistory();

  async function login() {
    try {
      // Assuming that there's only one admin user in the data
      const value = await axios.get("http://localhost:3333/admin");

      // Always redirect to AdminDashboard without checking credentials
      history.push("/AdminDashboard");
    } catch (error) {
      console.error("Error fetching admin data", error);
      // Handle error if needed
    }
  }

  return (
    <div id={style.container}>
      <div id={style.containerHeadingBox}>
        <h1>Admin Login</h1>
      </div>

      <div id={style.emailBox}>
        <label htmlFor="email">
          Email
          <input
            name="admin_name"
            onChange={(e) => setAdmin({ ...admin, [e.target.name]: e.target.value })}
            type="text"
            id={style.email}
          />
        </label>
      </div>

      <div id={style.passwordBox}>
        <label htmlFor="password">
          Password
          <input
            name="admin_password"
            onChange={(e) => setAdmin({ ...admin, [e.target.name]: e.target.value })}
            type="password"
            id={style.password}
          />
        </label>
      </div>

      <button onClick={() => login()} id={style.login}>
        Login
      </button>

      <NavLink to="/" id={style.goBackLink}>
        Go Back
      </NavLink>
    </div>
  );
}

export default AdminLogin;
