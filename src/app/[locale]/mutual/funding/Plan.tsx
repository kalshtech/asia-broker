"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import Process from "@/components/common/Process";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

export default function Plan() {
    const t = useTranslations("Pages.mutual.funding.plan");
    const processAry = [
        { title: t("row.col1.title"), desc: t("row.col1.desc") },
        { title: t("row.col2.title"), desc: t("row.col2.desc") },
        { title: t("row.col3.title"), desc: t("row.col3.desc") },
        { title: t("row.col4.title"), desc: t("row.col4.desc") },
    ];
    return (
        <section className={"bg-[#000515]"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"text-center !text-white"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"text-center mx-auto mt-6 !text-[#999]"}
                    >
                        {t("midst")}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"text-center mx-auto mt-4 max-w-5xl !text-white"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div>
                    <Process theme={"dark"} ary={processAry} title={t("row.title")}/>
                </div>
            </Container>
        </section>
    )
}