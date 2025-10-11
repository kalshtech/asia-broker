"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const Trust = () => {
    const t = useTranslations("Pages.corporation.about.trust");
    return (
        <section className={"p-4 lg:p-30"}>
            <div className={"grid grid-cols-12 max-w-[1400px] mx-auto"}>
                <div className={"col-span-12 lg:col-span-10"}>
                    <Typography
                        variant={"h4"}
                        className={"font-medium"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"large"}
                        className={"font-medium max-w-3xl mt-4"}
                    >
                        {t("desc")}
                    </Typography>
                </div>
                <div className={"col-span-12 lg:col-span-2 mt-6 lg:mt-0"}>
                    <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                        {t("start")}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Trust;