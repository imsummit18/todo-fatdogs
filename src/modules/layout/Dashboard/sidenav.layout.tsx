
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dashboard } from "@/assets/icons";

const NavItems = [{
    id: 1,
    title: "Dashboard",
    icon: <Dashboard size={22} />,
    href: "/dashboard"
},
{
    id: 1,
    title: "Dashboard",
    icon: <Dashboard size={22} />,
    href: "/dashboard"
},
{
    id: 1,
    title: "Dashboard",
    icon: <Dashboard size={22} />,
    href: "/dashboard"
},
{
    id: 1,
    title: "Dashboard",
    icon: <Dashboard size={22} />,
    href: "/dashboard"
},
{
    id: 1,
    title: "Dashboard",
    icon: <Dashboard size={22} />,
    href: "/dashboard"
}
]


export function SideNav() {
    return (
        <div className={'h-[90vh] mx-5 '}>
            < nav className="grid items-start gap-2 bg-[red]" >
                {
                    NavItems.map((item) => {
                        return (
                            <>
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className={cn(
                                        'relative flex h-10  justify-start ')}
                                >
                                    {item?.icon}
                                    <span
                                        className={cn(
                                            'absolute left-8  text-base  text-text-secondary duration-200',
                                        )}
                                    >
                                        {item.title}
                                    </span>
                                </Link >
                            </>
                        )
                    }
                    )
                }
            </nav >
        </div >
    );
}
