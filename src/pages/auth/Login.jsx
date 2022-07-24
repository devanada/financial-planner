import { showNotification } from "@mantine/notifications";
import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { reduxAction } from "../../utils/redux/actions/action";
import Layout from "../../components/Layout";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    document.title = "Financial Planner - Login";
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    await axios
      .post("login", body)
      .then((res) => {
        const { data } = res;
        if (typeof data === "string") {
          showNotification({
            title: "Login Failed",
            message: data,
            color: "red",
            autoClose: 3000,
          });
        } else {
          localStorage.setItem("UserData", JSON.stringify(data.data));
          localStorage.setItem("auth", JSON.stringify(body));
          dispatch(
            reduxAction("IS_LOGGED_IN", { isLoggedIn: true, user: data })
          );
          showNotification({
            title: "Login Successful",
            message: "Hey there! Welcome back to Financial Planner",
            color: "green",
            autoClose: 3000,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        const { message } = err.response.data;
        showNotification({
          title: "Login Failed",
          message: message,
          color: "red",
          autoClose: 3000,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <form
          className="flex flex-col gap-4 min-w-[40%]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <CustomInput
            id="input-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            id="input-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-black dark:text-white">
            Don't have an account? Register{" "}
            <Link id="to-register" className="font-bold" to="/register">
              here!
            </Link>
          </p>
          <CustomButton
            id="btn-login"
            label="Login"
            loading={loading || disabled}
          />
        </form>
      </div>
    </Layout>
  );
}
