"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import CalendarTable from "@/components/common/CalendarTable";
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

const CalendarComponent = () => {
    const t = useTranslations("Pages.home.calendar");

    return (
        <section className={"bg-theme-deep-bg py-16 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <div className={"hidden xl:block"}>
                        <Typography variant={"h3"} className={"text-center !text-white"}>
                            {t("title")}
                        </Typography>
                        <Typography className={"text-center max-w-7xl mx-auto !text-white mt-6"}>
                            {t("description")}
                        </Typography>
                    </div>

                    <div className={"xl:hidden"}>
                        <Typography variant={"h3"} className={"text-center !text-white"}>
                            {t("title1")}
                        </Typography>
                        <Typography className={"text-center max-w-7xl mx-auto !text-white mt-6"}>
                            {t("description1")}
                        </Typography>
                    </div>
                </motion.div>

                <div className={"mt-10 flex justify-center"}>
                    <GeneralLinkBtn
                        text={t("explore")}
                        path={"/ideas/professional"}
                        theme={"active-solid"}
                    />
                    <Button className={"ml-4 border bg-transparent hover:bg-transparent"}>
                        {t("subscribe")}
                    </Button>
                </div>

                <div className={"grid grid-cols-12 gap-8 mt-10"}>
                    <div className={"col-span-12 xl:col-span-3"}>
                        <div className={"h-full relative"}>
                            <div className={"flex-1 h-full w-full border py-10 px-8 flex flex-col bg-[url(/images/home/calendar-assets.png)] max-h-160 rounded-2xl bg-cover bg-center"}>
                                <Typography
                                    variant={"h5"}
                                    className={"!text-white xl:mt-64"}
                                >
                                    {t("prospect.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-white mt-4"}
                                >
                                    {t("prospect.description")}
                                </Typography>
                                <div className={"mt-8"}>
                                    <div className={"flex-1 flex flex-row"}>
                                        <GeneralLinkBtn
                                            text={t("explore")}
                                            path={"/ideas/professional"}
                                            theme={"light-hollow"}
                                        />
                                    </div>
                                    <div className={"flex-1 flex mt-4"}>
                                        <GeneralLinkBtn
                                            text={t("buttons.download")}
                                            path={"/files/Report.pdf"}
                                            isFile
                                        />
                                    </div>
                                    <div>
                                        <Typography variant={"muted"} className={"mt-4 !text-[#979797] roboto"}>
                                            {t("prospect.prompt")}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 xl:col-span-9"}>
                        <CalendarTable isShowForm theme={"dark"}/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CalendarComponent;