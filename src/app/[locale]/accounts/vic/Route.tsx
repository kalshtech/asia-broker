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


const Route = () => {
    const t = useTranslations("Pages.accounts.vic.route");
    return (
        <section className={"py-4 lg:py-30"}>
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
                        {t("title1")}
                    </Typography>

                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center mt-2"}
                    >
                        {t("title2")}
                    </Typography>

                    <Typography
                        variant={"h4"}
                        className={"text-center mt-10"}
                    >
                        {t("midst")}
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"text-center mt-4"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>

                <div className={"mt-16"}>
                    <div className={"grid grid-cols-1 lg:grid-cols-3"}>
                        <div
                            className={"bg-[url(/images/accounts/route-bg1.png)] bg-center bg-cover py-20 px-10 h-80 relative z-10 lg:-mr-16"}>
                            <Typography
                                variant={"h4"}
                                className={"!text-white mr-16"}
                            >
                                {t("row.col1.title")}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"!text-white mt-12 mr-16"}
                            >
                                {t("row.col1.desc")}
                            </Typography>
                        </div>
                        <div
                            className={"bg-[url(/images/accounts/route-bg2.png)] bg-center bg-cover py-20 px-10 h-80 relative z-20 lg:mt-16"}>
                            <Typography
                                variant={"h4"}
                                className={"!text-white"}
                            >
                                {t("row.col2.title")}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"!text-white mt-12"}
                            >
                                {t("row.col2.desc")}
                            </Typography>
                        </div>
                        <div
                            className={"bg-[url(/images/accounts/route-bg3.png)] bg-center bg-cover py-20 px-10 h-80 relative z-10 lg:-ml-16"}>
                            <Typography
                                variant={"h4"}
                                className={"!text-white lg:ml-16"}
                            >
                                {t("row.col3.title")}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"!text-white mt-12 lg:ml-16"}
                            >
                                {t("row.col3.desc")}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Route;