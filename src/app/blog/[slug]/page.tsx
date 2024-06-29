export const revalidate = 0;
import Heading from "@/components/elements/heading/Heading";
// import ShareSocialList from "@/components/elements/share/share-social";
import Container from "@/components/layouts/container/Container";
import Section from "@/components/layouts/section/Section";
import { PortableText, PortableTextComponents } from "next-sanity";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { default as ImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { getPostDetail } from "@/sanity/queries/page";
import { IoArrowBackCircle, IoShare } from "react-icons/io5";
import { Button } from "@/components/elements/button/button";

const builder = ImageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

const components: PortableTextComponents = {
    block: {
        h1: ({ children }) => <h1 className="text-5xl ">{children}</h1>,
        h2: ({ children }) => (
            <h2 className="text-4xl  leading-none">{children}</h2>
        ),
        h3: ({ children }) => <h3 className="text-3xl mb-6">{children}</h3>,
        h4: ({ children }) => <h4 className="text-2xl mb-6">{children}</h4>,
        normal: ({ children }) => <p className="!mb-6">{children}</p>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-white mb-6 border-l-4 border-opacity-60 bg-white/10 p-6 w-full">
                {children}
            </blockquote>
        ),
    },
    types: {
        image: ({ value }) => (
            <div className="sm:h-[45vh] aspect-auto w-full h-[33vh] mb-6">
                <Image
                    src={urlFor(value).url()}
                    alt={value.alt || " "}
                    width={320}
                    height={450}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
        ),
    },
    marks: {
        em: ({ children }) => (
            <em className="text-gray-400 font-semibold">{children}</em>
        ),
        link: ({ value, children }) => {
            const target = (value?.href || "").startsWith("http")
                ? "_blank"
                : undefined;
            return (
                <Link
                    href={value?.href}
                    target={target}
                    className=" font-bold underline text-yellow-300"
                >
                    {children}
                </Link>
            );
        },
    },
    list: {
        bullet: ({ children }) => (
            <ul className="mt-xl list-disc px-6">{children}</ul>
        ),
        number: ({ children }) => <ol className="mt-lg">{children}</ol>,

        checkmarks: ({ children }) => (
            <ol className="m-auto text-lg">{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => <li>{children}</li>,

        checkmarks: ({ children }) => <li>✅ {children}</li>,
    },
};

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const data = await getPostDetail(slug);
    return (
        <Section className="bg-secondary-950">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-8">
                    <div className="col-span-2 flex flex-col gap-4 items-start justify-between">
                        <Link href="/blog" className="text-white flex items-center">
                            <IoArrowBackCircle className="mr-2" />Back to blog
                        </Link>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={data.authorImage.image}
                                    alt="Safwan Abbas"
                                    height={40}
                                    width={40}
                                    className="h-[40px] object-cover rounded-full"
                                />
                                <div className="flex flex-col">
                                    <span className="text-white font-bold">{data.name}</span>
                                    <span className="text-white text-sm">{data.authorPostion}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-4 flex flex-col my-8 gap-8 items-start md:text-center md:items-center">
                        <div className="flex gap-3">
                            {data.categories.map((category: string, index: number) => {
                                return (
                                    <span key={index} className="bg-white rounded-full px-3 py-2 text-sm">
                                        {category}
                                    </span>
                                );
                            })}
                        </div>
                        <Heading as="h1" className="text-2xl md:text-4xl text-white leading-none">
                            {data.title}
                        </Heading>
                        <div className="flex gap-3 text-white">
                            <span className="text-sm">{data.timeRead ? data.timeRead : "9"} mins read</span>
                            <span className="text-sm font-bold text-primary-400">{data.publishedAt}</span>
                        </div>
                    </div>
                    <div className="col-span-2 text-white flex flex-col md:items-end justify-end">
                        <Button className="mb-3 flex items-center gap-2 text-md font-light rounded-full border-2 px-4 py-2 hover:border-secondary-700 hover:bg-secondary-700 transition-all duration-300">Share <IoShare /></Button>
                    </div>
                </div>
                <div className="my-4 md:my-8 flex flex-col items-center">
                    <Image
                        src={data.mainImage}
                        alt="Blog A"
                        width={1000}
                        height={800}
                        quality={100}
                        className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="max-w-3xl text-white my-8 md:my-16 flex flex-col">
                        <PortableText value={data.content} components={components} />

                        <div className="flex flex-col md:flex-row md:gap-8 p w-full px-10 py-8  rounded-3xl bg-beige-primary text-black bg-primary-400">
                            <div className="h-[100px] w-[100px] shrink-0 relative">
                                <Image
                                    src={data.authorImage.image}
                                    alt="Expert Image"
                                    width={120}
                                    height={120}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2 justify-between w-full">
                                <div className=" flex flex-col ">
                                    <h3 className="text-lg font-bold tracking-tight">{data.name}</h3>
                                    <p className=" text-sm opacity-90">{data.authorPostion}</p>
                                </div>
                                <PortableText value={data.authorBio} components={components} />
                                <div className="flex items-center gap-2">
                                    <FaLinkedin /> LinkedIn
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default BlogDetailPage;