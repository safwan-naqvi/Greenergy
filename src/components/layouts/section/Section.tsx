import clsx from "clsx";

type SectionTYPES = {
    children: React.ReactNode;
    className: string
}
const Section = ({ children, className }: SectionTYPES) => {
    return (
        <section className={clsx("py-24 md:py-32", className)}>
            {children}
        </section>
    )
}

export default Section
