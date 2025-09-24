"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import { ArrowRight } from "lucide-react";
import classnames from "classnames";

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
    bottom: string;
}

type Props = {
    ary: AryItemProps[],
    title: string;
}

const Process = (props: Props) => {
    const { ary, title } = props;
    return (
        <section className={"p-4 lg:p-30"}>
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
                    {title}
                </Typography>
            </motion.div>
            <div className={"mt-4 lg:mt-16"}>
                <div className={"grid grid-cols-12 gap-4"}>
                    {
                        ary.map((item, index) => (
                            <div className={classnames(["col-span-12", `lg:col-span-${12 / ary.length}`])}
                                 key={index}
                            >
                                <div className={"py-10 px-8 bg-theme-light-bg rounded-lg"}>
                                    <header>
                                        <div className={"border-[2px] w-[32px] h-[32px] border-black bg-white rounded-full flex justify-center items-center"}>
                                            { index + 1 }
                                        </div>
                                    </header>
                                    <div className={""}>
                                        <Typography variant={"h4"}
                                                    className={"my-6"}
                                        >
                                            { item.title }
                                        </Typography>
                                        <Typography>
                                            { item.desc }
                                        </Typography>
                                    </div>
                                    <div className={"mt-16 flex items-center cursor-pointer"}>
                                        <Typography>
                                            { item.bottom }
                                        </Typography>
                                        <ArrowRight className={"ml-2"} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Process;