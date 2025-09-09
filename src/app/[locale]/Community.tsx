"use client";
import React from "react";
import { useTranslations } from "next-intl";
import {Typography} from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Community = () => {
    const t = useTranslations("Pages.home.community");
    return (
        <section className={"p-4 lg:p-30 bg-theme-light-bg"}>
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
                    variant={"lead"}
                    className={"text-center mt-6"}
                >
                    {t("description")}
                </Typography>
            </motion.div>
            <div className={"grid grid-cols-12 gap-6 mt-16"}>
                <div className={"col-span-12 lg:col-span-3"}>
                    <div className={"bg-[url('/images/home/communitybg1.png')] bg-cover bg-center bg-no-repeat p-6"}>
                        <div className={"flex h-full flex-1 flex-col"}>
                            <Typography className={"text-white"}>
                                { t("row.1.desc1") }
                            </Typography>
                            <div className={"flex flex-col pb-20 pt-20 lg:pt-[280px]"}>
                                <div className={"flex flex-col"}>
                                    <Typography className={"text-white"}>
                                        { t("row.1.desc2") }
                                    </Typography>
                                    <Typography className={"text-white mt-4"}>
                                        { t("row.1.desc3") }
                                    </Typography>
                                </div>

                                <Separator className={"my-8"}/>

                                <div className={"flex flex-col"}>
                                    <Typography className={"text-white"}>
                                        { t("row.1.desc4") }
                                    </Typography>
                                    <Typography className={"text-white mt-4"}>
                                        { t("row.1.desc5") }
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-span-12 lg:col-span-6"}>
                    <div className={"bg-[url('/images/home/communitybg2.png')] bg-cover bg-center bg-no-repeat p-6 h-full"}>
                        <div className={"flex flex-1 h-full flex-col"}>
                            <div className={"flex-col flex h-full justify-center items-center"}>
                                <Typography
                                    variant={"h3"}
                                    className={"!text-white"}
                                >
                                    { t("row.2.title") }
                                </Typography>
                                <Typography variant={"muted"}
                                            className={"!text-white text-center max-w-[320px] mt-5"}
                                >
                                    { t("row.2.description") }
                                </Typography>
                                <div className={"mt-8"}>
                                    <Button className={"rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                                        { t("row.2.btnText") }
                                    </Button>
                                </div>
                            </div>
                            <div className={"mt-auto flex justify-center"}>
                                <Typography variant={"muted"}
                                            className={"!text-white text-center text-xs max-w-[320px] mt-5"}
                                >
                                    { t("row.2.prompt") }
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-span-12 lg:col-span-3"}>
                    <div className={"bg-[url('/images/home/communitybg3.png')] h-full bg-cover bg-center bg-no-repeat p-6"}>
                        <div className={"flex h-full flex-1 flex-col"}>
                            <Typography className={"text-white"}>
                                {t("row.3.desc1")}
                            </Typography>
                            <div className={"flex flex-col pb-20 pt-20 lg:pt-[280px]"}>
                                <div className={"flex flex-col"}>
                                    <div className={"flex"}>
                                        <Typography className={"text-white"}>
                                            {t("row.3.desc2")}
                                        </Typography>
                                        <img src="/images/home/award.svg" className={"w-6 h-6"} alt="award" title={"award"}/>
                                    </div>
                                    <Typography className={"text-white mt-4"}>
                                        {t("row.3.desc3")}
                                    </Typography>
                                </div>

                                <Separator className={"my-8"}/>

                                <div className={"flex flex-col"}>
                                    <div className={"flex"}>
                                        <Typography className={"text-white"}>
                                            {t("row.3.desc4")}
                                        </Typography>
                                        <img
                                            src="/images/home/benefit.svg"
                                            className={"w-6 h-6"}
                                            alt="award"
                                            title={"award"}
                                        />
                                    </div>
                                    <Typography className={"text-white mt-4"}>
                                    {t("row.3.desc5")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community;