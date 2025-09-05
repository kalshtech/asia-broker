"use client";
import * as React from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import {useTranslations} from "next-intl";
import { Button } from "@/components/ui/button";
import SimpleSwiper from "@/components/common/SimpleSwiper";
import {CircleChevronLeft, CircleChevronRight} from "lucide-react";
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
    desc: string;
    more: string;
    midst?: string;
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
    const t = useTranslations("Pages.products.forex.guide");
    return (
        <section className={"lg:p-30"}>
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
            </motion.div>
            <div className={"grid grid-cols-12 gap-4 mt-16"}>
                <div className={"col-span-12 lg:col-span-2"}>
                    <Typography
                        variant={"h3"}
                        className={"font-medium"}
                    >
                        { left.title }
                    </Typography>
                    {
                        left.midst && (
                            <Typography
                                variant={"h4"}
                                className={"font-medium mt-4"}
                            >
                                { left.midst }
                            </Typography>
                        )
                    }
                    <Typography variant={"muted"} className={"mt-8"}>
                        { left.desc }
                    </Typography>
                    <div className={"mt-10"}>
                        <Button className={"bg-theme-active hover:bg-theme-active-hover rounded-full"}>
                            { left.more }
                        </Button>
                    </div>
                </div>
                <div className={"col-span-12 lg:col-span-10"}>
                    <div className={"w-full"}>
                        <SimpleSwiper ary={ary} prevEl={`.${prevEl}`} nextEl={`.${nextEl}`} />
                    </div>
                </div>
            </div>
            <div className={"mt-4"}>
                <div className={"flex justify-end"}>
                    <CircleChevronLeft className={classnames([prevEl, "mr-2 cursor-pointer"])}/>
                    <CircleChevronRight className={classnames([nextEl, "ml-2 cursor-pointer"])}/>
                </div>
            </div>
        </section>
    )
}


export default Guide;

