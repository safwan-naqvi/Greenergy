import Section from "@/components/layouts/section/Section";
import { getHomepage } from "../../../sanity/queries/page";
import Container from "@/components/layouts/container/Container";
import SubTitle from "@/components/elements/sub-title/SubTitle";
import Heading from "@/components/elements/heading/Heading";
import { TestimonialsCarousel } from "./Testimonial-carousel";

export const Testimonials = async () => {
    const data = await getHomepage();
    return (
        <Section className="bg-secondary-950 rounded-3xl">
            <Container className="flex flex-col items-center">
                <SubTitle subTitle="Testimonials" />
                <Heading
                    as="h2"
                    className="text-4xl leading-none text-white text-left w-full"
                >
                    What our customers say
                </Heading>
                <div className="mt-24">
                    <TestimonialsCarousel users={data.testimonials} />
                </div>
            </Container>
        </Section>
    );
};