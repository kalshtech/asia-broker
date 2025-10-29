"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Banner = () => {
    const t = useTranslations("Pages.mutual.trading-competition.banner");
    return (
        <section className={"bg-[url(/images/mutual/competition-banner.png)] bg-center bg-cover relative h-164 lg:h-[632px] py-8 px-4 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h1"}
                        className={"text-center !text-white"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"large"}
                        className={"font-medium text-center mx-auto !text-white mt-4 lg:mt-16"}
                    >
                        {t("desc1")}
                    </Typography>
                    <Typography
                        variant={"large"}
                        className={"font-medium text-center mx-auto mt-4 !text-white"}
                    >
                        {t("desc2")}
                    </Typography>
                </motion.div>
                <div className={"bg-[url(/images/mutual/competition-blueprint.png)]  flex flex-col justify-center items-center bg-center bg-cover h-40 absolute bottom-0 left-0 right-0 mx-auto w-0 md:w-[calc(100%-240px)] lg:w-[calc(100%-360px)] xl:w-[calc(100%-640px)]"}>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                    >
                        <Typography
                            variant={"h3"}
                            className={"text-center !text-white md:!text-[24px]"}
                        >
                            {t("blueprint.title")}
                        </Typography>
                        <div className={"grid grid-cols-12 gap-8 mt-4"}>
                            <div className={"col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-2 lg:mt-4"}>
                                <div className={"border border-solid [border-image:linear-gradient(270deg,rgba(255,255,255,1),rgba(255,255,255,0))_1_1]"}/>
                            </div>
                            <div className={"col-span-12  md:col-span-6 lg:col-span-6 xl:col-span-8"}>
                                <Typography variant={"p"} className={"font-medium text-center !text-white"}>
                                    {t("blueprint.desc")}
                                </Typography>
                            </div>
                            <div className={"col-span-12  md:col-span-3 lg:col-span-3 xl:col-span-2 lg:mt-4"}>
                                <div
                                    className={"border border-solid [border-image:linear-gradient(270deg,rgba(255,255,255,0),rgba(255,255,255,1))_1_1]"}/>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default Banner;