"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import classnames from "classnames";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

type Props = {
    typeText: string;
    className?: string;
    number: number | string;
}

const Credit = ({ typeText, className, number }: Props) => {
    const t = useTranslations("Pages.accounts.platinum.credit");
    const locale = useLocale();
    const isEn = locale === "en";

    return (
        <section className={classnames(["py-4 lg:py-30", className])}>
            <Container>
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
                        {t("title1")}
                    </Typography>
                    <div className={"flex justify-center items-end mt-4"}>
                        <Typography
                            variant={"h3"}
                            className={"text-center pb-2"}
                        >
                            {t("title2-1")}
                        </Typography>
                        <Typography
                            variant={"h3"}
                            className={"!text-[36px] lg:!text-[64px] text-center mx-4"}
                        >
                            5.6
                        </Typography>
                        <Typography
                            variant={"h3"}
                            className={"text-center pb-2"}
                        >
                            {t("title2-2")}
                        </Typography>
                    </div>
                </motion.div>
                <div className={"mt-4 lg:mt-8"}>
                    <Typography variant={"h4"} className={"text-center max-w-3xl mx-auto"}>
                        {t("midst")}
                    </Typography>

                    {
                        !isEn && (
                            <Typography variant={"muted"} className={"text-center mt-6"}>
                                {t("desc")}
                            </Typography>
                        )
                    }
                </div>

                {
                    isEn ? (
                        <div className={"mt-4 lg:mt-8"}>
                            <div className={"flex justify-center items-end"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium text-center mb-2"}
                                >
                                    {t("transfer")}
                                </Typography>
                                <Typography
                                    variant={"h3"}
                                    className={"!text-[36px] lg:!text-[64px] text-center mx-4"}
                                >
                                    {`USD ${number}`}
                                </Typography>
                            </div>
                            <div className={"mt-4 lg:mt-10"}>
                                <Typography
                                    variant={"p"}
                                    className={"text-center"}
                                >
                                    {typeText}
                                </Typography>
                            </div>
                        </div>
                    ) : (
                        <div className={"flex justify-center items-end mt-4 lg:mt-8"}>
                            <Typography
                                variant={"h5"}
                                className={"font-medium text-center"}
                            >
                                {t("transfer")}
                            </Typography>
                            <Typography
                                variant={"h3"}
                                className={"lg:!text-[64px] text-center mx-4"}
                            >
                                {number}
                            </Typography>
                            <Typography
                                variant={"h5"}
                                className={"font-medium text-center"}
                            >
                                {typeText}
                            </Typography>
                        </div>
                    )
                }

                <div className={"flex justify-center mt-4 lg:mt-16"}>
                    <Button>
                        {t("immediately")}
                    </Button>
                    <Button className={"ml-4 bg-transparent border border-black text-black hover:bg-transparent"}>
                        {t("understand")}
                    </Button>
                </div>
            </Container>
        </section>
    )
}


export default Credit;