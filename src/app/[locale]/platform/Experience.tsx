"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

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

const Experience = () => {
    const t = useTranslations("Pages.platform.experience");
    const colsAry = [
        { one: t("table.row.col1-1-1"), two: t("table.row.col1-1-2"), three: t("table.row.col1-1-3") },
        { one: t("table.row.col1-2-1"), two: t("table.row.col1-2-2"), three: t("table.row.col1-2-3") },
        { one: t("table.row.col1-3-1"), two: t("table.row.col1-3-2"), three: t("table.row.col1-3-3") },
        { one: t("table.row.col1-4-1"), two: t("table.row.col1-4-2"), three: t("table.row.col1-4-3") },
        { one: t("table.row.col1-5-1"), two: t("table.row.col1-5-2"), three: t("table.row.col1-5-3") },
        { one: t("table.row.col1-6-1"), two: t("table.row.col1-6-2"), three: t("table.row.col1-6-3") },
        { one: t("table.row.col1-7-1"), two: t("table.row.col1-7-2"), three: t("table.row.col1-7-3") },
        { one: t("table.row.col1-8-1"), two: t("table.row.col1-8-2"), three: t("table.row.col1-8-3") },
        { one: t("table.row.col1-9-1"), two: t("table.row.col1-9-2"), three: t("table.row.col1-9-3") }
    ];
    return (
        <section className={"p-4 lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h3"}
                    className={"font-medium text-center"}
                >
                    {t("title1")}
                </Typography>
                <Typography
                    variant={"h3"}
                    className={"font-medium text-center mt-2"}
                >
                    {t("title2")}
                </Typography>
                <Typography
                    variant={"muted"}
                    className={"text-center mx-auto max-w-3xl mt-8"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mt-10 mx-auto max-w-7xl"}>
                <Table className={"border"}>
                    <TableHeader>
                        <TableRow className={"bg-[#333] hover:bg-[#333]"}>
                            <TableHead className={"w-1/3 text-center text-white !py-4"}>
                                { t("table.row.head1") }
                            </TableHead>
                            <TableHead className={"w-1/3 text-center text-white !py-4"}>
                                { t("table.row.head2") }
                            </TableHead>
                            <TableHead className={"w-1/3 text-center text-white !py-4"}>
                                { t("table.row.head3") }
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            colsAry.map((item, index) => (
                                <TableRow key={index} className={"even:bg-[#EBEBEB] even:hover:bg-[#EBEBEB]"}>
                                    <TableCell className={"text-center !py-3"}>
                                        { item.one }
                                    </TableCell>
                                    <TableCell className={"text-center !py-3"}>
                                        { item.two }
                                    </TableCell>
                                    <TableCell className={"text-center !py-3"}>
                                        { item.three }
                                    </TableCell>
                                </TableRow>
                            ))

                        }
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default Experience;