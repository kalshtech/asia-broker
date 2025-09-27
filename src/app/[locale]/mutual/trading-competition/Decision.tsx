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

const Decision = () => {
    const t = useTranslations("Pages.mutual.trading-competition.decision");

    return (
        <section className={"py-8 lg:py-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className={"px-4 lg:px-30"}
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center !text-white"}
                >
                    {t("title")}
                </Typography>
                <Typography
                    variant={"muted"}
                    className={"font-medium text-center mx-auto mt-8 !text-white"}
                >
                    {t("desc1")}
                </Typography>
                <Typography
                    variant={"muted"}
                    className={"font-medium text-center mx-auto mt-2 !text-white"}
                >
                    {t("desc2")}
                </Typography>
            </motion.div>
            <div className={"mt-16"}>
                <div className={"grid grid-cols-12"}>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div className={"bg-theme-active h-full py-6 px-8 lg:px-30 lg:py-20"}>
                            <div>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col1.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium !text-white mt-6 leading-[32px]"}
                                >
                                    {t("row.col1.desc")}
                                </Typography>
                            </div>
                            <div className={"mt-16"}>
                                <Button className={"px-8 h-10 rounded-full bg-white text-theme-active hover:bg-white"}>
                                    { t("row.col1.register") }
                                </Button>
                                <Button className={"px-8 ml-4 h-10 rounded-full border text-white bg-transparent hover:bg-transparent"}>
                                    { t("row.col1.jump") }
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div className={"bg-[url(/images/mutual/competition-decision-portrait.png)] bg-cover bg-center overflow h-full"}>
                            <div className={"px-8 lg:px-30 pt-20 lg:pt-60 pb-8 lg:pb-20"}>
                               <div>
                                   <Typography
                                       variant={"h4"}
                                       className={"font-medium !text-white"}
                                   >
                                       {t("row.col2.title")}
                                   </Typography>
                                   <Typography
                                       variant={"muted"}
                                       className={"font-medium text-right !text-white mt-6"}
                                   >
                                       {t("row.col2.desc")}
                                   </Typography>
                               </div>
                                <div className={"mt-10 flex justify-end"}>
                                    <a href="/">
                                        <img className={"w-[30px] h-[30px] object-cover"} src="/images/mutual/competition-x.png" alt=""/>
                                    </a>
                                    <a href="/" className={"ml-4"}>
                                        <img className={"w-[30px] h-[30px] object-cover"} src="/images/mutual/competition-youtube.png" alt=""/>
                                    </a>
                                    <a href="/" className={"ml-4"}>
                                        <img className={"w-[30px] h-[30px] object-cover"} src="/images/mutual/competition-is.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Decision;