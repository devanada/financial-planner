"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";

import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarWrapper() {
  const chartData: ChartData<"bar"> = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Expense",
        borderRadius: 20,
        data: [65, 59, 20, 81, 56, 55, 40],
        backgroundColor: "rgba(1, 98, 255, 1)",
        barThickness: 10,
      },
    ],
  };
  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        align: "start",
        text: "Spend Overview",
        display: true,
        color: "#fff",
        font: {
          size: 24,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#f7f9f9",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#f7f9f9",
        },
        grid: {
          display: true,
          color: "#21262d",
        },
      },
    },
  };

  return (
    <div className="relative flex h-full w-full rounded-xl border border-dark-3 bg-dark-2 p-6">
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default BarWrapper;
