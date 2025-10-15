"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/Container";
gsap.registerPlugin(ScrollTrigger);

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Environment = () => {
    const t = useTranslations("Pages.accounts.platinum.environment");
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const leftRef = React.useRef<HTMLDivElement>(null);
    const rightRef = React.useRef<HTMLDivElement>(null);

    return (
        <section ref={sectionRef} className={"bg-gradient-to-b from-[#20150A] from-[10%] to-[#5E554C] to-[80%] py-4 lg:py-30"}>
            <Container>
                <div className={"grid grid-cols-12 gap-4"}>
                    <div className={"col-span-12 lg:col-span-6"} ref={leftRef}>
                        <img
                            src="/images/accounts/envrionment-img.png"
                            alt="environment"
                            title={"environment"}
                            className={"w-full h-full mx-auto object-cover"}
                        />
                    </div>
                    <div className={"col-span-12 lg:col-span-6"} ref={rightRef}>
                        <div>
                            <Typography
                                variant={"h3"}
                                className={"!text-white !text-[40px] font-medium max-w-3xl"}
                            >
                                {t("title")}
                            </Typography>
                            <Typography
                                variant={"h6"}
                                className={"!text-white font-medium max-w-2xl mt-10"}
                            >
                                {t("desc")}
                            </Typography>
                        </div>
                        <div className={"mt-4 lg:mt-16"}>
                            <Button className={"px-8 h-10 rounded-full bg-white text-black hover:bg-white"}>
                                {t("more")}
                            </Button>
                            <Button
                                className={"px-8 h-10 border ml-1 lg:ml-4 text-white rounded-full bg-transparent hover:bg-transparent"}>
                                {t("download")}
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Environment;