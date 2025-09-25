"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import Register from "@/components/RegisterBtn";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


const Standard = () => {
    const t = useTranslations("Pages.products.rates.standard");
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

                <Typography
                    variant={"muted"}
                    className={"text-center mt-4 lg:mt-10"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"flex justify-center mt-4 lg:mt-16"}>
                <Register/>
            </div>
        </section>
    )
}

export default Standard;