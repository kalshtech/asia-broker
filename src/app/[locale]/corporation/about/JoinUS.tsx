"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Introduction from "@/components/common/corporation/Introduction";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const JoinUS = () => {
    const t = useTranslations("Pages.corporation.about.join");
    return (
        <section className={"py-16"}>
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
                    className={"text-center mt-4"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mt-4 lg:mt-16"}>
                <Introduction/>
            </div>
        </section>
    )
}

export default JoinUS;