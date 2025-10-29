"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import classnames from "classnames";
import Register from "@/components/RegisterBtn";
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

const Row = ({ ary, title, title1, theme = "light", challengeText, isShowBtn, children, prompt }: any) => {
    const isLight = theme === "light";
    return (
        <section className={classnames(["xl:py-30", {
            "bg-[#000515]": !isLight
        }])}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={classnames(["text-center", {
                            "!text-white": !isLight
                        }])}
                    >
                        {title}
                    </Typography>
                    {
                        title1 && (
                            <Typography
                                variant={"h4"}
                                className={"text-center !text-[32px] mt-4"}
                            >
                                {title1}
                            </Typography>
                        )
                    }
                </motion.div>
                <div className={"mt-8 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-8"}>
                        {
                            ary.map((item: any, index: number) => (
                                <div
                                    className={classnames(["rounded-2xl py-10 px-8 col-span-12", `lg:col-span-${12 / ary.length}`, {
                                        "bg-theme-light-bg": isLight,
                                        "bg-[#1F2538] border border-[#4F5670]": !isLight
                                    }])} key={index}>
                                    <img src={item.imageUrl} className={"w-10 h-10 object-cover"} alt=""/>
                                    <Typography
                                        variant={"h5"}
                                        className={classnames(["font-medium mt-4", {
                                            "!text-white": !isLight
                                        }])}
                                    >
                                        {item.title}
                                    </Typography>

                                    {
                                        item.midst && (
                                            <Typography
                                                variant={"h6"}
                                                className={classnames(["font-medium mt-4", {
                                                    "!text-white": !isLight
                                                }])}
                                            >
                                                {item.midst}
                                            </Typography>
                                        )
                                    }

                                    <Typography
                                        variant={"muted"}
                                        className={classnames(["mt-4", {
                                            "!text-white": !isLight
                                        }])}
                                    >
                                        {item.desc}
                                    </Typography>
                                </div>
                            ))
                        }
                    </div>

                    {
                        prompt && (
                            <Typography
                                variant={"muted"}
                                className={classnames(["!text-xs text-center max-w-3xl mx-auto mt-6", {
                                    "!text-white": !isLight
                                }])}
                            >
                                {prompt}
                            </Typography>
                        )
                    }

                    {
                        isShowBtn && (
                            <div className={"mt-16 flex justify-center"}>
                                <Register/>
                                <Button
                                    className={"ml-4 border border-white bg-transparent hover:bg-transparent"}>
                                    {challengeText}
                                </Button>
                            </div>
                        )
                    }
                </div>
                { children }
            </Container>
        </section>
    )
}

export default Row;