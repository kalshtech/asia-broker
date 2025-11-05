"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

const Trust = () => {
    const t = useTranslations("Pages.corporation.about.trust");
    return (
        <section className={"py-16 xl:py-30"}>
            <Container>
                <div className={"grid grid-cols-12"}>
                    <div className={"col-span-12 lg:col-span-10"}>
                        <Typography
                            variant={"h4"}
                            className={"font-medium"}
                        >
                            {t("title")}
                        </Typography>
                        <Typography
                            variant={"large"}
                            className={"font-medium max-w-5xl mt-4"}
                        >
                            {t("desc")}
                        </Typography>
                    </div>
                    <div className={"col-span-12 lg:col-span-2 mt-6 lg:mt-0"}>
                        <GeneralLinkBtn
                            text={t("start")}
                            theme={"active-solid"}
                            path={"https://portal.asiafuturetrading.com/login"}
                            isLink
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Trust;