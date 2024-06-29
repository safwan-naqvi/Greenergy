import Image from 'next/image'
import React from 'react'

const Features = () => {
    return (
        <section className='p-4'>
            <div className='container bg-[#FFF7ED] p-10 rounded-md shadow-md'>
                <div className='flex items-center gap-2 border-b border-neutral-200 pb-4 mb-4'>
                    <span className='h-2 w-2 bg-primary-300 rounded-full block' />
                    <span>Solutions</span>
                </div>
                <div>
                    <div>
                        <h2 className='text-3xl tracking-tight'>Key to clean future</h2>
                    </div>
                    <div className='grid md:grid-cols-2 gap-8 xl:grid-cols-4 mt-20'>
                        <div className='flex flex-col gap-6 items-start'>
                            <Image src={"/ev.svg"} alt='EV' height={50} width={50} />
                            <div>
                                <h3 className='text-lg font-semibold tracking-tight my-2'>EV Charging</h3>
                                <p className='text-neutral-800 tracking-tight'>
                                    EVs use electricity as a power source, which can be generated from renewable energy sources. Our solutions help reducing greenhouse gas emissions in the transportation sector.
                                </p>
                            </div>
                            <button className='text-primary-950 font-semibold tracking-tight hover:underline'>Read More</button>
                        </div>
                        <div className='flex flex-col gap-6 items-start'>
                            <Image src={"/se_img.svg"} alt='Solar Energy' height={50} width={50} />
                            <div>
                                <h3 className='text-lg font-semibold tracking-tight my-2'>Solar Energy</h3>
                                <p className='text-neutral-800 tracking-tight'>
                                    Solar panels convert sunlight into electricity. Photovoltaic "PV" cells on these panels capture the energy from the sun and convert it into electrical power.
                                </p>
                            </div>
                            <button className='text-primary-950 font-semibold tracking-tight hover:underline'>Read More</button>
                        </div>
                        <div className='flex flex-col gap-6 items-start'>
                            <Image src={"/we_img.svg"} alt='Wind Energy' height={50} width={50} />
                            <div>
                                <h3 className='text-lg font-semibold tracking-tight my-2'>Wind Energy</h3>
                                <p className='text-neutral-800 tracking-tight'>
                                    Wind turbines harness the kinetic energy of the wind to generate electricity. Wind farms with multiple turbines are commonly used to produce large amounts of clean energy.
                                </p>
                            </div>
                            <button className='text-primary-950 font-semibold tracking-tight hover:underline'>Read More</button>
                        </div>
                        <div className='flex flex-col gap-6 items-start'>
                            <Image src={"/hp_img.svg"} alt='HydroPower' height={50} width={50} />
                            <div>
                                <h3 className='text-lg font-semibold tracking-tight my-2'>HydroPower</h3>
                                <p className='text-neutral-800 tracking-tight'>
                                    This technology uses the energy from flowing water, such as rivers and dams, to turn turbines and generate electricity. It's one of the oldest forms of renewable energy.
                                </p>
                            </div>
                            <button className='text-primary-950 font-semibold tracking-tight hover:underline'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
