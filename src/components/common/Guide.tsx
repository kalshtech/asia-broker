"use client";
import * as React from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { Button } from "@/components/ui/button";
import SimpleSwiper from "@/components/common/products/SimpleSwiper";
import Container from "@/components/Container";
import classnames from "classnames";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

type leftProps = {
    title: string;
    desc?: string;
    more: string;
    midst?: string;
    muted?: string;
}

type ItemProps = {
    url: string;
    title: string;
    description: string;
};

type Props = {
    title: string;
    left: leftProps;
    ary: ItemProps[],
    prevEl: string;
    nextEl: string;
};

const Guide = ({ title, left, ary, prevEl, nextEl }: Props) => {
    return (
        <section className={"lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center"}
                    >
                        {title}
                    </Typography>
                </motion.div>
                <div className={"grid grid-cols-12 gap-4 lg:gap-8 mt-4 lg:mt-16"}>
                    <div className={"col-span-12 lg:col-span-3"}>
                        <Typography
                            variant={"h4"}
                            className={"font-medium"}
                        >
                            {left.title}
                        </Typography>
                        {
                            left.midst && (
                                <Typography
                                    variant={"p"}
                                    className={"font-medium mt-2 lg:mt-4"}
                                >
                                    {left.midst}
                                </Typography>
                            )
                        }
                        {
                            left.desc && (
                                <Typography variant={"muted"} className={classnames([left.title ? "mt-4 lg:mt-8" : ""])}>
                                    {left.desc}
                                </Typography>
                            )
                        }
                        <div className={"mt-10"}>
                            <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                                {left.more}
                            </Button>
                        </div>

                        {
                            left.muted && (
                                <Typography variant={"muted"} className={"mt-8"}>
                                    {left.muted}
                                </Typography>
                            )
                        }
                    </div>
                    <div className={"col-span-12 lg:col-span-9"}>
                        <div className={"w-full"}>
                            <SimpleSwiper ary={ary} prevEl={`${prevEl}`} nextEl={`${nextEl}`}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}


export default Guide;

