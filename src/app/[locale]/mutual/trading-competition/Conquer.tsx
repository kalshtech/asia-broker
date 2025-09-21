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

const Conquer = () => {
    const t = useTranslations("Pages.mutual.trading-competition.conquer");

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
                    className={"font-medium text-center !text-white"}
                >
                    {t("title")}
                </Typography>
                <Typography
                    variant={"muted"}
                    className={"font-medium text-center mx-auto mt-8 !text-white"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mt-10 flex justify-center"}>
                <Button className={"px-8 h-10 rounded-full bg-theme-active  hover:bg-theme-active"}>
                    { t("register") }
                </Button>
                <Button className={"px-8 ml-4 h-10 rounded-full border text-white bg-transparent hover:bg-transparent"}>
                    { t("trade") }
                </Button>
            </div>
            <div className={"mt-16"}>
                <div className={"grid grid-cols-12 gap-4"}>
                    <div className={"col-span-4"}>
                        <img src="/images/mutual/competition-conquer1.png" className={"max-h-[560px] mx-auto object-cover"}
                             alt=""/>
                    </div>
                    <div className={"col-span-4"}>
                        <img src="/images/mutual/competition-conquer2.png" className={"max-h-[560px] mx-auto object-cover"}
                             alt=""/>
                    </div>
                    <div className={"col-span-4"}>
                        <img src="/images/mutual/competition-conquer3.png" className={"max-h-[560px] mx-auto object-cover"}
                             alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Conquer