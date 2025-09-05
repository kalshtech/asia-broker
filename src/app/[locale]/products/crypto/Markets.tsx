"use client";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { params_crypto_quotes } from "@/params/api";
import { http } from "@/utils/http";
import {convert, rangeCls, formatMaxFixed, rangeChange} from "@/utils/common";
import { Skeleton } from "@/components/ui/skeleton";

const mainForexList = [
    { code: "BTCUSD", ticker: "BTC/USD", name: "" },
    { code: "ETHUSD", ticker: "ETH/USD", name: "" },
    { code: "SOLUSD", ticker: "SOL/USD", name: "" },
    { code: "AVAXUSD", ticker: "AVAX/USD", name: "" },
    { code: "ADAUSD", ticker: "ADA/USD", name: "" },
    { code: "ATOMUSD", ticker: "ATOM/USD", name: "" },
    { code: "LTCUSD", ticker: "LTC/USD", name: "" },
    { code: "BCHUSD", ticker: "BCH/USD", name: "" },
    { code: "TONUSD", ticker: "TON/USD", name: "" },
    { code: "APTUSD", ticker: "APT/USD", name: "" },
    { code: "TRXUSD", ticker: "TRX/USD", name: "" },
    { code: "EOSUSD", ticker: "EOS/USD", name: "" },
];

const secondForexList = [
    { code: "BNBUSD", ticker: "BNB/USD", name: "" },
    { code: "OKBUSD", ticker: "OKB/USD", name: "" },
    { code: "HTUSD", ticker: "HT/USD", name: "" },
    { code: "BITUSD", ticker: "BIT/USD", name: "" },
    { code: "LDOUSD", ticker: "LDO/USD", name: "" },
    { code: "UNIUSD", ticker: "UNI/USD", name: "" },
    { code: "FILUSD", ticker: "FIL/USD", name: "" },
    { code: "BATUSD", ticker: "BAT/USD", name: "" },
    { code: "XRPUSD", ticker: "XRP/USD", name: "" },
    { code: "XLMUSD", ticker: "XLM/USD", name: "" },
    { code: "LINKUSD", ticker: "LINK/USD", name: "" },
    { code: "PYTHUSD", ticker: "PYTH/USD", name: "" }
]

const otherForexList = [
    { code: "DOGEUSD", ticker: "DOGE/USD", name: "" },
    { code: "SHIBUSD", ticker: "SHIB/USD", name: "" },
    { code: "PEPEUSD", ticker: "PEPE/USD", name: "" },
    { code: "WIFUSD", ticker: "WIF/USD", name: "" },
    { code: "FLOKIUSD", ticker: "FLOKI/USD", name: "" },
    { code: "TRUMPUSD", ticker: "TRUMP/USD", name: "" },
    { code: "XMRUSD", ticker: "XMR/USD", name: "" },
    { code: "ZECUSD", ticker: "ZEC/USD", name: "" },
    { code: "DASHUSD", ticker: "DASH/USD", name: "" }
];

const Markets = () => {
    const t = useTranslations("Pages.products.crypto.markets");
    const CommonT = useTranslations("Common");
    const [ tabActive, setTabActive ] = React.useState<string>("main");
    const [ rawData, setRawData ] = React.useState<any>(mainForexList);
    const [ loading, setLoading ] = React.useState<boolean>(true);

    const handleToggleTabActive = (active: string) => {
        setTabActive(active);

        switch (active) {
            case "main":
                setRawData(mainForexList);
                return;
            case "second":
                setRawData(secondForexList);
                return;
            case "otherForexList":
                setRawData(otherForexList);
                return;
            default:
                setRawData(mainForexList);
                return;
        }
    }


    const handleLoadQuoteData = async () => {
        const symbols = rawData.map((item: any) => item.code).join(',');
        const params = { ...params_crypto_quotes.params, symbols: symbols };
        try {
            setLoading(true);
            const result = await http.get(params_crypto_quotes.url, { params });
            if(result.data.status === 0) {
                const quoteData = await result.data.data;
                setRawData((prevState: any) => {
                    return prevState.map((prevItem: any) => {
                        quoteData.forEach((quoteItem: any) => {
                            // quoteItem.changesPercentage = (quoteItem.changes / quoteItem.open) * 100;
                            if(quoteItem.symbol === prevItem.code) {
                                prevItem = { ...prevItem, ...quoteItem }
                            }
                        })
                        return prevItem
                    });
                })

                setLoading(false);
            }
        } catch (err) {
            console.log(err)
        }
    }

    React.useEffect(() => {
        handleLoadQuoteData()
    }, [ tabActive ])

    return (
        <section className={"px-30 py-10"}>
            <Tabs value={tabActive}
                  className={"flex justify-center items-center"}
                  onValueChange={handleToggleTabActive}
            >
                <TabsList>
                    <TabsTrigger
                        value="main"
                        className={"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}
                    >
                        { t("btn.main") }
                    </TabsTrigger>
                    <TabsTrigger
                        value="second"
                        className={"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}
                    >
                        { t("btn.second") }
                    </TabsTrigger>
                    <TabsTrigger
                        value="other"
                        className={"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}
                    >
                        { t("btn.other") }
                    </TabsTrigger>
                </TabsList>
            </Tabs>
            <div className={"mt-10"}>
                <Table>
                    <TableCaption className={"mt-16"}>
                        <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                            { t("trade") }
                        </Button>
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className={"w-[120px]"}>{ CommonT("code") }</TableHead>
                            <TableHead>{ CommonT("price") }</TableHead>
                            <TableHead>{ CommonT("changePercentage") }</TableHead>
                            <TableHead>{ CommonT("change") }</TableHead>
                            <TableHead>{ CommonT("open") }</TableHead>
                            <TableHead>{ CommonT("high") }</TableHead>
                            <TableHead>{ CommonT("low") }</TableHead>
                            <TableHead className={"text-right w-[80px]"}>{ CommonT("volume") }</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { loading ? (
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
                        ) : rawData.map((item: any, index: number) => (
                            <TableRow key={index}>
                                <TableCell className={"flex"}>
                                    <Typography className="font-medium">
                                        {item.code}
                                    </Typography>
                                    <Typography variant={"muted"}
                                                className={"ml-2"}>
                                        {item.name}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <span className={rangeCls(item.changesPercentage)}>
                                        {formatMaxFixed(item.open)}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span className={rangeCls(item.changesPercentage)}>
                                        {rangeChange(item.changesPercentage)}
                                    </span>
                                </TableCell>
                                <TableCell>
                                     <span className={rangeCls(item.changesPercentage)}>
                                        {formatMaxFixed(item.change)}
                                    </span>
                                </TableCell>
                                <TableCell>{formatMaxFixed(item.open)}</TableCell>
                                <TableCell>{formatMaxFixed(item.dayHigh)}</TableCell>
                                <TableCell>{formatMaxFixed(item.dayLow)}</TableCell>
                                <TableCell align="right">{convert(item.volume)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default Markets;