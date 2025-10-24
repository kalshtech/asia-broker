"use client";
import * as React from 'react'
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {useTranslations} from "next-intl";
import Container from "@/components/Container";
const Interpretation = () => {
    const t = useTranslations("Pages.ideas.marketsmap.interpretation");
    const ulAry = [
        { text: t("row.col1.ul.li1") },
        { text: t("row.col1.ul.li2") },
        { text: t("row.col1.ul.li3") },
    ];
    return (
        <section className={"m-4 lg:m-30"}>
            <Container>
                <div className={"grid grid-cols-12"}>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div className={"px-12 py-20 bg-theme-deep-bg h-full lg:rounded-l-lg"}>
                            <Typography variant={"h4"} className={"!text-white"}>
                                {t("row.col1.title")}
                            </Typography>
                            <Typography variant={"muted"} className={"!text-white mt-10"}>
                                {t("row.col1.desc")}
                            </Typography>
                            <Typography variant={"muted"} className={"!text-white mt-10"}>
                                {t("row.col1.ul-title")}
                            </Typography>
                            <ul className={"mt-8"}>
                                {
                                    ulAry.map((item, index) => (
                                        <li key={index} className={"flex items-center my-4"}>
                                        <span
                                            className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-white block rounded-full"}/>
                                            <Typography
                                                variant={"muted"}
                                                className={"font-medium !text-white ml-2"}
                                            >
                                                {item.text}
                                            </Typography>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Typography variant={"muted"} className={"!text-white mt-10"}>
                                {t("row.col1.prompt")}
                            </Typography>

                            <div className={"mt-16"}>
                                <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                                    {t("row.col1.enter")}
                                </Button>

                                <Typography variant={"muted"} className={"!text-white mt-4"}>
                                    {t("row.col1.enter-prompt")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <img src="/images/ideas/marketsmap-interpretation.png" className={"h-full object-cover"}
                             alt=""/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Interpretation;