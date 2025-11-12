"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";
import {motion, Variants} from "framer-motion";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


export default function Beginning() {
    const t = useTranslations("Pages.accounts.banks.beginning");
    return (
        <div className={"py-16 lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"text-center mx-auto max-w-3xl"}
                    >
                        {t("title")}
                    </Typography>
                </motion.div>
                <div className={"mt-10"}>
                    <div className={"bg-[url(/images/accounts/banks-beginning.webp)] bg-cover bg-center py-30"}>
                        <div>
                            <Typography
                                variant={"h4"}
                                className={"text-center mx-auto max-w-3xl !text-white"}
                            >
                                {t("content.title")}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"text-center mx-auto max-w-3xl !text-white mt-12"}
                            >
                                {t("content.desc")}
                            </Typography>

                            <div className={"flex justify-center mt-10"}>
                                <GeneralLinkBtn
                                    text={t("content.learn")}
                                    theme={"active-solid"}
                                    path={"/accounts/earn"}
                                />
                                <GeneralLinkBtn
                                    text={t("content.activate")}
                                    theme={"light-hollow"}
                                    path={"/platform"}
                                    className={"ml-4"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}