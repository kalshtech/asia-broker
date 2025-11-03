"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import TitleReveal from "@/components/TitleReveal";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

const Banner =  () => {
    const t = useTranslations("Pages.accounts.platinum.banner");

    const ulAry = [
        { text: t("ul.li1") },
        { text: t("ul.li2") },
        { text: t("ul.li3") },
    ];

    return (
        <section className={"bg-[url(/images/accounts/platinum-banner.png)] bg-center bg-cover py-8 lg:py-16 xl:py-24 h-[632px]"}>
            <Container>
                <TitleReveal
                    title={t("title")}
                    className={"!text-white !bg-gradient-to-b !from-[#FFF9F4] !to-[#D0B89F] !bg-clip-text !text-transparent"}
                />

                <Typography
                    variant={"lead"}
                    className={"font-medium !text-white mt-4"}
                >
                    {t("midst")}
                </Typography>

                <Typography
                    variant={"p"}
                    className={"font-medium !text-white mt-10 !max-w-xl"}
                >
                    {t("desc")}
                </Typography>

                <ul className={"mt-6"}>
                    {
                        ulAry.map((item, i) => (
                            <li key={i} className={"flex my-4 items-center"}>
                                <span className={"block w-[5px] h-[5px] bg-white rounded-full"}></span>
                                <Typography
                                    variant={"p"}
                                    className={"!text-white ml-2"}
                                >
                                    {item.text}
                                </Typography>
                            </li>
                        ))
                    }
                </ul>
                <div className={"mt-8 xl:mt-16"}>
                    <Button className={"bg-white hover:!bg-white text-black"}>
                        {t("register")}
                    </Button>
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