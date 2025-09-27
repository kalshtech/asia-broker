"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const Explore = () => {
    const t = useTranslations("Pages.academy.learning.explore");
    return (
        <section className={"m-4 lg:m-30"}>
            <div className={"grid grid-cols-12"}>
                <div className={"col-span-12 lg:col-span-6"}>
                    <div className={"bg-theme-deep-bg h-full py-8 px-8 lg:py-20 lg:px-12 lg:rounded-l-lg"}>
                        <Typography
                            variant={"h4"}
                            className={"!text-white"}
                        >
                            { t("row.col1.title") }
                        </Typography>

                        <Typography
                            variant={"muted"}
                            className={"!text-white mt-10"}
                        >
                            { t("row.col1.desc") }
                        </Typography>

                        <div className={"mt-16"}>
                            <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                                { t("row.col1.btnText") }
                            </Button>

                            <Typography
                                variant={"muted"}
                                className={"!text-white mt-4"}
                            >
                                { t("row.col1.prompt") }
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className={"col-span-12 lg:col-span-6"}>
                    <img src="/images/academy/learning-explore.png" alt="explore" className={"object-cover"} />
                </div>
            </div>
        </section>
    )
}

export default Explore;