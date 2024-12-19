import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function AppHeader() {
    return (
        <div className="bg-gray-100 drop-shadow-lg">
            <div className="flex justify-between items-center py-5 px-5">
                <h1 className="text-3xl font-semibold">Good Morning, Samuel</h1>
                <Avatar className="bg-gray-300">
                    <AvatarFallback>SG</AvatarFallback>
                </Avatar>

            </div>
        </div>
    )
}