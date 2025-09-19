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


const SetOut = () => {
    const t = useTranslations("Pages.corporation.careers.setOut");
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
                    className={"font-medium text-center"}
                >
                    {t("title")}
                </Typography>
                <Typography
                    variant={"h5"}
                    className={"font-medium mt-6 text-center"}
                >
                    {t("desc")}
                </Typography>
                <div className={"mt-16 flex justify-center items-center"}>
                    <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                        {t("view")}
                    </Button>
                </div>
            </motion.div>
        </section>
    )
}

export default SetOut