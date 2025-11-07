"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import { motion, Variants } from "framer-motion";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


export default function() {
    const t = useTranslations("Pages.jpHome.investmentForMobile");

    const ary = [
        {
            title: t("row.col1.title"),
            imageUrl: "/images/jp/investmentForMobile1.png",
            list: [
                {
                    title: t("row.col1.ul1.title"),
                    children: [
                        { text: t("row.col1.ul1.li1") },
                        { text: t("row.col1.ul1.li2") },
                    ]
                },
                {
                    title: t("row.col1.ul2.title"),
                    children: [
                        { text: t("row.col1.ul2.li1") },
                        { text: t("row.col1.ul2.li2") },
                    ]
                }
            ]
        },
        {
            title: t("row.col2.title"),
            imageUrl: "/images/jp/investmentForMobile2.png",
            list: [
                {
                    title: t("row.col2.ul1.title"),
                    children: [
                        { text: t("row.col2.ul1.li1") },
                        { text: t("row.col2.ul1.li2") },
                    ]
                },
                {
                    title: t("row.col2.ul2.title"),
                    children: [
                        { text: t("row.col2.ul2.li1") },
                        { text: t("row.col2.ul2.li2") },
                    ]
                }
            ]
        },
        {
            title: t("row.col3.title"),
            imageUrl: "/images/jp/investmentForMobile3.png",
            list: [
                {
                    title: t("row.col3.ul1.title"),
                    children: [
                        { text: t("row.col3.ul1.li1") },
                        { text: t("row.col3.ul1.li2") },
                    ]
                },
                {
                    title: t("row.col3.ul2.title"),
                    children: [
                        { text: t("row.col3.ul2.li1") },
                        { text: t("row.col3.ul2.li2") },
                    ]
                }
            ]
        },
    ];

    return (
        <div className={"py-16"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography variant={"h3"} className={"text-center"}>
                        {t("title1")}
                    </Typography>
                    <Typography variant={"h3"} className={"text-center"}>
                        {t("title2")}
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <div className={"grid grid-cols-1 gap-8"}>
                        {
                            ary.map((d, i) => (
                                <div
                                    className={"bg-theme-light-bg pt-4 px-4"}
                                    key={i}
                                >
                                    <Typography variant={"h5"}>
                                        {d.title}
                                    </Typography>
                                    <div>
                                        {
                                            d.list.map((listD, listIndex) => (
                                                <div className={"mt-6"}
                                                     key={listIndex}
                                                >
                                                    <div>
                                                        <Typography variant={"h6"}>
                                                            {listD.title}
                                                        </Typography>
                                                    </div>
                                                    <div className={"mt-4"}>
                                                        <ul>
                                                            {
                                                                listD.children.map((liD, liIndex) => (
                                                                    <li key={liIndex} className={"my-2 flex items-start"}>
                                                                        <span className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] mt-2 bg-black block rounded-full"}/>
                                                                        <Typography
                                                                            variant={"muted"}
                                                                            className={"ml-2"}
                                                                        >
                                                                            {liD.text}
                                                                        </Typography>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <a href={"https://portal.asiafuturetrading.com/register/trader"}
                                       target={"_blank"}
                                       className={"text-theme-active font-bold underline flex justify-center mt-6"}
                                    >
                                        {t("open")}
                                    </a>

                                    <img src={d.imageUrl} className={"mt-8"} alt=""/>
                                </div>
                            ))
                        }
                    </div>
                    <div className={"mt-8"}>
                        <div>
                            <GeneralLinkBtn
                                text={t("invest")}
                                theme={"active-solid"}
                                className={"w-full py-4 text-xl font-bold"}
                            />
                            <Typography
                                variant={"muted"}
                                className={"text-xs !text-[#999999] mt-4"}
                            >
                                { t("prompt") }
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}