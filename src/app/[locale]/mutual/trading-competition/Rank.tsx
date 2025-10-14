"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {useState} from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Rank = () => {
    const t = useTranslations("Pages.mutual.trading-competition.rank");
    const [ tabActive, setTabActive ] = useState<string>("1");


    const oneAry = [
        { name: "风中的指标侠", credit: "1870.58%", type: "Classic", operator: t("table.copy") },
        { name: "马丁格老司机", credit: "1654.92%", type: "Classic", operator: t("table.copy") },
        { name: "小账户大梦想", credit: "1580.67%", type: "Classic", operator: t("table.copy") },
        { name: "不懂技术靠直觉", credit: "1463.45%", type: "Classic", operator: t("table.copy") },
        { name: "每天稳定打卡", credit: "1463.45%", type: "Classic", operator: t("table.copy") },
    ];

    const twoAry = [
        { name: "均线浪潮骑士", credit: "2405%", type: "Classic", operator: t("table.copy") },
        { name: "半自动交易之王", credit: "2212%", type: "Classic", operator: t("table.copy") },
        { name: "技术派狙击手", credit: "2103%", type: "Classic", operator: t("table.copy") },
        { name: "逆势也能盈利", credit: "1998%", type: "Classic", operator: t("table.copy") },
        { name: "高胜率+小回撤", credit: "1881%", type: "Classic", operator: t("table.copy") },
    ];


    const threeAry = [
        { name: "TitanQuantX", credit: "4903%", type: "VIC", operator: t("table.copy") },
        { name: "SailAlpha", credit: "3159%", type: "VIC", operator: t("table.copy") },
        { name: "QuantumTiger", credit: "2612%", type: "VIC", operator: t("table.copy") },
        { name: "超额收益建构师", credit: "2298%", type: "VIC", operator: t("table.copy") },
        { name: "交易就是生活", credit: "2165%", type: "VIC", operator: t("table.copy") },
    ];

    const handleChangeTabActive = (value: string) => {
        setTabActive(value);
    }


    const Ary: any = React.useMemo(() => {
        switch (tabActive) {
            case "1":
                return oneAry
            case "2":
                return twoAry
            case "3":
                return threeAry
        }
    }, [tabActive])

    return (
        <section className={"p-4 lg:p-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center !text-white"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography variant={"muted"} className={"font-medium text-center mx-auto mt-8 !text-white"}>
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-4 lg:mt-16 flex justify-center"}>
                    <Tabs value={tabActive} onValueChange={handleChangeTabActive}>
                        <TabsList className={"bg-[#3B4259] h-10 rounded-full"}>
                            <TabsTrigger
                                value={"1"}
                                className={"px-8 h-10 rounded-full cursor-pointer data-[state=active]:bg-theme-active data-[state=active]:text-primary-foreground"}
                            >
                                {t("tabs.1")}
                            </TabsTrigger>
                            <TabsTrigger
                                value={"2"}
                                className={"px-8 h-10 rounded-full cursor-pointer data-[state=active]:bg-theme-active data-[state=active]:text-primary-foreground"}
                            >
                                {t("tabs.2")}
                            </TabsTrigger>
                            <TabsTrigger
                                value={"3"}
                                className={"px-8 h-10 rounded-full cursor-pointer data-[state=active]:bg-theme-active data-[state=active]:text-primary-foreground"}
                            >
                                {t("tabs.3")}
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <div className={"mt-4 lg:mt-16"}>
                    <Typography
                        variant={"large"}
                        className={"font-normal !text-white"}
                    >
                        {t(`prompt.${tabActive}`)}
                    </Typography>
                    <Table className={"mt-4"}>
                        <TableHeader className={"bg-[#323A53]"}>
                            <TableRow>
                                <TableHead className={"py-6 !text-white"}>{t("table.rank")}</TableHead>
                                <TableHead className={"py-6 !text-white"}>{t("table.name")}</TableHead>
                                <TableHead className={"py-6 !text-white"}>{t("table.credit")}</TableHead>
                                <TableHead className={"py-6 !text-white"}>{t("table.type")}</TableHead>
                                <TableHead className={"py-6 !text-white w-[100px]"}>{t("table.operator")}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                Ary.map((item: any, index: any) => (
                                    <TableRow key={index} className={"bg-[#3B4259]"}>
                                        <TableCell className={"py-6 text-white"}>
                                            {
                                                index === 0 ?
                                                    <img src={"/images/mutual/competition-1.png"}
                                                         className={"w-5 h-5"}
                                                         alt={"rank"}/>
                                                    : index === 1 ?
                                                        <img src={"/images/mutual/competition-2.png"}
                                                             className={"w-5 h-5"}
                                                             alt={"rank"}
                                                        />
                                                        : index === 2 ?
                                                            <img src={"/images/mutual/competition-3.png"}
                                                                 className={"w-5 h-5"}
                                                                 alt={"rank"}
                                                            />
                                                            : index + 1
                                            }
                                        </TableCell>
                                        <TableCell className={"py-6 text-white"}>
                                            {item.name}
                                        </TableCell>
                                        <TableCell className={"py-6 text-white"}>
                                            {item.credit}
                                        </TableCell>
                                        <TableCell className={"py-6 text-white"}>
                                            {item.type}
                                        </TableCell>
                                        <TableCell className={"py-6 text-white"}>
                                            {item.operator}
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </Container>
        </section>
    )
}

export default Rank;