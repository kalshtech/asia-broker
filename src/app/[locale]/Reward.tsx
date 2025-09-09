"use client";
import React from "react";
import {motion, Variants} from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { BadgePlus } from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Reward = () => {
    const t = useTranslations("Pages.home.reward");
    return (
        <section className={"bg-[url('/images/home/reward-background.png')] bg-cover bg-center bg-no-repeat px-4 py-12 lg:py-20 lg:px-30"}>
            <div className={"grid grid-cols-12 gap-4"}>
                <div className={"flex items-center col-span-12 lg:col-span-6"}>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                    >
                        <Typography
                            variant={"h1"}
                            className={"!text-white !tracking-wide !text-[36px] lg:!text-[68px]"}
                        >
                            {t("title1")}
                        </Typography>

                        <Typography
                            variant={"h1"}
                            className={"!text-white !tracking-wide mt-2 !text-[36px] lg:!text-[68px]"}
                        >
                            {t("title2")}
                        </Typography>

                    </motion.div>
                </div>
                <div className={"col-span-12 lg:col-span-6"}>
                    <div className={"flex"}>
                        <div className={"relative"}>
                            <img src="/images/home/reward-1.png" alt="reward"/>
                            <div className={"absolute left-0 top-0 h-full flex px-3 py-4 lg:px-6 lg:py-9"}>
                                <div>
                                    <Typography
                                        variant={"h1"}
                                        className={"!text-white font-medium !tracking-wide !text-[36px] lg:!text-[80px]"}
                                    >
                                        60
                                    </Typography>
                                    <div className={"flex items-center"}>
                                        <Typography
                                            variant={"h2"}
                                            className={"!text-gray-200 !tracking-wide line-through decoration-slate-400 decoration-2 !text-2xl lg:!text-[40px]"}
                                        >
                                            30
                                        </Typography>
                                        <img
                                            src="/images/home/arrow-white.png"
                                            alt="arrow"
                                            title="arrow"
                                            className={"ml-1 max-w-[16px] max-h-[16px] lg:max-w-[30px] lg:max-h-[30px]"}
                                        />
                                    </div>
                                </div>
                                <div className={"ml-4 flex flex-col"}>
                                    <Typography className={"text-white border p-2 rounded-lg"}>
                                        { t("best") }
                                    </Typography>
                                    <Typography className={"text-white mt-1 text-xl lg:text-2xl"}>
                                        { t("transfer") }
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={"relative ml-2"}>
                            <div className={"absolute bottom-1/4 -left-1/12 lg:-left-1/20"}>
                                <img
                                    src="/images/home/joint.png"
                                    alt="joint"
                                    className={"w-[30px] h-[30px]"}
                                />
                            </div>
                            <img src="/images/home/reward-2.png" alt="reward"/>
                            <div className={"absolute left-0 top-0 h-full flex px-3 py-4 lg:px-6 lg:py-9"}>
                                <div>
                                    <Typography
                                        variant={"h1"}
                                        className={"!text-black font-medium !tracking-wide !text-[36px] lg:!text-[80px]"}
                                    >
                                        60
                                    </Typography>
                                    <div className={"flex items-center"}>
                                        <Typography
                                            variant={"h2"}
                                            className={"!text-gray-800 !tracking-wide line-through decoration-slate-400 decoration-2 !text-2xl lg:!text-[40px]"}
                                        >
                                            30
                                        </Typography>
                                        <img
                                            src="/images/home/arrow-black.png"
                                            alt="arrow"
                                            title="arrow"
                                            className={"ml-1 max-w-[16px] max-h-[16px] lg:max-w-[30px] lg:max-h-[30px]"}
                                        />
                                    </div>
                                </div>
                                <div className={"ml-4 flex flex-col"}>
                                    <Typography className={"border border-black p-2 rounded-lg"}>
                                        { t("best") }
                                    </Typography>
                                    <Typography className={"mt-1 text-xl lg:text-2xl"}>
                                        { t("transfer") }
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-8 flex justify-center"}>
                        <Button
                            className="bg-[linear-gradient(180deg,_#1F3A93_0%,_#0075F8_100%)] w-full max-w-100 rounded-full"
                        >
                            { t("get") }
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reward;