import React from "react";
import { getTranslations } from "next-intl/server";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import classnames from "classnames";

type Props = {
    title: string;
    description: string;
    imageUrl: string;
    midst: string;
    transfer?: boolean;
    colorTheme?: "light" | "dark";
}

export default async function Banner({ title, description, midst, imageUrl, transfer = false, colorTheme = "light" }: Props) {
    const t = await getTranslations("Common");
    const isLight = colorTheme === "light";
    return (
        <section className={`${imageUrl} bg-cover bg-center py-4 px-6 min-h-80 lg:min-h-120 lg:py-20 lg:px-30`}>
            <div>
                <Typography
                    variant={"h1"}
                    className={classnames(["!font-medium max-w-[560px] !leading-[56px]", {
                        "!text-white": isLight,
                        "!text-black": !isLight,
                    }])}
                >
                    { title }
                </Typography>

                <Typography
                    variant={"h3"}
                    className={classnames(["!font-medium !mt-8", {
                        "!text-white": isLight,
                        "!text-black": !isLight,
                    }])}
                >
                    { midst }
                </Typography>

                <Typography
                    variant={"muted"}
                    className={classnames(["!mt-8 max-w-[560px]", {
                        "!text-white": isLight,
                        "!text-black": !isLight,
                    }])}
                >
                    { description }
                </Typography>
            </div>
            <div className={"mt-10"}>
                {
                    !transfer && (
                        <>
                            <Button className={"rounded-full h-12 px-8 bg-theme-active hover:bg-theme-active-hover"}>
                                { t("startTrade") }
                            </Button>
                            <Button className={classnames(["ml-4 border h-12 px-8 rounded-full bg-transparent hover:bg-transparent", {
                                "border-white": isLight,
                                "border-theme-active": !isLight,
                                "text-theme-active": !isLight,
                            }])}>
                                { t("register") }
                            </Button>
                        </>
                    )
                }
                {
                    transfer && (
                        <Button className={"rounded-full h-12 px-8 bg-theme-active hover:bg-theme-active-hover"}>
                            { t("transfer") }
                        </Button>
                    )
                }
            </div>
        </section>
    )
}