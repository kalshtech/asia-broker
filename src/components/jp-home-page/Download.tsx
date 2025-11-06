"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import { motion, Variants } from "framer-motion";
import {useTranslations} from "next-intl";
import classnames from "classnames"

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

export default function () {
    const t = useTranslations("Pages.jpHome.download");
    const ary = [
        {
            image: "/images/jp/home-download1.webp",
            title: t("row.col1.title"),
            midst: t("row.col1.midst"),
            desc: t("row.col1.desc"),
            download1: t("row.col1.download1"),
            download1Logo: "/images/jp/download-logo-apple.webp",
            download2: t("row.col1.download2"),
            download1Link: "https://apps.apple.com/cn/app/metatrader-5/id413251709",
            download2Logo: "/images/jp/download-logo-android.webp",
            download2Link: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/metatrader5.apk?utm_source=www.metatrader5.com&utm_campaign=install.metaquotes",
        },
        {
            image: "/images/jp/home-download2.webp",
            title: t("row.col2.title"),
            midst: t("row.col2.midst"),
            desc: t("row.col2.desc"),
            download1: t("row.col2.download1"),
            download1Logo: "/images/jp/download-logo-window.webp",
            download2: t("row.col2.download2"),
            download1Link: "https://document.afttjp.com/AFTT_setup.exe",
            download2Logo: "/images/jp/download-logo-apple.webp",
            download2Link: "https://download.mql5.com/cdn/web/metaquotes.ltd/mt5/MetaTrader5.pkg.zip?utm_source=support.metaquotes.net&utm_campaign=download.mt5.macos",
        },
        {
            image: "/images/jp/home-download3.webp",
            title: t("row.col3.title"),
            midst: t("row.col3.midst"),
            desc: t("row.col3.desc"),
            download1: t("row.col3.download1"),
            download1Logo: "/images/jp/download-logo-website.webp",
            download1Link: "https://apps.apple.com/cn/app/metatrader-5/id413251709"
        }
    ];

    return (
        <div className={"py-16 xl:py-30"}>
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
                        { t("title") }
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"text-center max-w-3xl mx-auto mt-4"}
                    >
                        { t("desc") }
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <div className={"grid grid-cols-12 gap-8"}>
                        {
                            ary.map((d, i) => (
                                <div className={"col-span-12 xl:col-span-4 h-full"} key={i}>
                                    <div className={"h-full bg-[linear-gradient(180deg,#F9F9F9_0%,#D3D3D3_100%)] rounded-[16px] border border-[#D9D9D9] py-10 px-6"}>
                                        <div className={"text-center"}>
                                            <Typography
                                                variant={"h4"}
                                            >
                                                { d.title }
                                            </Typography>
                                        </div>
                                        <div className={"text-center mt-10"}>
                                            <Typography variant={"h5"}>
                                                { d.midst }
                                            </Typography>
                                            <Typography
                                                variant={"p"}
                                                className={"mt-4"}
                                            >
                                                { d.desc }
                                            </Typography>
                                            <img src={d.image} className={"mt-4 mx-auto max-h-[210px]"} alt=""/>
                                        </div>
                                        {
                                            d.download2Link ? (
                                                <div className={classnames(["grid gap-8 grid-cols-2 mt-6"])}>
                                                    <a href={d.download1Link} target={"_blank"}
                                                       className={"flex items-center p-6 bg-white rounded-md"}>
                                                        <img src={d.download1Logo} className={"w-8 h-8 object-cover"}
                                                             alt=""/>
                                                        <Typography
                                                            variant={"muted"}
                                                            className={"ml-2"}
                                                        >
                                                            {d.download1}
                                                        </Typography>
                                                    </a>
                                                    <a href={d.download2Link} target={"_blank"}
                                                       className={"flex items-center p-6 bg-white rounded-md"}>
                                                        <img src={d.download2Logo}
                                                             className={"w-8 h-8 object-cover"}
                                                             alt=""/>
                                                        <Typography
                                                            variant={"muted"}
                                                            className={"ml-2"}
                                                        >
                                                            {d.download2}
                                                        </Typography>
                                                    </a>
                                                </div>
                                            ) : (
                                                <a href={d.download1Link} target={"_blank"}
                                                   className={"flex items-center p-6 bg-white max-w-[50%] mt-6 mx-auto rounded-md"}>
                                                    <img src={d.download1Logo} className={"w-8 h-8 object-cover"}
                                                         alt=""/>
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"ml-2"}
                                                    >
                                                        {d.download1}
                                                    </Typography>
                                                </a>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}