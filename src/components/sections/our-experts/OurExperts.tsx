import Container from '@/components/layouts/container/Container'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurExperts = () => {
    return (
        <section className='py-48 bg-secondary-950'>
            <Container className='container'>
                <div className='flex text-white items-center gap-2 border-b border-neutral-300 mb-12 sm:mb-14 pb-4'>
                    <span className='h-3 w-3 bg-primary-300 block rounded-full' />
                    <span className="text-white font-semibold">Experts</span>
                </div>
                <div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl leading-none text-white'>Meet our Experts</h2>
                        <p className='text-white/90'>Our Team boasts top green experts, driving innovation in sustainability</p>
                    </div>
                </div>

                <div className='mt-20'>
                    <div className="py-8 border-b flex gap-4 md:gap-12 items-center border-neutral-600">
                        <div className='h-[90px] w-[90px] relative overflow-hidden shrink-0'>
                            <Image src={"/images/safwan.png"} alt='Safwan Abbas' height={100} width={100} className='w-full h-full object-cover rounded-xl' />
                        </div>
                        <div className='flex flex-col gap-2 sm:flex-row items-start md:items-center justify-between w-full'>
                            <div className='text-white flex flex-col items-start md:items-center sm:flex-row sm:gap-32'>
                                <h3 className='text-lg'>Safwan Abbas</h3>
                                <p className='text-neutral-300'>Full Stack Developer</p>
                            </div>
                            <Link href="/" className='bg-primary-400 h-fit w-fit p-2 rounded-xl'>
                                <Linkedin className='text-secondary-950' />
                            </Link>
                        </div>
                    </div>
                    <div className="py-8 border-b flex gap-4 md:gap-12 items-center border-neutral-600">
                        <div className='h-[90px] w-[90px] relative overflow-hidden shrink-0'>
                            <Image src={"/images/safwanTwo.jpg"} alt='Safwan Abbas' height={100} width={100} className='w-full h-full object-cover rounded-xl' />
                        </div>
                        <div className='flex flex-col gap-2 sm:flex-row items-start md:items-center justify-between w-full'>
                            <div className='text-white flex flex-col items-start md:items-center sm:flex-row sm:gap-32'>
                                <h3 className='text-lg'>Syed Safwan Abbas</h3>
                                <p className='text-neutral-300'>Graphics Developer</p>
                            </div>
                            <Link href="/" className='bg-primary-400 h-fit w-fit p-2 rounded-xl'>
                                <Linkedin className='text-secondary-950' />
                            </Link>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default OurExperts
