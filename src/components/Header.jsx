import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";
import { Menu, Divider } from "@mantine/core";

import { reduxAction } from "../utils/redux/actions/action";
import { ThemeContext } from "../utils/context";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = (mode) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    dispatch(reduxAction("IS_LOGGED_IN", false));
    navigate("/login");
    alert("You have been logged out");
  };

  return (
    <nav className="sticky top-0 w-full px-2 py-2.5 bg-zinc-800 flex justify-between">
      <Link id="to-homepage" className="text-white font-bold" to="/">
        Homepage
      </Link>
      <Menu className="bg-white rounded-full">
        {isLoggedIn && (
          <Menu.Item id="to-profile" onClick={() => navigate("/profile")}>
            Profile
          </Menu.Item>
        )}
        <Menu.Item
          id="btn-mode"
          onClick={() => handleTheme(theme === "dark" ? "light" : "dark")}
          rightSection={theme === "dark" ? <FaSun /> : <FaMoon />}
        >
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </Menu.Item>

        {isLoggedIn && (
          <>
            <Divider />

            <Menu.Item
              id="btn-logout"
              color="red"
              onClick={() => handleLogout()}
            >
              Logout
            </Menu.Item>
          </>
        )}
      </Menu>
    </nav>
  );
};

export default Header;
