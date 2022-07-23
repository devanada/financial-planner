import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotificationsProvider } from "@mantine/notifications";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import { reduxAction } from "../utils/redux/actions/action";
import { ThemeContext } from "../utils/context";
import Home from "../pages/";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

axios.defaults.baseURL =
  "https://virtserver.swaggerhub.com/JerryBE1709/planner/1.0.0/";

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
      dispatch(reduxAction("IS_LOGGED_IN", true));
    } else {
      dispatch(reduxAction("IS_LOGGED_IN", false));
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
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </NotificationsProvider>
  );
}
