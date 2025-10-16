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


const BankCards = () => {
    const t = useTranslations("Pages.accounts.vic.bankCards");
    const ulAry = [
        { text: t("row.col1.ul.li1") },
        { text: t("row.col1.ul.li2") },
        { text: t("row.col1.ul.li3") },
        { text: t("row.col1.ul.li4") },
    ];
    return (
        <section className={"bg-theme-deep-bg py-4 lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium !text-white text-center"}
                    >
                        {t("title1")}
                    </Typography>

                    <Typography
                        variant={"h3"}
                        className={"font-medium !text-white text-center mt-2"}
                    >
                        {t("title2")}
                    </Typography>
                </motion.div>
                <div className={"mt-4 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-8"}>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <Typography
                                variant={"h4"}
                                className={"font-medium max-w-lg !text-white"}
                            >
                                {t("row.col1.title")}
                            </Typography>
                            <ul className={"mt-4 lg:mt-12"}>
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
                            <div className={"mt-4 lg:mt-16"}>
                                <Button className={"text-black bg-white hover:bg-white"}>
                                    {t("row.col1.understand")}
                                </Button>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <img
                                className={"max-h-90 object-cover mx-auto"}
                                src="/images/accounts/vic-card.png"
                                alt="card"
                                title={"card"}
                            />
                            <Typography
                                variant={"muted"}
                                className={"font-medium !text-white text-center mt-4"}
                            >
                                {t("row.col2.desc")}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BankCards;