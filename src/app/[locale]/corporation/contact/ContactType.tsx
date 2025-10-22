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

const ContactType = () => {
    const t = useTranslations("Pages.corporation.contact.type");
    return (
        <section className={"py-4 lg:py-30 bg-theme-light-bg"}>
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

                    <Typography
                        variant={"muted"}
                        className={"text-center mt-6"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-8 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-8"}>
                        <div className={"col-span-12 lg:col-span-6 bg-white p-10 rounded-2xl"}>
                            <div>
                                <img src="/images/corporation/contact-type1.png" className={"w-10 h-10 object-cover"}
                                     alt="icon"/>
                            </div>
                            <div>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium my-6"}
                                >
                                    {t("row.col1.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                >
                                    {t("row.col1.desc")}
                                </Typography>
                                <a href="https://info@afttmarkets.com" className={"text-theme-active mt-6 block"}>
                                    info@afttmarkets.com
                                </a>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-6 bg-white p-10 rounded-2xl"}>
                            <div className={"flex"}>
                                <img src="/images/corporation/contact-type2.png" className={"w-10 h-10 object-cover"}
                                     alt="icon"/>
                                <Button
                                    className={"ml-auto bg-theme-active hover:bg-theme-active-hover"}>
                                    {t("join")}
                                </Button>
                            </div>
                            <div>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium my-6"}
                                >
                                    {t("row.col2.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                >
                                    {t("row.col2.desc")}
                                </Typography>
                                <a href="mailto:career@afttmarkets.com" className={"text-theme-active mt-6 block"}>
                                    career@afttmarkets.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"mt-10"}>
                    <Typography
                        variant={"muted"}
                    >
                        {t("prompt1")}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"mt-6"}
                    >
                        {t("prompt2")}
                    </Typography>
                </div>
            </Container>
        </section>
    )
}

export default ContactType;