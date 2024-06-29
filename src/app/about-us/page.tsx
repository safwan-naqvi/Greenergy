export const revalidate = 0;
import { Button } from "@/components/elements/button/button";
import Heading from "@/components/elements/heading/Heading";
import Container from "@/components/layouts/container/Container";
import Section from "@/components/layouts/section/Section";
import NewsLetter from "@/components/newsletter/NewsLetter";
/* eslint-disable react/no-unescaped-entities */
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAboutpage } from "../../../sanity/queries/page";
import { AboutUsType } from "../../../sanity/schemaTypes/aboutUs";

const AboutUs = async () => {
    const data: AboutUsType = await getAboutpage();

    const { ourExperts, ourPhilosophy, promotion, hero } = data;
    console.log(ourExperts.ourExperts[0])
    return (
        <React.Fragment>
            <Section className="bg-white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 mb-6">
                        <Heading as="h1" className="text-hero">
                            {hero.heading}
                        </Heading>
                        <div>
                            <p className="mb-4">{hero.tagline}</p>
                            <Button variant="secondary">
                                <Link href={promotion.link}>{promotion.title}</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="w-full rounded-xl overflow-hidden">
                        <Image
                            src={hero.heroImage}
                            alt="About us 1"
                            width={450}
                            height={320}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Container>
            </Section>
            <Section className="bg-white">
                <Container>
                    <Heading
                        as="h2"
                        className="text-3xl font-semibold tracking-tighter leading-none capitalize mb-24"
                    >
                        {ourPhilosophy.heading}
                    </Heading>
                    <div className="grid gap-4 sticky">
                        {ourPhilosophy.philosophys.map((item, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="grid md:grid-cols-2 py-12 bg-primary-300 p-8 rounded-3xl"
                                >
                                    <div>
                                        <span className="text-md">{item.tagline}</span>
                                        <Heading as="h4" className="text-2xl font-semibold leading-none">
                                            {item.heading}
                                        </Heading>
                                    </div>
                                    <p>{item.excerpt}</p>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </Section>
            <div className="p-2 sm:p-4 bg-secondary-950">
                <NewsLetter />
            </div>
            <Section className="bg-white">
                <Container>
                    <Heading
                        as="h2"
                        className="text-3xl font-semibold tracking-tighter leading-none capitalize mb-24"
                    >
                        A Team of Energy Experts
                    </Heading>

                    <div className="grid md:grid-cols-3 gap-4">
                        {ourExperts.ourExperts.map((expert, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="col-span-1 relative h-[600px] rounded-xl overflow-hidden"
                                >
                                    <Image
                                        src={expert.image}
                                        alt="Member"
                                        width={320}
                                        height={450}
                                        className="w-full h-full object-cover"
                                        quality={90}
                                    />
                                    <div className="absolute group bottom-2 overflow-hidden px-2  backdrop-blur-2xl w-full">
                                        <div className="bg-primary-300 flex-col group-hover:h-[240px] min-h-10 h-0 duration-300 px-6 py-2  flex justify-between rounded-xl">
                                            <div className="flex justify-between items-center">
                                                <Heading
                                                    as="h4"
                                                    className="text-label font-semibold leading-none"
                                                >
                                                    {expert.heading}
                                                </Heading>
                                                <span>{expert.tagline}</span>
                                                <Link href="/">
                                                    <FaLinkedin />
                                                </Link>
                                            </div>
                                            <ul className="h-0 translate-y-3 my-4 group-hover:translate-y-0 group-hover:h-full duration-300">
                                                <li className="text-md">{expert.excerpt}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </Section>
        </React.Fragment>
    );
};

export default AboutUs;