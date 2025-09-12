"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Process = () => {
    const t = useTranslations("Pages.accounts.classic.process");
    const ary = [
        { title: t("step.1.title"), desc: t("step.1.desc"), bottom: t("step.1.bottom") },
        { title: t("step.2.title"), desc: t("step.2.desc"), bottom: t("step.2.bottom") },
        { title: t("step.3.title"), desc: t("step.3.desc"), bottom: t("step.3.bottom") },
        { title: t("step.4.title"), desc: t("step.4.desc"), bottom: t("step.4.bottom") },
    ];

    return (
        <section className={"p-30"}>
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
            <div className={"mt-16"}>
                <div className={"grid grid-cols-12 gap-4"}>
                    {
                        ary.map((item, index) => (
                            <div className={"col-span-3"}
                                 key={index}
                            >
                                <div className={"py-10 px-8 bg-theme-light-bg rounded-lg"}>
                                    <header>
                                        <div className={"border-[2px] w-[32px] h-[32px] border-black bg-white rounded-full flex justify-center items-center"}>
                                            { index + 1 }
                                        </div>
                                    </header>
                                    <div className={""}>
                                        <Typography variant={"h4"}
                                                    className={"my-6"}
                                        >
                                            { item.title }
                                        </Typography>
                                        <Typography>
                                            { item.desc }
                                        </Typography>
                                    </div>
                                    <div className={"mt-16 flex items-center cursor-pointer"}>
                                        <Typography>
                                            { item.bottom }
                                        </Typography>
                                        <ArrowRight className={"ml-2"} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Process;