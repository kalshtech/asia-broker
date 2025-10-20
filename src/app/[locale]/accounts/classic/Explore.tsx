"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Explore = () => {
    const t = useTranslations("Pages.accounts.classic.explore");
    const card1Ary = [
        { label: t("card1.ul.li1") },
        { label: t("card1.ul.li2") },
        { label: t("card1.ul.li3") },
    ];

    const card2Ary = [
        { label: t("card2.ul.li1") },
        { label: t("card2.ul.li2") },
        { label: t("card2.ul.li3") },
    ];

    return (
        <section className={"py-4 lg:py-30 bg-theme-deep-bg"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium !text-white text-center"}
                    >
                        {t("title")}
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <div className={"grid grid-cols-12 lg:gap-10"}>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <div className={"grid-cols-12 grid"}>
                                <div className={"col-span-12 lg:col-span-7"}>
                                    <div className={"bg-white h-full px-8 py-16"}>
                                        <div>
                                            <Typography variant={"h4"}>
                                                {t("card1.title")}
                                            </Typography>
                                            <Typography
                                                variant={"muted"}
                                                className={"mt-4"}
                                            >
                                                {t("card1.desc")}
                                            </Typography>
                                        </div>
                                        <ul className={"h-[calc(100%-120px)] lg:h-[calc(100%-240px)]"}>
                                            {
                                                card1Ary.map((item, index) => (
                                                    <li className={"flex items-center my-8"} key={index}>
                                                        <span
                                                            className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-theme-active block rounded-full"}/>
                                                        <Typography
                                                            variant={"muted"}
                                                            className={"ml-4 font-medium"}
                                                        >
                                                            {item.label}
                                                        </Typography>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className={"mt-4 lg:mt-20"}>
                                            <Button>
                                                {t("card1.btn")}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col-span-12 lg:col-span-5"}>
                                    <img
                                        src="/images/accounts/explore1.png"
                                        className={"w-full h-full bg-cover"}
                                        title={"placeholder"}
                                        alt="placeholder"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <div className={"grid-cols-12 grid"}>
                                <div className={"col-span-12 lg:col-span-7"}>
                                    <div className={"bg-white h-full px-8 py-16"}>
                                        <div>
                                            <Typography variant={"h4"}>
                                                {t("card2.title")}
                                            </Typography>
                                            <Typography
                                                variant={"muted"}
                                                className={"mt-4"}
                                            >
                                                {t("card2.desc")}
                                            </Typography>
                                        </div>
                                        <ul className={"h-[calc(100%-120px)] lg:h-[calc(100%-240px)] mt-4 lg:mt-10"}>
                                            {
                                                card2Ary.map((item, index) => (
                                                    <li className={"flex items-center my-8"} key={index}>
                                                    <span
                                                        className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-theme-active block rounded-full"}/>
                                                        <Typography
                                                            variant={"muted"}
                                                            className={"ml-4 font-medium"}
                                                        >
                                                            {item.label}
                                                        </Typography>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className={"mt-4 lg:mt-20"}>
                                            <Button>
                                                {t("card2.btn")}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col-span-12 lg:col-span-5"}>
                                    <img
                                        src="/images/accounts/explore2.png"
                                        className={"w-full h-full bg-cover"}
                                        title={"placeholder"}
                                        alt="placeholder"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Explore;