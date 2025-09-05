"use client";
import React from "react";
import {motion, Variants} from "framer-motion";
import {Typography} from "@/components/ui/typography";
import {useTranslations} from "next-intl";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterBtn from "@/components/RegisterBtn";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Cooperator = () => {
    const t = useTranslations("Pages.home.cooperator");
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
            <div className={"mt-16"}>
                <div className={"flex flex-col items-center"}>
                    <Tabs defaultValue="account">
                        <TabsList>
                            <TabsTrigger
                                value="account"
                                className={"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer rounded-full"}
                            >
                                { t("tabs.trader") }
                            </TabsTrigger>
                            <TabsTrigger
                                value="password"
                                className={"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer rounded-full"}
                            >
                                { t("tabs.partners") }
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div className={"mt-10 text-center"}>
                        <Typography variant={"h4"}>
                            { t("trader-title") }
                        </Typography>
                        <Typography
                            variant={"muted"}
                            className={"max-w-[380px] mt-6"}
                        >
                            { t("trader-desc") }
                        </Typography>
                    </div>
                    <div className={"mt-16"}>
                        <RegisterBtn/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cooperator;