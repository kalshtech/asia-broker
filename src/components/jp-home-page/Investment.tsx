"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import classnames from "classnames";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

type Leaf = {
    title: string;
    children: { text: string }[];
};

type Group = {
    title: string;
    desc: string;
    leafs: Leaf[];
};

export default function() {
    const t = useTranslations("Pages.jpHome.investment");
    const data: Group[] = [
        {
            title: "交易数据报告",
            desc: "从复盘到成长，助你成为理性交易者",
            leafs: [
                {
                    title: "有意义的交易历史数据",
                    children: [
                        { text: "可查看如 Sharpe Ratio、Profit Factor 等指标" },
                        { text: "拆解每一笔交易的执行细节与盈亏结构" },
                    ]
                },
                {
                    title: "复盘每一笔交易过程",
                    children: [
                        { text: "提供详细的交易行为数据回顾" },
                        { text: "搭配学习中心与策略文章辅助理解" },
                    ]
                },
                {
                    title: "成为更理性的投资者",
                    children: [
                        { text: "构建个人知识库与经验积累" },
                        { text: "提供专业投资者的观点、视频、投教内容" },
                    ]
                }
            ]
        },
        {
            title: "交易功能模块",
            desc: "程序化智能交易，让每一次下单更科学",
            leafs: [
                {
                    title: "支持多种程序化订单类型",
                    children: [
                        { text: "支持条件单、追踪止盈、VWAP/TWAP/MOC 等美股策略型订单" }
                    ]
                },
                {
                    title: "可视化的交易记录展示",
                    children: [
                        { text: "图表上直接查看历史交易标记" },
                        { text: "个股收益公告、目标价变化、消息通知推送" },
                    ]
                },
                {
                    title: "实时追踪市场消息与公告",
                    children: [
                        { text: "多账户、多标的管理界面优化" },
                        { text: "自动提示关键风险时间点" },
                    ]
                }
            ]
        },
        {
            title: "全天候客户支持",
            desc: "专业团队与你随时在线",
            leafs: [
                {
                    title: "24x7 全天候客户支持",
                    children: [
                        { text: "无论何时，我们的团队都在，为你的问题即时响应" }
                    ]
                },
                {
                    title: "社群互动分享与反馈通道",
                    children: [
                        { text: "我们运营专属交易社群，与用户保持活跃互动" },
                        { text: "邀请用户分享交易故事，提供回馈通道" },
                    ]
                },
                {
                    title: "多语种、多平台支持",
                    children: [
                        { text: "日语、英语、中文团队支持" },
                        { text: "让本地化用户沟通更高效无障碍" },
                    ]
                }
            ]
        }
    ];

    const [activeGroupIdx, setActiveGroupIdx] = React.useState(0);
    const [activeLeafIdx, setActiveLeafIdx] = React.useState(0);

    const activeGroup = data[activeGroupIdx];
    const leafs = activeGroup.leafs;
    const activeLeaf = leafs[activeLeafIdx];

// === 方案 A：标题只跟大组走（保持现状）
    const pageTitle = activeGroup.title;
    const pageDesc  = activeGroup.desc;

    React.useEffect(() => {
        setActiveLeafIdx(0);
    }, [activeGroupIdx]);

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
                <div className={"mt-16"}>
                    <div className={""}>
                        <Typography
                            variant={"p"}
                            className={"font-semibold"}
                        >
                            { pageTitle }
                        </Typography>
                        <Typography
                            variant={"muted"}
                            className={"!text-[#999] mt-2"}
                        >
                            { pageDesc }
                        </Typography>
                    </div>
                    <div className={"mt-10"}>
                        <div className="border-b border-neutral-200 dark:border-neutral-800">
                            <div className="flex flex-wrap gap-x-8 gap-y-3">
                                {leafs.map((leaf, idx) => {
                                    const active = idx === activeLeafIdx;
                                    return (
                                        <button
                                            key={leaf.title}
                                            onClick={() => setActiveLeafIdx(idx)}
                                            className={classnames(
                                                "relative py-4 text-base md:text-lg transition-colors cursor-pointer",
                                                active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            {leaf.title}
                                            <span className={classnames("absolute left-0 -bottom-px h-[2px] w-full", active ? "bg-black" : "bg-transparent")}/>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="py-6 md:py-8 space-y-6">
                            {activeLeaf.children.map((c, i) => (
                                <React.Fragment key={i}>
                                    <Typography
                                        variant={"p"}
                                        className={"cursor-pointer font-semibold"}
                                    >
                                        {c.text}
                                    </Typography>
                                    {
                                        i === 0 && (
                                            <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800"/>
                                        )
                                    }
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {
                                data.map((g, idx) => {
                                const active = idx === activeGroupIdx;
                                return (
                                    <Card
                                        key={g.title}
                                        className={classnames("cursor-pointer transition-all border-neutral-200 hover:shadow-md", active ? "ring-1 ring-black" : "ring-0")}
                                        onClick={() => setActiveGroupIdx(idx)}
                                    >
                                        <CardContent className="flex items-center justify-between">
                                            <div className="text-lg md:text-xl font-medium">{g.title}</div>
                                            <Button
                                                size="icon"
                                                variant="ghost"
                                                className={classnames("rounded-full border h-10 w-10 bg-black border-neutral-200 hover:bg-accent",)}
                                                aria-label={`${g.title}`}
                                            >
                                                <ArrowRight className={"h-5 w-5 text-white"}/>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}