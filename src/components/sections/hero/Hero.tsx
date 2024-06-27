import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

const Hero = () => {
    return (
        <section className='bg-secondary-950 h-fit py-48 flex flex-col gap-32'>
            <div className='container'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    <div>
                        <h1 className='text-white text-4xl leading-none tracking-tight'>The Future of Green Energy</h1>
                    </div>
                    <div className='flex flex-col gap-6 sm:gap-2 justify-between'>
                        <p className='text-white text-base'>Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.</p>
                        <Link href={"/"}>
                            <button className='py-4 px-5 bg-primary-300 rounded-full hover:bg-primary-400 duration-300 transition-all font-semibold tracking-tight'>
                                See our Solutions
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='w-full col-span-2 h-1/2'>
                <Marquee autoFill speed={80}>
                    <div className='flex justify-center gap-6 items-start mx-3 mt-6 md:mt-20 w-full'>
                        <Image src={"/images/hero1.png"} alt='Hero 1' width={350} height={150} />
                        <Image src={"/images/hero2.png"} alt='Hero 2' width={350} height={150} />
                        <Image src={"/images/hero3.png"} alt='Hero 3' width={350} height={150} />
                        <Image src={"/images/hero4.png"} alt='Hero 4' width={350} height={150} />
                    </div>
                </Marquee>
            </div>
        </section>
    )
}

export default Hero
