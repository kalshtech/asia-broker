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


const Principle = () => {
    const t = useTranslations("Pages.corporation.careers.principle");
    const colAry = [
        { imgUrl: "/images/corporation/careers-principle1.png", title: t("row.col1.title"), desc: t("row.col1.desc") },
        { imgUrl: "/images/corporation/careers-principle2.png", title: t("row.col2.title"), desc: t("row.col2.desc") },
        { imgUrl: "/images/corporation/careers-principle3.png", title: t("row.col3.title"), desc: t("row.col3.desc") },
        { imgUrl: "/images/corporation/careers-principle4.png", title: t("row.col4.title"), desc: t("row.col4.desc") },
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
                    <Typography variant={"h3"} className={"text-center"}>
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"mt-6 max-w-3xl mx-auto text-center leading-[24px]"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <div className={"grid grid-cols-12 gap-4"}>
                        {
                            colAry.map((item, index) => (
                                <div
                                    className={"col-span-12 lg:col-span-3"}
                                    key={index}
                                >
                                    <Typography
                                        variant={"h5"}
                                        className={"font-medium truncate"}
                                    >
                                        {item.title}
                                    </Typography>
                                    <img src={item.imgUrl} className={"mt-6 object-cover"} alt=""/>

                                    <Typography
                                        variant={"muted"}
                                        className={"mt-4"}
                                    >
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

export default Principle;