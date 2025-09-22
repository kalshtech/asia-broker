"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Professional = () => {
    const t = useTranslations("Pages.products.future.professional");
    const ary = [
        { imageUrl: "/images/products/future-professional1.png", title: t("row.col1.title"), midst: t("row.col1.midst"), desc: t("row.col1.desc") },
        { imageUrl: "/images/products/future-professional2.png", title: t("row.col2.title"), midst: t("row.col2.midst"), desc: t("row.col2.desc") },
        { imageUrl: "/images/products/future-professional3.png", title: t("row.col3.title"), midst: t("row.col3.midst"), desc: t("row.col3.desc") },
        { imageUrl: "/images/products/future-professional4.png", title: t("row.col4.title"), midst: t("row.col4.midst"), desc: t("row.col4.desc") },
    ];
    return (
        <section className={"p-4 lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    {t("title")}
                </Typography>
            </motion.div>
            <div className={"mt-16"}>
                <div className={"grid grid-cols-12 gap-8"}>
                    {
                        ary.map((item, index) => (
                            <div className={"bg-theme-light-bg rounded-2xl py-10 px-8 col-span-12 lg:col-span-3"} key={index}>
                                <img src={item.imageUrl} className={"w-10 h-10 object-cover"} alt=""/>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium mt-4"}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium mt-4"}
                                >
                                    {item.midst}
                                </Typography>

                                <Typography
                                    variant={"muted"}
                                    className={"mt-4"}
                                >
                                    {item.desc}
                                </Typography>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Professional;