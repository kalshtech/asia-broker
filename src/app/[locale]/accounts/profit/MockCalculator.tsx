"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider"

const MockCalculator = () => {
    const t = useTranslations("Pages.accounts.profit.mockCalculator");
    return (
        <section className={"bg-[#262E48] p-4 lg:p-30 "}>
            <div className={"grid grid-cols-12 gap-4"}>
                <div className={"col-span-12 lg:col-span-6"}>
                    <div>
                        <Typography
                            variant={"h1"}
                            className={"!text-white font-medium"}
                        >
                            {t("row.col1.title1")}
                        </Typography>
                        <Typography
                            variant={"lead"}
                            className={"!text-white max-w-xl mt-4"}
                        >
                            {t("row.col1.desc1")}
                        </Typography>
                    </div>
                    <div className={"mt-20"}>
                        <Typography
                            variant={"h2"}
                            className={"!text-white font-medium"}
                        >
                            {t("row.col1.title2")}
                        </Typography>
                        <Typography
                            variant={"large"}
                            className={"!text-white font-medium max-w-xl mt-2"}
                        >
                            {t("row.col1.desc2")}
                        </Typography>
                    </div>
                </div>
                <div className={"col-span-12 lg:col-span-6"}>
                    <Typography
                        variant={"h4"}
                        className={"!text-white font-medium"}
                    >
                        {t("row.col2.title")}
                    </Typography>
                    <div className={"mt-4"}>
                        <div className="[&_span.bg-primary]:bg-theme-active">
                            <Slider defaultValue={[40]}/>
                        </div>
                        <div className={"flex mt-2"}>
                            <div className={"text-white"}>USD $500</div>
                            <div className={"text-white ml-auto"}>USD $500,000+</div>
                        </div>
                        <div className={"mt-4 lg:mt-16"}>
                            <Typography
                                variant={"h5"}
                                className={"!text-white font-medium"}
                            >
                                {t("row.col2.tips")}
                            </Typography>
                            <Typography
                                variant={"h2"}
                                className={"!text-white font-normal mt-4"}
                            >
                                USD XXXXX
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"!text-white font-normal mt-4"}
                            >
                                {t("row.col2.prompt")}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MockCalculator;