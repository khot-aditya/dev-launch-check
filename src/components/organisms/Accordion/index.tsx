import React from 'react'
import { CodeView } from '../../molecules/CodeView'

import { ReactComponent as DownArrowIcon } from '../../../assets/ic-angle-down.svg';

export const Accordion = (props: any) => {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const [isChecked, setIsChecked] = React.useState(true)

    return (
        <div className='bg-base-100 card card-compact card-side flex flex-col px-3 py-3 w-full'>
            <div className='flex justify-between items-start'>

                <div>
                    <div className='card-title'>
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <input type="checkbox" checked={isChecked} onChange={
                                    () => setIsChecked(value => !value)
                                } className="checkbox checkbox-accent" />
                            </label>
                        </div>

                        {props.title}
                    </div>
                    <div>
                        {props.item?.description}
                    </div>
                </div>

                <button className='btn btn-circle btn-primary w-9' onClick={() => setIsExpanded(value => !value)}>

                    <DownArrowIcon className={`h-4 w-4 fill-white ${isExpanded ? "expanded-icon" : "collapsed-icon"}`} />

                </button>
            </div>

            <div className={`${isExpanded ? "expanded-view" : "collapsed-view"}`}>

                <div className='pl-10 pb-10'>
                    <div className="mockup-code border bg-white text-primary-content max-w-fit pr-20 shadow-xl my-10 ">
                        <CodeView />
                    </div>

                    <div className='mt-5'>
                        <div>
                            <summary className='font-bold'>
                                Documentation
                            </summary>
                        </div>
                        <div>
                            <p>1. <a href="" className='link link-info'>Determining the character encoding - HTML5 W3C</a></p>
                            <p>2. <a href="" className='link link-info'>Determining the character encoding - HTML5 W3C</a></p>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div>
                            <summary className='font-bold'>
                                Tools
                            </summary>
                        </div>
                        <div>
                            <p> 1. <a href="" className='link link-info'>Determining the character encoding - HTML5 W3C</a></p>
                            <p>2. <a href="" className='link link-info'>Determining the character encoding - HTML5 W3C</a></p>
                        </div>
                    </div>

                </div>

                <div className='flex gap-2'>

                    <span className="badge badge-outline px-4 py-3">Badge</span>
                    <span className="badge badge-outline px-4 py-3">Badge</span>
                    <span className="badge badge-outline px-4 py-3">Badge</span>
                </div>
            </div>
        </div>

    )
}
