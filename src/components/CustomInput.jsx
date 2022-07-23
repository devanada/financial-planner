import React from "react";

function CustomInput({ id, type, placeholder, value, onChange, disabled }) {
  if (type === "select") {
    return (
      <select
        className="bg-slate-200 rounded-lg text-black p-2 border focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
        name={placeholder}
        id={id}
        onChange={onChange}
        disabled={disabled}
        value={value}
      >
        <option value="" disabled>
          Type
        </option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    );
  } else {
    return (
      <input
        id={id}
        className="bg-slate-200 rounded-lg text-black font-semibold p-2 border focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
        type={type}
        placeholder={placeholder}
        // value={value}
        onChange={onChange}
        disabled={disabled}
        defaultValue={value}
      />
    );
  }
}

export default CustomInput;
