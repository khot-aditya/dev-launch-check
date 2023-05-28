import React from 'react'


import { ReactComponent as DuplicateIcon } from '../../../assets/duplicate.svg';
import { ScrollTo } from '../../molecules/ScrollTo';
import { PriorityBadges } from '../../molecules/PriorityBadge';
import { ProgressBar } from '../../molecules/ProgressBar';
export const MenuCard = () => {


    return (
        <div className='w-full h-fit p-5 card card-bordered bg-white sticky top-5'>
            <h2 className='card-title'>
                Project Name
            </h2>

            <div className='card-body p-0 pt-5 flex flex-col gap-5'>

                <div>
                    <ProgressBar progress={10} />
                </div>
                <div>
                    <PriorityBadges />
                </div>

                <div>
                    <ScrollTo />
                </div>

                <div>
                    <button className='btn gap-2 btn-primary'>
                        <DuplicateIcon className='w-5 h-5' />
                        Generate Report
                    </button>
                </div>
            </div>
        </div>
    )
}
