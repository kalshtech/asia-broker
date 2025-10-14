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

const Banner =  () => {
    const t = useTranslations("Pages.corporation.about.banner");
    return (
        <section className={"bg-[url(/images/corporation/about-banner.png)] bg-center bg-cover py-8 px-4 h-80 lg:h-120 lg:p-30"}>
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
                        variant={"muted"}
                        className={"font-medium !text-white mt-2 max-w-lg leading-[24px]"}
                    >
                        {t("prompt")}
                    </Typography>


                    <Typography
                        variant={"muted"}
                        className={"font-medium !text-white mt-16 max-w-lg leading-[24px]"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
            </Container>
        </section>
    )
}

export default Banner;