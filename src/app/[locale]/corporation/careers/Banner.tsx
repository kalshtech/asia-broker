"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Banner =  () => {
    const t = useTranslations("Pages.corporation.careers.banner");

    return (
        <div>
            <section className={"p-30 bg-[url(/images/corporation/careers-banner.png)] bg-center bg-cover h-[632px]"}>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h1"}
                        className={"font-medium max-w-xl !text-white"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"h6"}
                        className={"font-medium !text-white mt-10 max-w-lg leading-[24px]"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
            </section>
            <div className={"mx-30 bg-theme-active py-10 px-16 rounded-lg -mt-16"}>
                <div className={"flex items-center"}>
                    <Typography
                        variant={"h4"}
                        className={"font-medium !text-white max-w-2xl "}
                    >
                        {t("tips")}
                    </Typography>
                    <Button className={"px-8 h-10 ml-auto rounded-full text-black bg-white hover:bg-white"}>
                        { t("view") }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Banner;