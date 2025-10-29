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

const ProfessionalTools = () => {
    const t = useTranslations("Pages.platform.professionalTools");
    return (
        <section className={"bg-[url(/images/platform/professional-tools-background.png)] bg-cover bg-center h-124 lg:h-[532px] py-4 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography variant={"h3"} className={"text-center !text-white"}>
                        {t("title")}
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <div className={"grid grid-cols-12"}>
                        <div className={"col-span-6 h-full"}>
                            <div className={"border-r border-b h-full border-[#51586F] py-6 px-4"}>
                                <Typography variant={"h3"} className={"text-center font-medium !text-white"}>
                                    38+
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"text-center !text-white mt-4"}
                                >
                                    {t("row.col1-desc")}
                                </Typography>
                            </div>
                        </div>
                        <div className={"col-span-6 h-full"}>
                            <div className={"py-6 px-4 border-b h-full border-[#51586F]"}>
                                <Typography variant={"h3"} className={"text-center font-medium !text-white"}>
                                    44+
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"text-center !text-white mt-4"}
                                >
                                    {t("row.col2-desc")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={"grid grid-cols-12"}>
                        <div className={"col-span-6 h-full"}>
                            <div className={"flex justify-center h-full border-r border-[#51586F] py-6 px-4"}>
                                <div>
                                    <Typography variant={"h3"} className={"text-center font-medium !text-white"}>
                                        3
                                    </Typography>
                                    <Typography
                                        variant={"muted"}
                                        className={"text-center !text-white mt-4"}
                                    >
                                        {t("row.col3-desc1")}
                                    </Typography>
                                </div>
                                <div className={"text-white mt-4 mx-4"}>
                                    &
                                </div>
                                <div>
                                    <Typography variant={"h3"} className={"text-center font-medium !text-white"}>
                                       21
                                    </Typography>
                                    <Typography
                                        variant={"muted"}
                                        className={"text-center !text-white mt-4"}
                                    >
                                        {t("row.col3-desc2")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={"col-span-6"}>
                            <div className={"py-6 px-4"}>
                                <Typography variant={"h3"} className={"text-center font-medium !text-white"}>
                                    {t("row.col4-title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"text-center !text-white mt-4"}
                                >
                                    {t("row.col4-desc")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ProfessionalTools;