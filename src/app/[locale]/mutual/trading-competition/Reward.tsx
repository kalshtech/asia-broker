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

const Reward = () => {
    const t = useTranslations("Pages.mutual.trading-competition.reward");

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
                        className={"font-medium text-center !text-white"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography className={"font-medium text-center mx-auto mt-8 !text-white"}>
                        {t("desc1")}
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"font-medium text-center mx-auto mt-8 !text-white"}
                    >
                        {t("desc2")}
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <img src="/images/mutual/competition-reward.png" className={"object-cover"} alt=""/>
                </div>
            </Container>
        </section>
    );
}

export default Reward;