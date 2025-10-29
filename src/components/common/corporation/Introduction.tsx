"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button }  from "@/components/ui/button";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


const Introduction = () => {
    const t = useTranslations("Pages.corporation.about.join");
    return (
        <div className={"grid grid-cols-12"}>
            <div className={"col-span-12 lg:col-span-6"}>
                <div className={"bg-theme-active p-4 xl:p-30 h-full"}>
                    <Typography variant={"h3"} className={"!text-white"}>
                        {t("col1.title")}
                    </Typography>

                    <Typography className={"font-medium !text-white mt-8 lg:mt-16"}>
                        {t("col1.desc1")}
                    </Typography>
                    <Typography className={"font-medium !text-white mt-2"}>
                        {t("col1.desc2")}
                    </Typography>
                    <div className={"mt-8 lg:mt-16"}>
                        <GeneralLinkBtn
                            text={t("col1.view")}
                            path={"/corporation/careers"}
                            theme={"light-solid"}
                        />
                    </div>
                </div>
            </div>
            <div className={"col-span-12 lg:col-span-6"}>
                <img src="/images/corporation/portrait.png" alt="" className={"w-full h-full object-cover"}/>
            </div>
        </div>
    )
}

export default Introduction