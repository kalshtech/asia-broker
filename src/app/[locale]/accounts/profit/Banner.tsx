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
    const t = useTranslations("Pages.accounts.profit.banner");

    return (
        <div>
            <section className={"p-30 bg-[url(/images/accounts/profit-banner.png)] bg-center bg-cover h-[632px]"}>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"muted"}
                        className={"font-medium !text-white !bg-gradient-to-b !from-[#5368AC] !to-[#1F3A93] !bg-clip-text !text-transparent"}
                    >
                        {t("top")}
                    </Typography>
                    <Typography
                        variant={"h1"}
                        className={"font-medium !text-white mt-4"}
                    >
                        {t("title")}
                    </Typography>

                    <Typography
                        variant={"h5"}
                        className={"font-medium !text-white max-w-3xl mt-10"}
                    >
                        {t("desc")}
                    </Typography>
                    <div className={"mt-16"}>
                        <Button className={"px-8 h-10 rounded-full text-black bg-white hover:bg-white"}>
                            {t("register")}
                        </Button>
                        <Button className={"px-8 h-10 rounded-full ml-6 border bg-transparent hover:bg-transparent"}>
                            {t("vic")}
                        </Button>
                    </div>

                    <Typography
                        variant={"muted"}
                        className={"font-medium !text-white max-w-3xl mt-10"}
                    >
                        {t("prompt")}
                    </Typography>
                </motion.div>
            </section>
            <div className={"mx-30 bg-white px-10 py-12 -mt-30 rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]"}>
                <div className={"flex"}>
                    <div className={"flex items-center"}>
                        <Typography
                            variant={"muted"}
                            className={"font-medium text-center"}
                        >
                            { t("board.rates") }
                        </Typography>
                        <Typography
                            variant={"h2"}
                            className={"font-medium text-center ml-2"}
                        >
                            5.30%
                        </Typography>
                    </div>
                    <div className={"ml-auto flex items-center"}>
                        <img src="/images/accounts/profit-banner-logo.png" className={"h-[30px] w-[30px] object-cover"} alt="logo"/>
                        <Typography
                            variant={"muted"}
                            className={"font-medium text-center ml-2"}
                        >
                            { t("board.from") }
                        </Typography>
                    </div>
                </div>
                <div className={"mt-6"}>
                    <Typography
                        variant={"muted"}
                        className={"font-medium text-center"}
                    >
                        { t("board.desc") }
                    </Typography>
                </div>
                <div className={"mt-6"}>
                    <Typography
                        variant={"muted"}
                        className={"font-medium mx-auto text-center max-w-3xl"}
                    >
                        { t("board.tag") }
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Banner;