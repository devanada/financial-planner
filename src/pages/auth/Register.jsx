import { showNotification } from "@mantine/notifications";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import Layout from "../../components/Layout";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    document.title = "Financial Planner - Register";
    if (email && password && nama) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password, nama]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      nama,
      password,
    };
    await axios
      .post("users", body)
      .then((res) => {
        const { message, data } = res.data;
        if (data) {
          navigate("/login");
        }
        showNotification({
          title: "Register Successful",
          message: message,
          color: "green",
          autoClose: 3000,
        });
      })
      .catch((err) => {
        const { message } = err;
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
            id="inputEmail"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            id="inputName"
            type="text"
            placeholder="Nama"
            onChange={(e) => setNama(e.target.value)}
          />
          <CustomInput
            id="inputPassword"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-black dark:text-white">
            Already have an account? Login{" "}
            <Link id="to-register" className="font-bold" to="/login">
              here!
            </Link>
          </p>
          <CustomButton
            id="btn-register"
            label="Register"
            loading={loading || disabled}
          />
        </form>
      </div>
    </Layout>
  );
}
