"use client"
import Logo from '@/components/elements/icons/Logo'
import Menu from '@/components/elements/icons/Menu'
import { useWindowScreenNowSize } from '@/hooks/useWindowsSize'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import headerData from "@/data/header.json"
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu((prev) => !prev)
    }
    const size = useWindowScreenNowSize()
    useEffect(() => {
        if (size.width > 767) {
            setShowMenu(false)
        }
    }, [size.width])
    return (
        <header className='fixed border-b md:border-none bg-secondary-950 md:bg-transparent w-full py-6'>
            <div className='container flex justify-between'>
                <div className='flex items-center gap-10'>
                    <Link href={"/"} className='z-10'>
                        <Logo />
                    </Link>
                    <nav className={clsx('flex gap-8 list-none bg-secondary-950 absolute md:relative md:translate-y-0 h-screen md:h-fit w-screen md:w-fit right-0 top-0 text-white flex-col items-center justify-center md:flex-row transition duration-800 ease-in-out', showMenu ? "translate-y-0" : "-translate-y-full")}>
                        {headerData.header.map((item, index) => {
                            return <li key={index}>
                                <Link href={item.href} className='capitalize'>{item.label}</Link>
                            </li>
                        })}
                    </nav>
                </div>
                <div className='flex gap-2 z-10'>
                    <Link href={"/"} className="group [transform:translateZ(0)] text-gray-300 border-2 py-3 px-5 rounded-full overflow-hidden relative before:absolute before:bg-primary-700 before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full hover:before:translate-x-0 before:transition before:ease-in-out before:duration-500"><span className="relative z-0 group-hover:text-gray-200 transition ease-in-out duration-500">Get Started</span></Link>
                    <button onClick={toggleMenu} className='md:hidden px-4 flex items-center justify-center rounded-full border-2'>
                        <Menu color='#fff' />
                    </button>
                </div>
            </div>
        </header >
    )
}

export default Header
