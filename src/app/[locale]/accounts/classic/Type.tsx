"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Container from "@/components/Container";

const Type = () => {
    const t = useTranslations("Pages.accounts.classic.type");
    const card1Ary = [
        { title: t("card1.ul.li-1-title"), desc: t("card1.ul.li-1-desc") },
        { title: t("card1.ul.li-2-title"), desc: t("card1.ul.li-2-desc") },
        { title: t("card1.ul.li-3-title"), desc: t("card1.ul.li-3-desc") },
        { title: t("card1.ul.li-4-title"), desc: t("card1.ul.li-4-desc") },
        { title: t("card1.ul.li-5-title"), desc: t("card1.ul.li-5-desc") },
        { title: t("card1.ul.li-6-title"), desc: t("card1.ul.li-6-desc") },
        { title: t("card1.ul.li-7-title"), desc: t("card1.ul.li-7-desc") }
    ];

    const card2Ary = [
        { title: t("card2.ul.li-1-title"), desc: t("card2.ul.li-1-desc") },
        { title: t("card2.ul.li-2-title"), desc: t("card2.ul.li-2-desc") },
        { title: t("card2.ul.li-3-title"), desc: t("card2.ul.li-3-desc") },
        { title: t("card2.ul.li-4-title"), desc: t("card2.ul.li-4-desc") },
        { title: t("card2.ul.li-5-title"), desc: t("card2.ul.li-5-desc") },
        { title: t("card2.ul.li-6-title"), desc: t("card2.ul.li-6-desc") },
        { title: t("card2.ul.li-7-title"), desc: t("card2.ul.li-7-desc") }
    ];

    const colsAry = [
        { one: t("table.row.col1-1-1"), two: t("table.row.col1-1-2"), three: t("table.row.col1-1-3") },
        { one: t("table.row.col1-2-1"), two: t("table.row.col1-2-2"), three: t("table.row.col1-2-3") },
        { one: t("table.row.col1-3-1"), two: t("table.row.col1-3-2"), three: t("table.row.col1-3-3") },
        { one: t("table.row.col1-4-1"), two: t("table.row.col1-4-2"), three: t("table.row.col1-4-3") },
        { one: t("table.row.col1-5-1"), two: t("table.row.col1-5-2"), three: t("table.row.col1-5-3") },
        { one: t("table.row.col1-6-1"), two: t("table.row.col1-6-2"), three: t("table.row.col1-6-3") },
        { one: t("table.row.col1-7-1"), two: t("table.row.col1-7-2"), three: t("table.row.col1-7-3") }
    ];
    return (
        <section className={"bg-[url(/images/accounts/account-type-background.png)] bg-cover bg-center px-4 py-4 lg:mt-24 lg:px-30 lg:py-16"}>
            <Container>
                <div>
                    <div className={"grid grid-cols-12 gap-8"}>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <div className={""}>
                                <header className={"bg-[#373F62] py-6 px-8"}>
                                    <Typography variant={"h5"} className={"!text-white"}>
                                        {t("card1.title")}
                                    </Typography>
                                    <Typography variant={"muted"} className={"!text-white mt-2"}>
                                        {t("card1.desc")}
                                    </Typography>
                                </header>
                                <ul>
                                    {
                                        card1Ary.map((d, i) => (
                                            <li key={i}
                                                className={"py-4 px-8 flex odd:bg-white even:bg-theme-light-bg items-center"}>
                                                <Typography variant={"h6"} className={"w-24"}>
                                                    {d.title}
                                                </Typography>
                                                <Typography variant={"muted"}>
                                                    {d.desc}
                                                </Typography>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-6"}>
                            <div className={""}>
                                <header className={"bg-[#373F62] py-6 px-8"}>
                                    <Typography variant={"h5"} className={"!text-white"}>
                                        {t("card1.title")}
                                    </Typography>
                                    <Typography variant={"muted"} className={"!text-white mt-2"}>
                                        {t("card1.desc")}
                                    </Typography>
                                </header>
                                <ul>
                                    {
                                        card2Ary.map((d, i) => (
                                            <li key={i}
                                                className={"py-4 px-8 flex odd:bg-white even:bg-theme-light-bg items-center"}>
                                                <Typography variant={"h6"} className={"w-24"}>
                                                    {d.title}
                                                </Typography>
                                                <Typography variant={"muted"}>
                                                    {d.desc}
                                                </Typography>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={"mt-4 lg:mt-16"}>
                        <Table className={"bg-white"}>
                            <TableHeader className={"bg-[#373F62]"}>
                                <TableRow className="hover:bg-transparent">
                                    <TableHead className={"w-1/3 !py-8 text-center text-white"}>
                                        {t("table.row.head1")}
                                    </TableHead>
                                    <TableHead className={"w-1/3 !py-8 text-center text-white"}>
                                        {t("table.row.head2")}
                                    </TableHead>
                                    <TableHead className={"w-1/3 !py-8 text-center text-white"}>
                                        {t("table.row.head3")}
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    colsAry.map((item, index) => (
                                        <TableRow key={index}>
                                            <TableCell className={"text-center py-5"}>
                                                {item.one}
                                            </TableCell>
                                            <TableCell className={"text-center py-5"}>
                                                {item.two}
                                            </TableCell>
                                            <TableCell className={"text-center py-5"}>
                                                {item.three}
                                            </TableCell>
                                        </TableRow>
                                    ))

                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Type;