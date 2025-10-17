"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const JoinUS = () => {
    const t = useTranslations("Pages.corporation.contact.joinus");
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
                        {t("title")}
                    </Typography>

                    <Typography variant={"muted"} className={"text-center mt-6"}>
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-8 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-4"}>
                        <div className={"col-span-12 lg:col-span-4 h-full space-y-8"}>
                            <div className={"bg-[url(/images/corporation/contact-join1.png)] py-10 px-8 h-[334px]"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col1.1.title")}
                                </Typography>

                                <Typography
                                    variant={"muted"}
                                    className={"font-medium mt-4 !text-white"}
                                >
                                    {t("row.col1.1.desc")}
                                </Typography>
                            </div>
                            <div className={"bg-[url(/images/corporation/contact-join2.png)] py-10 px-8 h-[334px]"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col1.2.title")}
                                </Typography>

                                <Typography
                                    variant={"muted"}
                                    className={"font-medium mt-4 !text-white"}
                                >
                                    {t("row.col1.2.desc")}
                                </Typography>
                            </div>
                        </div>
                        <div
                            className={"col-span-12 lg:col-span-4 h-full bg-gradient-to-b from-[#000824] to-[#585D6C]"}>
                            <div
                                className={"flex flex-col flex-1 py-8 lg:py-0 h-full px-8 justify-center items-center"}>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col2.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium !text-white mt-8 text-center"}
                                >
                                    {t("row.col2.desc1")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium !text-white mt-6"}
                                >
                                    {t("row.col2.desc2")}
                                </Typography>
                                <div className={"mt-10"}>
                                    <Button
                                        className={"bg-theme-active hover:bg-theme-active-hover"}>
                                        {t("row.col2.join")}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-4 h-full space-y-8"}>
                            <div className={"bg-[url(/images/corporation/contact-join3.png)] py-10 px-8 h-[334px]"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col3.1.title")}
                                </Typography>

                                <Typography
                                    variant={"muted"}
                                    className={"font-medium mt-4 !text-white"}
                                >
                                    {t("row.col3.1.desc")}
                                </Typography>
                            </div>
                            <div className={"bg-[url(/images/corporation/contact-join4.png)] py-10 px-8 h-[334px]"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col3.2.title")}
                                </Typography>

                                <Typography
                                    variant={"muted"}
                                    className={"font-medium mt-4 !text-white"}
                                >
                                    {t("row.col3.2.desc")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default JoinUS;