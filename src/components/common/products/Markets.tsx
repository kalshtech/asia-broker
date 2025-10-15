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
import {params_quote_query} from "@/params/api";
import { http } from "@/utils/http";
import {convert, rangeCls, formatMaxFixed, rangeChange} from "@/utils/common";
import { Skeleton } from "@/components/ui/skeleton";
import {motion, Variants} from "framer-motion";
import SimpleSearch from "@/components/common/SimpleSearch";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

interface TabItem {
    label: string;
    value: string;
}

interface RawItem {
    symbol: string;
    ticker?: string;
    name?: string;
}

type Props = {
    mainRaw: RawItem[] | any;
    secondRaw?: RawItem[] | any;
    otherRaw?: RawItem[] | any;
    other4Raw?: any;
    title: string;
    desc?: string;
    tabList?: TabItem[];
    trade: string;
    type?: string;
    placeholder?: string;
};

const Markets = (props: Props) => {
    const CommonT = useTranslations("Common");
    const { mainRaw, secondRaw, otherRaw, title, desc, tabList, trade, other4Raw, type = "elementary", placeholder } = props;

    const [ tabActive, setTabActive ] = React.useState<string>("main");
    const [ rawData, setRawData ] = React.useState<RawItem[]>(mainRaw);
    const [ loading, setLoading ] = React.useState<boolean>(true);

    const handleToggleTabActive = (active: string) => {
        setTabActive(active);

        switch (active) {
            case "main":
                setRawData(mainRaw);
                return;
            case "second":
                if(secondRaw) {
                    setRawData(secondRaw);
                }
                return;
            case "other":
                if(otherRaw) {
                    setRawData(otherRaw);
                }
                return;
            case "other-meta":
                if(otherRaw) {
                    setRawData(other4Raw);
                }
                return;
            default:
                setRawData(mainRaw);
                return;
        }
    }


    const handleLoadQuoteData = async () => {
        const symbols = rawData.map((item: any) => item.symbol).join(',');
        const params = { ...params_quote_query.params, symbols: symbols };
        try {
            setLoading(true);
            const result = await http.get(params_quote_query.url, { params });
            if(result.data.status === 0) {
                const quoteData = await result.data.data;
                setRawData((prevState: any) => {
                    return prevState.map((prevItem: any) => {
                        quoteData.forEach((quoteItem: any) => {
                            if(quoteItem.symbol === prevItem.symbol) {
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
        if(type === "elementary") {
            handleLoadQuoteData();
        } else if (type === "future") {
            setLoading(false);
        }
    }, [ tabActive ]);

    return (
        <section className={"py-4 lg:py-10"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    className={"mt-4 lg:mt-16"}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center"}
                    >
                        {title}
                    </Typography>
                    {
                        desc && (
                            <Typography
                                variant={"muted"}
                                className={"text-center mt-6"}
                            >
                                {desc}
                            </Typography>
                        )
                    }
                </motion.div>
                <div className={"mt-4 lg:mt-16"}>
                    <SimpleSearch placeholder={placeholder} onSelect={(opt) => console.log("picked:", opt)}/>
                </div>
                {
                    tabList && (
                        <div className={"mt-10"}>
                            <Tabs value={tabActive}
                                  className={"flex justify-center items-center"}
                                  onValueChange={handleToggleTabActive}
                            >
                                <TabsList className={"h-10 rounded-full"}>
                                    {
                                        tabList.map((item, index) => (
                                            <TabsTrigger
                                                key={index}
                                                value={item.value}
                                                className={"px-4 lg:px-8 h-10 cursor-pointer rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}
                                            >
                                                {item.label}
                                            </TabsTrigger>
                                        ))
                                    }
                                </TabsList>
                            </Tabs>
                        </div>
                    )
                }
                <div className={"mt-10"}>
                    {type === "elementary" && (
                        <Table>
                            <TableCaption className={"mt-16"}>
                                <Button
                                    className={"bg-theme-active rounded-full px-8 h-10 hover:bg-theme-active-hover"}>
                                    {trade}
                                </Button>
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className={"w-[120px]"}>{CommonT("code")}</TableHead>
                                    <TableHead>{CommonT("price")}</TableHead>
                                    <TableHead>{CommonT("changePercentage")}</TableHead>
                                    <TableHead>{CommonT("change")}</TableHead>
                                    <TableHead>{CommonT("open")}</TableHead>
                                    <TableHead>{CommonT("high")}</TableHead>
                                    <TableHead>{CommonT("low")}</TableHead>
                                    <TableHead className={"text-right w-[80px]"}>{CommonT("volume")}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
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
                                ) : rawData.map((item: any, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className={"flex"}>
                                            <Typography variant={"p"} className="font-medium">
                                                {item.symbol}
                                            </Typography>
                                            <Typography variant={"muted"} className={"ml-2"}>
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
                    )}

                    {type === "future" && (
                        <Table>
                            <TableCaption className={"mt-16"}>
                                <Button
                                    className={"bg-theme-active rounded-full px-8 h-10 hover:bg-theme-active-hover"}>
                                    {trade}
                                </Button>
                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>{CommonT("code")}</TableHead>
                                    <TableHead>{CommonT("productName")}</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {rawData.map((item: any, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell className={"flex"}>
                                            <Typography className="font-medium">
                                                {item.symbol}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>{item.name}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </Container>
        </section>
    )
}

export default Markets;