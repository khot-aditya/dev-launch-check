import React from 'react'

export const PriorityBadges = () => {
    return (
        <div className='flex gap-2'>
            <div className="badge badge-success badge-outline gap-2 px-3 h-8">
                0/47 Low
            </div>
            <div className="badge badge-warning badge-outline gap-2 px-3 h-8">
                0/25 Medium
            </div>
            <div className="badge badge-error badge-outline gap-2 px-3 h-8">
                0/16 High
            </div>
        </div>
    )
}
