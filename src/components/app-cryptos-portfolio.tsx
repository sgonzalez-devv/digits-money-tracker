"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { LabelList, Pie, PieChart } from "recharts"
import { Plus } from "lucide-react"
import AppAddCryptoDialog from "./dialogs/app-add-crypto-dialog"


const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
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
} satisfies ChartConfig

const tableData = [
    { crypto: "Ripple", symbol: "XRP", initialMarketCap: "146B", initialPrice: 2.56, profit: 3.33 },
    { crypto: "Ripplee", symbol: "XRP", initialMarketCap: "146B", initialPrice: 2.56, profit: 3.33 },
    { crypto: "Rippleee", symbol: "XRP", initialMarketCap: "146B", initialPrice: 2.56, profit: 3.33 },
    { crypto: "Rippleeee", symbol: "XRP", initialMarketCap: "146B", initialPrice: 2.56, profit: 3.33 },
]

export default function AppCryptoPortfolio() {
    return (
        <Card className="drop-shadow-md w-full">
            <CardHeader className="flex flex-row justify-between items-center">
                <div>
                    <CardTitle>Crypto Portfolio</CardTitle>
                    <CardDescription>See al the details of your crypto portfolio.</CardDescription>
                </div>
                <Dialog>
                    <DialogTrigger className="flex gap-3 bg-gray-700 px-3 py-2 rounded-lg text-white"><Plus /> Add Coin</DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-xl">Add a new crypto currency to your portfolio</DialogTitle>
                            <DialogDescription>
                                Add another crypto to track its potential, growth and wallet performance.
                            </DialogDescription>
                        </DialogHeader>
                        <AppAddCryptoDialog />
                    </DialogContent>
                </Dialog>

            </CardHeader>
            <CardContent className="flex">
                <div>
                    <CryptoPieChart />
                </div>
                <div className="w-full">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Crypto</TableHead>
                                <TableHead>Symbol</TableHead>
                                <TableHead>Initial Market Cap</TableHead>
                                <TableHead>Initial Price</TableHead>
                                <TableHead>Profit</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {tableData.map((item) => (
                                <TableRow key={item.crypto} className="">
                                    <TableCell className="font-medium">{item.crypto}</TableCell>
                                    <TableCell className="font-medium">{item.symbol}</TableCell>
                                    <TableCell className="font-medium">{item.initialMarketCap}</TableCell>
                                    <TableCell className="font-medium">{item.initialPrice}</TableCell>
                                    <TableCell className="font-medium">{item.profit}%</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>
            </CardContent>
        </Card>
    )
}

const CryptoPieChart = () => {
    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardDescription>Coin Allocation</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square h-[300px] [&_.recharts-text]:fill-background"
                >
                    <PieChart>
                        <ChartTooltip
                            content={<ChartTooltipContent nameKey="visitors" hideLabel />}
                        />
                        <Pie data={chartData} dataKey="visitors">
                            <LabelList
                                dataKey="browser"
                                className="fill-background"
                                stroke="none"
                                fontSize={12}
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label
                                }
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
