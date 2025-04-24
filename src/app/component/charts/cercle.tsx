"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, Legend, ResponsiveContainer, YAxis, PieChart, Pie, Cell } from "recharts"

import {
  ChartConfig,
} from "@/components/ui/chart"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"



const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function CercleChartComponant() {
  React.useState<keyof typeof chartConfig>("desktop")

  const data = [
    { name: 'Product 1', value: 50 },
    { name: 'Product 2', value: 50 },
  ];

  const COLORS = ['#7D4283', '#F3722C'];


  const customLegend = () => {

    return (
      <ul className="flex gap-8 text-white text-sm mt-4">
        {data.map((entry, index) => (
          <li key={`legend-${index}`} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span>{entry.name}</span>
          </li>
        ))}
      </ul>
    );
  };


  return (
    <Card className="bg-[#1E1E1E] border-none rounded-none pt-2">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b-2 border-b-[#4F4D4D] sm:flex-row ">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-2 min-h-[109px]">
          <CardTitle className="text-white text-[20px] font-Regular">Primary Text</CardTitle>
          <CardDescription >

            <p className="text-white text-[17px] font-Medium">5.987,34</p>
            <p className="text-[#BDBDBD] mb-4 text-[12px] font-Regular">Secondary text</p>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-5" >

        <ResponsiveContainer width="100%" minHeight={330}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={0}
              labelLine={false}
              dataKey="value"
              label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) / 2;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    fill="#fff"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={12}
                    fontWeight="bold"
                  >
                    {(percent * 100).toFixed(0)}%
                  </text>
                );
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
              ))}
            </Pie>
            <Legend content={customLegend} />
          </PieChart>
        </ResponsiveContainer>

      </CardContent>
    </Card>
  )
}
