"use client";
import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import classnames from "classnames";

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
    const [tabActive, setTabActive] = useState("type");

    const BtnAry = [
        { label: t("button.type"), value: "type" },
        { label: t("button.safe"), value: "safe" },
        { label: t("button.card"), value: "card" },
    ];

    const renderImageSrc = () => {
        switch (tabActive) {
            case "type":
                return "/images/home/assets-1.png";
            case "safe":
                return "/images/home/assets-2.png";
            case "card":
                return "/images/home/assets-3.png";
        }
    }

    const handleBtnToggle = (value: string) => {
        setTabActive(value);
    }

    return (
        <section className={"bg-theme-deep-bg p-4 lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center !text-white"}
                >
                    {t("title")}
                </Typography>
            </motion.div>
            <div className={"mt-10 lg:mt-20 lg:px-50"}>
                <div className={"grid grid-cols-12 gap-4"}>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <img src={renderImageSrc()} className={"max-w-[320px] mx-auto lg:mx-0"} alt=""/>
                        <div className={"mt-6"}>
                            {
                                BtnAry.map((item, index) => (
                                    <Button
                                        key={index}
                                        className={classnames([
                                            "bg-transparent border border-white rounded-full mr-4 last:mr-0",
                                            {
                                                "bg-white hover:!bg-white text-black" : tabActive === item.value
                                            }
                                        ])}
                                        onClick={() => handleBtnToggle(item.value)}
                                    >
                                        { item.label }
                                    </Button>
                                ))
                            }
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div className={"flex flex-col h-full"}>
                            {
                                tabActive === "type" && (
                                    <div className={"flex flex-col h-full"}>
                                        <Typography
                                            variant={"h2"}
                                            className={"!text-white font-medium"}
                                        >
                                            {t("text.type.title")}
                                        </Typography>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
                                        >
                                            {t("text.type.description")}
                                        </Typography>

                                        <ul className={"mt-3 lg:mt-6"}>
                                            <li>
                                                <header className={"flex items-center"}>
                                                    <div className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                    <Typography
                                                        variant={"h6"}
                                                        className={"!text-white font-medium"}
                                                    >
                                                        {t("text.type.ul-title1")}
                                                    </Typography>
                                                </header>
                                                <Typography
                                                    variant={"muted"}
                                                    className={"!text-white ml-3 mt-1 lg:mt-3"}
                                                >
                                                    {t("text.type.ul-desc1")}
                                                </Typography>
                                            </li>

                                            <li className={"mt-3 lg:mt-6"}>
                                                <header className={"flex items-center"}>
                                                    <div className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                    <Typography
                                                        variant={"h6"}
                                                        className={"!text-white font-medium"}
                                                    >
                                                        {t("text.type.ul-title2")}
                                                    </Typography>
                                                </header>
                                                <Typography
                                                    variant={"muted"}
                                                    className={"!text-white ml-3 mt-1 lg:mt-3"}
                                                >
                                                    {t("text.type.ul-desc2")}
                                                </Typography>
                                            </li>

                                            <li className={"mt-3 lg:mt-6"}>
                                                <header className={"flex items-center"}>
                                                    <div className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                    <Typography
                                                        variant={"h6"}
                                                        className={"!text-white font-medium"}
                                                    >
                                                        {t("text.type.ul-title3")}
                                                    </Typography>
                                                </header>
                                            </li>

                                            <li className={"mt-3 lg:mt-6"}>
                                                <header className={"flex items-center"}>
                                                    <div className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                    <Typography
                                                        variant={"h6"}
                                                        className={"!text-white font-medium"}
                                                    >
                                                        {t("text.type.ul-title4")}
                                                    </Typography>
                                                </header>
                                                <Typography
                                                    variant={"muted"}
                                                    className={"!text-white ml-3 mt-1 lg:mt-3"}
                                                >
                                                    {t("text.type.ul-desc4")}
                                                </Typography>
                                            </li>
                                        </ul>

                                        <div className={"mt-4"}>
                                            <Button className={"bg-white rounded-full hover:!bg-white text-black"}>
                                                {t("text.type.more")}
                                            </Button>
                                        </div>
                                    </div>
                                )
                            }



                            {
                                tabActive === "safe" && (
                                    <div className={"flex flex-col h-full"}>
                                        <Typography
                                            variant={"h2"}
                                            className={"!text-white font-medium"}
                                        >
                                            {t("text.safe.title")}
                                        </Typography>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
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
                                                    className={"!text-white ml-3 mt-1 lg:mt-3"}
                                                >
                                                    {t("text.safe.ul-desc1")}
                                                </Typography>
                                            </li>

                                            <li className={"mt-3 lg:mt-6"}>
                                                <header className={"flex items-center"}>
                                                    <div className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                    <Typography
                                                        variant={"h6"}
                                                        className={"!text-white font-medium"}
                                                    >
                                                        {t("text.safe.ul-title2")}
                                                    </Typography>
                                                </header>
                                                <Typography
                                                    variant={"muted"}
                                                    className={"!text-white ml-3 mt-1 lg:mt-3"}
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
                                                        {t("text.safe.ul-title3")}
                                                    </Typography>
                                                </header>
                                                <Typography
                                                    variant={"muted"}
                                                    className={"!text-white ml-3 mt-1 lg:mt-3"}
                                                >
                                                    {t("text.type.ul-desc4")}
                                                </Typography>
                                            </li>
                                        </ul>

                                        <div className={"mt-4 lg:mt-6"}>
                                            <Button className={"bg-white rounded-full hover:!bg-white text-black"}>
                                                {t("text.type.more")}
                                            </Button>
                                        </div>
                                    </div>
                                )
                            }


                            {
                                tabActive === "card" && (
                                    <div className={"flex flex-col h-full"}>
                                        <Typography
                                            variant={"h2"}
                                            className={"!text-white font-medium"}
                                        >
                                            {t("text.card.title")}
                                        </Typography>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
                                        >
                                            {t("text.card.description")}
                                        </Typography>

                                        <Typography
                                            variant={"h5"}
                                            className={"!text-white mt-6"}
                                        >
                                            {t("text.card.ul-title")}
                                        </Typography>

                                        <ul className={"mt-3 lg:mt-6"}>
                                            <li>
                                                <header className={"flex items-center"}>
                                                    <div className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                    <Typography
                                                        variant={"h6"}
                                                        className={"!text-white font-medium"}
                                                    >
                                                        {t("text.card.ul-title1")}
                                                    </Typography>
                                                </header>
                                            </li>

                                            <li className={"mt-3 lg:mt-6"}>
                                                <header className={"flex items-center"}>
                                                    <div className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                    <Typography
                                                        variant={"h6"}
                                                        className={"!text-white font-medium"}
                                                    >
                                                        {t("text.card.ul-title2")}
                                                    </Typography>
                                                </header>
                                            </li>

                                            <li className={"mt-3 lg:mt-6"}>
                                                <header className={"flex items-center"}>
                                                    <div className={"bg-theme-active-hover w-[5px] h-[5px] rounded-full mr-2"}/>
                                                    <Typography
                                                        variant={"h6"}
                                                        className={"!text-white font-medium"}
                                                    >
                                                        {t("text.card.ul-title3")}
                                                    </Typography>
                                                </header>
                                            </li>
                                        </ul>

                                        <div className={"mt-6"}>
                                            <Button className={"bg-white rounded-full hover:!bg-white text-black"}>
                                                {t("text.card.more")}
                                            </Button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Assets;