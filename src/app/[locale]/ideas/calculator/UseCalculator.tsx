"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


const UseCalculator = () => {
    const t = useTranslations("Pages.ideas.calculator.use");
    return (
        <section className={"py-30"}>
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
                    variant={"lead"}
                    className={"font-medium mt-4 text-center"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mt-16"}>
                <img src="/images/ideas/calculator-use-bg.png" alt="" className={"relative z-10"}/>
                <div className={"bg-theme-light-bg grid grid-cols-12 mx-30 -mt-24 relative z-20 rounded-xl"}>
                    <div className={"col-span-4 py-10 px-8 border-r"}>
                        <div
                            className={"border-[2px] w-[32px] h-[32px] border-black bg-white rounded-full flex justify-center items-center"}>
                            1
                        </div>
                        <Typography
                            variant={"h3"}
                            className={"font-medium mt-4"}
                        >
                            {t("ul.li1")}
                        </Typography>
                    </div>
                    <div className={"col-span-4 py-10 px-8 border-r"}>
                        <div
                            className={"border-[2px] w-[32px] h-[32px] border-black bg-white rounded-full flex justify-center items-center"}>
                            2
                        </div>
                        <Typography
                            variant={"h3"}
                            className={"font-medium mt-4"}
                        >
                            {t("ul.li2")}
                        </Typography>
                    </div>
                    <div className={"col-span-4 py-10 px-8 "}>
                        <div
                            className={"border-[2px] w-[32px] h-[32px] border-black bg-white rounded-full flex justify-center items-center"}>
                           3
                        </div>
                        <Typography
                            variant={"h3"}
                            className={"font-medium mt-4"}
                        >
                            {t("ul.li3")}
                        </Typography>
                    </div>
                </div>

                <div>
                    <Typography
                        variant={"muted"}
                        className={"text-center mt-10"}
                    >
                        {t("prompt")}
                    </Typography>
                </div>
            </div>
        </section>
    )
}

export default UseCalculator;