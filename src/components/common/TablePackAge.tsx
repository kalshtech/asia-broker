"use client";
import * as React from 'react'
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import classnames from "classnames";
import { Typography } from "@/components/ui/typography"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {
    first: string;
    second: string;
    third?: string;
    ary: any;
    isShow?: boolean;
}

const TablePackage = (props: Props) => {
    const { first, second, third, ary, isShow = true } = props;
    if(isShow) {
        return (
            <div className={"bg-white"}>
                <div className={`hidden xl:block`}>
                    <Table>
                        <TableHeader className={"bg-[#373F62]"}>
                            <TableRow className="hover:bg-transparent">
                                <TableHead className={classnames(["!py-8 text-center text-white", `w-1/${ary.length}`])}>
                                    { first }
                                </TableHead>
                                <TableHead className={classnames(["!py-8 text-center text-white", `w-1/${ary.length}`])}>
                                    { second }
                                </TableHead>
                                {
                                    third && (
                                        <TableHead className={classnames(["!py-8 text-center text-white", `w-1/${ary.length}`])}>
                                            { third }
                                        </TableHead>
                                    )
                                }
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                ary.map((item: any, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className={"text-center py-5"}>
                                            {item.one}
                                        </TableCell>
                                        <TableCell className={"text-center py-5"}>
                                            {item.two}
                                        </TableCell>
                                        {
                                            item.three && (
                                                <TableCell className={"text-center py-5"}>
                                                    {item.three}
                                                </TableCell>
                                            )
                                        }
                                    </TableRow>
                                ))

                            }
                        </TableBody>
                    </Table>
                </div>
                <div className={"p-8 xl:hidden"}>
                    <div className={""}>
                        <Typography variant={"h5"}>
                            {first}
                        </Typography>
                        {
                            third && (
                                <Typography
                                    variant={"muted"}
                                    className={"mt-4 text-xs !text-[#999]"}
                                >
                                    {third}
                                </Typography>
                            )
                        }
                    </div>
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full mt-4"
                        defaultValue="item-0"
                    >
                        {
                            ary.map((item: any, index: number) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger>{item.one}</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        {item.two}
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
            </div>
        )
    }
    return null;
}

export default TablePackage;