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
    <div className="w-full bg-white p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <XAxis dataKey={xKey} tickLine={false} axisLine={false} className="text-sm text-gray-600" />
          <YAxis tickLine={false} axisLine={false} className="text-sm text-gray-600" />
          <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} />
          <Bar dataKey={yKey} fill="#4F46E5" stroke="#3730A3" strokeWidth={1} cursor="pointer" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}