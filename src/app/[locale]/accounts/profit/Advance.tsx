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

const Advance = () => {
    const t = useTranslations("Pages.accounts.profit.advance");
    return (
        <section className={"p-30 bg-[url(/images/accounts/profit-advance-bg.png)] bg-center bg-cover"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center !text-white"}
                >
                    {t("title")}
                </Typography>
                <Typography
                    variant={"lead"}
                    className={"mt-16 text-center !text-white"}
                >
                    {t("desc1")}
                </Typography>
                <Typography
                    variant={"h3"}
                    className={"font-medium mt-6 text-center !text-white"}
                >
                    {t("desc2")}
                </Typography>

                <Typography
                    variant={"muted"}
                    className={"mt-12 text-center !text-white"}
                >
                    {t("desc3")}
                </Typography>
            </motion.div>

            <div className={"mt-16"}>
                <div className={"grid grid-cols-12 gap-8"}>
                    <div className={"col-span-6"}>
                        <div className={"bg-white rounded-xl p-16"}>
                            <Typography
                                variant={"h3"}
                                className={"font-medium mt-6 text-center"}
                            >
                                {t("row.col1.title")}
                            </Typography>

                            <Typography
                                variant={"muted"}
                                className={"font-medium mt-6 text-center"}
                            >
                                {t("row.col1.desc")}
                            </Typography>

                            <div className={"mt-16 flex justify-center"}>
                                <Button
                                    className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                                    {t("row.col1.btn")}
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-6"}>
                        <div className={"bg-white rounded-xl p-16"}>
                            <Typography
                                variant={"h3"}
                                className={"font-medium mt-6 text-center"}
                            >
                                {t("row.col2.title")}
                            </Typography>

                            <Typography
                                variant={"muted"}
                                className={"font-medium mt-6 text-center"}
                            >
                                {t("row.col2.desc")}
                            </Typography>

                            <div className={"mt-16 flex justify-center"}>
                                <Button
                                    className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                                    {t("row.col2.btn")}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advance;