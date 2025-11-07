"use client";
import React from "react";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";
import classnames from "classnames";

type Props = {
    languagePath: string;
    col1Bg: string;
    col1BgIsCover?: boolean;
    isShowMoreBtn?: boolean;
    col2Bg: string;
    col3Bg: string;
    col4Bg: string;
    theme?: "dark" | "light";
}

const DownloadAndRegister = (props: Props) => {
    const { languagePath, col1Bg, col1BgIsCover = true, isShowMoreBtn = true, col2Bg, col3Bg, col4Bg, theme = "dark" } = props;
    const isDark = theme === "dark";
    const t = useTranslations(languagePath);
    const downloadAry = [
        { image: "/images/home/download-ios.png" },
        { image: "/images/home/download-gooplay.png" },
        { image: "/images/home/download-android.png" },
        { image: "/images/home/download-macos.svg" },
        { image: "/images/home/download-windows.svg" },
        { image: "/images/home/download-desk.png" },
    ]

    return (
        <section className={"py-16 xl:p-30"}>
            <Container>
                <div className={"grid grid-cols-12 gap-4 lg:gap-8"}>
                    <div className={"col-span-12 lg:col-span-4"}>
                        <div className={"flex flex-col flex-1 h-full"}>
                            <div className={"flex-1 flex flex-col"}>
                                <Typography
                                    variant={"h3"}
                                    className={"text-center lg:text-left"}
                                >
                                    {t("title")}
                                </Typography>
                                <Typography className={"mt-10"}>
                                    {t("description")}
                                </Typography>
                                {
                                    isShowMoreBtn && <>
                                        <div className={"mt-10 hidden xl:flex"}>
                                            <GeneralLinkBtn
                                                text={t("open")}
                                                theme={"active-solid"}
                                                isLink
                                            />
                                            <GeneralLinkBtn
                                                text={t("download")}
                                                path={"/platform"}
                                                theme={"active-hollow"}
                                                className={"ml-4"}
                                            />
                                        </div>
                                        <div className={"mt-10 xl:hidden"}>
                                            <GeneralLinkBtn
                                                text={t("open")}
                                                theme={"active-solid"}
                                                className={"w-full"}
                                                isLink
                                            />
                                            <GeneralLinkBtn
                                                text={t("download")}
                                                path={"/platform"}
                                                theme={"dark-solid"}
                                                className={"mt-4 flex flex-col w-full"}
                                            >
                                                <div className={"bg-black flex mt-1"}>
                                                    {
                                                        downloadAry.map((d, i) => (
                                                            <img src={d.image} className={"w-4 h-4 object-cover ml-1"}
                                                                 key={i}
                                                                 alt=""/>
                                                        ))
                                                    }
                                                </div>
                                            </GeneralLinkBtn>
                                        </div>
                                    </>
                                }
                            </div>
                            <div className={"flex flex-1 bg-theme-deep-bg mt-4 lg:mt-20"}>
                                <div
                                    className={classnames(["flex flex-col flex-1 py-10 px-6 bg-center bg-cover min-h-80 lg:min-h-160", col1Bg, {
                                        "lg:bg-auto lg:bg-left-top": !col1BgIsCover
                                    }])}>
                                    <Typography
                                        variant={"h4"}
                                        className={classnames(["font-bold", {
                                            "!text-white": isDark,
                                            "!text-black": !isDark
                                        }])}
                                    >
                                        {t("row.1.title")}
                                    </Typography>
                                    <Typography
                                        variant={"muted"}
                                        className={classnames(["mt-4", {
                                            "!text-white": isDark,
                                            "!text-black": !isDark
                                        }])}
                                    >
                                        {t("row.1.description")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-4"}>
                        <div className={"flex bg-theme-deep-bg h-full"}>
                            <div
                                className={classnames(["flex flex-col flex-1 py-10 px-6 min-h-80 bg-center bg-cover", col2Bg])}>
                                <Typography
                                    variant={"h4"}
                                    className={classnames(["font-bold", {
                                        "!text-white": isDark,
                                        "!text-black": !isDark
                                    }])}
                                >
                                    {t("row.2.title")}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={classnames(["mt-4", {
                                        "!text-white": isDark,
                                        "!text-black": !isDark
                                    }])}
                                >
                                    {t("row.2.description")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-4"}>
                        <div className={"grid grid-cols-12 gap-4 h-full"}>
                            <div className={"col-span-12 h-full"}>
                                <div className={classnames(["flex-1 flex flex-col bg-theme-deep-bg min-h-80 bg-center bg-cover py-10 px-6 relative h-full", col3Bg])}>
                                    <div className={"flex flex-col z-10 h-full"}>
                                        <Typography
                                            variant={"h4"}
                                            className={classnames(["font-bold", {
                                                "!text-white": isDark,
                                                "!text-black": !isDark
                                            }])}
                                        >
                                            {t("row.3.title1")}
                                        </Typography>
                                        <Typography
                                            variant={"muted"}
                                            className={classnames(["mt-4", {
                                                "!text-white": isDark,
                                                "!text-black": !isDark
                                            }])}
                                        >
                                            {t("row.3.description1")}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-span-12"}>
                                <div className={"flex bg-theme-deep-bg h-full"}>
                                    <div className={classnames(["flex flex-col py-10 px-6 min-h-80 bg-center bg-cover relative flex-1 h-full", col4Bg])}>
                                        <div className={"flex flex-col"}>
                                            <Typography
                                                variant={"h4"}
                                                className={classnames(["font-bold ", {
                                                    "!text-white": isDark,
                                                    "!text-black": !isDark
                                                }])}
                                            >
                                                {t("row.3.title2")}
                                            </Typography>
                                            <Typography
                                                variant={"muted"}
                                                className={classnames(["mt-4", {
                                                    "!text-white": isDark,
                                                    "!text-black": !isDark
                                                }])}
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
