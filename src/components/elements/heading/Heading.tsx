import clsx from 'clsx'
import React from 'react'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Heading = ({ as = "h2", children, className }: HeadingProps) => {
    const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => React.createElement(as, props, children)
    return (
        <Heading className={clsx(className)}>
            {children}
        </Heading>
    )
}

export default Heading
