"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { Typography } from "@/components/ui/typography";
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {ReactNode} from "react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

type Props = {
    title: string;
    desc?: string;
    rowHeadAry: Array<{ text: string }>;
    children: ReactNode;
    overview?: boolean;
    overviewText?: string;
}

const RowTable = (props: Props) => {
    const { title, desc, rowHeadAry, children, overview, overviewText } = props;
    return (
        <section className={"p-4 lg:p-30"}>
            <div className={"grid grid-cols-12 gap-8"}>
                <div className={"col-span-12 lg:col-span-4"}>
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        className={overview ? "mt-8 lg:mt-19" : ""}
                    >

                        <Typography
                            variant={"h1"}
                            className={"font-medium"}
                        >
                            { title }
                        </Typography>

                        {
                            desc && (
                                <Typography
                                    variant={"muted"}
                                    className={"mt-6"}
                                >
                                    { desc }
                                </Typography>
                            )
                        }

                    </motion.div>
                </div>
                <div className={"col-span-12 lg:col-span-8"}>
                    <div>
                        {
                            overview && (
                                <Typography
                                    variant={"large"}
                                    className={"font-normal text-[#999]"}
                                >
                                    { overviewText }
                                </Typography>
                            )
                        }

                        <Table className={overview ? "mt-4 lg:mt-10" : ""}>
                            <TableHeader>
                                <TableRow>
                                    {
                                        rowHeadAry.map((item, index) => (
                                            <TableHead
                                                className={"text-[#999]"}
                                                key={index}
                                            >
                                                { item.text }
                                            </TableHead>
                                        ))
                                    }
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                { children }
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RowTable;