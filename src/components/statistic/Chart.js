import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  layout: {
    padding: {
      //   top: 20,
    },
    borderWidth: 10,
  },
};

const labels = ["1st Week", "2nd Week", "3rd Week", "4th Week"];

const dataPemasukan = [170, 130, 110, 140];
const dataPengeluaran = [60, 160, 120, 80];

export const data = {
  labels,
  datasets: [
    {
      label: "Pemasukan (Ribuan)",
      data: dataPemasukan,
      backgroundColor: "rgba(140, 63, 219, 0.8)",
      //   barThickness: 20,
      //   margin:
    },
    {
      label: "Pengeluaran (Ribuan)",
      data: dataPengeluaran,
      backgroundColor: "rgba(219, 63, 63, 0.8)",
      //   barThickness: 20,
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}
