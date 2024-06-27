import React from 'react'

const Menu = ({ color }: { color: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.25 14.5H16.75" stroke={`${color}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.25 10H16.75" stroke={`${color}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.25 5.5H16.75" stroke={`${color}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Menu
