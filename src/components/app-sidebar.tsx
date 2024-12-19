import { Wallet, Home, Settings, Building2, Goal } from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"

const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Accounts",
        url: "/accounts",
        icon: Building2,
    },
    {
        title: "Goals",
        url: "/goals",
        icon: Goal,
    },
    {
        title: "Income & Expenses",
        url: "/money-management",
        icon: Wallet,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    }
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent className="bg-gray-800 text-white">
                <div className="flex justify-center py-5">
                    <h1 className="text-3xl font-bold">Digits Tracker</h1>
                </div>
                <SidebarSeparator />
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-3 mt-3">
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton className="text-lg" asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}