"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

export default function Advantages() {
    const t = useTranslations("Pages.mutual.funding.advantages");
    const ary = [
        { imageUrl: "/images/mutual/funding-advantages1.png", title: t("row.col1.title"), desc: t("row.col1.desc") },
        { imageUrl: "/images/mutual/funding-advantages2.png", title: t("row.col2.title"), desc: t("row.col2.desc") },
        { imageUrl: "/images/mutual/funding-advantages3.png", title: t("row.col3.title"), desc: t("row.col3.desc") }
    ];
    return (
        <section className={"bg-[#000515] p-4 lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center !text-white"}
                >
                    {t("title")}
                </Typography>
            </motion.div>
            <div className={"mt-16"}>
                <div className={"grid grid-cols-12 gap-4 lg:gap-12"}>
                    {
                        ary.map((item, index) => (
                            <div className={"col-span-12 lg:col-span-4"} key={index}>
                                <img src={item.imageUrl} className={"object-cover"} alt=""/>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium !text-white mt-4"}
                                >
                                    { item.title }
                                </Typography>

                                <Typography
                                    variant={"muted"}
                                    className={"font-medium !text-white mt-4"}
                                >
                                    { item.desc }
                                </Typography>
                            </div>
                        ))
                    }
                </div>
                <div className={"mt-8 lg:mt-16"}>
                    <Typography
                        variant={"muted"}
                        className={"font-medium text-center !text-[#666]"}
                    >
                        { t("prompt") }
                    </Typography>
                    <div className={"mt-4 lg:mt-10 flex justify-center"}>
                        <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active"}>
                            { t("more") }
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}