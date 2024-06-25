"use client"
import { cn } from '@/lib/utils';
import React from 'react'
import { SideNav } from './sidenav.layout';
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
    return (
        <>
            <div className={cn(' bg-[white] border border-r-[1px] fixed  w-[240px] h-screen  ')}>
                <div className=' h-14  p-5 py-4 flex items-center gap-4 justify-center border-b-[1px] '>
                    <RxHamburgerMenu size={28} />
                </div>
            </div>
            <div className='my-20'>
                <SideNav />
            </div >
        </>
    )
}

export default Sidebar
