"use client"
import * as React from "react"
import { useState } from "react"
import { Typography } from "@/components/ui/typography";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { MoveRight } from 'lucide-react';
import classnames from "classnames";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";
import ThumbsGallery from "@/components/ThumbsGallery";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

type Item = { title: string; prize?: string; period?: string; cta?: string };

export default function Competition() {
    const t = useTranslations("Pages.home.competition");
    const [active, setActive] = useState(0);
    const ACTIVE = 0.52;
    const items: Item[] = [
        { title: t("rows.1.title"), prize: "$10,000", period: t("week"), cta: t("rows.1.join") },
        { title: t("rows.2.title"), prize: "$500,000", period: t("month"), cta: t("rows.2.join") },
        { title: t("rows.3.title"), prize: "$1,000,000", period: t("month"), cta: t("rows.3.join") },
        { title: t("rows.4.title"), prize: "$1,000,000", period: t("climate"), cta: t("rows.4.join") },
    ];
    const collapsed = (1 - ACTIVE) / (items.length - 1);

    return (
        <section className={"py-16 xl:p-30"}>
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
                <div className={"mt-8 lg:mt-16 [--panel-h:400px] hidden xl:block"}>
                    <div className="flex h-[var(--panel-h)] gap-6">
                        {items.map((it, i) => {
                            const isActive = i === active
                            return (
                                <div
                                    key={it.title}
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={isActive}
                                    onMouseEnter={() => setActive(i)}
                                    onFocus={() => setActive(i)}
                                    onClick={() => setActive(i)}
                                    style={{
                                        flexBasis: `${(isActive ? ACTIVE : collapsed) * 100}%`,
                                        transition: "flex-basis 420ms cubic-bezier(.22,1,.36,1)",
                                    }}
                                    className={classnames(["flex h-full flex-col overflow-hidden rounded-md bg-theme-light-bg p-6 motion-reduce:transition-none", {
                                        "bg-[url('/images/home/competition-background.png')] bg-cover bg-bottom bg-no-repeat": isActive
                                    }])}>
                                    {!isActive && (
                                        <div className="flex h-full items-center justify-center flex-col gap-4">
                                            <div
                                                className="flex justify-center items-center h-full [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 font-semibold text-lg">
                                                <Typography>
                                                    {it.title}
                                                </Typography>
                                            </div>
                                            <div className={"mt-auto"}>
                                                <MoveRight className="text-blue-600"/>
                                            </div>
                                        </div>
                                    )}
                                    {
                                        isActive && (
                                            <div className="flex h-full flex-col">
                                                <Typography
                                                    variant={"h4"}
                                                    className={"text-center mt-4"}
                                                >
                                                    {it.title}
                                                </Typography>
                                                {it.prize && (
                                                    <>
                                                        <div className="mt-6 flex-1">
                                                            <Typography
                                                                variant={"muted"}
                                                                className={"block text-center"}
                                                            >
                                                                {t("pool")}
                                                            </Typography>
                                                            <Typography
                                                                variant={"h4"}
                                                                className={"text-center mt-4"}
                                                            >
                                                                {it.prize}
                                                            </Typography>
                                                            <Typography
                                                                variant={"muted"}
                                                                className={"text-center mt-4"}
                                                            >
                                                                {t("period")}
                                                            </Typography>
                                                            <Typography
                                                                variant={"h4"}
                                                                className={"text-center mt-4"}
                                                            >
                                                                {it.period}
                                                            </Typography>
                                                            <div className="mt-8 flex justify-center">
                                                                <GeneralLinkBtn
                                                                    text={it.cta ?? "visit"}
                                                                    path={"/mutual/trading-competition"}
                                                                    theme={"dark-solid"}
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        )}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <main className="mt-8 lg:mt-16 xl:hidden">
                    <ThumbsGallery
                        initialIndex={0}
                        onIndexChange={(i) => console.log("")}
                    />
                </main>
            </Container>
        </section>
    )
}
