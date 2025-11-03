"use client";
import * as React from 'react'
import Container from "@/components/Container";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";

const Brief = () => {
    const t = useTranslations("Pages.corporation.about.brief");
    return (
        <section className={"bg-[url(/images/corporation/about-brief-background.png)] bg-cover bg-center py-16 xl:py-30"}>
            <Container>
                <div className={"flex"}>
                    <Typography variant={"muted"}>
                        {t("text")}
                    </Typography>
                    <a href={"/files/AsiaFutureTrading.pdf"} target={"_blank"} className={"ml-4 underline flex"}>
                        <Typography
                            variant={"muted"}
                        >
                            {t("document")}
                        </Typography>
                        <img
                            src="/images/corporation/about-pdf-logo.png"
                            className={"w-[30px] h-[30px] ml-2"}
                            alt=""
                        />
                    </a>
                </div>
                <div className={"mt-10"}>
                    <img src="/images/corporation/about-brief-pdf.png" className={"max-h-50 object-cover"} alt=""/>
                </div>
            </Container>
        </section>
    )
}

export default Brief;