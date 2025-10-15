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

const Mechanism = () => {
    const t = useTranslations("Pages.accounts.profit.mechanism");
    const ary = [
        { imgUrl: "/images/accounts/profit-mechanism1.png", title: t("row.col1.title"), desc: t("row.col1.desc") },
        { imgUrl: "/images/accounts/profit-mechanism2.png", title: t("row.col2.title"), desc: t("row.col2.desc") },
        { imgUrl: "/images/accounts/profit-mechanism3.png", title: t("row.col3.title"), desc: t("row.col3.desc") },
    ];
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
                        className={"font-medium text-center"}
                    >
                        {t("title")}
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <div className={"grid grid-cols-12 gap-4 lg:gap-8"}>
                        {
                            ary.map((item, index) => (
                                <div className={"flex-col flex items-center justify-center col-span-12 lg:col-span-4"}
                                     key={index}>
                                    <img src={item.imgUrl} className={"w-10 h-10 object-cover"} alt=""/>
                                    <Typography
                                        variant={"large"}
                                        className={"my-6"}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant={"p"}>
                                        {item.desc}
                                    </Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Mechanism;