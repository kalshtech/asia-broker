"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import {Button} from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Statement = () => {
    const t = useTranslations("Pages.products.rates.statement");
    const colAry = [
        { imageUrl: "/images/products/rates-statement1.png", title: t("row.col1.title"), desc: t("row.col1.desc"), more: t("row.col1.more") },
        { imageUrl: "/images/products/rates-statement2.png", title: t("row.col2.title"), desc: t("row.col2.desc"), more: t("row.col2.more") },
    ]
    return (
        <section className={"bg-theme-light-bg p-4 lg:p-30"}>
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

                <Typography
                    variant={"muted"}
                    className={"text-center mt-4 lg:mt-10"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mt-4 lg:mt-16"}>
                <div className={"grid grid-cols-12 gap-4 lg:gap-12"}>
                    {
                        colAry.map((item, index) => (
                            <div
                                className={"bg-white rounded-2xl p-4 lg:p-10 col-span-12 lg:col-span-6"}
                                key={index}
                            >
                                <img src={item.imageUrl} className={"w-10 h-10 object-cover"} alt=""/>
                                <Typography
                                    variant={"h3"}
                                    className={"font-medium my-6"}
                                >
                                    { item.title }
                                </Typography>

                                <Typography
                                    variant={"muted"}
                                    className={"font-medium mt-6"}
                                >
                                    { item.desc }
                                </Typography>

                                <div className={"mt-8"}>
                                    <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                                        { item.more }
                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Statement;