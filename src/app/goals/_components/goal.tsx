import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"


type Props = {
    goalName: string,
    currentBalance: number,
    goalBalance: number,
    initiationDate: Date,
    finishDate: Date,
}

export default function Goal({ ...Props }: Props) {
    return (
        <Card className="drop-shadow-md">
            <CardHeader>
                <CardTitle>{Props.goalName}</CardTitle>
                <div className="flex flex-row justify-between items-center gap-5">
                    <h3>Current Balance: ${Props.currentBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                    <h3>Goal Balance: ${Props.goalBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                </div>
            </CardHeader>
            <CardContent>
                <Progress value={33} className="h-2"/>
                <div className="flex flex-row justify-between mt-3">
                    <h5>Initiation Date: {Props.initiationDate.toLocaleDateString()}</h5>
                    <h5>Finish Date: {Props.finishDate.toLocaleDateString()}</h5>
                </div>
            </CardContent>
        </Card>
    )
}
