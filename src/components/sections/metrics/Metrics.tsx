import Image from 'next/image'
import React from 'react'

const Metrics = () => {
    return (
        <section className='py-48 bg-beige rounded-3xl'>
            <div className='container'>
                <div className='flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4'>
                    <span className='h-3 w-3 bg-primary-300 block rounded-full' />
                    <span className="text-primary-950 font-semibold">Metrics</span>
                </div>

                <div className='flex justify-start flex-col gap-6'>
                    <h2 className='text-primary-800 font-semibold w-full md:max-w-xl text-2xl md:text-3xl tracking-tight leading-none'>We are committed to a sustainable future</h2>
                    <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                        <div className='col-span-2 row-span-2 md:col-span-1 p-8 rounded-xl bg-[#BEF264] flex flex-col items-start gap-2'>
                            <Image src="/ev_white.svg" height={40} width={40} alt="EV" />
                            <h3 className='text-2xl text-primary-900 font-semibold tracking-tight'>5,000 Mwh</h3>
                            <span className='font-semibold tracking-tight text-[18px]'>Renewable Energy Generated</span>
                            <p className='text-[16px] leading-2 font-normal tracking-tight'>Our commitment to sustainability shines through as we proudly announce the generation of 5,000 megawatt-hours of renewable energy, contributing to a greener and more environmentally friendly future.</p>
                        </div>
                        <div className='col-span-2 row-span-1 md:col-span-1 p-8 rounded-xl h-fit bg-[#BEF264] flex flex-col md:flex-row items-start md:items-center gap-4'>
                            <Image src="/profile.svg" height={40} width={40} alt="EV" />
                            <div>
                                <h3 className='text-2xl text-primary-900 font-semibold tracking-tight'>10,000 +</h3>
                                <span className='font-semibold tracking-tight text-[18px]'>Customers Saved</span>
                            </div>
                        </div>
                        <div className='col-span-2 row-span-1 md:col-span-1 p-8 rounded-xl h-fit bg-[#BEF264] flex flex-col md:flex-row items-start md:items-center gap-4'>
                            <Image src="/eco.svg" height={40} width={40} alt="EV" />
                            <div>
                                <h3 className='text-2xl text-primary-900 font-semibold tracking-tight'>15%</h3>
                                <span className='font-semibold tracking-tight text-[18px]'>Avg. Energy Saved</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Metrics
