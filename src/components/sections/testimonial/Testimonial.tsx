"use client"
import Heading from '@/components/elements/heading/Heading'
import SubTitle from '@/components/elements/sub-title/SubTitle'
import Container from '@/components/layouts/container/Container'
import Section from '@/components/layouts/section/Section'
import { useWindowScreenNowSize } from '@/hooks/useWindowsSize'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const Testimonial = () => {
    const size = useWindowScreenNowSize();
    return (
        <Section className='bg-secondary-950 rounded-3xl'>
            <Container>
                <SubTitle subTitle='Testimonials' />
                <div>
                    <Heading as="h2" className='text-3xl font-semibold text-white py-10 tracking-tight leading-none'>What Your Customers says</Heading>
                </div>
                <div>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showStatus={false}
                        showArrows={false}
                        stopOnHover
                        emulateTouch
                        centerMode
                        centerSlidePercentage={size.width < 480 ? 90 : 20}
                        swipeable
                        transitionTime={300}
                        useKeyboardArrows
                        showThumbs={false}
                        interval={3000}
                        className='cursor-grabbing md:w-full max-w-md md:max-w-7xl duration-300'
                    >
                        <div className='shrink-0 flex items-center justify-center rounded-md h-[450px] md:h-[700px]'>
                            <Image src={"/images/hero1.jpg"} alt="Hero 1"
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                className='rounded-3xl object-cover'
                                width={0}
                                height={0} />
                        </div>
                        <div className='shrink-0 flex items-center justify-center rounded-md h-[450px] md:h-[700px]'>
                            <Image src={"/images/hero2.jpg"} alt="Hero 2"
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                className='rounded-3xl object-cover'
                                width={0}
                                height={0} />
                        </div>
                        <div className='shrink-0 flex items-center justify-center rounded-md h-[450px] md:h-[700px]'>
                            <Image src={"/images/hero3.jpg"} alt="Hero 3"
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                className='rounded-3xl object-cover'
                                width={0}
                                height={0} />
                        </div>
                        <div className='shrink-0 flex items-center justify-center rounded-md h-[450px] md:h-[700px]'>
                            <Image src={"/images/hero4.jpg"} alt="Hero 4"
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                className='rounded-3xl object-cover'
                                width={0}
                                height={0} />
                        </div>
                    </Carousel>
                </div>
            </Container>
        </Section>
    )
}

export default Testimonial
