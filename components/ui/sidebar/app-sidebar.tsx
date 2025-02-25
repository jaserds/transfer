"use client";


import { EarthIcon, HouseIcon, MapPinHouseIcon, Route } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useAppSession } from "@/lib/use-app-session"
import Image from "next/image"

// Menu items.
const items = [
    {
        title: "Маршруты",
        url: "/admin-panel/my-routes",
        icon: Route,
    },
    {
        title: "Страны",
        url: "/admin-panel/country",
        icon: EarthIcon,
    },
    {
        title: "Города",
        url: "/admin-panel/city",
        icon: MapPinHouseIcon,
    },
    {
        title: "Выход на главную",
        url: "/",
        icon: HouseIcon,
    },
]

export function AppSidebar() {

    const session = useAppSession()

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Админ панель</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon className="text-[#F9AC1A]" />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <div className="flex justify-start items-center ml-3 mb-5">
                {session.data?.user.image && <Image className="rounded-full " width={50} height={50} src={session.data.user.image} alt={`${session.data.user.name}`} title={`${session.data.user.name} - ${session.data.user.email}`} />}
                <div className="ml-2">{session.data?.user.name}</div>
            </div>

        </Sidebar>
    )
}