"use client";
import * as React from 'react';
import { useTranslations } from "next-intl";
import Container from "@/components/Container"
import { Typography } from "@/components/ui/typography";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn"

export default function () {
    const t = useTranslations("Pages.jpHome.banner");

    const btnAry = [
        { label: t("btns.1"), value: "us-stock" },
        { label: t("btns.2"), value: "forex" },
        { label: t("btns.3"), value: "otc" },
        { label: t("btns.4"), value: "jp-otc" },
        { label: t("btns.5"), value: "us-future-otc" },
        { label: t("btns.6"), value: "etf & fund" },
    ]
    return (
        <div>
            <div className={"max-w-3xl my-4 mx-auto grid grid-cols-3 px-4 lg:px-0 lg:grid-cols-6 gap-4 lg:gap-8"}>
                {
                    btnAry.map((item, i) => (
                        <GeneralLinkBtn
                            key={i}
                            text={item.label}
                            theme={"transparent"}
                            className={"!h-8"}
                        />
                    ))
                }
            </div>

            <div className={"bg-[url(/images/jp/home-banner.webp)] bg-cover bg-center py-8 lg:py-24"}>
                <Container>
                    <div className={"grid grid-cols-12 gap-8"}>
                        <div className={"col-span-12 xl:col-span-6"}>
                            <Typography
                                variant={"h1"}
                                className={"!text-white text-center lg:text-left"}
                            >
                                {t("title")}
                            </Typography>
                            <Typography
                                variant={"h1"}
                                className={"!text-white mt-6 text-center lg:text-left text-xl lg:text-6xl"}
                            >
                                {t("midst")}
                            </Typography>

                            <div className={"mt-4 lg:mt-16 hidden lg:block"}>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-white"}
                                >
                                    {t("desc")}
                                </Typography>
                                <GeneralLinkBtn
                                    text={t("btnText")}
                                    theme={"active-solid"}
                                    isLink
                                    className={"mt-4"}
                                />
                                <Typography
                                    variant={"muted"}
                                    className={"mt-4 lg:mt-10 !text-white"}
                                >
                                    {t("prompt")}
                                </Typography>
                            </div>
                        </div>
                        <div className={"col-span-12 xl:col-span-6 relative"}>
                            <img src="/images/jp/home-banner-mobile-phone.webp"
                                 className={"relative xl:absolute max-h-160"} alt="mobile-phone"/>
                        </div>
                    </div>
                    <div className={"mt-4 lg:hidden mx-auto flex flex-col justify-center"}>
                        <Typography
                            variant={"muted"}
                            className={"!text-white"}
                        >
                            {t("desc")}
                        </Typography>
                        <GeneralLinkBtn
                            text={t("btnText")}
                            theme={"active-solid"}
                            isLink
                            className={"mt-4 mx-auto"}
                        />
                    </div>
                </Container>
            </div>
            <div className={"px-4 lg:hidden"}>
                <Typography
                    variant={"muted"}
                    className={"mt-4 lg:mt-10 !text-xs"}
                >
                    {t("prompt")}
                </Typography>
            </div>
        </div>
    );
}