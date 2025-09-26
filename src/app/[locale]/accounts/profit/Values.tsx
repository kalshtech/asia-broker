"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";

const Values = () => {
    const t = useTranslations("Pages.accounts.profit.values");
    return (
        <section className={"py- lg:p-0"}>
            <div className={"grid grid-cols-12"}>
                <div className={"mx-8 flex flex-col justify-center items-center col-span-12 lg:col-span-6"}>
                    <Typography
                        variant={"h1"}
                        className={"font-medium text-center"}
                    >
                        { t("title") }
                    </Typography>
                    <Typography
                        variant={"lead"}
                        className={"text-center mt-4"}
                    >
                        { t("desc") }
                    </Typography>
                </div>
                <div className={"col-span-12 mt-4 lg:mt-0 lg:col-span-6"}>
                    <img src="/images/accounts/profit-values-protrait.png" className={"h-full object-cover"} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Values;
