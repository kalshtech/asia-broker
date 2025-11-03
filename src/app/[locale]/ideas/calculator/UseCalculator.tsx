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


const UseCalculator = () => {
    const t = useTranslations("Pages.ideas.calculator.use");
    return (
        <section className={"py-16 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography variant={"h3"} className={"text-center"}>
                        {t("title")}
                    </Typography>

                    <Typography
                        variant={"p"}
                        className={"mt-4 text-center"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-4 lg:mt-16"}>
                    <img src="/images/ideas/calculator-use-bg.png" alt="" className={"relative z-10"}/>
                    <div
                        className={"bg-theme-light-bg grid grid-cols-12 -mt-24 relative z-20 rounded-xl mx-4 lg:mx-30"}>
                        <div className={"border-r col-span-12 lg:col-span-4 p-4 lg:py-10 lg:px-8"}>
                            <div className={"border-[2px] w-[32px] h-[32px] border-black bg-white rounded-full flex justify-center items-center"}>
                                1
                            </div>
                            <Typography
                                variant={"h5"}
                                className={"font-medium mt-4"}
                            >
                                {t("ul.li1")}
                            </Typography>
                        </div>
                        <div className={"border-r col-span-12 lg:col-span-4 p-4 lg:py-10 lg:px-8"}>
                            <div className={"border-[2px] w-[32px] h-[32px] border-black bg-white rounded-full flex justify-center items-center"}>
                                2
                            </div>
                            <Typography
                                variant={"h5"}
                                className={"font-medium mt-4"}
                            >
                                {t("ul.li2")}
                            </Typography>
                        </div>
                        <div className={"col-span-12 lg:col-span-4 p-4 lg:py-10 lg:px-8"}>
                            <div
                                className={"border-[2px] w-[32px] h-[32px] border-black bg-white rounded-full flex justify-center items-center"}>
                                3
                            </div>
                            <Typography
                                variant={"h5"}
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
            </Container>
        </section>
    )
}

export default UseCalculator;