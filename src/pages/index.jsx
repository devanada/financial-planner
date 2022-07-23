import { showNotification } from "@mantine/notifications";
import React, { useState, useEffect } from "react";
import { Loader } from "@mantine/core";
import axios from "axios";

import Layout from "../components/Layout";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function App() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [notes, setNotes] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  useEffect(() => {
    if (notes && amount && type) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [notes, amount, type]);

  useEffect(() => {
    document.title = "Financial Planner - Home";
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsReady(true);
    await axios
      .get("balance")
      .then((res) => {
        const { data } = res.data;
        setDatas(data);
      })
      .catch((err) => {})
      .finally(() => setIsReady(false));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const endpoint = type === "income" ? "income" : "expense";
    const body = {
      notes,
      amount,
    };
    await axios
      .get(endpoint, body)
      .then((res) => {
        const { message } = res.data;
        showNotification({
          title: "Register Successful",
          message: message,
          color: "green",
          autoClose: 3000,
        });
        setNotes("");
        setAmount("");
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

  const format = (amount) => {
    return Number(amount)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col p-8 rounded-3xl min-w-[60%] bg-white shadow-lg shadow-black border border-neutral-600">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <CustomInput
              id="input-notes"
              placeholder="Notes"
              onChange={(e) => setNotes(e.target.value)}
            />
            <CustomInput
              id="input-amount"
              type="number"
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <CustomInput
              id="input-type"
              placeholder="Amount"
              type="select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <CustomButton
              id="btn-login"
              label="Submit"
              loading={loading || disabled}
            />
          </form>
        </div>
        <div className="flex flex-col items-center p-8 mb-5 rounded-3xl min-w-[60%] bg-white shadow-lg shadow-black border border-neutral-600 gap-2">
          <h2 className="text-center font-bold text-3xl underline">
            Balance History
          </h2>
          {isReady ? (
            <Loader color="gray" />
          ) : (
            datas.map((data) => (
              <div
                className="w-full flex justify-between border-b pb-2"
                key={data.id}
              >
                <p className="text-lg font-medium">{data.notes}</p>
                <p className="text-white bg-green-500 rounded-full p-2 font-light">
                  Rp. {format(data.amount)}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}
