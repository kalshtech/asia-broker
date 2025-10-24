"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button }  from "@/components/ui/button";
import Container from "@/components/Container";
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Ready = () => {
    const t = useTranslations("Pages.corporation.about.ready");
    return (
        <section className={"py-8 lg:py-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h3"}
                    className={"text-center"}
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
            <div className={"mt-4 lg:mt-16"}>
                <div className={"relative"}>
                    <img src="/images/corporation/about-ready.png" className={"relative z-10"} alt=""/>
                    <Container>
                        <div className={"grid grid-cols-12 gap-4 p-4 lg:p-12 bg-theme-deep-bg rounded-lg -mt-20 flex-col lg:flex-row relative z-20"}>
                            <div className={"col-span-12 lg:col-span-8"}>
                                <Typography
                                    variant={"lead"}
                                    className={"!text-white"}
                                >
                                    {t("joint")}
                                </Typography>
                            </div>
                            <div className={"col-span-12 lg:col-span-4"}>
                                <div className={"flex mt-4 lg:mt-0 justify-center"}>
                                    <Button className={"h-10 bg-theme-active hover:bg-theme-active-hover"}>
                                        {t("trade")}
                                    </Button>
                                    <Button
                                        className={"ml-4 border bg-transparent hover:bg-transparent"}>
                                        {t("support")}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    )
}

export default Ready;