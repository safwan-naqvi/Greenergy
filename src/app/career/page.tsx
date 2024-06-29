export const revalidate = 0;
import { Button } from "@/components/elements/button/button";
import Heading from "@/components/elements/heading/Heading";
import Container from "@/components/layouts/container/Container";
import Section from "@/components/layouts/section/Section";
import { getCareerpage } from "../../../sanity/queries/page";
import Link from "next/link";
import { RxArrowTopRight } from "react-icons/rx";
import { HiLocationMarker } from "react-icons/hi";
import { LuClock } from "react-icons/lu";
const CareersPage = async () => {
    const data = await getCareerpage();
    const { jobsBoard, hero } = data;

    return (
        <Section className="bg-secondary-950">
            <Container>
                <div>
                    <Heading as="h1" className="text-hero text-white leading-none">
                        {/* {hero.heading} */}
                        Join Our Team
                    </Heading>
                    <p className="text-neutral-300 mt-6">{hero.tagline}</p>
                </div>

                <div className="grid gap-16 mt-12 sm:mt-24">
                    {jobsBoard.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <Heading as="h3" className="text-white text-sub-title mb-8">
                                    {item.department}
                                </Heading>
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                                    {item.available.map((job: any, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className="bg-primary-300 group hover:bg-white hover:border-primary-300 duration-300 px-8 py-6 rounded-3xl border-t-4"
                                            >
                                                <Heading className="text-label font-medium" as="h4">
                                                    {job.title}
                                                </Heading>

                                                <div className="flex gap-2 mt-4">
                                                    <span className="flex items-center group-hover:bg-primary-300 duration-300 gap-1 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                                                        <HiLocationMarker />
                                                        {job.location}
                                                    </span>
                                                    <span className="flex items-center group-hover:bg-primary-300 duration-300 gap-1 rounded-full px-2 py-1 border border-neutral-300 bg-white">
                                                        <LuClock />
                                                        {job.type}
                                                    </span>
                                                </div>
                                                <Link href={job.link}>
                                                    <Button className="mt-6 flex items-center gap-1">
                                                        Apply <RxArrowTopRight />
                                                    </Button>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
};

export default CareersPage;