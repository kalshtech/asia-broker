"use client";
import React from "react";
import {motion, Variants} from "framer-motion";
import {Typography} from "@/components/ui/typography";
import {useTranslations} from "next-intl";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterBtn from "@/components/RegisterBtn";
import Container from "@/components/Container";

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
    const [ tabActive, setTabActive ] = React.useState("trader");
    return (
        <section className={"lg:p-30"}>
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
                        className={"text-center mt-6"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <div className={"flex flex-col items-center"}>
                        <Tabs defaultValue="trader"
                              onValueChange={(value) => setTabActive(value)}
                        >
                            <TabsList className={"h-10 rounded-full"}>
                                <TabsTrigger
                                    value="trader"
                                    className={"px-8 h-10 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer rounded-full"}
                                >
                                    {t("tabs.trader")}
                                </TabsTrigger>
                                <TabsTrigger
                                    value="partners"
                                    className={"px-8 h-10  data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer rounded-full"}
                                >
                                    {t("tabs.partners")}
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                        <div className={"mt-10 text-center"}>
                            <Typography variant={"h6"}>
                                {t(`${tabActive}.title`)}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"max-w-3xl mx-auto mt-6"}
                            >
                                {t(`${tabActive}.desc`)}
                            </Typography>
                        </div>
                        <div className={"mt-16"}>
                            <RegisterBtn text={t(`${tabActive}.btn`)}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Cooperator;