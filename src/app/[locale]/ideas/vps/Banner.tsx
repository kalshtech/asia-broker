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
    const t = useTranslations("Pages.ideas.vps.banner");
    return (
        <section className={"bg-[url(/images/ideas/vps-banner.png)] bg-cover bg-center h-120 lg:h-[632px] py-4 lg:py-30"}>
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
                        {t("title1")}
                    </Typography>

                    <Typography
                        variant={"h1"}
                        className={"text-center mt-4 !text-white"}
                    >
                        {t("title2")}
                    </Typography>

                    <Typography
                        variant={"h5"}
                        className={"font-normal text-center mt-10 !text-white"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>

                <div className={"flex justify-center flex-col mt-8 lg:mt-20"}>
                    <div className={"flex justify-center"}>
                        <GeneralLinkBtn
                            text={t("btnText")}
                            path={"/accounts/platinum"}
                            theme={"active-solid"}
                        />
                    </div>

                    <Typography
                        variant={"muted"}
                        className={"text-center mt-4 lg:mt-10 !text-white max-w-3xl mx-auto"}
                    >
                        {t("muted")}
                    </Typography>
                </div>
            </Container>
        </section>
    )
}

export default Banner;
