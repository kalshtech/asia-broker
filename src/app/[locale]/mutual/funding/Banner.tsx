"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import RegisterBtn from "@/components/RegisterBtn"

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Banner = () => {
    const t = useTranslations("Pages.mutual.funding.banner");
    return (
        <section className={"bg-[url(/images/mutual/funding-banner.png)] bg-center bg-cover relative h-120 lg:h-[632px] p-4 lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <div className={"max-w-5xl mx-auto flex-col justify-center flex"}>
                    <Typography
                        variant={"h1"}
                        className={"font-medium text-center !text-white"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"font-medium text-right mt-4 lg:mt-10 !text-white"}
                    >
                        {t("desc")}
                    </Typography>

                    <Typography
                        variant={"h4"}
                        className={"font-medium text-center mt-4 lg:mt-10 !text-white"}
                    >
                        {t("midst")}
                    </Typography>

                    <div className={"mt-8 lg:mt-16 flex justify-center"}>
                        <RegisterBtn/>
                        <Button className={"px-8 h-10 ml-8 rounded-full border bg-transparent hover:bg-transparent"}>
                            { t("ticker") }
                        </Button>
                    </div>
                    <div>
                        <Typography
                            variant={"muted"}
                            className={"font-medium text-center !text-xs mt-6 !text-[#999999]"}
                        >
                            {t("prompt")}
                        </Typography>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Banner;