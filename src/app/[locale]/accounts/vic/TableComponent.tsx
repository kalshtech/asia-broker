"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Typography} from "@/components/ui/typography";

const TableComponent = () => {
    const t = useTranslations("Pages.accounts.vic.table");
    const colsAry = [
        { one: t("row.col1-1-1"), two: t("row.col1-1-2"), three: t("row.col1-1-3") },
        { one: t("row.col1-2-1"), two: t("row.col1-2-2"), three: t("row.col1-2-3") },
        { one: t("row.col1-3-1"), two: t("row.col1-3-2"), three: t("row.col1-3-3") },
        { one: t("row.col1-4-1"), two: t("row.col1-4-2"), three: t("row.col1-4-3") },
        { one: t("row.col1-5-1"), two: t("row.col1-5-2"), three: t("row.col1-5-3") },
        { one: t("row.col1-6-1"), two: t("row.col1-6-2"), three: t("row.col1-6-3") },
        { one: t("row.col1-7-1"), two: t("row.col1-7-2"), three: t("row.col1-7-3") },
        { one: t("row.col1-8-1"), two: t("row.col1-8-2"), three: t("row.col1-8-3") },
        { one: t("row.col1-9-1"), two: t("row.col1-9-2"), three: t("row.col1-9-3") }
    ];
    return (
        <section className={"bg-[url(/images/accounts/vic-table-bg.png)] bg-center bg-cover py-4 lg:py-30"}>
            <Container>
                <Typography
                    variant={"h3"}
                    className={"text-center max-w-6xl mx-auto !text-white"}
                >
                    {t("title")}
                </Typography>
                <Table className={"mt-10"}>
                    <TableHeader>
                        <TableRow className={"bg-white hover:bg-white"}>
                            <TableHead className={"w-1/3 py-6 text-center text-white bg-[#35404F] border-r"}>
                                { t("row.head1") }
                            </TableHead>
                            <TableHead className={"w-1/3 py-6 text-center text-white bg-[#35404F] border-r"}>
                                { t("row.head2") }
                            </TableHead>
                            <TableHead className={"w-1/3 py-6 text-center text-white bg-[#35404F]"}>
                                { t("row.head3") }
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            colsAry.map((item, index) => (
                                <TableRow key={index} className={"bg-white hover:bg-white even:bg-[#F2F4F7] even:hover:bg-[#F2F4F7]"}>
                                    <TableCell className={"text-center py-4 border-r"}>
                                        { item.one }
                                    </TableCell>
                                    <TableCell className={"text-center py-4 border-r"}>
                                        { item.two }
                                    </TableCell>
                                    <TableCell className={"text-center py-4"}>
                                        { item.three }
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Container>
        </section>
    )
}

export default TableComponent;