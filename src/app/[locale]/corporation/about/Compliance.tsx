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

const Compliance = () => {
    const t = useTranslations("Pages.corporation.about.compliance");
    return (
        <section className={"p-30 bg-[url(/images/corporation/about-compliance.png)] bg-center bg-cover h-[624px]"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium !text-white text-center"}
                >
                    {t("title")}
                </Typography>
            </motion.div>
            <div className={"mt-16"}>
                <div className={"grid grid-cols-12 gap-12"}>
                    <div className={"col-span-6 h-full flex"}>
                        <div className={"px-10 py-6 bg-white/60 rounded-lg mt-auto flex-1"}>
                            <img src="/images/corporation/about-sgx-logo.png" className={"h-[26px]"} alt=""/>
                            <Typography
                                variant={"h5"}
                                className={"font-medium mt-4"}
                            >
                                {t("row.col1.title")}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"font-medium mt-2"}
                            >
                                {t("row.col1.desc")}
                            </Typography>
                        </div>
                    </div>
                    <div className={"col-span-6"}>
                        <div>
                            <div>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col2.title1")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium !text-white mt-2"}
                                >
                                    {t("row.col2.desc1")}
                                </Typography>
                            </div>
                            <div className={"mt-10"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col2.title2")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium !text-white mt-2"}
                                >
                                    {t("row.col2.desc2")}
                                </Typography>
                            </div>
                            <div className={"mt-10"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col2.title3")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium !text-white mt-2"}
                                >
                                    {t("row.col2.desc3")}
                                </Typography>
                            </div>

                            <div className={"mt-10"}>
                                <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                                    {t("row.col2.view")}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Compliance;