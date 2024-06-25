import React from 'react'
import { Skeleton } from '../ui/skeleton'

const TableSkeleton = () => {
    return (
        <div className='w-full shadow xl:ml-10 p-4 border border-gray-200 mt-10 xl:mt-0'>
            <Skeleton className="w-[200px] h-[25px] rounded-full" />
            {Array(7).fill(null).map((_, index) => (
                <div key={index} className='mt-8 grid grid-cols-3 gap-2'>
                    {Array(3).fill(null).map((_, index) => (
                        <Skeleton key={index} className="h-[25px] rounded-full" />
                    ))}
                </div>
            ))}
            <div className='flex justify-end mt-5'>
                <Skeleton className="w-[200px] h-[25px] rounded-full" />
            </div>
        </div>
    )
}

export default TableSkeleton
