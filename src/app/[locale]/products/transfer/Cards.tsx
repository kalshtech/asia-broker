"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Cards = () => {
    const t = useTranslations("Pages.products.transfer.card");
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
                        className={"text-center"}
                    >
                        {t("title")}
                    </Typography>
                </motion.div>
                <div className={"mt-4 lg:mt-16"}>
                    <div className={"grid-cols-12 grid gap-4"}>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <Typography
                                variant={"h4"}
                                className={"font-medium mt-10"}
                            >
                                {t("row.col1.title")}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"mt-10 max-w-3xl"}
                            >
                                {t("row.col1.desc1")}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"mt-10 max-w-3xl"}
                            >
                                {t("row.col1.desc2")}
                            </Typography>

                            <div className={"mt-10"}>
                                <Button
                                    className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                                    {t("row.col1.vic")}
                                </Button>
                                <Button
                                    className={"px-8 h-10 ml-4 rounded-full border border-theme-active text-theme-active bg-transparent hover:bg-transparent"}>
                                    {t("row.col1.apply")}
                                </Button>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <img src="/images/products/trnasfer-card-img.png" className={"object-cover"} alt=""/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Cards;