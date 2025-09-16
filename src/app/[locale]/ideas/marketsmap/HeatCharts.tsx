"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import {useLocale, useTranslations} from "next-intl";
import { Typography } from "@/components/ui/typography";
import TvStockHeatmap from "./TvStockHeatmap";
import TvForexHeatmap from "./TvForexHeatmap";
import TvCryptoHeatmap from "./TvCryptoHeatmap";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import {useMemo} from "react";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const HeatCharts = () => {
    const t = useTranslations("Pages.ideas.marketsmap.charts");
    const router = useRouter();
    const searchParams = useSearchParams();
    const locale = useLocale();

    const tab = searchParams.get("tab") || "Overview";
    const type = searchParams.get("type") || "cross";

    const [ tabActive, setTabActive ] = React.useState<string>(tab)
    const [ typeActive, setTypeActive ] = React.useState<string>(type)
    const tabList = [
        { label: "Overview", value: "Overview" },
        { label: "Europe & Americas", value: "Europe or Americas" },
        { label: "Asia-Pacific, Middle East & Africa", value: "Asia-Pacific, Middle East or Africa" },
        { label: "G7 & BRICS", value: "G7 or BRICS" },
    ];

    const overViewCurrencies = ["EUR", "USD", "AUD", "GBP", "NZD", "CAD", "CHF", "JPY", "CNY"];
    const EuropeOrAmericasCurrencies = ["EUR", "CHF", "GBP", "DKK", "NOK", "SEK", "PLN", "USD", "CAD", "BRL"];
    const AsiaOrMiddleEastCurrencies = ["AUD", "NZD", "HKD", "TWD", "SGD", "CNY", "JPY", "KRW", "AED"];
    const G7OrBRICSCurrencies = ["USD", "EUR", "GBP", "JPY", "CAD", "CNY", "BRL", "INR", "RUB", "ZAR"];

    const handleToggleTabActive = (active: string) => {
        setTabActive(active);
        router.push(`/ideas/marketsmap/?tab=${active}&type=${type}`);
    }

    const handleToggleTypeActive = (active: string) => {
        setTypeActive(active);
        router.push(`/ideas/marketsmap/?tab=${tab}&type=${active}`);
    }

    const currencies = useMemo(() => {
        switch (tab) {
            case "Overview":
                return overViewCurrencies;
            case "Europe or Americas":
                return EuropeOrAmericasCurrencies;
            case "Asia-Pacific, Middle East or Africa":
                return AsiaOrMiddleEastCurrencies;
            case "G7 or BRICS":
                return G7OrBRICSCurrencies;
            default:
                return overViewCurrencies;
        }
    }, [tabActive])

    return (
        <section className={"p-30"}>
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
                    {t("stock-title")}
                </Typography>
                <Typography
                    variant={"large"}
                    className={"font-medium text-center mx-auto mt-10"}
                >
                    {t("stock-desc")}
                </Typography>
                <div className={"mt-6 flex justify-center"}>
                    <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                        {t("stock-explore")}
                    </Button>
                </div>
            </motion.div>
            <div className={"mt-10"}>
                <TvStockHeatmap/>
            </div>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                className={"mt-30"}
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    {t("forex-title")}
                </Typography>
                <Typography
                    variant={"large"}
                    className={"font-medium text-center mx-auto mt-10"}
                >
                    {t("forex-desc")}
                </Typography>
                <div className={"mt-6 flex justify-center"}>
                    <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                        {t("forex-explore")}
                    </Button>
                </div>
            </motion.div>
            <div className={"mt-16 flex items-center"}>
                <Tabs value={tabActive}
                      className={"flex"}
                      onValueChange={handleToggleTabActive}
                >
                    <TabsList className={"h-10"}>
                        {
                            tabList.map((item, index) => (
                                <TabsTrigger
                                    key={index}
                                    value={item.value}
                                    className={"px-8 h-10 cursor-pointer rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}
                                >
                                    {item.label}
                                </TabsTrigger>
                            ))
                        }
                    </TabsList>
                </Tabs>
                <Tabs value={typeActive}
                      className={"flex ml-auto"}
                      onValueChange={handleToggleTypeActive}
                >
                    <TabsList className={"h-10"}>
                        <TabsTrigger value={"cross"}
                                     className={"px-8 h-10 cursor-pointer rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}>
                            Cross rates
                        </TabsTrigger>
                        <TabsTrigger value={"heatmap"}
                                     className={"px-8 h-10 cursor-pointer rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}>
                            Heatmap
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <div className={"mt-4"}>
                <TvForexHeatmap type={typeActive} currencies={currencies} locale={locale}/>
            </div>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                className={"mt-30"}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    {t("forex-title")}
                </Typography>
                <Typography
                    variant={"large"}
                    className={"font-medium text-center mx-auto mt-10"}
                >
                    {t("forex-desc")}
                </Typography>
                <div className={"mt-6 flex justify-center"}>
                    <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                        {t("forex-explore")}
                    </Button>
                </div>
            </motion.div>
            <div className={"mt-10"}>
                <TvCryptoHeatmap/>
            </div>
        </section>
    )
}

export default HeatCharts;