"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
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

const AboutCalendar = () => {
    const t = useTranslations("Pages.ideas.calendar.aboutCalendar");
    return (
        <section className={"bg-[url(/images/ideas/about-calendar-background.png)] bg-cover bg-center py-4 lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography variant={"h3"} className={"text-center !text-white"}>
                        {t("title")}
                    </Typography>

                    <Typography variant={"muted"} className={"text-center mx-auto !text-white mt-6 max-w-4xl"}>
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"max-w-4xl mx-auto mt-8 lg:mt-30"}>
                    <div className={"grid grid-cols-12 gap-8"}>
                        <div className={"col-span-12 lg:col-span-4"}>
                            <Input placeholder={t("form.first-placeholder")}
                                   className={"text-white rounded-full h-12 bg-theme-light-bg/60 placeholder:text-white"}/>
                        </div>
                        <div className={"col-span-12 lg:col-span-4"}>
                            <Input placeholder={t("form.last-placeholder")}
                                   className={"text-white rounded-full h-12 bg-theme-light-bg/60 placeholder:text-white"}/>
                        </div>
                        <div className={"col-span-12 lg:col-span-4"}>
                            <Input placeholder={t("form.country-placeholder")}
                                   className={"text-white rounded-full h-12 bg-theme-light-bg/60 placeholder:text-white"}/>
                        </div>
                    </div>
                    <div className={"grid grid-cols-12 gap-8 mt-6"}>
                        <div className={"col-span-8"}>
                            <Input placeholder={t("form.email-placeholder")}
                                   className={"text-white rounded-full h-12 bg-theme-light-bg/60 placeholder:text-white"}/>
                        </div>
                        <div className={"col-span-4"}>
                            <Button className={"flex-1 w-full h-full bg-theme-active hover:bg-theme-hover"}>
                                {t("form.subscribe")}
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutCalendar;