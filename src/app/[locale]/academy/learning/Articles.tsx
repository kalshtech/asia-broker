"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import BaseArticle from "@/components/article/Base";
import {CircleArrowRight} from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Articles = () => {
    const ArticlesT = useTranslations("Articles.beginner");
    const t = useTranslations("Pages.academy.learning.articles");
    const stageAry = [
        { label: t("stage.before"), value: "before" },
        { label: t("stage.order"), value: "order" },
        { label: t("stage.operating"), value: "operating" },
        { label: t("stage.control"), value: "control" },
        { label: t("stage.functions"), value: "functions" },
    ];

    const themeAry = [
        { label: t("theme.forex"), value: "forex" },
        { label: t("theme.crypto"), value: "crypto" },
        { label: t("theme.metal"), value: "metal" },
        { label: t("theme.stock"), value: "stock" },
        { label: t("theme.future"), value: "future" },
        { label: t("theme.energy"), value: "energy" },
        { label: t("theme.beginner"), value: "beginner" },
        { label: t("theme.operationalGuide"), value: "operationalGuide" },
        { label: t("theme.trade"), value: "trade" },
        { label: t("theme.indices"), value: "indices" },
        { label: t("theme.weekView"), value: "weekView" },
        { label: t("theme.study"), value: "study" },
        { label: t("theme.interpretation"), value: "interpretation" },
        { label: t("theme.configuration"), value: "configuration" },
    ];

    const articlesAry = [
        { imageUrl: "/images/academy/learning-article1.png", title: ArticlesT("common-currency.title"), disc: "宏观", time: "2025/9/3", href: "/articles/beginner/common-currency" },
        { imageUrl: "/images/academy/learning-article2.png", title: ArticlesT("trading-mechanism.title"), disc: "宏观", time: "2025/9/3", href: "/articles/beginner/trading-mechanism" },
        { imageUrl: "/images/academy/learning-article3.png", title: ArticlesT("leverage-and-margin.title"), disc: "宏观", time: "2025/9/3", href: "/articles/beginner/leverage-and-margin" },
        { imageUrl: "/images/academy/learning-article4.png", title: ArticlesT("explain-rates.title"), disc: "宏观", time: "2025/9/3", href: "/articles/beginner/explain-rates" },
        { imageUrl: "/images/academy/learning-article5.png", title: ArticlesT("what-is-forex.title"), disc: "宏观", time: "2025/9/3", href: "/articles/beginner/what-is-forex" },
        { imageUrl: "/images/academy/learning-article6.png", title: ArticlesT("forex-vs-stock.title"), disc: "宏观", time: "2025/9/3", href: "/articles/beginner/forex-vs-stock" },
        { imageUrl: "/images/academy/learning-article2.png", title: ArticlesT("forex-fundamental-knowledge.title"), disc: "宏观", time: "2025/9/3", href: "/articles/beginner/forex-fundamental-knowledge" },
        { imageUrl: "/images/academy/learning-article3.png", title: ArticlesT("forex-basic-analysis.title"), disc: "宏观", time: "2025/9/3", href: "/articles/beginner/forex-basic-analysis" },
        { imageUrl: "/images/academy/learning-article1.png", title: ArticlesT("common-mistakes.title"), disc: "宏观", time: "2025/9/3", href: "/articles/beginner/common-mistakes" },
    ];
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
                    className={"font-medium text-center"}
                >
                    {t("title")}
                </Typography>
            </motion.div>
            <div className={"mt-16"}>
                <div className={""}>
                    <Typography variant={"muted"}>
                        {t("stage.title")}
                    </Typography>
                    <div className={"flex flex-wrap gap-4 mt-6"}>
                        {
                            stageAry.map((item, index) => (
                                <div
                                    className={"bg-theme-light-bg rounded-full cursor-pointer text-[#666666] text-sm px-3 py-1 lg:px-6 lg:py-3"}
                                    key={index}>
                                    {item.label}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={"mt-6"}>
                    <Typography variant={"muted"}>
                        {t("theme.title")}
                    </Typography>
                    <div className={"flex flex-wrap gap-4 mt-6"}>
                        {
                            themeAry.map((item, index) => (
                                <div
                                    className={"bg-theme-light-bg rounded-full cursor-pointer text-[#666666] text-sm px-3 py-1 lg:px-6 lg:py-3"}
                                    key={index}>
                                    {item.label}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={"grid mt-6 gap-4 lg:gap-8 grid-cols-2 lg:grid-cols-3"}>
                    {
                        articlesAry.map((item, index) => (
                            <BaseArticle key={index} {...item} />
                        ))
                    }
                </div>
                <div className={"mt-16"}>
                    <div className={"flex justify-center items-center text-theme-active cursor-pointer"}>
                        <Typography>
                            {t("more")}
                        </Typography>
                        <CircleArrowRight className={"ml-2"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles;