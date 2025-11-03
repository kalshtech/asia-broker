"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";
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
        <section ref={sectionRef} className={"bg-gradient-to-b from-[#20150A] from-[10%] to-[#5E554C] to-[80%] py-16"}>
            <Container>
                <div className={"grid grid-cols-12 gap-4"}>
                    <div className={"col-span-12 lg:col-span-6"} ref={leftRef}>
                        <img
                            src="/images/accounts/envrionment-img.png"
                            alt="environment"
                            title={"environment"}
                            className={"mx-auto h-[600px] object-cover"}
                        />
                    </div>
                    <div className={"col-span-12 lg:col-span-6"} ref={rightRef}>
                        <div>
                            <Typography
                                variant={"h3"}
                                className={"!text-white !text-[40px] max-w-3xl lg:mt-24"}
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
                            <GeneralLinkBtn
                                text={t("more")}
                                path={"/ideas/vps"}
                                theme={"light-solid"}
                            />
                            <GeneralLinkBtn
                                text={t("download")}
                                path={"/platform"}
                                theme={"light-hollow"}
                                className={"ml-4"}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Environment;