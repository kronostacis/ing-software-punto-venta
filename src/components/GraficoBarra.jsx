"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function GraficoBarra({ title, data, xKey, yKey }) {
  return (
    <div className="w-full bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={yKey} fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}