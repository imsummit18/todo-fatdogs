import { Header } from '@/modules/layout/Dashboard/layout.header';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Dashboard",
    description: "",
};


const Layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex'>
            <div className='bg-primary-300 h-screen w-[250px]'>
                asd
            </div>
            <div className='flex flex-col w-full'>
                    <Header />
                <div className='p-6'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
