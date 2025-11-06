"use client";
import React from "react";
import Container from "@/components/Container";
import { Typography } from "@/components/ui/typography";
import {useTranslations} from "next-intl";
export default function () {
    const t = useTranslations("Pages.jpHome.rates");

    const ary = [
        { title: t("row.col1.title"), desc: t("row.col1.desc") },
        { title: t("row.col2.title"), desc: t("row.col2.desc") },
        { title: t("row.col3.title"), desc: t("row.col3.desc") },
    ];

    return (
        <div className={"py-16 bg-theme-light-bg"}>
            <Container>
                <div className={"grid grid-cols-12 gap-8"}>
                    <div className={"col-span-12 xl:col-span-6"}>
                        <img src="/images/jp/home-rates.webp" className={"max-h-130 object-cover"} alt=""/>
                    </div>
                    <div className={"col-span-12 xl:col-span-6"}>
                        <div>
                            <Typography
                                variant={"h3"}
                            >
                                { t("title") }
                            </Typography>
                        </div>
                        <div className={"mt-12"}>
                            {
                                ary.map((d, i) => (
                                    <div className={"my-6"} key={i}>
                                        <div className={"flex items-center"}>
                                            <span className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-theme-active block rounded-full"}/>
                                            <Typography
                                                variant={"h6"}
                                                className={"font-semibold ml-2"}
                                            >
                                                {d.title}
                                            </Typography>
                                        </div>

                                        <div  className={"mt-2"}>
                                            <Typography
                                                variant={"muted"}
                                            >
                                                {d.desc}
                                            </Typography>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={"mt-16"}>
                            <Typography
                                variant={"muted"}
                                className={"!text-[#999999] text-xs"}
                            >
                                { t("desc") }
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}