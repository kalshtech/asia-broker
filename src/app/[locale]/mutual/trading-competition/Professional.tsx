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

const Professional = () => {
    const t = useTranslations("Pages.mutual.trading-competition.professional");
    const ary = [
        { imageUrl: "/images/mutual/competition-professional-col1.png", title: t("row.col1.title"), desc: t("row.col1.desc") },
        { imageUrl: "/images/mutual/competition-professional-col2.png", title: t("row.col2.title"), desc: t("row.col2.desc") },
        { imageUrl: "/images/mutual/competition-professional-col3.png", title: t("row.col3.title"), desc: t("row.col3.desc") },
        { imageUrl: "/images/mutual/competition-professional-col4.png", title: t("row.col4.title"), desc: t("row.col4.desc") },
        { imageUrl: "/images/mutual/competition-professional-col5.png", title: t("row.col5.title"), desc: t("row.col5.desc") },
        { imageUrl: "/images/mutual/competition-professional-col6.png", title: t("row.col6.title"), desc: t("row.col6.desc") },
    ];
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
                    className={"font-medium text-center !text-white"}
                >
                    {t("title")}
                </Typography>
                <Typography
                    variant={"large"}
                    className={"font-medium text-center mx-auto mt-8 !text-white"}
                >
                    {t("desc")}
                </Typography>
                <div className={"mt-10 flex justify-center"}>
                    <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                        { t("understand") }
                    </Button>
                    <Button className={"px-8 h-10 ml-4 rounded-full border bg-transparent hover:bg-transparent"}>
                        { t("trade") }
                    </Button>
                </div>
            </motion.div>
            <div className={"mt-16"}>
                <div className={"grid grid-cols-3 gap-8 space-y-4"}>
                    {
                        ary.map((item, index) => (
                            <div className={"flex flex-col items-center justify-center"} key={index}>
                                <img src={item.imageUrl} className={"w-10 h-10 object-cover"} alt=""/>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium my-6 text-center !text-white"}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    variant={"muted"}
                                    className={"font-medium text-center !text-white"}
                                >
                                    {item.desc}
                                </Typography>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Professional;