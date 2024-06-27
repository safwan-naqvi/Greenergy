import Logo from '@/components/elements/icons/Logo'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='m-4 bg-secondary-950 rounded-3xl py-24 md:py-48'>
            <div className="container">
                <div className="grid md:grid-cols-6 xl:grid-cols-12 gap-8">
                    <div className="col-span-3">
                        <Logo />
                    </div>
                    <div className="col-span-9 grid md:grid-cols-9 gap-8">
                        <div className="col-span-3 w-full grid-cols-3 grid md:col-span-6">
                            <ul className='list-none text-white grid gap-6'>
                                <li>
                                    <Link href={"/"}>Platform</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Solutions</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>How it works?</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Pricing</Link>
                                </li>
                            </ul>
                            <ul className='list-none text-white grid gap-6'>
                                <li>
                                    <Link href={"/"}>Resources</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Blog</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Help Center</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Support</Link>
                                </li>
                            </ul>
                            <ul className='list-none text-white grid gap-6'>
                                <li>
                                    <Link href={"/"}>Platform</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Solutions</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>How it works?</Link>
                                </li>
                                <li>
                                    <Link href={"/"}>Pricing</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-3 grid gap-4 md:col-end-10">
                            <div className="flex items-center gap-4 p-1 bg-white/25 rounded-full">
                                <span className='bg-primary-300 h-[48px] w-[48px] flex items-center justify-center rounded-full'>
                                    <FaFacebook />
                                </span>
                                <p className='text-hite font-medium'>
                                    Follow us on Facebook
                                </p>
                            </div>
                            <div className="flex items-center gap-4 p-1 bg-white/25 rounded-full">
                                <span className='bg-primary-300 h-[48px] w-[48px] flex items-center justify-center rounded-full'>
                                    <FaLinkedin />
                                </span>
                                <p className='text-hite font-medium'>
                                    Follow us on LinkedIn
                                </p>
                            </div>
                            <div className="flex items-center gap-4 p-1 bg-white/25 rounded-full">
                                <span className='bg-primary-300 h-[48px] w-[48px] flex items-center justify-center rounded-full'>
                                    <FaInstagram />
                                </span>
                                <p className='text-hite font-medium'>
                                    Follow us on Instagram
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
