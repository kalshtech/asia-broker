"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
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

const Advance = () => {
    const t = useTranslations("Pages.accounts.profit.advance");

    return (
        <section className={"bg-[url(/images/accounts/profit-advance-bg.png)] bg-center bg-cover py-16 xl:py-30"}>
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
                    <Typography variant={"h4"} className={"font-medium text-center !text-white mt-4 lg:mt-10"}>
                        {t("desc1")}
                    </Typography>
                    <Typography
                        variant={"h4"}
                        className={"font-medium text-center !text-white"}
                    >
                        {t("desc2")}
                    </Typography>
                </motion.div>

                <div className={"mt-4 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-8"}>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <div className={"bg-white rounded-xl p-8 xl:p-16 h-full"}>
                                <div className={"h-60 lg:h-42"}>
                                    <Typography
                                        variant={"h5"}
                                        className={"font-medium mt-6 text-center"}
                                    >
                                        {t("row.col1.title")}
                                    </Typography>

                                    <Typography
                                        variant={"p"}
                                        className={"mt-6 text-center"}
                                    >
                                        {t("row.col1.desc")}
                                    </Typography>
                                </div>

                                <div className={"mt-16 flex justify-center"}>
                                    <GeneralLinkBtn
                                        text={t("row.col1.btn")}
                                        path={"/accounts/platinum"}
                                        theme={"active-solid"}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <div className={"bg-white rounded-xl p-8 xl:p-16 h-full"}>
                                <div className={"h-60 lg:h-42"}>
                                    <Typography
                                        variant={"h5"}
                                        className={"font-medium mt-6 text-center"}
                                    >
                                        {t("row.col2.title")}
                                    </Typography>

                                    <Typography
                                        variant={"p"}
                                        className={"mt-6 text-center"}
                                    >
                                        {t("row.col2.desc")}
                                    </Typography>
                                </div>

                                <div className={"mt-16 flex justify-center"}>
                                    <GeneralLinkBtn
                                        text={t("row.col2.btn")}
                                        path={"/accounts/vic"}
                                        theme={"active-solid"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Advance;