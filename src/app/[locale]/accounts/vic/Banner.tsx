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

const Banner = () => {
    const t = useTranslations("Pages.accounts.vic.banner");
    return (
        <section className={"bg-[url(/images/accounts/vic-banner.png)] bg-center bg-cover h-80 lg:h-[632px] p-4 lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium !text-white !bg-gradient-to-b !from-[#F0F7FF] !to-[#587DAC] !bg-clip-text !text-transparent"}
                >
                    {t("title")}
                </Typography>

                <Typography
                    variant={"lead"}
                    className={"font-medium !text-white mt-10"}
                >
                    {t("midst1")}
                </Typography>
                <Typography
                    variant={"lead"}
                    className={"font-medium !text-white mt-2"}
                >
                    {t("midst2")}
                </Typography>

                <div className={"flex items-center mt-4 lg:mt-16"}>
                    <Typography
                        variant={"muted"}
                        className={"font-medium !text-white"}
                    >
                        {t("desc1")}
                    </Typography>
                    <Typography
                        variant={"h2"}
                        className={"font-medium !text-white mx-2"}
                    >
                        50,000
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"font-medium !text-white"}
                    >
                        {t("desc2")}
                    </Typography>
                </div>

                <div className={"mt-4 lg:mt-16"}>
                    <Button className={"px-8 h-10 rounded-full bg-white text-black hover:bg-white"}>
                        { t("register") }
                    </Button>
                    <Button className={"px-8 h-10 border border-white rounded-full bg-transparent text-white ml-4 hover:bg-transparent"}>
                        { t("transfer") }
                    </Button>
                </div>
            </motion.div>
        </section>
    )
}

export default Banner;