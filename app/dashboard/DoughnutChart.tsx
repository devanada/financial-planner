"use client";

import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from "react";

import type { ChartData, ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

/*
Utilities: Things like electricity, water, internet, etc.
Subscription: Things like Netflix, Spotify, or anything else that recurring.
Transportation: Things like gas, car insurance, etc.
Personal: Things like clothes, food, games, etc.
Household: Things like groceries, cleaning supplies, etc.
Other: Things like gifts, donations, or anything else that not mentioned before.
*/
function DoughnutChart() {
  const data = [12, 19, 3, 5, 2, 3];
  const label = [
    "Utilities",
    "Subscription",
    "Transportation",
    "Personal",
    "Household",
    "Other",
  ];
  const chartData: ChartData<"doughnut"> = {
    labels: label.map((label, index) => `${label}: ${data[index]}`),
    datasets: [
      {
        // label: "# of Votes",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options: ChartOptions<"doughnut"> = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      // title: {
      //   align: "start",
      //   text: "Expenses by Category",
      //   display: true,
      //   color: "#fff",
      //   font: {
      //     size: 24,
      //   },
      // },
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#fff",
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 300,
      },
    },
  };

  return (
    <div className="relative flex h-full w-full flex-col rounded-xl border border-dark-3 bg-dark-2 p-6">
      <p className="mb-6 text-2xl font-bold">Expenses by Category</p>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}

export default DoughnutChart;
