"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Enhance = () => {
    const t = useTranslations("Pages.products.rates.enhance");
    return (
        <section className={"py-16 xl:py-30"}>
            <Container>
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
                </motion.div>

                <div className={"mt-4 lg:mt-16"}>
                    <div
                        className={"bg-[url(/images/products/rates-enhance.png)] bg-cover bg-center flex justify-center items-center p-4 h-100 lg:h-120"}>
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                        >
                            <Typography
                                variant={"h4"}
                                className={"font-medium text-center !text-[30px] !text-white"}
                            >
                                {t("box.title")}
                            </Typography>

                            <Typography
                                variant={"p"}
                                className={"text-center !text-white max-w-3xl mt-4 lg:mt-12"}
                            >
                                {t("box.desc")}
                            </Typography>

                            <div className={"flex justify-center mt-12"}>
                                <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                                    {t("box.more")}
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Enhance;