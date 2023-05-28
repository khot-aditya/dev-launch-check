import React from 'react'

export const ScrollTo = () => {

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return (
        <div className='flex flex-wrap gap-2 card card-bordered card-side p-3'>
            <button className='btn btn-sm w-fit btn-outline' onClick={() => scrollTo("Head")}>
                HEAD
            </button>
            <button className='btn btn-sm w-fit btn-outline' onClick={() => scrollTo("HTML")}>
                HTML
            </button>
            <button className='btn btn-sm w-fit btn-outline' onClick={() => scrollTo("web fonts")}>
                WEB Fonts
            </button>
            <button className='btn btn-sm w-fit btn-outline' onClick={() => scrollTo("CSS")}>
                CSS
            </button>
            <button className='btn btn-sm w-fit btn-outline' onClick={() => scrollTo("javascript")}>
                Javascript
            </button>
            <button className='btn btn-sm w-fit btn-outline' onClick={() => scrollTo("Images")}>
                Images
            </button>
            <button className='btn btn-sm w-fit btn-outline' onClick={() => scrollTo("Accessibility")}>
                accessibility
            </button>
            <button className='btn btn-sm w-fit btn-outline' onClick={() => scrollTo("Performance")}>
                Performance
            </button>
            <button className='btn btn-sm w-fit btn-outline' onClick={() => scrollTo("SEO")}>
                SEO
            </button>
        </div>
    )
}
