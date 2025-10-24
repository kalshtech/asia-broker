"use client";
import * as React from 'react';
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import { motion, Variants} from "framer-motion";
import { Link } from "@/i18n/navigation"

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
        { label: "US CPI Data & Fed Reactions — Week 41, 2025", link: "/articles/beginner/common-currency", },
        { label: "Crypto Volatility & Macro Flow: What’s Next for BTC", link: "/articles/beginner/common-mistakes", },
        { label: "Asian Equities Rebound: Momentum or Mirage?", link: "/articles/beginner/explain-rates", },
        { label: "FX Weekly: Yen Intervention and Global Dollar Strength", link: "/articles/beginner/forex-basic-analysis", },
        { label: "Commodities Recap: Gold & Oil Divergence Explained", link: "/articles/beginner/forex-fundamental-knowledge", },
    ];

    return (
        <section className={"py-4 lg:py-30"}>
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
                                        <li className={"my-6"} key={i}>
                                            <Link href={d.link} className={"underline flex items-center font-semibold"}>
                                                <span className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-theme-active block rounded-full"}/>
                                                <Typography
                                                    variant={"p"}
                                                    className={"ml-2"}
                                                >
                                                    {d.label}
                                                </Typography>
                                            </Link>
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