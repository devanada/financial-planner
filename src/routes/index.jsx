/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotificationsProvider } from "@mantine/notifications";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import { reduxAction } from "../utils/redux/actions/action";
import { ThemeContext } from "../utils/context";
import Home from "../pages/";
import Profile from "../pages/Profile";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

axios.defaults.baseURL = "https://immense-spire-81553.herokuapp.com/";

export default function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const getData = localStorage.getItem("UserData");
    if (getData) {
      const getAuth = JSON.parse(localStorage.getItem("auth"));
      const parseData = JSON.parse(getData);
      axios.defaults.auth = {
        username: getAuth.email,
        password: getAuth.password,
      };
      dispatch(
        reduxAction("IS_LOGGED_IN", { isLoggedIn: true, user: parseData })
      );
    } else {
      axios.defaults.auth = {
        username: "",
        password: "",
      };
      dispatch(reduxAction("IS_LOGGED_IN", { isLoggedIn: false, user: {} }));
    }
  }, [isLoggedIn]);

  return (
    <NotificationsProvider>
      <ThemeContext.Provider value={background}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/register"
              element={isLoggedIn ? <Navigate to="/" /> : <Register />}
            />
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </NotificationsProvider>
  );
}
