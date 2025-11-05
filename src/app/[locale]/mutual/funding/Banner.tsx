"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Banner = () => {
    const t = useTranslations("Pages.mutual.funding.banner");
    const CommonT = useTranslations("Common");
    return (
        <section className={"bg-[url(/images/mutual/funding-banner.png)] bg-center bg-cover relative h-124 lg:h-136 xl:h-[632px] py-8 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h1"}
                        className={"text-center !text-white"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"font-medium text-center mt-4 lg:mt-10 !text-white"}
                    >
                        {t("desc")}
                    </Typography>

                    <Typography
                        variant={"h4"}
                        className={"font-medium text-center max-w-5xl mx-auto mt-4 lg:mt-10 !text-white"}
                    >
                        {t("midst")}
                    </Typography>

                    <div className={"mt-8 lg:mt-16 flex justify-center"}>
                        <GeneralLinkBtn
                            text={CommonT("register")}
                            theme={"active-solid"}
                            isLink
                        />
                        <Button
                            className={"ml-8 border bg-transparent hover:bg-transparent"}>
                            {t("ticker")}
                        </Button>
                    </div>
                    <div>
                        <Typography
                            variant={"muted"}
                            className={"font-medium text-center !text-xs max-w-3xl mx-auto mt-6 !text-[#999999]"}
                        >
                            {t("prompt")}
                        </Typography>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export default Banner;