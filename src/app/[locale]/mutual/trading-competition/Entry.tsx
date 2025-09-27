"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

type Props = {
    title: string;
    desc: string;
    btnAry: Array<{label: string; value: string}>;
    poolText: string;
    number: string;
    type: "weekly" | "monthly"
}

const AccountProvince = (props: Props) => {
    const { title, desc, btnAry, poolText, number, type } = props;
    return (
        <section className={"bg-[#1F2538] py-10 px-6 rounded-2xl"}>
            <Typography
                variant={"h2"}
                className={"font-medium text-center !text-white"}
            >
                {title}
            </Typography>
            <Typography
                variant={"muted"}
                className={"font-medium text-center mt-4 !text-white"}
            >
                {desc}
            </Typography>

            <div className={"mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8"}>
                {
                    btnAry.map((item, index) => (
                        <Button key={index}
                                className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                            {item.label}
                        </Button>
                    ))
                }
            </div>


            {
                type === "weekly" && (
                    <div className={"mt-16 mb-10"}>
                        <div className={"relative bg-[#384059] w-full h-1"}>
                            <span className={"block absolute w-1/3 bg-white top-0 h-full"}/>
                        </div>
                    </div>
                )
            }


            {
                type === "monthly" && (
                    <div className={"mt-16 mb-10"}>
                        <div className={"grid grid-cols-12 gap-4"}>
                            {
                                Array.from({ length: 12 }).map((item, index) => (
                                    <div className={"col-span-1"} key={index}>
                                        <div className={"text-center"}>
                                            <Typography variant={"muted"} className={"!text-white"}>
                                                { dayjs(`2025-0${index + 1}-01`).format("YYYY-M") }
                                            </Typography>
                                            <div className={"mt-4"}>
                                                <div className={"relative bg-[#384059] w-full h-1"}>
                                                    { index === 0 && (
                                                        <span className={"block absolute w-full bg-white top-0 h-full"}/>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }

            <div className={"text-right"}>
                <Typography
                    variant={"muted"}
                    className={"font-medium mt-4 !text-white"}
                >
                    {poolText}
                </Typography>
            </div>

            <div className={"text-right"}>
                <Typography
                    variant={"h3"}
                    className={"font-medium mt-4 !text-white"}
                >
                    {number}
                </Typography>
            </div>
        </section>
    )
}

const Entry = () => {
    const t = useTranslations("Pages.mutual.trading-competition.entry");
    const btnAry = [
        {label: t("card.btns.crypto"), value: "crypto"},
        {label: t("card.btns.forex"), value: "forex"},
        {label: t("card.btns.metals"), value: "metals" },
        { label: t("card.btns.stocks"), value: "stocks" }
    ]
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
                    className={"font-medium text-center !text-white"}
                >
                    {t("title")}
                </Typography>
                <Typography
                    variant={"large"}
                    className={"font-medium text-center mx-auto mt-8 !text-white"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mt-4 lg:mt-16"}>
                <div>
                    <AccountProvince
                        title={t("card.col1.title")}
                        desc={t("card.col1.desc")}
                        btnAry={btnAry}
                        poolText={t("card.weeklyPool")}
                        number={"$5,000"}
                        type={"weekly"}
                    />
                </div>
                <div className={"mt-10"}>
                    <AccountProvince
                        title={t("card.col2.title")}
                        desc={t("card.col2.desc")}
                        btnAry={btnAry}
                        poolText={t("card.monthlyPool")}
                        number={"$20,000"}
                        type={"monthly"}
                    />
                </div>
                <div className={"mt-10"}>
                    <AccountProvince
                        title={t("card.col3.title")}
                        desc={t("card.col3.desc")}
                        btnAry={btnAry}
                        poolText={t("card.monthlyPool")}
                        number={"$20,000"}
                        type={"monthly"}
                    />
                </div>
                <div className={"mt-10"}>
                    <AccountProvince
                        title={t("card.col4.title")}
                        desc={t("card.col4.desc")}
                        btnAry={btnAry}
                        poolText={t("card.monthlyPool")}
                        number={"$20,000"}
                        type={"monthly"}
                    />
                </div>
            </div>

        </section>
    )
}

export default Entry