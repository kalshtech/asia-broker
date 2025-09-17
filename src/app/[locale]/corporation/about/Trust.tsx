"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const Trust = () => {
    const t = useTranslations("Pages.corporation.about.trust");
    return (
        <section className={"p-30"}>
            <div className={"flex items-center"}>
                <div>
                    <Typography
                        variant={"h3"}
                        className={"font-medium"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"large"}
                        className={"font-medium mt-2"}
                    >
                        {t("desc")}
                    </Typography>
                </div>
                <div className={"ml-auto"}>
                    <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                        {t("start")}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Trust;