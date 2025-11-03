"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import classnames from "classnames";
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

interface Col1Object {
    title: string;
    desc?: string;
    prompt1?: string;
    prompt2?: string;
    ulAry?: Array<{ text: string }>;
}

interface Col2Object {
    backgroundUrl: string;
    isShowMore?: boolean
}

type Props = {
    title: string;
    desc?: string;
    col1: Col1Object;
    col2: Col2Object;
}

const Stream = (props: Props) => {
    const t = useTranslations("Pages.accounts.vic.stream");
    const { title, desc, col1, col2 = { isShowMore: true, backgroundUrl: "" } } = props;
    return (
        <section className={"py-16 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography variant={"h3"} className={"text-center"}>
                        {title}
                    </Typography>

                    {
                        desc && (
                            <Typography
                                variant={"p"}
                                className={"text-center mt-6"}
                            >
                                {desc}
                            </Typography>
                        )
                    }
                </motion.div>
                <div className={"mt-8 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-8"}>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <Typography
                                variant={"h5"}
                                className={"font-medium max-w-2xl"}
                            >
                                {col1.title}
                            </Typography>

                            {
                                col1.desc && (
                                    <Typography
                                        variant={"p"}
                                        className={"mt-4 lg:mt-8"}
                                    >
                                        {col1.desc}
                                    </Typography>
                                )
                            }

                            <ul className={"mt-4 lg:mt-8"}>
                                {
                                    col1.ulAry && col1.ulAry.map((item, index) => (
                                        <li key={index} className={"flex items-center my-4"}>
                                            <span
                                                className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-theme-active block rounded-full"}/>
                                            <Typography
                                                variant={"muted"}
                                                className={"font-medium ml-2"}
                                            >
                                                {item.text}
                                            </Typography>
                                        </li>
                                    ))
                                }
                            </ul>

                            {
                                col1.prompt1 && (
                                    <Typography
                                        variant={"muted"}
                                        className={"!text-xs mt-10 max-w-2xl"}
                                    >
                                        {col1.prompt1}
                                    </Typography>
                                )
                            }

                            {
                                col1.prompt2 && (
                                    <Typography
                                        variant={"p"}
                                        className={"font-medium mt-6 max-w-2xl"}
                                    >
                                        {col1.prompt2}
                                    </Typography>
                                )
                            }

                        </div>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <img
                                src="/images/accounts/stream-logo.png"
                                className={"w-full object-cover"}
                                alt="logo"
                                title={"logo"}
                            />
                            <div className={classnames(["bg-center bg-cover mt-6 h-90", col2.backgroundUrl])}>
                                {
                                    col2.isShowMore && (
                                        <div className={"flex justify-center items-center h-full flex-1 flex-col"}>
                                            <Button className={"text-black bg-white hover:bg-white"}>
                                                {t("row.col2.apply")}
                                            </Button>
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white max-w-xl mx-auto text-center mt-4"}
                                            >
                                                {t("row.col2.desc")}
                                            </Typography>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Stream;