"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import RegisterBtn from "@/components/RegisterBtn";
import Container from "@/components/Container";
import TitleReveal from "@/components/TitleReveal";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Banner =  () => {
    const t = useTranslations("Pages.accounts.classic.banner");
    return (
        <section className={"bg-[url(/images/accounts/classic-banner.png)] bg-center bg-cover py-4 lg:py-30 h-100 lg:h-[632px]"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <TitleReveal
                        title={t("title")}
                        className={"!text-white !bg-gradient-to-b !from-[#FFFFFF] !to-[#7E7E7E] !bg-clip-text !text-transparent"}
                    />

                    <Typography
                        variant={"h4"}
                        className={"font-medium !text-white mt-10"}
                    >
                        {t("midst1")}
                    </Typography>

                    <Typography
                        variant={"h4"}
                        className={"font-medium !text-white mt-4"}
                    >
                        {t("midst2")}
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"font-medium !text-white mt-8 max-w-lg leading-[24px]"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-16 flex"}>
                    <RegisterBtn/>
                    <Button className={"px-8 h-10 ml-4 rounded-full bg-transparent border hover:bg-transparent"}>
                        {t("support")}
                    </Button>
                </div>
            </Container>
        </section>
    )
}

export default Banner;