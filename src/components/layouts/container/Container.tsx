import clsx from "clsx";

type SectionTYPES = {
    children: React.ReactNode;
    className?: string
}
const Container = ({ children, className }: SectionTYPES) => {
    return (
        <section className={clsx("container py-24 md:py-48", className)}>
            {children}
        </section>
    )
}

export default Container
