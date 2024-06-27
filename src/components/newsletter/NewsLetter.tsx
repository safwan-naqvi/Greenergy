import React from 'react'

const NewsLetter = () => {
    return (
        <section className='py-16 bg-primary-300 rounded-3xl px-10 md:px-24'>
            <div className="container">
                <div className="grid md:grid-cols-2 gap-3">
                    <h2 className='text-2xl leading-none'>
                        Your Source For Green Energy Updates
                    </h2>
                    <div className='flex md:flex-row flex-col md:gap-3 md:items-center justify-center'>
                        <input type="email" placeholder='Your Email' className='py-3 px-6 rounded-full md:w-[330px] mb-3 md:mb-0' />
                        <button className='px-6 py-3 bg-primary-950 rounded-full text-white'>
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter
