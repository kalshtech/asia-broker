"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";
import {motion, Variants} from "framer-motion";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


export default function Banner() {
    const t = useTranslations("Pages.accounts.banks.banner");
    return (
        <section className={"bg-[linear-gradient(180deg,#D0D4DF_0%,#FFFFFF_100%)] py-16 xl:py-24"}>
            <Container>
                <div>
                    <img src="/images/accounts/banks-banner.webp" className={"max-h-70 object-cover mx-auto"} alt=""/>
                </div>
                <div className={"mt-6"}>
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
                            variant={"h5"}
                            className={"text-center mx-auto mt-6 font-medium"}
                        >
                            {t("desc")}
                        </Typography>
                    </motion.div>
                    <div className={"flex justify-center mt-10"}>
                        <GeneralLinkBtn
                            text={t("btnText")}
                            theme={"active-solid"}
                            isLink
                        />
                    </div>
                    <div className={"mt-10"}>
                        <Typography
                            variant={"muted"}
                            className={"text-center mx-auto"}
                        >
                            {t("prompt")}
                        </Typography>
                    </div>
                </div>
            </Container>
        </section>
    )
}