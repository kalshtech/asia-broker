"use client";
import * as React from 'react';
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import { motion, Variants} from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Separator } from "@/components/ui/separator"

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

export default function Brief() {
    const t = useTranslations("Pages.ideas.professional.brief");


    const articlesAry = [
        {
            label: "US CPI Data & Fed Reactions — Week 41, 2025",
            link: "/articles/beginner/common-currency",
            image: "/images/ideas/profession-article1.png",
            time: "2025-10-02"
        },
        {
            label: "Crypto Volatility & Macro Flow: What’s Next for BTC",
            link: "/articles/beginner/common-mistakes",
            image: "/images/ideas/profession-article2.png",
            time: "2025-10-02"
        },
        {
            label: "Asian Equities Rebound: Momentum or Mirage?",
            link: "/articles/beginner/explain-rates",
            image: "/images/ideas/profession-article3.png",
            time: "2025-10-02"
        },
        {
            label: "FX Weekly: Yen Intervention and Global Dollar Strength",
            link: "/articles/beginner/forex-basic-analysis",
            image: "/images/ideas/profession-article4.png",
            time: "2025-10-02"
        },
        {
            label: "Commodities Recap: Gold & Oil Divergence Explained",
            link: "/articles/beginner/forex-fundamental-knowledge",
            image: "/images/ideas/profession-article5.png",
            time: "2025-10-02"
        },
    ];

    return (
        <section className={"py-4 xl:py-30"}>
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
                    {t("title")}
                </Typography>

                <Typography
                    variant={"p"}
                    className={"text-center mx-auto mt-6 max-w-3xl"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <Container>
                <div className={"grid grid-cols-12 gap-4 lg:gap-8 mt-8 lg:mt-20"}>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div>
                            {/*<Typography variant={"h4"}>*/}
                            {/*    {t("row.left.title")}*/}
                            {/*</Typography>*/}
                            <img
                                src={"/images/ideas/financial-report.png"}
                                alt={"financial-report"}
                                title={"financial-report"}
                            />
                            <div className={"mt-6 flex"}>
                                <div>
                                    <Typography
                                        variant={"h5"}
                                    >
                                        {t("row.left.prospect")}
                                    </Typography>
                                    <Typography
                                        variant={"muted"}
                                        className={"mt-4"}
                                    >
                                        {t("row.left.prospect-desc")}
                                    </Typography>
                                </div>
                                <div className={"ml-auto flex justify-center items-center"}>
                                    <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                                        {t("row.left.download")}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div>
                            <Typography
                                variant={"h4"}
                            >
                                {t("row.right.title")}
                            </Typography>

                            <ul>
                                {
                                    articlesAry.map((d, i) => (
                                        <li className={"my-4"} key={i}>
                                            <Link href={d.link} className={"flex"}>
                                                <div>
                                                    <img src={d.image} className={"max-w-[100px]"} alt=""/>
                                                </div>
                                                <div className={"ml-4"}>
                                                    <Typography
                                                        variant={"p"}
                                                        className={"font-semibold"}
                                                    >
                                                        {d.label}
                                                    </Typography>
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"mt-3"}
                                                    >
                                                        {d.time}
                                                    </Typography>
                                                </div>
                                            </Link>
                                            <Separator className={"mt-4"} />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}