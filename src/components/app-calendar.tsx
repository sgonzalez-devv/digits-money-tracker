"use client"

import { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type Props = {
    selected: Date[];
    onSelect: () => void;
}

export default function AppCalendar({selected, onSelect}: Props) {

    return (
        <Card className="flex flex-col drop-shadow-md w-[400px] justify-center items-center">
            <CardHeader className="items-center pb-0">
                <CardTitle>Payment Dates</CardTitle>
                <CardDescription>Check the days that you have reccurring payments.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <Calendar
                    mode="multiple"
                    selected={selected}
                    onSelect={onSelect}
                />
            </CardContent>
        </Card>
    )
}
