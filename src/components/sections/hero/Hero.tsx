import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { getHomepage } from '../../../../sanity/queries/page'

const Hero = async () => {
    const data = await getHomepage();
    const { hero, gallery, promotion } = data
    console.log(data)
    return (
        <section className='bg-secondary-950 h-fit py-48 flex flex-col gap-32'>
            <div className='container'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                    <div>
                        <h1 className='text-white text-4xl leading-none tracking-tight'>{hero.heading}</h1>
                    </div>
                    <div className='flex flex-col gap-6 sm:gap-2 justify-between'>
                        <p className='text-white text-base'>{hero.tagline}</p>
                        <Link href={promotion.link}>
                            <button className='py-4 px-5 bg-primary-300 rounded-full hover:bg-primary-400 duration-300 transition-all font-semibold tracking-tight'>
                                {promotion.title}
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className='w-full col-span-2 h-1/2'>
                <Marquee autoFill speed={80}>
                    <div className='flex justify-center gap-6 items-start mx-3 mt-6 md:mt-20 w-full'>
                        {gallery.imageUrls.map((image: any, index: number) => {
                            return (
                                <Image key={index} src={image.url} alt={`Hero ${index + 1}`} width={350} height={150} className='rounded-2xl' />
                            )
                        })}
                    </div>
                </Marquee>
            </div>
        </section>
    )
}

export default Hero
