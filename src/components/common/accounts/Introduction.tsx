"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { Typography } from "@/components/ui/typography";

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
        <section className={"p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    { title }
                </Typography>
                {
                    desc && (
                        <Typography
                            variant={"muted"}
                            className={"text-center mt-6"}
                        >
                            { desc }
                        </Typography>
                    )
                }
            </motion.div>
            <div className={"grid grid-cols-12 gap-8 mt-16"}>
                <div className={"col-span-3"}>
                    <div className={""}>
                        <div>
                            <Typography variant={"h4"}>
                                { leftTitle }
                            </Typography>
                            {
                                leftDesc && (
                                    <Typography
                                        variant={"muted"}
                                        className={"mt-3"}
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
                                        <Typography className={"ml-3 font-medium"}>
                                            { item.label }
                                        </Typography>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={"col-span-9"}>
                    <div className={"grid grid-cols-3 gap-4"}>
                        <div className={"bg-theme-light-bg p-6 relative rounded-lg"}>
                            <img
                                src="/images/accounts/zero.png"
                                className={"object-cover max-w-[180px] max-h-[180px] absolute -top-1/4 right-0"}
                                alt="icon"
                                title={"icon"}
                            />
                            <Typography variant={"h4"} className={"mt-16"}>
                                { rightCol1Title }
                            </Typography>
                            <Typography className={"block mt-4"}>
                                { rightCol1Desc }
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
                                    <Typography variant={"h4"} className={"mt-6"}>
                                        { item.title }
                                    </Typography>
                                    <Typography className={"block mt-4"}>
                                        { item.desc }
                                    </Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;
