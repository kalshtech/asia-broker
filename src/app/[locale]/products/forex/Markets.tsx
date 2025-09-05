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
import { params_forex_quote } from "@/params/api";
import { http } from "@/utils/http";
import { rangeCls, formatMaxFixed } from "@/utils/common";
import {Skeleton} from "@/components/ui/skeleton";

const mainForexList = [
    { code: "EURUSD", ticker: "EUR/USD", name: "Euro - U.S. Dollar" },
    { code: "USDJPY", ticker: "USD/JPY", name: "U.S. Dollar - Japanese Yen" },
    { code: "GBPUSD", ticker: "GBP/USD", name: "British Pound Sterling - U.S. Dollar" },
    { code: "USDCHF", ticker: "USD/CHF", name: "U.S. Dollar - Swiss Franc" },
    { code: "AUDUSD", ticker: "AUD/USD", name: "Australian Dollar - U.S. Dollar" },
    { code: "NZDUSD", ticker: "NZD/USD", name: "New Zealand Dollar - U.S. Dollar" },
    { code: "USDCAD", ticker: "USD/CAD", name: "U.S. Dollar - Canadian Dollar" },
];

const secondForexList = [
    { code: "AUDCAD", ticker: "AUD/CAD", name: "Australian Dollar - Canadian Dollar" },
    { code: "AUDCHF", ticker: "AUD/CHF", name: "Australian Dollar - Swiss Franc" },
    { code: "AUDJPY", ticker: "AUD/JPY", name: "Australian Dollar - Japanese Yen" },
    { code: "AUDNZD", ticker: "AUD/NZD", name: "Australian Dollar - New Zealand Dollar" },
    { code: "CADCHF", ticker: "CAD/CHF", name: "Canadian Dollar - Swiss Franc" },
    { code: "CADJPY", ticker: "CAD/JPY", name: "Canadian Dollar - Japanese Yen" },
    { code: "CHFJPY", ticker: "CHF/JPY", name: "Swiss Franc - Japanese Yen" },
    { code: "EURAUD", ticker: "EUR/AUD", name: "Euro - Australian Dollar" },
    { code: "EURCAD", ticker: "EUR/CAD", name: "Euro - Canadian Dollar" },
    { code: "EURCHF", ticker: "EUR/CHF", name: "Euro - Swiss Franc" },
    { code: "EURGBP", ticker: "EUR/GBP", name: "Euro - British Pound Sterling" },
    { code: "EURJPY", ticker: "EUR/JPY", name: "Euro - Japanese Yen" },
    { code: "EURNZD", ticker: "EUR/NZD", name: "Euro - New Zealand Dollar" },
    { code: "GBPAUD", ticker: "GBP/AUD", name: "British Pound Sterling - Australian Dollar" },
    { code: "GBPCAD", ticker: "GBP/CAD", name: "British Pound Sterling - Canadian Dollar" },
    { code: "GBPCHF", ticker: "GBP/CHF", name: "British Pound Sterling - Swiss Franc" },
    { code: "GBPJPY", ticker: "GBP/JPY", name: "British Pound Sterling - Japanese Yen" },
    { code: "GBPNZD", ticker: "GBP/NZD", name: "British Pound Sterling - New Zealand Dollar" },
    { code: "NZDCAD", ticker: "NZD/CAD", name: "New Zealand Dollar - Canadian Dollar" },
    { code: "NZDCHF", ticker: "NZD/CHF", name: "New Zealand Dollar - Swiss Franc" },
    { code: "NZDJPY", ticker: "NZD/JPY", name: "New Zealand Dollar - Japanese Yen" },
]

const otherForexList = [
    { code: "EURHUF", ticker: "EUR/HUF", name: "Euro - Hungarian Forint" },
    { code: "EURPLN", ticker: "EUR/PLN", name: "Euro - Polish Złoty" },
    { code: "EURTRY", ticker: "EUR/TRY", name: "Euro - Turkish Lira" },
    { code: "USDCNH", ticker: "USD/CNH", name: "U.S. Dollar - Chinese Yuan (Offshore)" },
    { code: "USDHKD", ticker: "USD/HKD", name: "U.S. Dollar - Hong Kong Dollar" },
    { code: "USDSGD", ticker: "USD/SGD", name: "U.S. Dollar - Singapore Dollar" },
    { code: "USDCZK", ticker: "USD/CZK", name: "U.S. Dollar - Czech Koruna" },
    { code: "USDDKK", ticker: "USD/DKK", name: "U.S. Dollar - Danish Krone" },
    { code: "USDHUF", ticker: "USD/HUF", name: "U.S. Dollar - Hungarian Forint" },
    { code: "USDMXN", ticker: "USD/MXN", name: "U.S. Dollar - Mexican Peso" },
    { code: "USDNOK", ticker: "USD/NOK", name: "U.S. Dollar - Norwegian Krone" },
    { code: "USDPLN", ticker: "USD/PLN", name: "U.S. Dollar - Polish Złoty" },
    { code: "USDRUB", ticker: "USD/RUB", name: "U.S. Dollar - Russian Ruble" },
    { code: "USDTRY", ticker: "USD/TRY", name: "U.S. Dollar - Turkish Lira" },
    { code: "USDSEK", ticker: "USD/SEK", name: "U.S. Dollar - Swedish Krona" },
    { code: "USDZAR", ticker: "USD/ZAR", name: "U.S. Dollar - South African Rand" },
];

const Markets = () => {
    const t = useTranslations("Pages.products.forex.markets");
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
        const params = { ...params_forex_quote.params, symbols: symbols };
        try {
            setLoading(true);
            const result = await http.get(params_forex_quote.url, { params });
            if(result.data.status === 0) {
                const quoteData = await result.data.data;
                setRawData((prevState: any) => {
                    return prevState.map((prevItem: any) => {
                        quoteData.forEach((quoteItem: any) => {
                            quoteItem.changePercentage = (quoteItem.changes / quoteItem.open) * 100;
                            if(quoteItem.ticker === prevItem.ticker) {
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
                            <TableHead>{ CommonT("bid") }</TableHead>
                            <TableHead>{ CommonT("ask") }</TableHead>
                            <TableHead>{ CommonT("high") }</TableHead>
                            <TableHead className={"text-right w-[80px]"}>{ CommonT("low") }</TableHead>
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
                                    <span className={rangeCls(item.changePercentage)}>
                                        {formatMaxFixed(item.open)}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <span className={rangeCls(item.changePercentage)}>
                                        {formatMaxFixed(item.changePercentage)}
                                    </span>
                                </TableCell>
                                <TableCell>
                                     <span className={rangeCls(item.changePercentage)}>
                                        {formatMaxFixed(item.changes)}
                                    </span>
                                </TableCell>
                                <TableCell>{formatMaxFixed(item.bid)}</TableCell>
                                <TableCell>{formatMaxFixed(item.ask)}</TableCell>
                                <TableCell>{formatMaxFixed(item.high)}</TableCell>
                                <TableCell align="right">{formatMaxFixed(item.low)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default Markets;