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


const Exclusive = () => {
    const t = useTranslations("Pages.accounts.platinum.exclusive");
    return (
        <section className={"py-4 lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center"}
                    >
                        {t("title")}
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"font-medium text-center mx-auto mt-10 !max-w-3xl"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div
                    className={"bg-[url(/images/accounts/exclusive-bg.png)] bg-cover bg-center h-80 lg:h-[428px] mt-4 lg:mt-16 py-4 lg:py-30"}>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                    >
                        <Typography
                            variant={"h3"}
                            className={"font-medium !text-white text-center"}
                        >
                            {t("best.title")}
                        </Typography>

                        <Typography
                            variant={"h6"}
                            className={"font-medium text-center !text-white mx-auto mt-4 lg:mt-10 !max-w-3xl"}
                        >
                            {t("best.joint")}
                        </Typography>

                        <div className={"flex justify-center items-center flex-col lg:flex-row mt-4 lg:mt-10"}>
                            <Typography
                                variant={"h6"}
                                className={"font-medium text-center !text-white"}
                            >
                                {t("best.desc1")}
                            </Typography>
                            <Typography
                                variant={"h3"}
                                className={"font-medium text-center !text-white mx-4"}
                            >
                                0.1
                            </Typography>
                            <Typography
                                variant={"h6"}
                                className={"font-medium text-center !text-white"}
                            >
                                {t("best.desc2")}
                            </Typography>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

export default Exclusive;