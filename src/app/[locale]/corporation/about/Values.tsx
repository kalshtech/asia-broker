"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Values = () => {
    const t = useTranslations("Pages.corporation.about.values");
    return (
        <section className={"p-4 lg:p-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center"}
                    >
                        {t("title")}
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"text-center mt-6"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>

                <div className={"mt-16"}>
                    <div className={"grid grid-cols-12"}>
                        <div className={"col-span-6 h-full"}>
                            <div className={"py-10 px-8 border-r border-b"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium"}
                                >
                                    {t("row.col1.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium mt-4"}
                                >
                                    {t("row.col1.desc")}
                                </Typography>
                            </div>
                        </div>
                        <div className={"col-span-6 h-full"}>
                            <div className={"py-10 px-8 border-b"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium"}
                                >
                                    {t("row.col2.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium mt-4"}
                                >
                                    {t("row.col2.desc")}
                                </Typography>
                            </div>
                        </div>
                        <div className={"col-span-6 h-full"}>
                            <div className={"py-10 px-8 border-r"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium"}
                                >
                                    {t("row.col3.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium mt-4"}
                                >
                                    {t("row.col3.desc")}
                                </Typography>
                            </div>
                        </div>
                        <div className={"col-span-6 h-full"}>
                            <div className={"py-10 px-8"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium"}
                                >
                                    {t("row.col4.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium mt-4"}
                                >
                                    {t("row.col4.desc")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Values;