"use client";
import React from "react";
import {Typography} from "@/components/ui/typography";
import {useTranslations} from "next-intl";
import {motion, Variants} from "framer-motion";
import classnames from "classnames";
import BaseArticle from "@/components/article/Base";
import { CircleArrowRight } from "lucide-react";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

type Tab = { value: string; label: string };

function MultiSelectTabs() {
    const t = useTranslations("Common.news.category");
    const [selected, setSelected] = React.useState<Set<string>>(new Set());

    const ALL_TABS: Tab[] = [
        { value: "forex", label: t("forex") },
        { value: "crypto", label: t("crypto") },
        { value: "metals", label: t("metals") },
        { value: "stocks", label: t("stocks") },
        { value: "futures", label: t("futures") },
        { value: "energy", label: t("energy") },
        { value: "beginner", label: t("beginner") },
        { value: "guide", label: t("guide") },
        { value: "strategy", label: t("strategy") },
        { value: "data", label: t("data") },
        { value: "weekly", label: t("weekly") },
        { value: "macro", label: t("macro") },
        { value: "market", label: t("market") },
        { value: "allocation", label: t("allocation") },
    ];

    const toggle = (v: string) => {
        setSelected(prev => {
            const next = new Set(prev);
            next.has(v) ? next.delete(v) : next.add(v);
            return next;
        });
    };

    const isActive = (v: string) => selected.has(v);

    return (
        <section className="mx-auto lg:max-w-6xl px-4 py-8">
            <div role="group" className="flex flex-wrap items-start justify-center gap-4">
                {ALL_TABS.map(tab => {
                    const active = isActive(tab.value);
                    return (
                        <button
                            key={tab.value}
                            type="button"
                            onClick={() => toggle(tab.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    toggle(tab.value);
                                }
                            }}
                            aria-pressed={active}
                            className={classnames([
                                "px-5 h-8 lg:h-10 cursor-pointer rounded-full text-sm font-medium text-[#666666] border hover:bg-theme-active hover:text-white transition-colors",
                                active ? "bg-theme-active text-white" : ""
                            ])}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>
        </section>
    );
}


const Articles = () => {
    const t = useTranslations("Pages.ideas.professional.articles");
    const articlesAry = [
        { imageUrl: "/images/ideas/article-1.png", title: "基于税收尺度的定量研究：地方保护的“衡量”", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/ideas/article-2.png", title: "宏观经济深度报告：大财政时代冲击联储独立性...", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/ideas/article-3.png", title: "人民币升值：短期催化与长期重估", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/ideas/article-4.png", title: "资产配置日报：风云突变", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/ideas/article-5.png", title: "债市分析框架之资金面", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/ideas/article-6.png", title: "盛宴未散 见招拆招", disc: "宏观", time: "2025/9/3" },
    ];
    return (
        <section className={"pb-4 lg:pb-30"}>
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
                <div className={""}>
                    <MultiSelectTabs/>
                    <div>
                        <div className={"grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"}>
                            {
                                articlesAry.map((item, index) => (
                                    <BaseArticle key={index} {...item} />
                                ))
                            }
                        </div>
                        <div className={"mt-16"}>
                            <div className={"flex justify-center items-center text-theme-active"}>
                                <Typography>
                                    {t("more")}
                                </Typography>
                                <CircleArrowRight className={"ml-2"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Articles;