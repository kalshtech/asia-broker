"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import RegisterBtn from "@/components/RegisterBtn";
import Container from "@/components/Container";
import TitleReveal from "@/components/TitleReveal";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

const Banner =  () => {
    const t = useTranslations("Pages.accounts.classic.banner");
    return (
        <section className={"bg-[url(/images/accounts/classic-banner-mobile.png)] xl:bg-[url(/images/accounts/classic-banner.png)] bg-center bg-cover py-8 lg:py-16 xl:py-24 h-108 lg:h-[632px]"}>
            <Container>
                <TitleReveal
                    title={t("title")}
                    className={"!text-white !bg-gradient-to-b !from-[#FFFFFF] !to-[#7E7E7E] !bg-clip-text !text-transparent"}
                />

                <Typography
                    variant={"h4"}
                    className={"font-medium !text-white mt-10"}
                >
                    {t("midst1")}
                </Typography>

                <Typography
                    variant={"h4"}
                    className={"font-medium !text-white mt-4 hidden lg:block"}
                >
                    {t("midst2")}
                </Typography>

                <Typography
                    variant={"muted"}
                    className={"font-medium !text-white mt-8 max-w-lg leading-[24px] hidden lg:block"}
                >
                    {t("desc")}
                </Typography>
                <div className={"mt-32 lg:mt-16 flex"}>
                    <RegisterBtn className={"bg-white text-black hover:bg-white"} />
                    <GeneralLinkBtn
                        text={t("support")}
                        path={"/corporation/contact"}
                        theme={"light-hollow"}
                        className={"ml-4"}
                    />
                </div>
            </Container>
        </section>
    )
}

export default Banner;