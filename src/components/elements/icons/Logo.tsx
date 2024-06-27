import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <div>
            <Image src={"/svg/logo.svg"} alt='Greenery' height={80} width={140} />
        </div>
    )
}

export default Logo
