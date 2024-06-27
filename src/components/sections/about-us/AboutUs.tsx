import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import AboutUsCarousel from './AboutUsCarousel'

const AboutUs = () => {
    return (
        <section className='py-48 bg-secondary-950'>
            <div className='container'>
                <div className='flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4'>
                    <span className='h-3 w-3 bg-primary-300 block rounded-full' />
                    <span>About Us</span>
                </div>
                <div className='grid xl:grid-cols-2 gap-12 md:gap-36'>
                    <div className='flex justify-start flex-col gap-6'>
                        <h2 className='text-white text-2xl tracking-tight leading-none'>Committed to a sustainable future</h2>
                        <p className='text-white/90'>
                            As a pioneering force in the green energy sector, we've been at the forefront of the transition to clean, renewable power sources. Our mission is simple yet profound: to create a world where energy is not only abundant but also environmentally responsible. We believe that by harnessing the power of nature, we can power the world and protect it simultaneously.
                        </p>
                        <ul className='mt-4 grid grid-cols-2 xl:grid-cols-1 gap-4'>
                            <li className='flex items-center gap-3 text-white text-md font-light'>
                                <FaCheckCircle className='text-primary-400' />
                                Check Item
                            </li>
                            <li className='flex items-center gap-3 text-white text-md font-light'>
                                <FaCheckCircle className='text-primary-400' />
                                Check Item
                            </li>
                            <li className='flex items-center gap-3 text-white text-md font-light'>
                                <FaCheckCircle className='text-primary-400' />
                                Check Item
                            </li>
                            <li className='flex items-center gap-3 text-white text-md font-light'>
                                <FaCheckCircle className='text-primary-400' />
                                Check Item
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-1'>
                        <AboutUsCarousel />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
