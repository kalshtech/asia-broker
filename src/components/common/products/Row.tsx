"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import classnames from "classnames";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Row = ({ ary, title, title1 }: any) => {
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
                    { title }
                </Typography>
                {
                    title1 && (
                        <Typography
                            variant={"h1"}
                            className={"font-medium text-center mt-4"}
                        >
                            { title1 }
                        </Typography>
                    )
                }
            </motion.div>
            <div className={"mt-4 lg:mt-16"}>
                <div className={"grid grid-cols-12 gap-8"}>
                    {
                        ary.map((item: any, index: number) => (
                            <div className={classnames(["bg-theme-light-bg rounded-2xl py-10 px-8 col-span-12", `lg:col-span-${12 / ary.length}`])} key={index}>
                                <img src={item.imageUrl} className={"w-10 h-10 object-cover"} alt=""/>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium mt-4"}
                                >
                                    {item.title}
                                </Typography>

                                {
                                    item.midst && (
                                        <Typography
                                            variant={"h5"}
                                            className={"font-medium mt-4"}
                                        >
                                            {item.midst}
                                        </Typography>
                                    )
                                }

                                <Typography
                                    variant={"muted"}
                                    className={"mt-4"}
                                >
                                    {item.desc}
                                </Typography>

                                {
                                    item.prompt && (
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-xs mt-6"}
                                        >
                                            {item.prompt}
                                        </Typography>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Row;