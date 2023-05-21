import React from 'react'

export const ProgressBar = () => {
    return (
        <div className='gap-2 items-center card bg-base-200 card-side px-3 h-8 w-full'>
            <span className='font-bold'>10%</span>
            <progress className="progress w-full" value="40" max="100"></progress>
        </div>
    )
}
