"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import {useLocale, useTranslations} from "next-intl";
import { Typography } from "@/components/ui/typography";


const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


const MarketBanner = () => {
    const t = useTranslations("Pages.ideas.marketsmap.marketBanner");
    return (
        <section className={"bg-theme-light-bg py-4 lg:py-16 "}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    {t("title")}
                </Typography>
            </motion.div>
            <div className={"mt-4 lg:mt-16"}>
                <div className={"flex justify-center"}>
                    <img src="/images/logo/en/logo.png" className={"h-[30px]"} alt=""/>
                    <img src="/images/tradingview.png" className={"h-[27px] ml-10"} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default MarketBanner