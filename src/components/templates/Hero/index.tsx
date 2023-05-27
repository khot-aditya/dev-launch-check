import React from 'react'
import GitHubButton from 'react-github-btn'

export const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font min-h-screen flex justify-center items-center">
            <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center h-full">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                {/* <iframe src="https://giphy.com/embed/nqtCrUwM148ZVKQtlu" width="380" height="260" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/bublywater-check-it-out-bubl-michael-nqtCrUwM148ZVKQtlu">via GIPHY</a></p> */}
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center h-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Web Frontend Checklist Template
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Unleash Web Development Success: Discover a Developer-Friendly Checklist, inspired by <a className='link' target='_blank' href="https://frontendchecklist.io">frontendchecklist.io</a>, to ensure top-notch SEO, performance, and optimization. Streamline your process, create exceptional websites, and deploy with confidence.
                    </p>

                    <div className="flex justify-center form-control w-full max-w-xl">

                        <div className='flex gap-5'>
                            <input type="text" placeholder="Project Name" className="input input-bordered w-full" />
                            <button className="btn px-5 btn-primary font-bold">Start Checklist</button>
                        </div>

                        {/* <label className="label">
                <span className="label-text-alt">Enter project name</span>
              </label> */}
                    </div>

                    {/* <p className="text-sm mt-2 text-gray-500 mb-8 w-full">Enter a new project name</p> */}
                    <div className="flex gap-3 scale-110 mt-10">

                        <GitHubButton href="https://github.com/khot-aditya/dev-launch-check" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star khot-aditya/dev-launch-check on GitHub">Star</GitHubButton>


                        <GitHubButton href="https://github.com/khot-aditya" data-size="large" data-show-count="true" aria-label="Follow @khot-aditya on GitHub">Follow @khot-aditya</GitHubButton>

                    </div>
                </div>
            </div>
        </section>
    )
}
