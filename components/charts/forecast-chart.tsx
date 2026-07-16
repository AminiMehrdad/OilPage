"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { ProductionPoint } from "@/lib/types/domain";

export function ForecastChart({ data }: { data: ProductionPoint[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 4, right: 12, top: 12 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="oilRate"
            name="Oil rate"
            stroke="#0891b2"
            strokeWidth={3}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="waterRate"
            name="Water rate"
            stroke="#f97316"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
