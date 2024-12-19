"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

type ChartDataItem = {
    browser: string;
    visitors: number;
    fill: string;
};

type ChartConfiguration = {
    [key: string]: {
        label: string;
        color: string;
    };
};

type Props = {
    chartTitle: string;
    chartDescription: string;
    footerText: string;
    footerSubText: string;
    chartData: ChartDataItem[];
    chartConfig: ChartConfiguration;
};

export function AppPieDonutChart({
    chartTitle,
    chartDescription,
    footerText,
    footerSubText,
    chartData,
    chartConfig,
}: Props) {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
    }, [chartData]);

    return (
        <Card className="flex flex-col border-0 shadow-none">
            <CardHeader className="items-center pb-0">
                <CardTitle>{chartTitle}</CardTitle>
                <CardDescription>{chartDescription}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Spent this month
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    {footerText} <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    {footerSubText}
                </div>
            </CardFooter>
        </Card>
    );
}
