"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Reasons = () => {
    const t = useTranslations("Pages.ideas.calculator.reasons");
    const ulAry = [
        { text: t("row.col1.ul.li1") },
        { text: t("row.col1.ul.li2") },
        { text: t("row.col1.ul.li3") },
    ];
    return (
        <section className={"my-4 lg:my-30"}>
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
                </motion.div>
                <div className={"grid grid-cols-12 mt-4 lg:mt-16"}>
                    <div className={"bg-theme-deep-bg p-6 lg:p-12 lg:rounded-l-2xl col-span-12 lg:col-span-6"}>
                        <Typography
                            variant={"h4"}
                            className={"font-medium !text-white"}
                        >
                            {t("row.col1.title")}
                        </Typography>

                        <Typography
                            variant={"h6"}
                            className={"font-medium !text-white mt-10"}
                        >
                            {t("row.col1.desc")}
                        </Typography>
                        <ul className={"mt-8"}>
                            {
                                ulAry.map((item, index) => (
                                    <li key={index} className={"flex items-center my-4"}>
                                        <span
                                            className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-white block rounded-full"}/>
                                        <Typography
                                            variant={"muted"}
                                            className={"font-medium !text-white ml-2"}
                                        >
                                            {item.text}
                                        </Typography>
                                    </li>
                                ))
                            }
                        </ul>

                        <Typography
                            variant={"h6"}
                            className={"font-medium !text-white mt-10"}
                        >
                            {t("row.col1.prompt")}
                        </Typography>

                        <div className={"mt-10"}>
                            <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active"}>
                                {t("row.col1.explore")}
                            </Button>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <img src="/images/ideas/calculate-reasons.png" alt=""/>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Reasons;