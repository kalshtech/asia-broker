"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import RegisterBtn from "@/components/RegisterBtn";
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
    const t = useTranslations("Pages.platform.banner");
    const downloadAry = [
        { imageUrl: "/images/platform/windows.png", download: t("download"), vision: t("ul.windows") },
        { imageUrl: "/images/platform/apple.png", download: t("download"), vision: t("ul.macos") },
        { imageUrl: "/images/platform/apple.png", download: t("download"), vision: t("ul.ios") },
        { imageUrl: "/images/platform/android.png", download: t("download"), vision: t("ul.android") },
        { imageUrl: "/images/platform/webtrade.png", download: t("download"), vision: t("ul.webtrader") },
    ];
    return (
        <section className={"bg-[url(/images/platform/banner-background.png)] bg-cover bg-center pt-4 pb-4 lg:pt-30 lg:pb-12"}>
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
                        {t("title1")}
                    </Typography>
                    <Typography
                        variant={"h1"}
                        className={"text-center !text-white mt-2"}
                    >
                        {t("title2")}
                    </Typography>
                    <Typography
                        variant={"large"}
                        className={"font-medium text-center mx-auto !text-white mt-10"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"flex justify-center mt-10"}>
                    <RegisterBtn/>
                </div>

                <div className={"flex justify-center mt-10"}>
                    <img src="/images/platform/logo&mt5.png" className={"w-[260px] "} alt="logo&mt5"
                         title={"logo&mt5"}/>
                </div>

                <div className={"mt-24"}>
                    <div className={"flex flex-wrap gap-4"}>
                        {
                            downloadAry.map((item, index) => (
                                <div key={index}
                                     className={"flex flex-1 items-center border py-4 bg-[#2D2D2D]/40 px-8 rounded-lg cursor-pointer"}>
                                    <img src={item.imageUrl} className={"w-[30px] h-[30px]"} alt={item.vision}/>
                                    <div className={"flex flex-col ml-4"}>
                                        <Typography variant={"small"} className={"text-white"}>
                                            {item.download}
                                        </Typography>
                                        <Typography variant={"large"} className={"font-normal text-white mt-1"}>
                                            {item.vision}
                                        </Typography>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner;