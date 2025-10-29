"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import RegisterBtn from "@/components/RegisterBtn";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

const DownloadAndRegister = () => {
    const t = useTranslations("Pages.home.downloadAndRegister");
    return (
        <section className={"xl:p-30"}>
            <Container>
                <div className={"grid grid-cols-12 gap-8"}>
                    <div className={"col-span-12 lg:col-span-4"}>
                        <div className={"flex flex-col flex-1 h-full"}>
                            <div className={"flex-1 flex flex-col"}>
                                <Typography variant={"h3"}>
                                    {t("title")}
                                </Typography>
                                <Typography className={"mt-10"}>
                                    {t("description")}
                                </Typography>
                                <div className={"mt-10 flex"}>
                                    <RegisterBtn text={t("open")}/>
                                    <GeneralLinkBtn
                                        text={t("download")}
                                        path={"/platform"}
                                        theme={"active-hollow"}
                                        className={"ml-4"}
                                    />
                                </div>
                            </div>
                            <div className={"flex flex-1 bg-theme-deep-bg mt-4 lg:mt-20"}>
                                <div className={"flex flex-col flex-1 py-10 px-6 bg-[url(/images/home/example-kline-desk.png)] bg-center bg-cover lg:bg-auto lg:bg-left-top min-h-80 lg:min-h-160"}>
                                    <Typography
                                        variant={"h5"}
                                        className={"!text-white font-medium"}
                                    >
                                        {t("row.1.title")}
                                    </Typography>
                                    <Typography
                                        variant={"muted"}
                                        className={"!text-white font-medium mt-4"}
                                    >
                                        {t("row.1.description")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-4"}>
                        <div className={"flex bg-theme-deep-bg h-full"}>
                            <div className={"flex flex-col flex-1 py-10 px-6 bg-[url(/images/home/example-kline.png)] min-h-80 bg-center bg-cover"}>
                                <Typography
                                    variant={"h5"}
                                    className={"!text-white font-medium"}
                                >
                                    {t("row.2.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-white font-medium mt-4"}
                                >
                                    {t("row.2.description")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-4"}>
                        <div className={"grid grid-cols-12 gap-4 h-full"}>
                            <div className={"col-span-12 h-full"}>
                                <div className={"flex-1 flex flex-col bg-theme-deep-bg bg-[url(/images/home/auto-MQL5.png)] min-h-80 bg-center bg-cover py-10 px-6 relative h-full"}>
                                    <div className={"flex flex-col z-10 h-full"}>
                                        <Typography
                                            variant={"h5"}
                                            className={"!text-white font-medium"}
                                        >
                                            {t("row.3.title1")}
                                        </Typography>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white font-medium mt-4"}
                                        >
                                            {t("row.3.description1")}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-span-12"}>
                                <div className={"flex bg-theme-deep-bg h-full"}>
                                    <div className={"flex flex-col py-10 px-6 bg-[url(/images/home/auto-EA.png)] min-h-80 bg-center bg-cover relative flex-1 h-full"}>
                                        <div className={"flex flex-col"}>
                                            <Typography
                                                variant={"h5"}
                                                className={"!text-white font-medium"}
                                            >
                                                {t("row.3.title2")}
                                            </Typography>
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white font-medium mt-4"}
                                            >
                                                {t("row.3.description2")}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default DownloadAndRegister;
