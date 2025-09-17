"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button }  from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const JoinUS = () => {
    const t = useTranslations("Pages.corporation.about.join");
    return (
        <section>
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
                <Typography
                    variant={"muted"}
                    className={"font-medium text-center mt-4"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mt-16"}>
                <div className={"grid grid-cols-12"}>
                    <div className={"col-span-6"}>
                        <div className={"bg-theme-active p-30 h-full"}>
                            <Typography
                                variant={"h2"}
                                className={"font-medium !text-white"}
                            >
                                {t("col1.title")}
                            </Typography>

                            <Typography
                                variant={"lead"}
                                className={"font-medium !text-white mt-16"}
                            >
                                {t("col1.desc1")}
                            </Typography>
                            <Typography
                                variant={"lead"}
                                className={"font-medium !text-white mt-2"}
                            >
                                {t("col1.desc2")}
                            </Typography>
                            <div className={"mt-16"}>
                                <Button className={"bg-white text-black px-8 h-10 rounded-full  hover:bg-white"}>
                                    { t("col1.view") }
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-6"}>
                        <img src="/images/corporation/portrait.png" alt="" className={"object-cover"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinUS;