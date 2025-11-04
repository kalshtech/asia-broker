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

const Support = () => {
    const t = useTranslations("Pages.accounts.platinum.support");
    const col1Ary = [
        { label: t("row.col1.ul.li1") },
        { label: t("row.col1.ul.li2") }
    ];

    const col2Ary = [
        { label: t("row.col2.ul.li1") },
        { label: t("row.col2.ul.li2") },
        { label: t("row.col2.ul.li3") }
    ];


    const col3Ary = [
        { label: t("row.col3.ul.li1") },
        { label: t("row.col3.ul.li2") },
    ];
    return (
        <section className={"bg-[url(/images/accounts/platinum-support-bg.png)] bg-center bg-cover py-16 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"!text-white text-center"}
                    >
                        {t("title")}
                    </Typography>

                    <Typography variant={"h5"} className={"font-normal !text-white text-center mt-6"}>
                        {t("desc")}
                    </Typography>
                </motion.div>

                <div className={"mt-4 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-4"}>
                        <div className={"flex col-span-12 lg:col-span-4 lg:after:border-r after:border-white after:mx-12"}>
                            <div className={"w-full"}>
                                <Typography
                                    variant={"h6"}
                                    className={"!text-white"}
                                >
                                    {t("row.col1.title")}
                                </Typography>
                                <ul className={"mt-8"}>
                                    {
                                        col1Ary.map((item, index) => (
                                            <li key={index} className={"flex items-center my-4"}>
                                                <span className={"w-[5px] block h-[5px] bg-white rounded-full"}></span>
                                                <Typography variant={"p"} className={"!text-white ml-2"}>
                                                    {item.label}
                                                </Typography>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={"flex col-span-12 lg:col-span-4 lg:after:border-r after:border-white after:mx-12"}>
                            <div className={"w-full"}>
                                <Typography
                                    variant={"h6"}
                                    className={"!text-white"}
                                >
                                    {t("row.col2.title")}
                                </Typography>
                                <ul className={"mt-8"}>
                                    {
                                        col2Ary.map((item, index) => (
                                            <li key={index} className={"flex items-center my-4"}>
                                                <span className={"w-[5px] block h-[5px] bg-white rounded-full"}></span>
                                                <Typography variant={"muted"} className={"!text-white ml-2"}>
                                                    {item.label}
                                                </Typography>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-4"}>
                            <div>
                                <Typography
                                    variant={"h6"}
                                    className={"!text-white"}
                                >
                                    {t("row.col3.title")}
                                </Typography>
                                <ul className={"mt-8"}>
                                    {
                                        col3Ary.map((item, index) => (
                                            <li key={index} className={"flex items-center my-4"}>
                                                <span className={"w-[5px] block h-[5px] bg-white rounded-full"}></span>
                                                <Typography variant={"muted"} className={"!text-white ml-2"}>
                                                    {item.label}
                                                </Typography>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Support;