"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { QAItemRow } from "@/components/common/QuestionAnswer";
import {Separator} from "@/components/ui/separator";
import { MoveRight } from "lucide-react";
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


const Hire = () => {
    const t = useTranslations("Pages.corporation.careers.hire");
    const DATA = [
        {
            question: t("list.development.title"),
            answer: (
                <>
                    <div className={"flex flex-col pb-16"}>
                        <div>
                            <div className={"flex flex-1 items-center"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-normal"}
                                >
                                    {t("list.development.1.name")}
                                </Typography>
                                <div className={"ml-auto flex text-theme-active cursor-pointer"}>
                                    <Typography>
                                        {t("apply")}
                                    </Typography>
                                    <MoveRight className={"ml-2"}/>
                                </div>
                            </div>
                            <div className={"grid-cols-12 grid gap-4 mt-4"}>
                                <div className={"col-span-4"}>
                                    <Typography>
                                        {t("list.development.1.location")}
                                    </Typography>
                                </div>
                                <div className={"col-span-8"}>
                                    <Typography>
                                        {t("list.development.1.desc")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={"mt-6"}>
                            <div className={"flex flex-1 items-center"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-normal"}
                                >
                                    {t("list.development.2.name")}
                                </Typography>
                                <div className={"ml-auto flex text-theme-active cursor-pointer"}>
                                    <Typography>
                                        {t("apply")}
                                    </Typography>
                                    <MoveRight className={"ml-2"}/>
                                </div>
                            </div>
                            <div className={"grid-cols-12 grid gap-4 mt-4"}>
                                <div className={"col-span-4"}>
                                    <Typography>
                                        {t("list.development.2.location")}
                                    </Typography>
                                </div>
                                <div className={"col-span-8"}>
                                    <Typography>
                                        {t("list.development.2.desc")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator/>
                </>
            )
        },
        {
            question: t("list.operation.title"),
            answer: (
                <>
                    <div className={"flex flex-col pb-16"}>
                        <div>
                            <div className={"flex flex-1 items-center"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-normal"}
                                >
                                    {t("list.operation.1.name")}
                                </Typography>
                                <div className={"ml-auto flex text-theme-active cursor-pointer"}>
                                    <Typography>
                                        {t("apply")}
                                    </Typography>
                                    <MoveRight className={"ml-2"}/>
                                </div>
                            </div>
                            <div className={"grid-cols-12 grid gap-4 mt-4"}>
                                <div className={"col-span-4"}>
                                    <Typography>
                                        {t("list.operation.1.location")}
                                    </Typography>
                                </div>
                                <div className={"col-span-8"}>
                                    <Typography>
                                        {t("list.operation.1.desc")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={"mt-6"}>
                            <div className={"flex flex-1 items-center"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-normal"}
                                >
                                    {t("list.operation.2.name")}
                                </Typography>
                                <div className={"ml-auto flex text-theme-active cursor-pointer"}>
                                    <Typography>
                                        {t("apply")}
                                    </Typography>
                                    <MoveRight className={"ml-2"}/>
                                </div>
                            </div>
                            <div className={"grid-cols-12 grid gap-4 mt-4"}>
                                <div className={"col-span-4"}>
                                    <Typography>
                                        {t("list.operation.2.location")}
                                    </Typography>
                                </div>
                                <div className={"col-span-8"}>
                                    <Typography>
                                        {t("list.operation.2.desc")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator/>
                </>
            )
        },
        {
            question: t("list.growth.title"),
            answer: (
                <>
                    <div className={"flex flex-col pb-16"}>
                        <div>
                            <div className={"flex flex-1 items-center"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-normal"}
                                >
                                    {t("list.growth.1.name")}
                                </Typography>
                                <div className={"ml-auto flex text-theme-active cursor-pointer"}>
                                    <Typography>
                                        {t("apply")}
                                    </Typography>
                                    <MoveRight className={"ml-2"}/>
                                </div>
                            </div>
                            <div className={"grid-cols-12 grid gap-4 mt-4"}>
                                <div className={"col-span-4"}>
                                    <Typography>
                                        {t("list.growth.1.location")}
                                    </Typography>
                                </div>
                                <div className={"col-span-8"}>
                                    <Typography>
                                        {t("list.growth.1.desc")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={"mt-6"}>
                            <div className={"flex flex-1 items-center"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-normal"}
                                >
                                    {t("list.growth.2.name")}
                                </Typography>
                                <div className={"ml-auto flex text-theme-active cursor-pointer"}>
                                    <Typography>
                                        {t("apply")}
                                    </Typography>
                                    <MoveRight className={"ml-2"}/>
                                </div>
                            </div>
                            <div className={"grid-cols-12 grid gap-4 mt-4"}>
                                <div className={"col-span-4"}>
                                    <Typography>
                                        {t("list.growth.2.location")}
                                    </Typography>
                                </div>
                                <div className={"col-span-8"}>
                                    <Typography>
                                        {t("list.growth.2.desc")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator/>
                </>
            )
        },
        {
            question: t("list.analysis.title"),
            answer: (
                <>
                    <div className={"flex flex-col pb-16"}>
                        <div>
                            <div className={"flex flex-1 items-center"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-normal"}
                                >
                                    {t("list.analysis.1.name")}
                                </Typography>
                                <div className={"ml-auto flex text-theme-active cursor-pointer"}>
                                    <Typography>
                                        {t("apply")}
                                    </Typography>
                                    <MoveRight className={"ml-2"}/>
                                </div>
                            </div>
                            <div className={"grid-cols-12 grid gap-4 mt-4"}>
                                <div className={"col-span-4"}>
                                    <Typography>
                                        {t("list.analysis.1.location")}
                                    </Typography>
                                </div>
                                <div className={"col-span-8"}>
                                    <Typography>
                                        {t("list.analysis.1.desc")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={"mt-6"}>
                            <div className={"flex flex-1 items-center"}>
                                <Typography
                                    variant={"h5"}
                                    className={"font-normal"}
                                >
                                    {t("list.analysis.2.name")}
                                </Typography>
                                <div className={"ml-auto flex text-theme-active cursor-pointer"}>
                                    <Typography>
                                        {t("apply")}
                                    </Typography>
                                    <MoveRight className={"ml-2"}/>
                                </div>
                            </div>
                            <div className={"grid-cols-12 grid gap-4 mt-4"}>
                                <div className={"col-span-4"}>
                                    <Typography>
                                        {t("list.analysis.2.location")}
                                    </Typography>
                                </div>
                                <div className={"col-span-8"}>
                                    <Typography>
                                        {t("list.analysis.2.desc")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Separator/>
                </>
            )
        },
    ];
    return (
        <section className={"p-30 bg-theme-light-bg"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    {t("title")}
                </Typography>
            </motion.div>
            <div className={"mt-16"}>
                <div>
                    <div>
                        {
                            DATA.map((item, index) => (
                                <QAItemRow key={index} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hire;