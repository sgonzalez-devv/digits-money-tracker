"use client"

import { CurrencyCode } from "@/enums/currencies"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Minus, Plus } from "lucide-react"
import Link from "next/link"

type Props = {
    cardTitle: string,
    accountGrowth: string,
    accountBalance: number,
    accountCurrency: CurrencyCode
}

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
    mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

const AppAccountCard = ({ ...Props }: Props) => {
    return (
        <Card className="drop-shadow-md">
            <CardHeader className="flex flex-row justify-between items-start">
                <div>
                    <CardTitle className="text-md">{Props.cardTitle}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-black">${Props.accountBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</CardDescription>
                    <p className="text-xs">{Props.accountGrowth}</p>
                </div>
                <div>
                    <Link className="bg-black text-white text-sm font-medium rounded-md px-3 py-2" href={"/accounts/account-details"} >View Details</Link>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[180px]">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                            left: 12,
                            right: 12,
                        }}
                    >
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Line
                            dataKey={"desktop"}
                            type="natural"
                            stroke="black"
                            strokeWidth={2}
                            dot={{
                                fill: "white",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-black"
                                fontSize={12}
                            />
                        </Line>
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default AppAccountCard