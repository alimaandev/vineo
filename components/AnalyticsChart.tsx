// components/AnalyticsChart.tsx – Recharts line chart visualization
import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

interface AnalyticsChartProps {
  title: string;
  // Data format: array of { x: string | number, y: number }
  data?: { x: string | number; y: number }[];
}

// Simple line chart with dummy data if none provided
const defaultData = [
  { x: 'Jan', y: 30 },
  { x: 'Feb', y: 45 },
  { x: 'Mar', y: 28 },
  { x: 'Apr', y: 60 },
  { x: 'May', y: 55 },
  { x: 'Jun', y: 70 },
];

export default function AnalyticsChart({ title, data }: AnalyticsChartProps) {
  const chartData = data ?? defaultData;

  return (
    <div className="bg-[#1A1A1D] rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold text-[#F4F4F6] mb-2">{title}</h2>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="x" stroke="#F4F4F6" />
            <YAxis stroke="#F4F4F6" />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#00F0FF" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
