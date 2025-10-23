"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import { MoveRight } from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Compass = () => {
    const t = useTranslations("Pages.academy.learning.compass");
    const locale = useLocale();
    const isEn = locale === "en";
    const ary = [
        { imageUrl:"/images/academy/learning-compass-swiper1.png", title: t("row.span1.title"), desc: t("row.span1.desc"), prompt: t("row.span1.prompt") },
        { imageUrl:"/images/academy/learning-compass-swiper2.png", title: t("row.span2.title"), desc: t("row.span2.desc"), prompt: t("row.span2.prompt") },
        { imageUrl:"/images/academy/learning-compass-swiper3.png", title: t("row.span3.title"), desc: t("row.span3.desc"), prompt: t("row.span3.prompt") },
    ];
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
                    <Typography
                        variant={"muted"}
                        className={"text-center mt-8 "}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <div className={"grid grid-cols-12 gap-8"}>
                        {
                            ary.map((item, index) => (
                                <div className={"col-span-12 lg:col-span-4"} key={index}>
                                    <img src={item.imageUrl} className={"object-cover"} alt=""/>
                                    <Typography variant={"h5"} className={"mt-6"}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant={"muted"} className={"mt-2"}>
                                        {item.desc}
                                    </Typography>
                                    {
                                        !isEn && (
                                            <Typography variant={"muted"} className={"mt-6 font-normal"}>
                                                {item.prompt}
                                            </Typography>
                                        )
                                    }
                                    <div className={"flex items-center mt-6 cursor-pointer"}>
                                        <Typography variant={"muted"}>
                                            {t("view")}
                                        </Typography>
                                        <MoveRight className={"ml-4"}/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Compass;