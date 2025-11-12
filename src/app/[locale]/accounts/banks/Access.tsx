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


export default function Access() {
    const t = useTranslations("Pages.accounts.banks.access");
    return (
        <Container>
            <div className={"bg-[url(/images/accounts/banks-access.webp)] bg-cover bg-center p-16 rounded-2xl"}>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={""}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"mt-6 max-w-3xl"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"flex mt-10"}>
                    <GeneralLinkBtn
                        text={t("btnText")}
                        theme={"active-solid"}
                        path={"/accounts/vic"}
                    />
                </div>
            </div>
        </Container>
    )
}