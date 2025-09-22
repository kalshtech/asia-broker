"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import {Button} from "@/components/ui/button";
import classnames from "classnames";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Languages = () => {
    const t = useTranslations("Pages.corporation.contact.language");

    const ary = [
        { status: 1, statusText: t("online"), support: "中文 / 粤语", statement: "" },
        { status: 1, statusText: t("online"), support: "日语", statement: "" },
        { status: 1, statusText: t("online"), support: "越南语", statement: "" },
        { status: 1, statusText: t("online"), support: "英文", statement: t("prompt1") },
        { status: 0, statusText: t("ready"), support: "韩文", statement: t("prompt2") },
        { status: 0, statusText: t("ready"), support: "泰语", statement: t("prompt3") },
    ]

    return (
        <section className={"p-30"}>
            <div className={"grid grid-cols-12 gap-8"}>
                <div className={"col-span-4"}>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                    >
                        <Typography
                            variant={"h1"}
                            className={"font-medium"}
                        >
                            {t("title")}
                        </Typography>

                        <Typography
                            variant={"muted"}
                            className={"mt-6"}
                        >
                            {t("desc")}
                        </Typography>
                    </motion.div>
                </div>
                <div className={"col-span-8"}>
                    <div>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        { t("table.head.status") }
                                    </TableHead>
                                    <TableHead>
                                        { t("table.head.support") }
                                    </TableHead>
                                    <TableHead>
                                        { t("table.head.statement") }
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    ary.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell className={"py-4"}>
                                                <div className={"flex items-center"}>
                                                    <span className={classnames(["w-1 h-1 block rounded-full", {
                                                        "bg-[#00A478]": item.status === 1,
                                                        "bg-[#FFAE46]": item.status === 0,
                                                    }])}/>
                                                    <span className={"ml-4"}>{ item.statusText }</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className={"py-4"}>
                                                { item.support }
                                            </TableCell>
                                            <TableCell className={"py-4"}>
                                                { item.statement ?? "" }
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Languages;