"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import classnames from "classnames";
import Container from "@/components/Container";
import TitleReveal from "@/components/TitleReveal";

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
        <section className={`${imageUrl} bg-cover bg-center min-h-80 lg:min-h-100 xl:min-h-120 xl:py-20`}>
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
                                <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                                    {t("startTrade")}
                                </Button>
                                <Button
                                    className={classnames(["ml-4 border bg-transparent hover:bg-transparent", {
                                        "border-white": isLight,
                                        "border-theme-active": !isLight,
                                        "text-theme-active": !isLight,
                                    }])}>
                                    {t("register")}
                                </Button>
                            </>
                        )
                    }
                    {
                        transfer && (
                            <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                                {t("transfer")}
                            </Button>
                        )
                    }
                </div>
            </Container>
        </section>
    )
}