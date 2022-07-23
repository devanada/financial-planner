import React from "react";

function CustomButton({ id, label, loading, onClick }) {
  return (
    <button
      id={id}
      className={`bg-blue-900 text-white font-bold py-2 px-4 rounded-full border border-white ${
        loading && "bg-gray-700 cursor-not-allowed"
      }`}
      onClick={onClick}
      disabled={loading}
    >
      {label}
    </button>
  );
}

export default CustomButton;
