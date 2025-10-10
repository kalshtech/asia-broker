"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import CalendarTable from "@/components/common/CalendarTable";

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
        <section className={"bg-theme-deep-bg p-4 lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center !text-white"}
                >
                    {t("title")}
                </Typography>

                <Typography
                    variant={"lead"}
                    className={"text-center !text-white mt-6"}
                >
                    {t("description")}
                </Typography>
            </motion.div>

            <div className={"mt-10 flex justify-center"}>
                <Button className={"rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                    {t("explore")}
                </Button>
            </div>

            <div className={"grid grid-cols-12 gap-8 mt-10"}>
                <div className={"col-span-12 lg:col-span-3"}>
                    <div className={"h-full relative"}>
                        <img src="/images/home/calendar-assets.png" alt=""/>
                        <div className={"flex-1 h-full py-10 px-8 flex flex-col absolute bottom-0  left-0"}>
                            <Typography
                                variant={"h4"}
                                className={"!text-white mt-auto"}
                            >
                                {t("prospect.title")}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"!text-white mt-4"}
                            >
                                {t("prospect.description")}
                            </Typography>
                            <div className={"mt-16 "}>
                                <div className={"flex-1 flex"}>
                                    <Button className={"border rounded-full bg-transparent hover:bg-transparent"}>
                                        { t("buttons.past") }
                                    </Button>
                                </div>
                                <div className={"flex-1 flex mt-4"}>
                                    <Button className={"bg-white rounded-full hover:bg-white text-black"}>
                                        { t("buttons.download") }
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-span-12 lg:col-span-9"}>
                    <CalendarTable theme={"dark"} />
                </div>
            </div>
        </section>
    )
}

export default CalendarComponent;