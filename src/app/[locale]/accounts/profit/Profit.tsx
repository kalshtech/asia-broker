"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
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

const Profit = () => {
    const t = useTranslations("Pages.accounts.profit.profit");
    const ulAry = [
        { text: t("row.col1.ul.li1") },
        { text: t("row.col1.ul.li2") },
        { text: t("row.col1.ul.li3") },
        { text: t("row.col1.ul.li4") },
    ];
    return (
        <section className={"py-30"}>
            <Container>
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
                        className={"mt-6 text-center mx-auto max-w-5xl"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-4 mx-4 lg:mt-16 lg:mx-30"}>
                    <div className={"grid grid-cols-12 gap-4"}>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <ul className={"mt-8"}>
                                {
                                    ulAry.map((item, index) => (
                                        <li key={index} className={"flex items-center my-4"}>
                                        <span
                                            className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-theme-active block rounded-full"}/>
                                            <Typography
                                                variant={"muted"}
                                                className={"ml-2"}
                                            >
                                                {item.text}
                                            </Typography>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className={"mt-10"}>
                                <GeneralLinkBtn
                                    text={t("row.col1.gold")}
                                    path={"/accounts/platinum"}
                                    theme={"active-solid"}
                                />
                                <GeneralLinkBtn
                                    text={t("row.col1.vic")}
                                    path={"/accounts/vic"}
                                    theme={"active-solid"}
                                    className={"ml-4"}
                                />
                            </div>
                            <div className={"mt-4"}>
                                <GeneralLinkBtn
                                    text={t("row.col1.download")}
                                    path={"/platform"}
                                    theme={"active-hollow"}
                                />
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <img
                                src="/images/accounts/profit-phone-placeholder.png"
                                className={"max-h-[380px] mx-auto object-cover"}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Profit;