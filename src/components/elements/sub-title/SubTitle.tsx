import clsx from 'clsx';
import React from 'react'
type SubTitle = {
    subTitle: string;
    className?: string
}

const SubTitle = ({ subTitle, className }: SubTitle) => {
    return (
        <div className='flex w-full text-white items-center gap-2 border-b border-neutral-300 mb-12 md:mb-14 pb-4'>
            <span className='h-2 w-2 bg-primary-300 block rounded-full' />
            <span className={clsx(className)}>{subTitle}</span>
        </div>
    )
}

export default SubTitle
