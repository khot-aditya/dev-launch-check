import React from 'react'
import { ReactComponent as UpArrowIcon } from '../../../assets/ic-angle-up.svg';
import { ReactComponent as CheckBoxIcon } from '../../../assets/checkbox.svg';
import { ReactComponent as SquareIcon } from '../../../assets/square.svg';

import { ReactComponent as EyeShowIcon } from '../../../assets/eye.svg';
import { ReactComponent as EyeHideIcon } from '../../../assets/eye-crossed.svg';

import { ReactComponent as ExpandIcon } from '../../../assets/square-plus.svg';
import { ReactComponent as CollapseIcon } from '../../../assets/square-minus.svg';
import { ProgressBar } from '../../molecules/ProgressBar';
import { PriorityBadges } from '../../molecules/PriorityBadge';
import { SectionInterface } from '../../../list';


interface SectionProps {
    item: SectionInterface;
    children: React.ReactNode;
}
export const Section = (props: SectionProps) => {
    return (
        <div className='bg-white p-5 card card-bordered'>
            <div className='flex justify-between items-center'>

                <div className='w-full'>

                    <div className='flex justify-between w-full'>

                        <h1 className='text-3xl font-bold' id={`${props.item.title}`}>{props.item.title}</h1>

                        <div className='flex gap-2'>
                            <label className="swap btn btn-active btn-md btn-circle">
                                <input type="checkbox" />
                                <CheckBoxIcon className="swap-on fill-current w-4 h-4" />
                                <SquareIcon className="swap-off fill-current w-4 h-4" />
                            </label>
                            <label className="swap btn btn-active btn-md btn-circle">
                                <input type="checkbox" />
                                <ExpandIcon className="swap-on fill-current w-4 h-4" />
                                <CollapseIcon className="swap-off fill-current w-4 h-4" />
                            </label>
                            <label className="swap btn btn-active btn-md btn-circle">
                                <input type="checkbox" />
                                <EyeShowIcon className="swap-on fill-current w-4 h-4" />
                                <EyeHideIcon className="swap-off fill-current w-4 h-4" />
                            </label>
                        </div>
                    </div>

                    <div className='flex gap-2 mt-5 items-center'>
                        <div className='w-full max-w-xs'>
                            <ProgressBar progress={props.item.meta.progress}/>
                        </div>
                        <PriorityBadges />
                    </div>

                </div>
            </div>
            <div className='flex flex-col gap-3 mt-3'>
                {props.children}
            </div>
        </div>
    )
}
