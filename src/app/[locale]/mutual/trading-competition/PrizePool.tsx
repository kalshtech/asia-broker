"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
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

const PrizePool = () => {
    const t = useTranslations("Pages.mutual.trading-competition.prize-pool");
    const ary = [
        { imageUrl: "/images/mutual/competition-prize-pool1.png", title: t("row.col1.title"), number: t("row.col1.number"), desc: t("row.col1.desc") },
        { imageUrl: "/images/mutual/competition-prize-pool2.png", title: t("row.col2.title"), number: t("row.col2.number"), desc: t("row.col2.desc") },
        { imageUrl: "/images/mutual/competition-prize-pool3.png", title: t("row.col3.title"), number: t("row.col3.number"), desc: t("row.col3.desc") },
        { imageUrl: "/images/mutual/competition-prize-pool4.png", title: t("row.col4.title"), number: t("row.col4.number"), desc: t("row.col4.desc") },
    ];

    return (
        <section className={"py-4 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"text-center !text-white"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"text-center mx-auto mt-8 !text-white"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <div className={"grid grid-cols-12 gap-4 lg:gap-8"}>
                        {
                            ary.map((item, index) => (
                                <div className={"col-span-12 lg:col-span-3"} key={index}>
                                    <div className={"rounded-2xl pb-10 px-4 h-full flex flex-col items-center justify-center specially-card"}>
                                        <img src={item.imageUrl} className={"w-[140px] h-[140px]"} alt=""/>
                                        <Typography
                                            variant={"h5"}
                                            className={"font-medium text-center !text-white"}
                                        >
                                            {item.title}
                                        </Typography>
                                        <div className={"flex justify-center items-end mt-2"}>
                                            <span className={"text-[#8A90A4]"}>{t("total")}</span>
                                            <Typography
                                                variant={"h5"}
                                                className={"font-medium !text-white ml-2"}
                                            >
                                                {item.number}
                                            </Typography>
                                        </div>
                                        <div className={"mt-6"}>
                                            <Typography
                                                variant={"muted"}
                                                className={"font-medium text-center !text-[#8A90A4]"}
                                            >
                                                {item.desc}
                                            </Typography>
                                        </div>
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

export default PrizePool;
