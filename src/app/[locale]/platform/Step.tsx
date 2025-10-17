"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import RegisterBtn from "@/components/RegisterBtn";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Step = () => {
    const t = useTranslations("Pages.platform.step");
    return (
        <section className={"bg-[url(/images/platform/step-background.png)] bg-cover bg-center h-96 lg:h-[532px] py-4 lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center !text-white"}
                    >
                        {t("title")}
                    </Typography>
                </motion.div>
                <div className={"mt-4 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-4"}>
                        <div className={"col-span-12 lg:col-span-4"}>
                            <div className={"flex items-start"}>
                                <div className={"w-8 h-8 min-w-8 min-h-8 mt-1 flex justify-center items-center bg-white rounded-full text-black"}>
                                    1
                                </div>
                                <div className={"flex flex-col ml-4"}>
                                    <Typography
                                        variant={"large"}
                                        className={"text-white"}
                                    >
                                        {t("row.col1-title")}
                                    </Typography>
                                    <Typography
                                        variant={"muted"}
                                        className={"!text-white mt-2"}
                                    >
                                        {t("row.col1-desc")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-4"}>
                            <div className={"flex items-start"}>
                                <div className={"w-8 h-8 min-w-8 min-h-8 mt-1 flex justify-center items-center bg-white rounded-full text-black"}>
                                    2
                                </div>
                                <div className={"flex flex-col ml-4"}>
                                    <Typography
                                        variant={"large"}
                                        className={"text-white"}
                                    >
                                        {t("row.col2-title")}
                                    </Typography>
                                    <Typography
                                        variant={"muted"}
                                        className={"!text-white mt-2"}
                                    >
                                        {t("row.col2-desc")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-4"}>
                            <div className={"flex items-start"}>
                                <div className={"w-8 h-8 min-w-8 min-h-8 mt-1 flex justify-center items-center bg-white rounded-full text-black"}>
                                    3
                                </div>
                                <div className={"flex flex-col ml-4"}>
                                    <Typography
                                        variant={"large"}
                                        className={"text-white"}
                                    >
                                        {t("row.col3-title")}
                                    </Typography>
                                    <Typography
                                        variant={"muted"}
                                        className={"!text-white mt-2"}
                                    >
                                        {t("row.col3-desc")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"mx-auto mt-8 lg:mt-24"}>
                    <div className={"flex justify-center"}>
                        <RegisterBtn className={"bg-white hover:bg-white text-theme-active"}/>
                        <Button className={"ml-12 border bg-transparent hover:bg-transparent"}>
                            {t("join")}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Step;