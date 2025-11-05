"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Custom = () => {
    const t = useTranslations("Pages.accounts.vic.custom");
    const ulAry = [
        { text: t("row.col2.ul.li1") },
        { text: t("row.col2.ul.li2") },
        { text: t("row.col2.ul.li3") },
    ];
    return (
        <section className={"bg-gradient-to-b from-[#0C1724] from-[10%] to-[#163252] to-[100%] py-16 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"!text-white text-center"}
                    >
                        {t("title")}
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"text-center max-w-3xl mx-auto !text-white mt-6"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <div className={"grid grid-cols-12 gap-4"}>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <img
                                src="/images/accounts/custom-img.png"
                                alt="custom"
                                title={"custom"}
                                className={"lg:max-h-[380px] object-cover mx-auto"}
                            />
                        </div>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <div className={"flex flex-col flex-1"}>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col2.title")}
                                </Typography>
                                <ul className={"mt-4 lg:mt-6"}>
                                    {
                                        ulAry.map((item, index) => (
                                            <li key={index} className={"flex items-center my-4"}>
                                                <span
                                                    className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-white block rounded-full"}/>
                                                <Typography
                                                    variant={"muted"}
                                                    className={"!text-white ml-2"}
                                                >
                                                    {item.text}
                                                </Typography>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-white max-w-2xl mt-4 lg:mt-10"}
                                >
                                    {t("row.col2.desc")}
                                </Typography>

                                <div className={"mt-4 lg:mt-10"}>
                                    <GeneralLinkBtn
                                        text={t("row.col2.apply")}
                                        theme={"light-solid"}
                                        isLink
                                    />
                                    <Typography
                                        variant={"muted"}
                                        className={"!text-white mt-5"}
                                    >
                                        {t("row.col2.prompt")}11111
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Custom;