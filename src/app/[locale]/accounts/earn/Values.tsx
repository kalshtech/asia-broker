"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";

const Values = () => {
    const t = useTranslations("Pages.accounts.earn.values");
    return (
        <section className={"py-16 lg:py-0"}>
            <div className={"grid grid-cols-12"}>
                <div className={"mx-8 flex flex-col justify-center items-center col-span-12 lg:col-span-6"}>
                    <Typography variant={"h3"} className={"text-center"}>
                        {t("title")}1111
                    </Typography>
                    <Typography
                        variant={"h4"}
                        className={"font-normal mt-10 max-w-4xl leading-[40px]"}
                    >
                        {t("desc")}
                    </Typography>
                </div>
                <div className={"col-span-12 mt-4 lg:mt-0 lg:col-span-6 flex items-center justify-center"}>
                    <img src="/images/accounts/profit-values-protrait.png"
                         className={"w-[calc(100%-120px)] h-[calc(100%-80px)] mx-auto object-cover"}
                         alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Values;
