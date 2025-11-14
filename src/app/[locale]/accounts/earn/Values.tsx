"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import Container from "@/components/Container"
import { Typography } from "@/components/ui/typography";

const Values = () => {
    const t = useTranslations("Pages.accounts.earn.values");
    return (
        <section className={"py-16 lg:py-0"}>
            <Container>
                <div className={"grid grid-cols-12 gap-4 xl:gap-8"}>
                    <div className={"flex flex-col justify-center col-span-12 lg:col-span-6"}>
                        <Typography variant={"h3"}>
                            {t("title")}
                        </Typography>
                        <Typography
                            variant={"h4"}
                            className={"font-normal leading-[40px] mt-4 xl:mt-10"}
                        >
                            {t("desc")}
                        </Typography>
                    </div>
                    <div className={"col-span-12 mt-4 lg:mt-0 lg:col-span-6 flex items-center justify-center"}>
                        <img src="/images/accounts/profit-values-protrait.png"
                             className={"w-full h-[calc(100%-80px)] object-cover"}
                             alt=""/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Values;
