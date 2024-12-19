"use client"

import { ChartContainer, type ChartConfig } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartConfiguration } from "@/types/barChartTypes/chartConfig"
import { ChartDataItem } from "@/types/barChartTypes/chartData"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

type Props = {
    chartConfig: ChartConfiguration;
    chartData: ChartDataItem[];
};


export default function AppBarChart({ chartConfig, chartData }: Props) {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                {Object.entries(chartConfig).map(([key, config]) => (
                    <Bar
                        key={key}
                        dataKey={key}
                        fill={config.color}
                        name={config.label}
                        radius={4}
                    />
                ))}
            </BarChart>
        </ChartContainer>
    )
}