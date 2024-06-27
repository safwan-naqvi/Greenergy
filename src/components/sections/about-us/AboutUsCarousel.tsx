"use client"
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const AboutUsCarousel = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showArrows={false}
            swipeable
            transitionTime={300}
            useKeyboardArrows
            showThumbs={false}
            interval={3000}
            className='h-full'
        >
            <div className='flex items-center justify-center rounded-md h-[450px] md:h-[700px]'>
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
            <div className='flex items-center justify-center rounded-md h-[450px] md:h-[700px]'>
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
            <div className='flex items-center justify-center rounded-md h-[450px] md:h-[700px]'>
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
            <div className='flex items-center justify-center rounded-md h-[450px] md:h-[700px]'>
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
    )
}

export default AboutUsCarousel
