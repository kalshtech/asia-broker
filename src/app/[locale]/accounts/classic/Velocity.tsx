"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Velocity = () => {
    const t = useTranslations("Pages.accounts.classic.velocity");
    return (
        <section>
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
            </motion.div>
            <div className="mx-auto max-w-7xl px-4 py-4 lg:py-10 lg:mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <article className="relative overflow-hidden h-80 lg:-mr-12">
                        <img
                            src="/images/accounts/velocity1.png"
                            alt="datacenter"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/0"></div>
                        <div className="relative p-8 md:p-12 lg:p-14 text-white">
                            <Typography variant={"h4"} className={"!text-white"}>
                                {t("card1.title")}
                            </Typography>
                            <Typography variant={"muted"} className={"!text-white mt-2"}>
                                {t("card1.desc")}
                            </Typography>
                            <Typography variant={"small"} className={"!text-white block mt-16"}>
                                {t("card1.prompt")}
                            </Typography>
                        </div>
                    </article>

                    <article className="relative overflow-hidden h-80 mt-4 lg:mt-24 lg:-ml-12">
                        <img
                            src="/images/accounts/velocity2.png"
                            alt="speed"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/50 to-black/70"></div>
                        <div className="relative p-8 md:p-12 lg:p-14 text-white">
                            <Typography variant={"h4"} className={"!text-white"}>
                                {t("card1.title")}
                            </Typography>
                            <Typography variant={"muted"} className={"!text-white mt-2"}>
                                {t("card1.desc")}
                            </Typography>
                            <Typography variant={"small"} className={"!text-white block mt-16"}>
                                {t("card1.prompt")}
                            </Typography>
                        </div>
                    </article>
                </div>
            </div>

        </section>
    )
}

export default Velocity;