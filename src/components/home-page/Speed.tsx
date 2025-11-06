"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


const Speed = () => {
    const t = useTranslations("Pages.home.speed");

    return (
        <section className={"bg-theme-light-bg py-16 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <div className={"hidden xl:block"}>
                        <Typography variant={"h3"} className={"text-center"}>
                            {t("title1")}
                        </Typography>
                        <Typography variant={"h3"} className={"text-center"}>
                            {t("title2")}
                        </Typography>
                        <Typography variant={"muted"} className={"text-center mt-6 mx-auto max-w-7xl"}>
                            {t("description")}
                        </Typography>
                    </div>
                    <div className={"xl:hidden"}>
                        <Typography variant={"h3"} className={"text-center"}>
                            {t("title4")}
                        </Typography>
                        <Typography variant={"muted"} className={"text-center mt-6 mx-auto max-w-7xl"}>
                            {t("description1")}
                        </Typography>
                        <Typography variant={"muted"} className={"text-center mt-1 mx-auto max-w-7xl"}>
                            {t("description2")}
                        </Typography>
                    </div>
                </motion.div>
                <div className={"mt-4 xl:mt-16 xl:mb-8"}>
                    <img
                        src={"/images/home/servers.png"}
                        className={"w-full h-16 object-cover hidden xl:block"}
                        alt={"servers"}
                        title={"servers"}
                    />
                    <img
                        src={"/images/home/mobile-speed-servers.png"}
                        className={"xl:hidden"}
                        alt={"servers"}
                        title={"servers"}
                    />
                </div>

                <div className={"relative"}>
                    <div className={"hidden xl:block bg-[url(/images/mobile/speed-server-bg.png)] xl:bg-[url(/images/home/speed-server-bg.png)] bg-center bg-cover bg-no-repeat min-h-[369px]"}>
                        <div className={"grid grid-cols-12 gap-4 px-10 py-12 w-full min-h-[369px]"}>
                            <div className="text-white relative col-span-12 lg:col-span-4">
                                <Typography
                                    variant={"h6"}
                                    className={"!text-white !font-medium"}
                                >
                                    {t("row.1.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-white mt-5 max-w-xs"}
                                >
                                    {t("row.1.description")}
                                </Typography>
                                <div className={"absolute w-[1px] bg-theme-active h-full right-1/6 top-0 hidden lg:block"}/>
                            </div>
                            <div className="text-white relative col-span-12 lg:col-span-4">
                                <Typography variant={"h6"} className={"!text-white !font-medium"}>
                                    {t("row.2.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-white mt-5 max-w-xs"}
                                >
                                    {t("row.2.description")}
                                </Typography>
                                <div className={"absolute w-[1px] bg-theme-active h-full right-1/6 top-0 hidden lg:block"}/>
                            </div>
                            <div className="text-white relative col-span-12 lg:col-span-4">
                            <Typography variant={"h6"} className={"!text-white !font-medium"}>
                                    {t("row.3.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-white mt-5 max-w-xs"}
                                >
                                    {t("row.3.description")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <img className={"mt-4 xl:hidden"} src="/images/home/global-point.png" alt=""/>
                </div>
            </Container>
        </section>
    )
}

export default Speed;