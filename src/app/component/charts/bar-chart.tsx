"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, Legend, ResponsiveContainer, YAxis } from "recharts"

import {
    ChartConfig,
} from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"



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

export function BarChartComponant() {
    React.useState<keyof typeof chartConfig>("desktop")

    const data = [
        { name: 'XS', value: 70, fill: '#7D4283' },
        { name: 'S', value: 120, fill: '#F3722C' },
        { name: 'M', value: 175, fill: '#F8961E' },
    ];

    const legendItems = [
        { label: 'Product 1', color: '#7D4283' },
        { label: 'Product 2', color: '#F3722C' },
        { label: 'Product 3', color: '#F8961E' },
    ];


    const customLegend = () => {

        return (
            <ul className="list-disc pl-5 text-sm text-white flex gap-15 ml-10">
                {legendItems.map((entry: any, index: number) => (
                    <li key={`item-${index}`} className="flex items-center gap-2">
                        <span
                            className="w-3 h-3 rounded-full inline-block"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-white text-sm">{entry.label}</span>
                    </li>
                ))}
            </ul>
        );
    };
    return (


        <Card className="bg-[#1E1E1E] border-none rounded-none pt-2">
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b-2 border-b-[#4F4D4D] sm:flex-row ">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-2  min-h-[109px] ">
                    <CardTitle className="text-white text-[20px] font-Regular">Net Profit</CardTitle>
                    <CardDescription className="text-[#BDBDBD] text-[12px] font-Regular">
                         <p className="text-[#BDBDBD] mb-4 text-[12px] font-Regular">2024</p>
                    </CardDescription>
                </div>
                <div className="self-center mr-6">
                    <img src="./assets/alert-icon.png" className="w-[24px] h-[21.92px]" alt="" />
                </div>
            </CardHeader>
            <CardContent >


                <ResponsiveContainer width="100%" height={351.7}>

                    <BarChart data={data} barCategoryGap="10%" barGap={2} barSize={30}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="name" stroke="#aaa" interval={0} />
                        <YAxis
                            stroke="#aaa"
                            domain={[0, 200]}
                            tickCount={9}  
                            ticks={[0, 25, 50, 75, 100, 125, 150, 175, 200]}  
                        />
                        <Tooltip />
                        <Legend content={customLegend} />
                        <Bar dataKey="value" fill="#f1c40f" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

    )
}
