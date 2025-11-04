"use client";
import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import classnames from "classnames";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CircleAlert } from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Assets = () => {
    const t = useTranslations("Pages.home.assets");
    const [tabActive, setTabActive] = useState("card");

    const BtnAry = [
        { label: t("button.card"), value: "card", img: "/images/home/assets-1.webp" },
        { label: t("button.type"), value: "type", img: "/images/home/assets-3.webp" },
        { label: t("button.safe"), value: "safe", img: "/images/home/assets-2.webp" },
    ];


    const renderImageSrc = () => {
        switch (tabActive) {
            case "type":
                return "/images/home/assets-1.webp";
            case "safe":
                return "/images/home/assets-2.webp";
            case "card":
                return "/images/home/assets-3.webp";
        }
    }

    const handleBtnToggle = (value: string) => {
        setTabActive(value);
    }

    const RenderCardItem = ({ theme = "dark" }) => {
        return (
            <div className={"flex flex-col h-full"}>
                <Typography
                    variant={"h4"}
                    className={theme === "dark" ? "!text-white font-medium" : "font-medium"}
                >
                    {t("text.card.title")}
                </Typography>
                <Typography
                    variant={"muted"}
                    className={theme === "dark" ? "!text-white roboto mt-2" : "roboto mt-2"}
                >
                    {t("text.card.description")}
                </Typography>


                <ul className={"mt-3 lg:mt-6"}>
                    <li>
                        <header className={"flex items-center"}>
                            <div className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                            <Typography
                                variant={"h6"}
                                className={theme === "dark" ? "!text-white font-medium" : "font-medium"}
                            >
                                {t("text.card.ul-title1")}
                            </Typography>
                        </header>
                        <Typography
                            variant={"muted"}
                            className={classnames(["ml-3 mt-1 roboto lg:mt-3", {
                                "!text-white": theme === "dark"
                            }])}
                        >
                            {t("text.card.ul-desc1")}
                        </Typography>
                    </li>

                    <li className={"mt-3 lg:mt-6"}>
                        <header className={"flex items-center"}>
                            <div
                                className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                            <Typography
                                variant={"h6"}
                                className={theme === "dark" ? "!text-white font-medium" : "font-medium"}
                            >
                                {t("text.card.ul-title2")}
                            </Typography>
                        </header>
                        <Typography
                            variant={"muted"}
                            className={classnames(["ml-3 mt-1 roboto lg:mt-3", {
                                "!text-white": theme === "dark"
                            }])}
                        >
                            {t("text.card.ul-desc2")}
                        </Typography>
                    </li>

                    <li className={"mt-3 lg:mt-6"}>
                        <header className={"flex items-center"}>
                            <div className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                            <Typography
                                variant={"h6"}
                                className={theme === "dark" ? "!text-white font-medium" : "font-medium"}
                            >
                                {t("text.card.ul-title3")}
                            </Typography>
                        </header>
                        <Typography
                            variant={"muted"}
                            className={classnames(["ml-3 mt-1 roboto lg:mt-3", {
                                "!text-white": theme === "dark"
                            }])}
                        >
                            {t("text.card.ul-desc3")}
                        </Typography>
                    </li>
                </ul>

                <div className={theme === "dark" ? "mt-10" : "mt-10 flex justify-center"}>
                    <GeneralLinkBtn
                        text={t("text.card.more")}
                        path={"/"}
                        theme={theme === "dark" ? "light-solid" : "active-solid"}
                        className={"ml-4 lg:ml-0 lg:mt-4"}
                    />
                </div>
            </div>
        )
    }

    return (
        <section className={"bg-[linear-gradient(180deg,#000000_0%,#FBE6C2_50%,#D0C1B3_100%)] xl:bg-none xl:bg-[#000516] py-16 xl:p-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography variant={"h3"} className={"hidden xl:block text-center !text-white"}>
                        {t("title")}
                    </Typography>
                    <Typography variant={"h3"} className={"xl:hidden text-center !text-white"}>
                        {t("title1")}
                    </Typography>
                </motion.div>
                <div className={"mt-10 xl:mt-20 xl:px-50"}>
                    <div className={"grid grid-cols-12 gap-4"}>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <div className={"hidden xl:flex flex-col items-center justify-center"}>
                                <img src={renderImageSrc()} className={"max-w-[320px] mx-auto xl:mx-0"} alt=""/>
                                <div className={"mt-6 grid grid-cols-2 lg:space-y-4 xl:space-y-6"}>
                                    {
                                        BtnAry.map((item, index) => (
                                            <Button
                                                key={index}
                                                className={classnames([
                                                    "bg-transparent border border-white mr-2 lg:mr-4 last:mr-0 last:mt-4 lg:last:mt-0",
                                                    {
                                                        "bg-white hover:!bg-white text-black": tabActive === item.value
                                                    }
                                                ])}
                                                onClick={() => handleBtnToggle(item.value)}
                                            >
                                                {item.label}
                                            </Button>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={"block xl:hidden"}>
                                <img src="/images/home/mobile-fast-deposits.png" className={"w-full h-full object-cover"} alt=""/>
                                <Typography variant={"muted"} className={"!text-white text-center mt-8"}>
                                    { t("desc") }
                                </Typography>
                                <Dialog>
                                    <DialogTrigger className={"!text-white text-center mx-auto w-full"}>
                                        <div className={"flex mt-8 justify-center items-center"}>
                                            <CircleAlert />
                                            <Typography variant={"muted"} className={"!text-white text-center ml-2"}>
                                                { t("prompt") }
                                            </Typography>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className={"rounded-none"}>
                                        <DialogHeader>
                                            <DialogTitle></DialogTitle>
                                        </DialogHeader>
                                        <RenderCardItem theme={"light"} />
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <div className={"flex-col h-full mt-8 xl:mt-0 hidden xl:flex"}>
                                {
                                    tabActive === "type" && (
                                        <div className={"flex flex-col h-full"}>
                                            <Typography
                                                variant={"h4"}
                                                className={"!text-white font-medium"}
                                            >
                                                {t("text.type.title")}
                                            </Typography>
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white mt-2 roboto"}
                                            >
                                                {t("text.type.description")}
                                            </Typography>

                                            <ul className={"mt-3 lg:mt-6"}>
                                                <li>
                                                <header className={"flex items-center"}>
                                                        <div
                                                            className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                        <Typography
                                                            variant={"h6"}
                                                            className={"!text-white font-medium"}
                                                        >
                                                            {t("text.type.ul-title1")}
                                                        </Typography>
                                                    </header>
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white ml-3 mt-1 roboto lg:mt-3"}
                                                    >
                                                        {t("text.type.ul-desc1")}
                                                    </Typography>
                                                </li>

                                                <li className={"mt-3 lg:mt-6"}>
                                                    <header className={"flex items-center"}>
                                                        <div
                                                            className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                        <Typography
                                                            variant={"h6"}
                                                            className={"!text-white font-medium"}
                                                        >
                                                            {t("text.type.ul-title2")}
                                                        </Typography>
                                                    </header>
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white ml-3 mt-1 roboto lg:mt-3"}
                                                    >
                                                        {t("text.type.ul-desc2")}
                                                    </Typography>
                                                </li>

                                                <li className={"mt-3 lg:mt-6"}>
                                                    <header className={"flex items-center"}>
                                                        <div
                                                            className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                        <Typography
                                                            variant={"h6"}
                                                            className={"!text-white font-medium"}
                                                        >
                                                            {t("text.type.ul-title3")}
                                                        </Typography>
                                                    </header>
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white ml-3 mt-1 roboto lg:mt-3"}
                                                    >
                                                        {t("text.type.ul-desc3")}
                                                    </Typography>
                                                </li>

                                                <li className={"mt-3 lg:mt-6"}>
                                                    <header className={"flex items-center"}>
                                                        <div
                                                            className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                        <Typography
                                                            variant={"h6"}
                                                            className={"!text-white font-medium"}
                                                        >
                                                            {t("text.type.ul-title4")}
                                                        </Typography>
                                                    </header>
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white ml-3 mt-1 roboto lg:mt-3"}
                                                    >
                                                        {t("text.type.ul-desc4")}
                                                    </Typography>
                                                </li>
                                            </ul>

                                            <div className={"mt-10"}>
                                                <GeneralLinkBtn
                                                    text={t("text.type.more")}
                                                    path={"/products/transfer"}
                                                    theme={"light-solid"}
                                                />
                                            </div>
                                        </div>
                                    )
                                }


                                {
                                    tabActive === "safe" && (
                                        <div className={"flex flex-col h-full"}>
                                            <Typography
                                                variant={"h4"}
                                                className={"!text-white font-medium"}
                                            >
                                                {t("text.safe.title")}
                                            </Typography>
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white roboto mt-2"}
                                            >
                                                {t("text.safe.description")}
                                            </Typography>

                                            <ul className={"mt-3 lg:mt-6"}>
                                                <li>
                                                    <header className={"flex items-center"}>
                                                        <div className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                        <Typography
                                                            variant={"h6"}
                                                            className={"!text-white font-medium"}
                                                        >
                                                            {t("text.safe.ul-title1")}
                                                        </Typography>
                                                    </header>
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white ml-3 mt-1 roboto lg:mt-3"}
                                                    >
                                                        {t("text.safe.ul-desc1")}
                                                    </Typography>
                                                </li>

                                                <li className={"mt-3 lg:mt-6"}>
                                                    <header className={"flex items-center"}>
                                                        <div
                                                            className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                        <Typography
                                                            variant={"h6"}
                                                            className={"!text-white font-medium"}
                                                        >
                                                            {t("text.safe.ul-title2")}
                                                        </Typography>
                                                    </header>
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white ml-3 mt-1 roboto lg:mt-3"}
                                                    >
                                                        {t("text.safe.ul-desc2")}
                                                    </Typography>
                                                </li>

                                                <li className={"mt-3 lg:mt-6"}>
                                                    <header className={"flex items-center"}>
                                                        <div
                                                            className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                        <Typography
                                                            variant={"h6"}
                                                            className={"!text-white font-medium"}
                                                        >
                                                            {t("text.safe.ul-title3")}
                                                        </Typography>
                                                    </header>
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white ml-3 mt-1 roboto lg:mt-3"}
                                                    >
                                                        {t("text.type.ul-desc4")}
                                                    </Typography>
                                                </li>
                                            </ul>

                                            <div className={"mt-10"}>
                                                <GeneralLinkBtn
                                                    text={t("text.type.more")}
                                                    path={"/products/transfer"}
                                                    theme={"light-solid"}
                                                />
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    tabActive === "card" && <RenderCardItem/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Assets;