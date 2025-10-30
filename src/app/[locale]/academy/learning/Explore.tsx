"use client";
import * as React from 'react'
import Container from "@/components/Container";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

const Explore = () => {
    const t = useTranslations("Pages.academy.learning.explore");
    return (
        <section className={"my-4 xl:my-30"}>
            <Container>
                <div className={"grid grid-cols-12"}>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div className={"bg-theme-deep-bg h-full py-8 px-8 lg:py-20 lg:px-12 lg:rounded-l-lg"}>
                            <Typography
                                variant={"h4"}
                                className={"!text-white"}
                            >
                                {t("row.col1.title")}
                            </Typography>

                            <Typography
                                variant={"muted"}
                                className={"!text-white mt-10"}
                            >
                                {t("row.col1.desc")}
                            </Typography>

                            <div className={"mt-8 xl:mt-16"}>
                                <GeneralLinkBtn
                                    text={t("row.col1.btnText")}
                                    path={"/ideas/professional"}
                                    theme={"active-solid"}
                                />

                                <Typography
                                    variant={"muted"}
                                    className={"!text-white mt-4"}
                                >
                                    {t("row.col1.prompt")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <img src="/images/academy/learning-explore.png" alt="explore" className={"h-full object-cover"}/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Explore;