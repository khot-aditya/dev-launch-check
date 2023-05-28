import React from 'react'


interface ProgressBarProps {
    progress: number;
    children?: React.ReactNode;
}
export const ProgressBar = (props: ProgressBarProps) => {
    return (
        <div className='gap-2 items-center card bg-base-200 card-side px-3 h-8 w-full'>
            <span className='font-bold'>{props.progress}%</span>
            <progress className="progress w-full" value={props.progress} max="100"></progress>
        </div>
    )
}
