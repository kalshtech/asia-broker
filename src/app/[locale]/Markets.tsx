"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { motion, Variants } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton"
import { http } from "@/utils/http";
import { params_quote_symbol, params_quote_query, params_historical_chart } from "@/params/api";
import dayjs from "dayjs";
import MiniChart from "@/components/charts/mini";
import { convert, rangeCls, rangeChange } from "@/utils/common";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const usStockRows = [
    { symbol: "MSFT", data: [], name: "Microsoft Corporation", price: "", changePercentage: "", change: "", marketCap: "", volume: "" },
    { symbol: "NVDA", data: [], name: "NVIDIA Corporation", price: "", changePercentage: "", change: "", marketCap: "", volume: "" },
    { symbol: "AAPL", data: [], name: "Apple Inc.", price: "", changePercentage: "", change: "", marketCap: "", volume: "" }
]

const forexRows = [
    { symbol: "EURUSD", data: [], name: "", price: "", changePercentage: "", change: "", marketCap: "", volume: "" },
    { symbol: "USDJPY", data: [], name: "", price: "", changePercentage: "", change: "", marketCap: "", volume: "" },
    { symbol: "GBPUSD", data: [], name: "", price: "", changePercentage: "", change: "", marketCap: "", volume: "" }
]

const Markets = () => {
    const t = useTranslations("Pages.home.markets");
    const commonT = useTranslations("Common");
    const [ tabActive, setTabActive ] = useState<string>("stock");
    const [ rows, setRows ] = useState(usStockRows);
    const [ loading, setLoading ] = useState(true);

    const handleChangeTabActive = (value: string) => {
        setTabActive(value);

        if(value === "forex") {
            setRows(forexRows)
        } else {
            setRows(usStockRows)
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const today = new Date();
            const dayOfWeek = today.getDay();
            let dayNumber = 5;
            let to = dayjs().format('YYYY-MM-DD');
            let from: string;

            if (dayOfWeek === 1) {
                today.setDate(today.getDate() - 3);
                const yyyy = today.getFullYear();
                const mm = String(today.getMonth() + 1).padStart(2, '0');
                const dd = String(today.getDate()).padStart(2, '0');
                dayNumber = 8;
                to = `${yyyy}-${mm}-${dd}`;
            }

            from = dayjs().subtract(dayNumber, 'day').format("YYYY-MM-DD");

            for (const item of rows) {
                const params = { ...params_quote_symbol.params, symbol: item.symbol };
                const result = await http.get(params_quote_symbol.url, { params });

                if(result.data.status === 0) {
                    const data = await result.data.data;

                    setRows((prev) =>
                        prev.map((row) =>
                            row.symbol === item.symbol ? {
                                ...row,
                                name: data.name,
                                marketCap: data.marketCap,
                                change: data.change,
                                changePercentage: data.changePercentage,
                                volume: data.volume,
                                price: data.price,
                            } : row
                        )
                    )

                    const klineParams = {
                        ...params_historical_chart.params,
                        symbol: item.symbol,
                        to,
                        from,
                        timeframe: "1min"
                    };

                    const klineResult = await http.get(params_historical_chart.url, { params: klineParams });

                    if(klineResult.data.status === 0) {
                        klineResult.data.data.forEach((d: any) => {
                            d.value = d.close;
                            d.time = dayjs(d.date).valueOf();
                        })

                        const KlineData = klineResult.data.data.reverse();

                        setRows((prev) =>
                            prev.map((row) =>
                                row.symbol === item.symbol ? { ...row, data: KlineData } : row
                            )
                        );
                        setLoading(false);
                    }
                }
            }

            setLoading(false);
        }

        fetchData();
        return () => {};
    }, [ tabActive ])

    return (
        <section className={"p-30 hidden lg:block"}>
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

                <Typography
                    variant={"muted"}
                    className={"text-center text-base mt-6"}
                >
                    {t("description")}
                </Typography>
            </motion.div>

            <div className={"flex justify-center mt-12"}>
                <div className={"flex-1 flex flex-col"}>
                    <div className={"flex justify-center"}>
                        <Tabs value={tabActive} onValueChange={handleChangeTabActive}>
                            <TabsList>
                                <TabsTrigger
                                    value={"stock"}
                                    className={"cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4"}
                                >
                                    { commonT("usStock") }
                                </TabsTrigger>
                                <TabsTrigger
                                    value={"forex"}
                                    className={"cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4"}
                                >
                                    { commonT("forex") }
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                    <div className={"mt-8"}>
                        <Table>
                            <TableCaption>
                                <div className={"flex flex-col"}>
                                    <Typography>
                                        { t("data-from") }
                                    </Typography>
                                    <div>
                                        <Button className={"mt-8 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                                            { t("more") }
                                        </Button>
                                    </div>
                                </div>
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[216px]">{ commonT("code") }</TableHead>
                                    <TableHead className="w-[248px]">{ commonT("miniChart") }</TableHead>
                                    <TableHead>{ commonT("close") }</TableHead>
                                    <TableHead>{ commonT("changePercentage") }</TableHead>
                                    <TableHead>{ commonT("change") }</TableHead>
                                    {
                                        tabActive === "stock" && <TableHead>
                                            { commonT("marketCap") }
                                        </TableHead>
                                    }
                                    <TableHead className="text-right w-[100px]">{ commonT("volume") }</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    loading ? (
                                        Array.from({ length: 6 }).map((_, i) => (
                                            <TableRow key={i}>
                                                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        rows.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell>
                                                    <div>
                                                        <Typography variant={"h6"}>{ item.symbol }</Typography>
                                                        <Typography variant={"muted"}>{ item.name }</Typography>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div>
                                                        <MiniChart data={item.data} />
                                                    </div>
                                                </TableCell>
                                                <TableCell className={rangeCls(item.changePercentage)}>{ item.price }</TableCell>
                                                <TableCell className={rangeCls(item.changePercentage)}>{ rangeChange(item.changePercentage) }</TableCell>
                                                <TableCell className={rangeCls(item.changePercentage)}>{ item.change }</TableCell>
                                                {
                                                    tabActive === "stock" && <TableCell>
                                                        <Typography className={"!text-[#111111]"}>
                                                            { convert(item.marketCap) }
                                                        </Typography>
                                                    </TableCell>
                                                }
                                                <TableCell className={"text-right"}>{ convert(item.volume) }</TableCell>
                                            </TableRow>
                                        ))
                                    )
                                }
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Markets;