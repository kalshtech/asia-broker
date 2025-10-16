"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import RegisterBtn from "@/components/RegisterBtn";
import Container from "@/components/Container";

const DownloadAndRegister = () => {
    const t = useTranslations("Pages.home.downloadAndRegister");
    return (
        <section className={"p-4 lg:p-30"}>
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
                                    <Button
                                        className={"ml-4 border text-theme-active bg-transparent hover:bg-transparent border-theme-active"}>
                                        {t("download")}
                                    </Button>
                                </div>
                            </div>
                            <div className={"flex flex-1 bg-gradient-to-b from-[#000C35] to-[#1F3A93] mt-4 lg:mt-0"}>
                                <div className={"flex flex-col flex-1 py-10 px-6"}>
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
                                    <img
                                        src="/images/home/example-kline-desk.png"
                                        alt="example-kline"
                                        title={"example-kline"}
                                        className={"mx-auto mt-6"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-4"}>
                        <div className={"flex bg-gradient-to-b from-[#000C35] to-[#1F3A93]"}>
                            <div className={"flex flex-col flex-1 py-10 px-6"}>
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
                                <img
                                    src="/images/home/example-kline.png"
                                    alt="example-kline"
                                    title={"example-kline"}
                                    className={"mx-auto mt-6"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-4"}>
                        <div className={"grid grid-cols-12 gap-4 h-full"}>
                            <div className={"col-span-12 h-full"}>
                                <div
                                    className={"flex-1 flex flex-col bg-gradient-to-b from-[#000C35] to-[#1F3A93] py-10 px-6 relative h-full"}>
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
                                    <img
                                        src="/images/home/auto-MQL5.png"
                                        alt="example-kline"
                                        title={"example-kline"}
                                        className={"mx-auto mt-6 lg:absolute bottom-0 left-0 right-0 max-w-[373px]"}
                                    />
                                </div>
                            </div>
                            <div className={"col-span-12"}>
                                <div className={"flex bg-gradient-to-b from-[#000C35] to-[#1F3A93] h-full"}>
                                    <div className={"flex flex-col py-10 px-6 relative flex-1 h-full"}>
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
                                        <img
                                            src="/images/home/auto-EA.png"
                                            alt="example-kline"
                                            title={"example-kline"}
                                            className={"mx-auto mt-6 lg:absolute bottom-0 left-0 right-0 max-w-[306px]"}
                                        />
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
