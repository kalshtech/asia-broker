"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import {Button} from "@/components/ui/button";

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
        <section className={"p-4 lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    {t("title")}
                </Typography>
            </motion.div>

            <div className={"mt-4 lg:mt-16"}>
                <div
                    className={"h-120 bg-[url(/images/products/rates-enhance.png)] bg-cover bg-center flex justify-center items-center"}>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                    >
                        <Typography
                            variant={"h2"}
                            className={"font-medium text-center !text-white"}
                        >
                            {t("box.title")}
                        </Typography>

                        <Typography
                            variant={"large"}
                            className={"font-normal text-center !text-white mt-12"}
                        >
                            {t("box.desc")}
                        </Typography>

                        <div className={"mt-12 flex justify-center"}>
                            <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                                { t("box.more") }
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Enhance;