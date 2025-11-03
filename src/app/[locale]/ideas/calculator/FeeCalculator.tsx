"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const FeeCalculator = () => {
    const t = useTranslations("Pages.ideas.calculator.fee");
    const [ formData, setFormData ] = React.useState({
        base: "USD",
        currency: "EURUSD",
        leverage: "50",
        volume: "1",
        lots: "1000",
        rate: ""
    });
    const [ result, setResult ] = React.useState("--");

    const tabList = [
        { label: t("tabs.forex"), value: "forex" },
        { label: t("tabs.commodity"), value: "commodity" },
        { label: t("tabs.indices"), value: "indices" },
        { label: t("tabs.stock"), value: "stock" },
        { label: t("tabs.crypto"), value: "crypto" },
    ];

    const TypeAry = [
        { label: "USD", value: "USD", image: "/images/ideas/USD-tag.png" },
        { label: "EUR", value: "EUR", image: "/images/ideas/EUR-tag.png" },
        { label: "JPY", value: "JPY", image: "/images/ideas/JPY-tag.png" },
        { label: "GBP", value: "GBP", image: "/images/ideas/GBP-tag.png" },
        { label: "CAD", value: "CAD", image: "/images/ideas/CAD-tag.png" },
        { label: "AUD", value: "AUD", image: "/images/ideas/AUD-tag.png" },
        { label: "CHF", value: "CHF", image: "/images/ideas/CHF-tag.png" },
        { label: "NZD", value: "NZD", image: "/images/ideas/NZD-tag.png" },
    ];

    const CurrencyPairAry = [
        { label: "AUDCAD", value: "AUDCAD" },
        { label: "AUDCHF", value: "AUDCHF" },
        { label: "AUDJPY", value: "AUDJPY" },
        { label: "AUDNZD", value: "AUDNZD" },
        { label: "AUDUSD", value: "AUDUSD" },
        { label: "CADCHF", value: "CADCHF" },
        { label: "CADJPY", value: "CADJPY" },
        { label: "CHFJPY", value: "CHFJPY" },
        { label: "EURAUD", value: "EURAUD" },
        { label: "EURCAD", value: "EURCAD" },
        { label: "EURCHF", value: "EURCHF" },
        { label: "EURGBP", value: "EURGBP" },
        { label: "EURJPY", value: "EURJPY" },
        { label: "EURNZD", value: "EURNZD" },
        { label: "EURUSD", value: "EURUSD" },
        { label: "GBPAUD", value: "GBPAUD" },
        { label: "GBPCAD", value: "GBPCAD" },
        { label: "GBPCHF", value: "GBPCHF" },
        { label: "GBPJPY", value: "GBPJPY" },
        { label: "GBPNZD", value: "GBPNZD" },
        { label: "GBPUSD", value: "GBPUSD" },
        { label: "NZDCAD", value: "NZDCAD" },
        { label: "NZDCHF", value: "NZDCHF" },
        { label: "NZDJPY", value: "NZDJPY" },
        { label: "NZDUSD", value: "NZDUSD" },
        { label: "USDCAD", value: "USDCAD" },
        { label: "USDCHF", value: "USDCHF" },
        { label: "USDJPY", value: "USDJPY" },
    ];

    const levelAry = [
        { label: "1:1", value: "1" },
        { label: "10:1", value: "10" },
        { label: "20:1", value: "20" },
        { label: "50:1", value: "50" },
        { label: "100:1", value: "100" },
        { label: "200:1", value: "200" },
        { label: "300:1", value: "300" },
        { label: "500:1", value: "500" },
        { label: "1000:1", value: "1000" },
        { label: "2000:1", value: "2000" },
    ];

    const lotsAry = [
        { label: "1", value: "1" },
        { label: "100", value: "100" },
        { label: "1000", value: "1000" },
        { label: "10000", value: "10000" },
        { label: "100000", value: "100000" },
    ];

    const handleGetRateValue = () => {
        fetch(`https://api.fastbull.com/fastbull-quotes-service/api/getMarginConvert?depositCurrency=${formData.base}&symbol=${formData.currency}`)
            .then(response => response.json()).then(result => {
            const body = JSON.parse(result.bodyMessage);
            setFormData((prevState)=> ({ ...prevState, rate: body.price }));
        })
    }

    const handleCalculateResult = () => {
        setResult((+formData.rate * +formData.lots * +formData.volume / +formData.leverage).toFixed(3))
    }

    React.useEffect(() => {
        handleGetRateValue();
    }, [formData.base, formData.currency])

    return (
        <section className={"py-16 xl:py-30"}>
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
                </motion.div>
                <div className={"mt-10 bg-theme-light-bg rounded-xs p-4 lg:px-20 lg:py-12"}>
                    <div className={"grid gap-4 lg:gap-8 grid-cols-1 lg:grid-cols-2"}>
                        <div className={""}>
                            <Label htmlFor="type" className={"px-1 mb-2"}>
                                {t("form.type")}
                            </Label>
                            <Select
                                value={formData.base}
                                onValueChange={(e) => setFormData(prevState => ({
                                    ...prevState,
                                    base: e
                                }))}
                            >
                                <SelectTrigger className={"bg-white py-6 w-full lg:min-w-40"}>
                                    <SelectValue placeholder={t("form.type")}/>
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        TypeAry.map((d, i) => (
                                            <SelectItem key={i} value={d.value}>
                                                <img src={d.image} className={"w-6 h-6 rounded-full mr-0.5"} alt=""/>
                                                {d.label}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={""}>
                            <Label htmlFor="currency" className={"px-1 mb-2"}>
                                {t("form.currency")}
                            </Label>
                            <Select
                                value={formData.currency}
                                onValueChange={(e) => setFormData(prevState => ({
                                    ...prevState,
                                    currency: e
                                }))}
                            >
                                <SelectTrigger className={"bg-white py-6 w-full lg:min-w-40"}>
                                    <SelectValue placeholder={t("form.currency")}/>
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        CurrencyPairAry.map((d, i) => (
                                            <SelectItem key={i} value={d.value}>
                                                {d.label}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={""}>
                            <Label htmlFor="level" className={"px-1 mb-2"}>
                                {t("form.level")}
                            </Label>
                            <Select
                                value={formData.leverage}
                                onValueChange={(e) => setFormData(prevState => ({
                                    ...prevState,
                                    leverage: e
                                }))}
                            >
                                <SelectTrigger className={"bg-white py-6 w-full lg:min-w-40"}>
                                    <SelectValue placeholder={t("form.level")}/>
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        levelAry.map((d, i) => (
                                            <SelectItem key={i} value={d.value}>
                                                {d.label}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={""}>
                            <Label htmlFor="volume" className={"px-1 mb-2"}>
                                {t("form.volume")}
                            </Label>
                            <Input
                                value={formData.volume}
                                placeholder={t("form.volume")}
                                className={"py-6 bg-white"}
                                onChange={(e) => {
                                    setFormData(prevState => {
                                        return {
                                            ...prevState,
                                            volume: e.target.value
                                        }
                                    })
                                }}
                            />
                        </div>
                        <div className={""}>
                            <Label htmlFor="size" className={"px-1 mb-2"}>
                                {t("form.size")}
                            </Label>
                            <Select
                                value={formData.lots}
                                onValueChange={(e) => setFormData(prevState => ({
                                    ...prevState,
                                    lots: e
                                }))}
                            >
                                <SelectTrigger className={"bg-white py-6 w-full lg:min-w-40"}>
                                    <SelectValue placeholder={t("form.size")}/>
                                </SelectTrigger>
                                <SelectContent>
                                    {
                                        lotsAry.map((d, i) => (
                                            <SelectItem key={i} value={d.value}>
                                                {d.label}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                        <div className={""}>
                            <Label htmlFor="rate" className={"px-1 mb-2"}>
                                {t("form.rate")}
                            </Label>
                            <Input
                                value={formData.rate}
                                placeholder={t("form.rate")}
                                className={"py-6 bg-white"}
                                onChange={(e) => {
                                    setFormData(prevState => {
                                        return {
                                            ...prevState,
                                            rate: e.target.value
                                        }
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className={"mt-4"}>
                        <Button
                            className={"w-full py-3.5 lg:py-6 rounded-lg bg-theme-active hover:bg-theme-active-hover mt-6"}
                            onClick={handleCalculateResult}
                        >
                            {t("form.calculate")}
                        </Button>
                    </div>
                    <div className={"flex flex-col my-8"}>
                        <Typography variant={"muted"}>
                            Margin Calculation (USD)
                        </Typography>
                        <div className={"bg-white p-10 border rounded-lg mt-4"}>
                            <Typography
                                variant={"h3"}
                                className={"font-medium"}
                            >
                                { result }
                            </Typography>
                        </div>
                    </div>
                    {/*<div className="flex items-center my-8">*/}
                    {/*    <Separator className="flex-1"/>*/}
                    {/*    <span className="mx-4 text-sm text-muted-foreground font-medium">*/}
                    {/*        {t("form.result")}*/}
                    {/*    </span>*/}
                    {/*    <Separator className="flex-1"/>*/}
                    {/*</div>*/}
                    {/*<div className={"grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12"}>*/}
                    {/*    <div className={""}>*/}
                    {/*        <div className={"flex mb-2"}>*/}
                    {/*            <Typography variant={"muted"}>*/}
                    {/*                {t("form.margin")}*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant={"muted"} className={"ml-auto"}>*/}
                    {/*                {t("form.margin")}*/}
                    {/*            </Typography>*/}
                    {/*        </div>*/}
                    {/*        <Separator className="flex-1"/>*/}
                    {/*    </div>*/}
                    {/*    <div className={""}>*/}
                    {/*        <div className={"flex mb-2"}>*/}
                    {/*            <Typography variant={"muted"}>*/}
                    {/*                {t("form.shortCredit")}*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant={"muted"} className={"ml-auto"}>*/}
                    {/*                {t("form.shortCredit")}*/}
                    {/*            </Typography>*/}
                    {/*        </div>*/}
                    {/*        <Separator className="flex-1"/>*/}
                    {/*    </div>*/}
                    {/*    <div className={""}>*/}
                    {/*        <div className={"flex mb-2"}>*/}
                    {/*            <Typography variant={"muted"}>*/}
                    {/*                {t("form.cost")}*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant={"muted"} className={"ml-auto"}>*/}
                    {/*                {t("form.cost")}*/}
                    {/*            </Typography>*/}
                    {/*        </div>*/}
                    {/*        <Separator className="flex-1"/>*/}
                    {/*    </div>*/}
                    {/*    <div className={""}>*/}
                    {/*        <div className={"flex mb-2"}>*/}
                    {/*            <Typography variant={"muted"}>*/}
                    {/*                {t("form.longCredit")}*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant={"muted"} className={"ml-auto"}>*/}
                    {/*                {t("form.longCredit")}*/}
                    {/*            </Typography>*/}
                    {/*        </div>*/}
                    {/*        <Separator className="flex-1"/>*/}
                    {/*    </div>*/}
                    {/*    <div className={""}>*/}
                    {/*        <div className={"flex mb-2"}>*/}
                    {/*            <Typography variant={"muted"}>*/}
                    {/*                {t("form.fee")}*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant={"muted"} className={"ml-auto"}>*/}
                    {/*                {t("form.fee")}*/}
                    {/*            </Typography>*/}
                    {/*        </div>*/}
                    {/*        <Separator className="flex-1"/>*/}
                    {/*    </div>*/}
                    {/*    <div className={""}>*/}
                    {/*        <div className={"flex mb-2"}>*/}
                    {/*            <Typography variant={"muted"}>*/}
                    {/*                {t("form.pointValue")}*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant={"muted"} className={"ml-auto"}>*/}
                    {/*                {t("form.pointValue")}*/}
                    {/*            </Typography>*/}
                    {/*        </div>*/}
                    {/*        <Separator className="flex-1"/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                {/*<Typography variant={"muted"} className={"text-center mx-auto mt-8 max-w-2xl"}>*/}
                {/*    {t("disclaimer")}*/}
                {/*</Typography>*/}
            </Container>
        </section>
    )
}

export default FeeCalculator;