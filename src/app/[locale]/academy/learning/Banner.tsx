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

const Banner = () => {
    const t = useTranslations("Pages.academy.learning.banner");
    return (
        <section className={"bg-[url(/images/academy/learning-banner.png)] bg-center bg-cover h-80 lg:h-120 p-4 lg:p-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h1"}
                        className={"!text-white"}
                    >
                        {t("title")}
                    </Typography>

                    <Typography
                        variant={"h4"}
                        className={"font-medium !text-white mt-8"}
                    >
                        {t("midst")}
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"font-medium !text-white mt-8 max-w-3xl"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
            </Container>
        </section>
    )
}

export default Banner;