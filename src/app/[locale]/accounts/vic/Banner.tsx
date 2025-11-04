"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import TitleReveal from "@/components/TitleReveal";

const Banner = () => {
    const t = useTranslations("Pages.accounts.vic.banner");

    return (
        <section className={"bg-[url(/images/accounts/vic-banner-mobile.png)] xl:bg-[url(/images/accounts/vic-banner.png)] bg-center bg-cover h-148 xl:h-[632px] py-4 xl:py-30"}>
            <Container>
                <TitleReveal
                    title={t("title")}
                    className={"!text-white !bg-gradient-to-b !from-[#F0F7FF] !to-[#587DAC] !bg-clip-text !text-transparent"}
                />
                <Typography
                    variant={"h5"}
                    className={"font-medium !text-white mt-10"}
                >
                    {t("midst1")}
                </Typography>
                <Typography
                    variant={"h5"}
                    className={"font-medium !text-white mt-2"}
                >
                    {t("midst2")}
                </Typography>
                <div className={"flex items-end mt-4 lg:mt-8"}>
                    <Typography
                        variant={"muted"}
                        className={"!text-white pb-2"}
                    >
                        {t("desc1")}
                    </Typography>
                    <Typography
                        variant={"h3"}
                        className={"!text-white ml-4"}
                    >
                        USD 50,000
                    </Typography>
                </div>
                <Typography
                    variant={"muted"}
                    className={"!text-white mt-6"}
                >
                    {t("prompt")}
                </Typography>
                <div className={"mt-4 lg:mt-16"}>
                    <Button className={"bg-white text-black hover:bg-white"}>
                        {t("register")}
                    </Button>
                    <Button className={"border border-white bg-transparent text-white ml-4 hover:bg-transparent"}>
                        {t("transfer")}
                    </Button>
                </div>
            </Container>
        </section>
    )
}

export default Banner;