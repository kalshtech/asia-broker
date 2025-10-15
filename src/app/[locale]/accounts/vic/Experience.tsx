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

const Experience = () => {
    const t = useTranslations("Pages.accounts.vic.experience");
    const ary = [
        { imageUrl: "bg-[url(/images/accounts/vic-experience-1.png)]", title: t("row.col1.title"), desc: t("row.col1.desc") },
        { imageUrl: "bg-[url(/images/accounts/vic-experience-2.png)]", title: t("row.col2.title"), desc: t("row.col2.desc") },
        { imageUrl: "bg-[url(/images/accounts/vic-experience-3.png)]", title: t("row.col3.title"), desc: t("row.col3.desc") },
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

                    <Typography
                        variant={"h4"}
                        className={"text-center mt-12"}
                    >
                        {t("prospect")}
                    </Typography>
                </motion.div>
                <div className={"mt-4 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-4"}>
                        {
                            ary.map((item, i) => (
                                <div className={"col-span-12 lg:col-span-4"} key={i}>
                                    <div className={`p-6 ${item.imageUrl} h-70 bg-center bg-cover`}>
                                        <Typography
                                            variant={"h5"}
                                            className={"mt-30 !text-white"}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white mt-4"}
                                        >
                                            {item.desc}
                                        </Typography>
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

export default Experience;