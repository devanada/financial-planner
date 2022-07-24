import { showNotification } from "@mantine/notifications";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function Profile() {
  const user = useSelector((state) => state.user);
  const [objSubmit, setObjSubmit] = useState({});
  const [email, setEmail] = useState(user.email);
  const [nama, setNama] = useState(user.nama);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .put(`users/${user.ID}`)
      .then((res) => {
        const { message, data } = res.data;
        localStorage.setItem("UserData", JSON.stringify(data));
        showNotification({
          title: "Update Successful",
          message: message,
          color: "green",
          autoClose: 3000,
        });
      })
      .catch((err) => {
        const { message } = err;
        showNotification({
          title: "Update Failed",
          message: message,
          color: "red",
          autoClose: 3000,
        });
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <Layout>
      <div className="w-full h-full flex items-center justify-center gap-4">
        <form
          className="flex flex-col gap-4 min-w-[60%] p-8 rounded-3xl bg-white shadow-lg shadow-black border border-neutral-600"
          onSubmit={(e) => handleSubmit(e)}
        >
          <CustomInput
            id="input-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleChange(e.target.value, "email");
            }}
          />
          <CustomInput
            id="input-name"
            type="text"
            placeholder="Name"
            value={nama}
            onChange={(e) => {
              setNama(e.target.value);
              handleChange(e.target.value, "first_name");
            }}
          />
          <CustomButton id="btn-update" label="Update" loading={loading} />
        </form>
      </div>
    </Layout>
  );
}
