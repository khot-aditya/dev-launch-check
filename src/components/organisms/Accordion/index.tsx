import React from 'react'
import { CodeView } from '../../molecules/CodeView'

import { ReactComponent as DownArrowIcon } from '../../../assets/ic-angle-down.svg';
import { ChecklistInterface } from '../../../list';

interface AccordionProps {
    item: ChecklistInterface;
    children?: React.ReactNode;
}
export const Accordion = (props: AccordionProps) => {
    const { item } = props;

    const [isExpanded, setIsExpanded] = React.useState<Boolean>(Boolean(!item.code && !item.documentation && !item.tools))
    const [isChecked, setIsChecked] = React.useState(false)

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

                        {item.title}
                    </div>
                    <div>
                        {item?.description}
                    </div>
                </div>
                {
                    (item.code || item.documentation || item.tools) &&
                    <button className='btn btn-circle btn-primary w-9' onClick={() => setIsExpanded(value => !value)}>
                        <DownArrowIcon className={`h-4 w-4 fill-white ${isExpanded ? "expanded-icon" : "collapsed-icon"}`} />
                    </button>
                }

            </div>

            <div className={`${isExpanded ? "expanded-view" : "collapsed-view"}`}>

                {
                    (item.code || item.documentation || item.tools) &&
                    <div className='pl-10 pb-10'>
                        {
                            item.code !== "" || item.code !== null && <div className="mockup-code border bg-white text-primary-content max-w-fit pr-20 shadow-xl my-10 ">
                                <CodeView code={item.code} />
                            </div>
                        }

                        {
                            item.documentation && <div className='mt-5'>
                                <div>
                                    <summary className='font-bold'>
                                        Documentation
                                    </summary>
                                </div>
                                <div>
                                    {
                                        item.documentation?.map((doc, index) => (
                                            <p key={index}>{index + 1}. <a href={doc.source} className='link link-info'>{doc.title}</a></p>
                                        ))
                                    }
                                </div>
                            </div>
                        }

                        {
                            item.tools && <div className='mt-5'>
                                <div>
                                    <summary className='font-bold'>
                                        Tools
                                    </summary>
                                </div>
                                <div>
                                    {
                                        item.tools?.map((tool, index) => (
                                            <p key={index}> {index + 1}. <a href={tool.source} className='link link-info'>{tool.title}</a></p>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    </div>
                }

                {
                    item.meta &&
                    <div className='flex gap-2'>
                        {
                            item.meta.tags?.map((tag, index) => (
                                <span key={index} className="badge badge-outline px-4 py-3 uppercase">{tag}</span>
                            ))
                        }
                    </div>
                }

            </div>
        </div>

    )
}
