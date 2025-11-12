"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

export default function Spend() {
    const t = useTranslations("Pages.accounts.banks.spend");
    return (
        <div className={"py-16 xl:py-30"}>
            <Container>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20"}>
                    <div className={""}>
                        <img src="/images/accounts/banks-spend1.webp" className={"object-cover"} alt=""/>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <Typography variant={"h3"}>
                            {t("row.col1.title")}
                        </Typography>
                        <Typography
                            variant={"h6"}
                            className={"mt-8 font-normal"}
                        >
                            {t("row.col1.desc")}
                        </Typography>
                        <Typography
                            variant={"muted"}
                            className={"mt-8"}
                        >
                            {t("row.col1.prompt")}
                        </Typography>
                    </div>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-20 lg:mt-40"}>
                    <div className={"flex flex-col justify-center"}>
                        <Typography variant={"h3"}>
                            {t("row.col2.title")}
                        </Typography>
                        <Typography
                            variant={"h6"}
                            className={"mt-8 font-normal"}
                        >
                            {t("row.col2.desc")}
                        </Typography>
                        <div className={"mt-8"}>
                            <div>
                                <span className={"font-semibold"}>{t("row.col2.fiat")}</span>
                                <span className={"ml-1"}>{t("row.col2.fiat-currency")}</span>
                            </div>
                            <div className={"mt-4"}>
                                <span className={"font-semibold"}>{t("row.col2.crypto")}</span>
                                <span className={"ml-1"}>{t("row.col2.crypto-text")}</span>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <img src="/images/accounts/banks-spend2.webp" className={"object-cover"} alt=""/>
                    </div>
                </div>
            </Container>
        </div>
    )
}