"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import classnames from "classnames";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Articles = () => {
    const t = useTranslations("Pages.corporation.about.articles");
    const ary = [
        { imageUrl: "bg-[url(/images/corporation/about-article1.png)] bg-center bg-cover", title: t("row.col1.title"), desc: t("row.col1.desc") },
        { imageUrl: "bg-[url(/images/corporation/about-article2.png)] bg-center bg-cover", title: t("row.col2.title"), desc: t("row.col2.desc") },
        { imageUrl: "bg-[url(/images/corporation/about-article3.png)] bg-center bg-cover", title: t("row.col3.title"), desc: t("row.col3.desc") }
    ];
    return (
        <section className={"p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium max-w-[1200px] !text-[40px] mx-auto text-center"}
                >
                    {t("title")}
                </Typography>
                <Typography
                    variant={"muted"}
                    className={"font-medium mt-6 max-w-[1200px] mx-auto text-center leading-[24px]"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>

            <div className={"mt-16"}>
                <div className={"grid grid-cols-12 gap-4"}>
                    {
                        ary.map((item, index) => (
                            <div className={"col-span-4"} key={index}>
                                <div className={classnames([item.imageUrl, "p-12 rounded-lg h-[420px]"])}>
                                    <Typography
                                        variant={"h4"}
                                        className={"font-medium !text-white"}
                                    >
                                        { item.title }
                                    </Typography>
                                    <Typography
                                        variant={"muted"}
                                        className={"font-medium !text-white mt-6"}
                                    >
                                        { item.desc }
                                    </Typography>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Articles