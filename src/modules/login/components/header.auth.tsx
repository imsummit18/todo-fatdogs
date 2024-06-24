import Svg from '@/components/common/svg'
import React from 'react'

const AuthHeader = ({ title, description }: { title: string, description?: string }) => {
    return (
        <div>
            <p className='font-semibold  text-xl md:text-2xl text-black  my-3'>{title}</p>
            <p className='font-normal 2xl:text-xl text-text-secondary w-[95%] xl:w-full'>{description}</p>
        </div>
    )
}

export default AuthHeader
