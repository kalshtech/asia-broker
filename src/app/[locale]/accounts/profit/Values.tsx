"use client";
import * as React from 'react'
import Container from "@/components/Container";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";

const Values = () => {
    const t = useTranslations("Pages.accounts.profit.values");
    return (
        <section>
            <Container>
                <div className={"grid grid-cols-12"}>
                    <div className={"mx-8 flex flex-col justify-center items-center col-span-12 lg:col-span-6"}>
                        <Typography variant={"h3"} className={"text-center"}>
                            {t("title")}
                        </Typography>
                        <Typography
                            variant={"h4"}
                            className={"font-normal max-w-xl mt-10 leading-[40px]"}
                        >
                            {t("desc")}
                        </Typography>
                    </div>
                    <div className={"col-span-12 mt-4 lg:mt-0 lg:col-span-6"}>
                        <img src="/images/accounts/profit-values-protrait.png" className={"h-full object-cover"}
                             alt=""/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Values;
