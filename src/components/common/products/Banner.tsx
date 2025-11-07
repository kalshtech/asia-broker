"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import classnames from "classnames";
import Container from "@/components/Container";
import TitleReveal from "@/components/TitleReveal";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

type Props = {
    title: string;
    description: string;
    imageUrl: string;
    midst: string;
    transfer?: boolean;
    colorTheme?: "light" | "dark";
}

export default function Banner({ title, description, midst, imageUrl, transfer = false, colorTheme = "light" }: Props) {
    const t =  useTranslations("Common");
    const isLight = colorTheme === "light";
    return (
        <section className={`${imageUrl} bg-cover bg-center min-h-100 lg:min-h-100 xl:min-h-120 py-16 xl:py-20`}>
            <Container>
                <div>
                    <TitleReveal
                        title={title}
                        className={classnames([{
                            "!text-white": isLight,
                            "!text-black": !isLight,
                        }])}
                    />

                    <Typography
                        variant={"h4"}
                        className={classnames(["!font-medium !mt-8 max-w-xl", {
                            "!text-white": isLight,
                            "!text-black": !isLight,
                        }])}
                    >
                        {midst}
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={classnames(["!mt-8 max-w-xl", {
                            "!text-white": isLight,
                            "!text-black": !isLight,
                        }])}
                    >
                        {description}
                    </Typography>
                </div>
                <div className={"mt-10"}>
                    {
                        !transfer && (
                            <>
                                <GeneralLinkBtn
                                    text={t("startTrade")}
                                    theme={"active-solid"}
                                    tradeType={"login"}
                                    isLink
                                />
                                <GeneralLinkBtn
                                    text={t("register")}
                                    theme={"light-hollow"}
                                    isLink
                                    className={"ml-4"}
                                />
                            </>
                        )
                    }
                    {
                        transfer && (
                            <div>
                                <GeneralLinkBtn
                                    text={t("transfer")}
                                    theme={"active-solid"}
                                    tradeType={"login"}
                                    isLink
                                />
                            </div>

                        )
                    }
                </div>
            </Container>
        </section>
    )
}