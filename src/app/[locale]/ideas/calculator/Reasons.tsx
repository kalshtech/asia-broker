"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

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
    const locale = useLocale();
    const isEn = locale === "en";
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
                    <Typography variant={"h3"} className={"text-center"}>
                        {t("title")}
                    </Typography>
                </motion.div>
                <div className={"grid grid-cols-12 mt-4 lg:mt-16"}>
                    <div className={"bg-theme-deep-bg px-6 py-8 lg:py-20 lg:px-12 lg:rounded-l-2xl col-span-12 lg:col-span-6"}>
                        <Typography
                            variant={"h4"}
                            className={"font-medium !text-white"}
                        >
                            {t("row.col1.title")}
                        </Typography>

                        {
                            !isEn && (
                                <Typography
                                    variant={"h6"}
                                    className={"font-medium !text-white mt-10"}
                                >
                                    {t("row.col1.desc")}
                                </Typography>
                            )
                        }


                        {
                            !isEn && (
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
                            )
                        }

                        <Typography
                            variant={"h6"}
                            className={"font-medium !text-white mt-10"}
                        >
                            {t("row.col1.prompt")}
                        </Typography>

                        <div className={"mt-10"}>
                            <GeneralLinkBtn
                                text={t("row.col1.explore")}
                                path={"/products/forex"}
                                theme={"active-solid"}
                            />
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <img src="/images/ideas/calculate-reasons.png"
                             className={"h-full w-full object-cover max-h-[660px] rounded-r-xl"} alt=""/>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Reasons;