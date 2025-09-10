"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
        <section className={"p-30 bg-[url(/images/ideas/about-calendar-background.png)] bg-cover bg-center"}>
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
                    className={"text-center mx-auto !text-white mt-6 max-w-4xl"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mt-30 max-w-4xl mx-auto"}>
                <div className={"grid grid-cols-12 gap-8"}>
                    <div className={"col-span-4"}>
                        <Input placeholder={t("form.first-placeholder")} className={"text-white rounded-full h-12 bg-theme-light-bg/60 placeholder:text-white"} />
                    </div>
                    <div className={"col-span-4"}>
                        <Input placeholder={t("form.last-placeholder")} className={"text-white rounded-full h-12 bg-theme-light-bg/60 placeholder:text-white"} />
                    </div>
                    <div className={"col-span-4"}>
                        <Input placeholder={t("form.country-placeholder")} className={"text-white rounded-full h-12 bg-theme-light-bg/60 placeholder:text-white"} />
                    </div>
                </div>
                <div className={"grid grid-cols-12 gap-8 mt-6"}>
                    <div className={"col-span-8"}>
                        <Input placeholder={t("form.email-placeholder")} className={"text-white rounded-full h-12 bg-theme-light-bg/60 placeholder:text-white"} />
                    </div>
                    <div className={"col-span-4"}>
                        <Button className={"flex-1 w-full h-full rounded-full bg-theme-active hover:bg-theme-hover"}>
                            { t("form.subscribe") }
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCalendar;