"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Register from "@/components/RegisterBtn";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


const Standard = () => {
    const t = useTranslations("Pages.products.rates.standard");
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
                        className={"text-center"}
                    >
                        {t("title")}
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"text-center max-w-3xl mx-auto mt-4 lg:mt-6"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"flex justify-center mt-4 lg:mt-16"}>
                    <Register/>
                </div>
            </Container>
        </section>
    )
}

export default Standard;