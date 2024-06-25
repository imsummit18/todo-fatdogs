import { Header } from '@/modules/layout/Dashboard/layout.header';
import Sidebar from '@/modules/layout/Dashboard/sidebar.layout';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Dashboard",
    description: "",
};


const Layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex  h-screen  overflow-visible relative'>
            <Sidebar />
            <div className='w-full overflow-visible flex flex-col w-full ml-[178px] '>
                <Header />
                <div className='p-6'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
