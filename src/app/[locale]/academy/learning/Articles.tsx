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
        { imageUrl: "/images/academy/learning-article1.png", title: "基于税收尺度的定量研究：地方保护的“衡量”", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article2.png", title: "宏观经济深度报告：大财政时代冲击联储独立性...", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article3.png", title: "人民币升值：短期催化与长期重估", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article4.png", title: "资产配置日报：风云突变", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article5.png", title: "债市分析框架之资金面", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article6.png", title: "盛宴未散 见招拆招", disc: "宏观", time: "2025/9/3" },
    ];
    return (
        <section className={"p-30"}>
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
                                    className={"bg-theme-light-bg px-6 py-3 rounded-full cursor-pointer text-[#666666] text-sm"}
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
                                    className={"bg-theme-light-bg px-6 py-3 rounded-full cursor-pointer text-[#666666] text-sm"}
                                    key={index}>
                                    {item.label}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={"grid grid-cols-3 gap-8 mt-6"}>
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