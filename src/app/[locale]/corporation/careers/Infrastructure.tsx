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

const Infrastructure =  () => {
    const t = useTranslations("Pages.corporation.careers.infrastructure");
    const colAry = [
        { imgUrl: "/images/corporation/careers-infrastructure-col1-icon.png", title: t("row.col1.title"), desc: t("row.col1.desc") },
        { imgUrl: "/images/corporation/careers-infrastructure-col2-icon.png", title: t("row.col2.title"), desc: t("row.col2.desc") },
        { imgUrl: "/images/corporation/careers-infrastructure-col3-icon.png", title: t("row.col3.title"), desc: t("row.col3.desc") },
    ];

    return (
        <section className={"py-30"}>
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
                    {t("title")}
                </Typography>
                <Typography
                    variant={"h6"}
                    className={"font-medium mx-auto text-center mt-6 max-w-3xl"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mt-16 bg-[url(/images/corporation/careers-infrastructure-bg.png)] bg-cover bg-center h-[600px]"}/>
            <div className={"grid grid-cols-12 gap-8 mx-30 -mt-32"}>
                {
                    colAry.map((item, index) => (
                        <div className={"col-span-4 bg-theme-light-bg px-10 pt-10 pb-24 rounded-lg"} key={index}>
                            <img src={item.imgUrl} className={"w-10 h-10 object-cover"} alt=""/>
                            <Typography
                                variant={"h5"}
                                className={"mt-6 font-medium"}
                            >
                                { item.title }
                            </Typography>

                            <Typography
                                variant={"muted"}
                                className={"mt-6 font-medium"}
                            >
                                { item.desc }
                            </Typography>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Infrastructure;