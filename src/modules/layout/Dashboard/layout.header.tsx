"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { logout } from "@/modules/login/action.auth";
import { useRouter } from "next/navigation";

export function Header() {
    const router = useRouter();

    return (
        <div className=" supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-10 pr-6 h-[57px]  shadow flex items-center justify-end">
            <div className="flex items-center justify-end gap-2 ">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex space-x-2 items-center cursor-pointer">

                            <Button className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage
                                        src={"/avatars/user-blue.png"}
                                        alt={"Img"}
                                    />
                                </Avatar>
                            </Button>
                            <p className="text-base font-medium text-black"> Sumit Ghimire</p>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-xs leading-none text-muted-foreground">
                                    sumighimire018@gmail.com
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => {
                                logout();
                                router.push("/");
                            }}
                        >
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>

    );
}
