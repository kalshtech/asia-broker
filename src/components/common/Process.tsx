"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
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

interface AryItemProps {
    title: string;
    desc: string;
    bottom?: string;
}

type Props = {
    ary: AryItemProps[],
    title: string;
    theme?: "light" | "dark";
}

const Process = (props: Props) => {
    const { ary, title, theme = "light" } = props;
    const isLight = theme === "light";

    return (
        <section className={"py-16 xl:py-30"}>
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
                </motion.div>
                <div className={"mt-4 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-4"}>
                        {
                            ary.map((item, index) => (
                                <div className={classnames(["col-span-12", `lg:col-span-6 xl:col-span-${12 / ary.length}`])}
                                     key={index}
                                >
                                    <div className={classnames(["py-10 px-8 rounded-lg h-full", {
                                        "bg-theme-light-bg": isLight,
                                        "bg-[#1F2538]": !isLight
                                    }])}>
                                        <header>
                                            <div className={"border-[2px] w-[32px] h-[32px] border-black bg-white rounded-full flex justify-center items-center"}>
                                                {index + 1}
                                            </div>
                                        </header>
                                        <div className={"h-[calc(100%-136px)] lg:h-[calc(100%-148px)]"}>
                                            <Typography
                                                variant={"h5"}
                                                className={classnames(["my-6", {
                                                    "!text-white": !isLight
                                                }])}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant={"muted"}
                                                className={classnames([{
                                                    "!text-[#999]": !isLight
                                                }])}
                                            >
                                                {item.desc}
                                            </Typography>
                                        </div>
                                        {
                                            item.bottom && (
                                                <div className={"mt-16 flex items-center cursor-pointer"}>
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-sm font-semibold"}
                                                    >
                                                        {item.bottom}
                                                    </Typography>
                                                    <ArrowRight className={"ml-2"}/>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Process;