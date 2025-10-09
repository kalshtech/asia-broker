"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import {Button} from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Banner = () => {
    const t = useTranslations("Pages.corporation.contact.banner");
    return (
        <div>
            <section className={"bg-[url(/images/corporation/contact-banner.png)] bg-center bg-cover h-[632px] p-4 lg:p-30"}>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h1"}
                        className={"font-medium !text-white"}
                    >
                        {t("title1")}
                    </Typography>
                    <Typography
                        variant={"h1"}
                        className={"font-medium !text-white"}
                    >
                        {t("title2")}
                    </Typography>

                    <Typography
                        variant={"large"}
                        className={"font-medium !text-white mt-16"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
            </section>
            <div className={"bg-theme-active rounded-lg p-4 lg:py-10 lg:px-16 -mt-16 mx-4 lg:mx-30"}>
                <div className={"flex items-center"}>
                    <Typography
                        variant={"h4"}
                        className={"font-medium !text-white max-w-2xl "}
                    >
                        {t("tips")}
                    </Typography>
                    <div className={"ml-auto"}>
                        <Button className={"px-8 h-10 rounded-full text-theme-active bg-white hover:bg-white"}>
                            {t("view")}
                        </Button>
                        <Button className={"px-8 h-10 mt-4 lg:mt-0 lg:ml-4 rounded-full text-theme-active bg-transparent text-white border hover:bg-transparent"}>
                            {t("join")}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;