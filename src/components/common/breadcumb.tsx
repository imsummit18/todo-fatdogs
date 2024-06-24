import React from 'react'

interface BreadCumbProps {
    title?: string;
    subTitle?: string;
}

const BreadCumb: React.FC<BreadCumbProps> = ({ title, subTitle }) => {
    return (
        <div className='text-[black] text-base font-medium cursor-pointer'>{title} / <span className='text-primary-300'>{subTitle}</span></div>
    )
}

export default BreadCumb
