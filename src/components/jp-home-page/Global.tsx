"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

export default function() {
    const t = useTranslations("Pages.jpHome.global");
    const ary = [
        { title: t("row.col1.array.1.title"), desc: t("row.col1.array.1.desc"), path: "/" },
        { title: t("row.col1.array.2.title"), desc: t("row.col1.array.2.desc"), path: "/" },
        { title: t("row.col1.array.3.title"), desc: t("row.col1.array.3.desc"), path: "/" },
        { title: t("row.col1.array.4.title"), desc: t("row.col1.array.4.desc"), path: "/" },
        { title: t("row.col1.array.5.title"), desc: t("row.col1.array.5.desc"), path: "/" },
        { title: t("row.col1.array.6.title"), desc: t("row.col1.array.6.desc"), path: "/" },
    ]
    return (
        <div className={"py-16 xl:py-30"}>
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
                        className={"text-center mt-6"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-8 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-4 xl:gap-8"}>
                        <div className={"col-span-12 lg:col-span-7"}>
                            <div className={"grid grid-cols-1 lg:grid-cols-2 mt-16 space-y-8"}>
                                {
                                    ary.map((d, i) => (
                                        <div className={""} key={i}>
                                            <a href={d.path} target={"_blank"} className={"flex items-center"}>
                                                <span className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-theme-active block rounded-full"}/>
                                                <Typography
                                                    variant={"h6"}
                                                    className={"ml-2"}
                                                >
                                                    {d.title}
                                                </Typography>
                                                <img src="/images/jp/global-arrow.webp" className={"w-8 h-8 ml-2 object-cover"} alt=""/>
                                            </a>
                                            <div className={"my-4"}>
                                                <Typography
                                                    variant={"muted"}
                                                    className={"text-xs"}
                                                >
                                                    {d.desc}
                                                </Typography>
                                            </div>

                                            <Separator className={"max-w-[88%]"}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-5"}>
                            <div>
                                <div className={"bg-[#E9E9E9] grid grid-cols-3 px-2 py-3 lg:px-4 lg:py-6"}>
                                    <div className={"border-r border-r-black text-center"}>
                                        <Typography
                                            variant={"muted"}
                                            className={"text-xs lg:text-sm font-semibold"}
                                        >
                                            {'<'}{t("row.col2.text1")}
                                        </Typography>
                                    </div>
                                    <div className={"border-r border-r-black text-center"}>
                                        <Typography
                                            variant={"muted"}
                                            className={"text-xs lg:text-sm font-semibold"}
                                        >
                                            {t("row.col2.text2")}
                                        </Typography>
                                    </div>
                                    <div className={"text-center"}>
                                        <Typography
                                            variant={"muted"}
                                            className={"text-xs lg:text-sm font-semibold"}
                                        >
                                            {t("row.col2.text3")}
                                        </Typography>
                                    </div>
                                </div>
                                <div className={"mt-4"}>
                                    <img src="/images/jp/home-global.webp" className={"max-h-[300px] w-full object-cover"} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}