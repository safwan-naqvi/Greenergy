"use client";
import { useWindowScreenNowSize } from "@/hooks/useWindowsSize";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Carousel } from "react-responsive-carousel";
export const TestimonialsCarousel = (users: any) => {
    const size = useWindowScreenNowSize();

    return (
        <div className='w-full col-span-2 h-1/2'>
            <Marquee autoFill speed={80}>
                <div className='flex justify-center gap-6 items-start mx-3 mt-6 md:mt-20 w-full overflow-hidden'>
                    {users.users.Testimonials.map((user: any, index: number) => {
                        return (
                            <div
                                key={index}
                                className="shrink-0 sm:col-span-1 rounded-2xl p-4 px-6 bg-primary-300"
                            >
                                <p className="text-left min-h-[100px] text-md my-4 text-lg max-w-lg">{user.excerpt}</p>
                                <div className="flex gap-6 items-center sm:flex-row flex-col ">
                                    <div className="h-[56px] w-[56px] shrink-0 relative">
                                        <Image
                                            src={user.image}
                                            alt="Expert Image"
                                            width={90}
                                            height={90}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 sm:flex-row justify-between w-full">
                                        <div className="text-black flex flex-col ">
                                            <h3 className="text-lg text-left">{user.heading}</h3>
                                            <p className="text-black text-sm opacity-90 text-left">
                                                {user.tagline}{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Marquee>
        </div>

    );
};