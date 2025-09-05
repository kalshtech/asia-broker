import React from "react";
import { getTranslations } from "next-intl/server";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

type Props = {
    title: string;
    description: string;
    imageUrl: string;
    midst: string;
}

export default async function Banner({ title, description, midst, imageUrl }: Props) {
    const t = await getTranslations("Common");
    return (
        <section className={`${imageUrl} bg-cover bg-center py-20 px-30 min-h-120`}>
            <div>
                <Typography
                    variant={"h1"}
                    className={"!text-white !font-medium max-w-[560px] !leading-[56px]"}
                >
                    { title }
                </Typography>

                <Typography
                    variant={"h3"}
                    className={"!text-white !font-medium !mt-8"}
                >
                    { midst }
                </Typography>

                <Typography
                    variant={"muted"}
                    className={"!text-white !mt-8 max-w-[560px]"}
                >
                    { description }
                </Typography>
            </div>
            <div className={"mt-10"}>
                <Button className={"rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                    { t("trade") }
                </Button>
                <Button className={"ml-4 border border-white rounded-full bg-transparent hover:bg-transparent"}>
                    { t("register") }
                </Button>
            </div>
        </section>
    )
}