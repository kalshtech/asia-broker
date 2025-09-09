"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator"

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


const Speed = () => {
    const t = useTranslations("Pages.home.speed");
    return (
        <section className={"bg-theme-light-bg p-4 lg:p-30"}>
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
                    {t("title1")}
                </Typography>
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    {t("title2")}
                </Typography>

                <Typography
                    variant={"muted"}
                    className={"text-center mt-6 mx-auto max-w-[738px]"}
                >
                    {t("description")}
                </Typography>
            </motion.div>
            <div className={"mt-16 mb-8"}>
                <img
                    src={"/images/home/servers.png"}
                    className={"w-full h-16 object-cover"}
                    alt={"servers"}
                    title={"servers"}
                />
            </div>

            <div className={"relative"}>
                <div className={"bg-[url(/images/home/speed-server-bg.png)] bg-center bg-cover bg-no-repeat min-h-[369px]"}>
                    <div className={"grid grid-cols-12 gap-2 px-10 py-12 w-full"}>
                        <div className="text-white relative col-span-12 lg:col-span-4">
                            <Typography variant={"h6"} className={"!text-white !font-medium"}>
                                {t("row.1.title")}
                            </Typography>
                            <Typography variant={"muted"} className={"!text-white mt-5"}>
                                {t("row.1.description")}
                            </Typography>
                            <div className={"absolute w-[1px] bg-theme-active h-full right-1/6 top-0 hidden lg:block "}></div>
                        </div>
                        <div className="text-white relative col-span-12 lg:col-span-4">
                            <Typography variant={"h6"} className={"!text-white !font-medium"}>
                                {t("row.2.title")}
                            </Typography>
                            <Typography variant={"muted"} className={"!text-white mt-5"}>
                                {t("row.2.description")}
                            </Typography>
                            <div className={"absolute w-[1px] bg-theme-active h-full right-1/6 top-0 hidden lg:block"}></div>
                        </div>
                        <div className="text-white relative col-span-12 lg:col-span-4">
                            <Typography variant={"h6"} className={"!text-white !font-medium"}>
                                {t("row.3.title")}
                            </Typography>
                            <Typography variant={"muted"} className={"!text-white mt-5"}>
                                {t("row.3.description")}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Speed;