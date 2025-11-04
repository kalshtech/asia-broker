"use client";
import React, { useState, useEffect, useMemo } from "react";
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
import MiniChart from "@/components/charts/Mini";
import { convert, rangeCls, rangeChange } from "@/utils/common";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { Link } from "@/i18n/navigation";

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
    const [ rows, setRows ] = useState(usStockRows);
    const [ loading, setLoading ] = useState(true);

    const [ tabActive, setTabActive ] = useState<string>("stock");

    const tabsList = [
        { label: commonT("usStock"), value: "stock", path: "/products/stocks" },
        { label: commonT("forex"), value: "forex", path: "/products/forex" },
        { label: commonT("metals"), value: "metals", path: "/products/pm" },
        { label: commonT("energy"), value: "energy", path: "/products/energy" },
        { label: commonT("futures"), value: "futures", path: "/products/future" },
        { label: commonT("crypto"), value: "crypto", path: "/products/crypto" },
    ];

    const currentPath = useMemo(() => {
        const currentTab = tabsList.find(tab => tab.value === tabActive);
        return currentTab?.path || "";
    }, [tabActive, tabsList]);

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
        <section className={"py-16 xl:p-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography variant={"h3"} className={"text-center"}>
                        {t("title")}
                    </Typography>

                    <Typography className={"text-center text-base mt-6"}>
                        {t("description")}
                    </Typography>
                </motion.div>

                <div className={"flex justify-center mt-12"}>
                    <div className={"flex-1 flex flex-col  w-full"}>
                        <div className={"hidden xl:flex justify-center w-full"}>
                            <Tabs value={tabActive} onValueChange={handleChangeTabActive}>
                                <TabsList className={"h-10 rounded-full"}>
                                    {
                                        tabsList.map((d, i) => (
                                            <TabsTrigger
                                                key={i}
                                                value={d.value}
                                                className={"cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}
                                            >
                                                {d.label}
                                            </TabsTrigger>
                                        ))
                                    }
                                </TabsList>
                            </Tabs>
                        </div>
                        <div className={"mt-8"}>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{commonT("code")}</TableHead>
                                        <TableHead>{commonT("miniChart")}</TableHead>
                                        <TableHead>{commonT("close")}</TableHead>
                                        <TableHead>{commonT("changePercentage")}</TableHead>
                                        <TableHead>{commonT("change")}</TableHead>
                                        {/*{*/}
                                        {/*    tabActive === "stock" && <TableHead className={"text-right xl:w-[100px]"}>*/}
                                        {/*        {commonT("marketCap")}*/}
                                        {/*    </TableHead>*/}
                                        {/*}*/}
                                        {/*<TableHead className={"text-right xl:w-[100px]"}>{commonT("volume")}</TableHead>*/}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        loading ? (
                                            Array.from({length: 6}).map((_, i) => (
                                                <TableRow key={i}>
                                                    <TableCell><Skeleton className="h-4 w-32"/></TableCell>
                                                    <TableCell><Skeleton className="h-4 w-32"/></TableCell>
                                                    <TableCell><Skeleton className="h-4 w-32"/></TableCell>
                                                    <TableCell><Skeleton className="h-4 w-32"/></TableCell>
                                                    <TableCell><Skeleton className="h-4 w-32"/></TableCell>
                                                    <TableCell><Skeleton className="h-4 w-32"/></TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            rows.map((item, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <div>
                                                            <Typography variant={"h6"}>{item.symbol}</Typography>
                                                            <Typography variant={"muted"}>{item.name}</Typography>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div>
                                                            <MiniChart data={item.data}/>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className={rangeCls(item.changePercentage)}>{item.price}</TableCell>
                                                    <TableCell className={rangeCls(item.changePercentage)}>{rangeChange(item.changePercentage)}</TableCell>
                                                    <TableCell className={rangeCls(item.changePercentage)}>{item.change}</TableCell>
                                                    {/*{*/}
                                                    {/*    tabActive === "stock" && <TableCell>*/}
                                                    {/*        <Typography variant={"muted"} className={"!text-[#111111]"}>*/}
                                                    {/*            {convert(item.marketCap)}*/}
                                                    {/*        </Typography>*/}
                                                    {/*    </TableCell>*/}
                                                    {/*}*/}
                                                    {/*<TableCell className={"text-right"}>{convert(item.volume)}</TableCell>*/}
                                                </TableRow>
                                            ))
                                        )
                                    }
                                </TableBody>
                            </Table>
                            <div className={"flex items-center justify-center"}>
                                <div>
                                    <Button className={"mt-8 bg-theme-active hover:bg-theme-active-hover"}>
                                        <Link href={currentPath} target={"_blank"}>
                                            {t("more")}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Markets;