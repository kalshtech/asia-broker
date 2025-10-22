"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

type rightRowItem = {
    imageUrl: string;
    title: string;
    desc: string;
}

type Props = {
    title: string;
    desc?: string;
    leftTitle: string;
    leftDesc?: string;
    rightCol1Title: string;
    rightCol1Desc: string;
    liAry: { label: string; }[];
    rightRowAry: rightRowItem[];
}

const Introduction = (props: Props) => {
    const { title, desc, leftTitle, liAry, leftDesc, rightRowAry, rightCol1Title, rightCol1Desc } = props;

    return (
        <section className={"py-4 lg:py-30"}>
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
                        {title}
                    </Typography>
                    {
                        desc && (
                            <Typography
                                variant={"muted"}
                                className={"text-center mt-6 mx-auto max-w-3xl"}
                            >
                                {desc}
                            </Typography>
                        )
                    }
                </motion.div>
                <div className={"grid grid-cols-12 gap-8 mt-4 lg:mt-16"}>
                    <div className={"col-span-12 lg:col-span-3"}>
                        <div className={""}>
                            <div>
                                <Typography
                                    variant={"h5"}
                                >
                                    {leftTitle}
                                </Typography>
                                {
                                    leftDesc && (
                                        <Typography
                                            variant={"muted"}
                                            className={"mt-4"}
                                        >
                                            {leftDesc}
                                        </Typography>
                                    )
                                }
                            </div>
                            <ul className={"mt-6"}>
                                {
                                    liAry.map((item, index) => (
                                        <li key={index} className={"my-6 flex items-center"}>
                                            <div className={"w-[5px] h-[5px] rounded-full bg-theme-active"}></div>
                                            <Typography variant={"muted"} className={"ml-3 font-medium"}>
                                                {item.label}
                                            </Typography>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-9"}>
                        <div className={"grid gap-4 grid-cols-2 lg:grid-cols-3"}>
                            <div className={"bg-theme-light-bg p-6 relative rounded-lg"}>
                                <img
                                    src="/images/accounts/zero.png"
                                    className={"object-cover max-w-[180px] max-h-[180px] absolute -top-1/4 right-0"}
                                    alt="icon"
                                    title={"icon"}
                                />
                                <Typography variant={"h5"} className={"mt-16"}>
                                    {rightCol1Title}
                                </Typography>
                                <Typography variant={"muted"} className={"block mt-4"}>
                                    {rightCol1Desc}
                                </Typography>
                            </div>
                            {
                                rightRowAry.map((item, index) => (
                                    <div className={"bg-theme-light-bg p-6 rounded-lg"} key={index}>
                                        <img
                                            src={item.imageUrl}
                                            className={"w-[30px] h-[30px] object-cover"}
                                            alt="icon"
                                            title={"icon"}
                                        />
                                        <Typography variant={"h5"} className={"mt-6"}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant={"muted"} className={"block mt-4"}>
                                            {item.desc}
                                        </Typography>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Introduction;
