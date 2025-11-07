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
            title: t("row.col1.title"),
            desc:  t("row.col1.desc"),
            leafs: [
                {
                    title: t("row.col1.leafs.col1.title"),
                    children: [
                        { text: t("row.col1.leafs.col1.content1") },
                        { text: t("row.col1.leafs.col1.content2") },
                    ]
                },
                {
                    title: t("row.col1.leafs.col2.title"),
                    children: [
                        { text: t("row.col1.leafs.col2.content1") },
                        { text: t("row.col1.leafs.col2.content2") },
                    ]
                },
                {
                    title: t("row.col1.leafs.col3.title"),
                    children: [
                        { text: t("row.col1.leafs.col3.content1") },
                        { text: t("row.col1.leafs.col3.content2") },
                    ]
                }
            ]
        },
        {
            title: t("row.col2.title"),
            desc:  t("row.col2.desc"),
            leafs: [
                {
                    title: t("row.col2.leafs.col1.title"),
                    children: [
                        { text: t("row.col2.leafs.col1.content1") }
                    ]
                },
                {
                    title: t("row.col2.leafs.col2.title"),
                    children: [
                        { text: t("row.col2.leafs.col2.content1") },
                        { text: t("row.col2.leafs.col2.content2") },
                    ]
                },
                {
                    title: t("row.col2.leafs.col3.title"),
                    children: [
                        { text: t("row.col2.leafs.col3.content1") },
                        { text: t("row.col2.leafs.col3.content2") },
                    ]
                }
            ]
        },
        {
            title: t("row.col3.title"),
            desc:  t("row.col3.desc"),
            leafs: [
                {
                    title: t("row.col3.leafs.col1.title"),
                    children: [
                        { text: t("row.col3.leafs.col1.content1") }
                    ]
                },
                {
                    title: t("row.col3.leafs.col2.title"),
                    children: [
                        { text: t("row.col3.leafs.col2.content1") },
                        { text: t("row.col3.leafs.col2.content2") },
                    ]
                },
                {
                    title: t("row.col3.leafs.col3.title"),
                    children: [
                        { text: t("row.col3.leafs.col3.content1") },
                        { text: t("row.col3.leafs.col3.content2") },
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
                <div className={"mt-8 lg:mt-16"}>

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
                                                className={classnames(["rounded-full border h-10 w-10 border-neutral-200 hover:bg-accent", active ? "bg-black" : ""])}
                                                aria-label={`${g.title}`}
                                            >
                                                <ArrowRight
                                                    className={classnames("h-5 w-5", active ? "text-white" : "text-black")}/>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                    </div>

                    <div className={"mt-8 lg:mt-16"}>
                        <Typography
                            variant={"p"}
                            className={"font-semibold"}
                        >
                            {pageTitle}
                        </Typography>
                        <Typography
                            variant={"muted"}
                            className={"!text-[#999] mt-2"}
                        >
                            {pageDesc}
                        </Typography>
                    </div>


                    <div className={"mt-4 lg:mt-10"}>
                        <div className="border-b border-neutral-200 dark:border-neutral-800">
                            <div className="flex flex-wrap gap-x-8 gap-y-3">
                                {leafs.map((leaf, idx) => {
                                    const active = idx === activeLeafIdx;
                                    return (
                                        <button
                                            key={leaf.title}
                                            onClick={() => setActiveLeafIdx(idx)}
                                            className={classnames(["relative py-4 text-base md:text-lg transition-colors cursor-pointer", active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"])}
                                        >
                                            {leaf.title}
                                            <span
                                                className={classnames("absolute left-0 -bottom-px h-[2px] w-full", active ? "bg-black" : "bg-transparent")}/>
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
                    </div>
                </div>
            </Container>
        </div>
    )
}