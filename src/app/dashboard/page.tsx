"use client"

import AppCalendar from "@/components/app-calendar";
import AppCryptoPortfolio from "@/components/app-cryptos-portfolio";
import AppBarChart from "@/components/bar-chart";
import { AppPieDonutChart } from "@/components/pie-chart-donut-text";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig } from "@/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { useState } from "react";

const chartConfig = {
    month1: {
        label: "Month 1",
        color: "#2563eb",
    },
    month2: {
        label: "Month 2",
        color: "#60a5fa",
    },
} satisfies ChartConfig

const chartData = [
    { month: "Jan-Feb", month1: 20, month2: 80 },
    { month: "Mar-Apr", month1: 130, month2: 200 },
    { month: "May-Jun", month1: 237, month2: 270 },
    { month: "Jul-Aug", month1: 200, month2: 230 },
    { month: "Sep-Oct", month1: 300, month2: 130 },
    { month: "Nov-Dec", month1: 214, month2: 140 },
]

// pie chart data

const pieChartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
};

const pieChartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

export default function Dashboard() {
    const [date, setDate] = useState<Date[]>()

    return (
        <div>
            <div className="flex flex-wrap gap-5 mt-8">
                <Card className="flex flex-col  drop-shadow-md">
                    <CardHeader className="items-center pb-3">
                        <CardTitle>Savings Account Growth</CardTitle>
                        <CardDescription>Check the growth of your savings account by month.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-3">
                        <AppBarChart chartConfig={chartConfig} chartData={chartData} />
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by <span className={`flex gap-2 text-sm text-green-700 font-medium`}>(+2.83%) <TrendingUp className="h-4 w-4" /></span>
                        </div>
                        <div className="leading-none text-muted-foreground">
                            Showing total savings for the last 12 months
                        </div>
                    </CardFooter>
                </Card>

                <div className="max-w-[400px] bg-white rounded-md p-4 drop-shadow-md">
                    <AppPieDonutChart
                        chartTitle="Expenses by Category"
                        chartDescription="December 2024"
                        footerText="IDK what to place here"
                        footerSubText="neither here"
                        chartData={pieChartData}
                        chartConfig={pieChartConfig}
                    />
                </div>

                <AppCalendar selected={date} onSelect={setDate} />

                <AppCryptoPortfolio />



            </div>
        </div>
    )
}