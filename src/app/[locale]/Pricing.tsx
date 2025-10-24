"use client";
import * as React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import Container from "@/components/Container";
import Image from "next/image";
import RealTimeUpdate from "@/components/charts/RealtimeUpdate";
import { Link } from "@/i18n/navigation";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

function Counter({from = 10, to = 0, duration = 1.2, decimals = 0, trigger}: { from?: number; to?: number; duration?: number; decimals?: number; trigger?: any; }) {
    const el = React.useRef<HTMLSpanElement>(null)
    return <span ref={el} className={"text-2xl text-[#3967FF]"}>{from.toFixed ? from.toFixed(decimals) : from}</span>
}

const EnglishPricing = () => {
    const t = useTranslations("Pages.home.pricing");
    const locale = useLocale();
    const cardsWrapRef = React.useRef<HTMLDivElement | null>(null);
    const isEn = locale === "en";

    const popularFutures = [
        { label: "BTC", img: "/images/home/en-pricing-futures1.png" },
        { label: "Gold", img: "/images/home/en-pricing-futures2.png" },
        { label: "Apple", img: "/images/home/en-pricing-futures3.png" },
        { label: "Telsa", img: "/images/home/en-pricing-futures4.png" },
        { label: "Nasdaq", img: "/images/home/en-pricing-futures5.png" },
        { label: "WTI", img: "/images/home/en-pricing-futures6.png" },
    ];

    const listAry = [
        {
            title: "Crypto",
            path: "/products/crypto",
            children: [
                { img: "/images/home/crypto-5.svg", label: "Bitcoin" },
                { img: "/images/home/crypto-6.svg", label: "Ethereum" },
                { img: "/images/home/crypto-4.svg", label: "Solana" }
            ]
        },
        {
            title: "Precious Metals",
            path: "/products/pm",
            children: [
                { img: "/images/home/gold.svg", label: "XAU/USD" },
                { img: "/images/home/gold.svg", label: "XAG/USD" },
                { img: "/images/home/gold.svg", label: "XPT/USD" }
            ]
        },
        {
            title: "Forex",
            path: "/products/forex",
            children: [
                { img: "/images/home/forex-4.svg", label: "EUR/USD" },
                { img: "/images/home/forex-5.svg", label: "GBP/JPY" },
                { img: "/images/home/forex-6.svg", label: "AUD/USD" }
            ]
        },
        {
            title: "Energy",
            path: "/products/energy",
            children: [
                { img: "/images/home/energy1.svg", label: "WTI Crude Oil" },
                { img: "/images/home/energy1.svg", label: "Brent Crude Oil" },
                { img: "/images/home/energy2.svg", label: "Natural Gas" }
            ]
        },
        {
            title: "Stocks & ETFs",
            path: "/products/stocks",
            children: [
                { img: "/images/home/stock-2.svg", label: "AAPL" },
                { img: "/images/home/stock-3.svg", label: "TSLA" },
                { img: "/images/home/stock-4.svg", label: "SPY" }
            ]
        },
        {
            title: "Futures",
            path: "/products/future",
            children: [
                { img: "/images/home/future-1.svg", label: "S&P 500" },
                { img: "/images/home/future-2.svg", label: "Nasdaq 100" },
                { img: "/images/home/future-2.svg", label: "US 10Y Treasury" }
            ]
        }
    ];

    return (
        <section ref={cardsWrapRef}  className={"bg-[linear-gradient(180deg,#000516_0%,#1C327B_48%,#000516_100%)] py-4 lg:py-20"}>
            <Container>
                <div>
                    <div>
                        <Typography variant={"h3"} className={"!text-white text-center"}>
                            {t("left.title1")}
                        </Typography>

                        <Typography variant={"h4"} className={"font-normal text-center !text-white mt-6"}>
                            {t("left.title2")} {t("left.title3")}
                        </Typography>
                    </div>

                    <div className={"grid grid-cols-12 gap-4 lg:gap-12 mt-10"}>
                        <div className={"col-span-12 lg:col-span-4"}>
                            <div className={"bg-black py-20 px-16 rounded-lg shadow-[10px_10px_20px_0px_rgba(0,0,0,0.3)] lg:mt-10"}>
                                <Typography
                                    variant={"h5"}
                                    className={"!text-white text-center"}
                                >
                                    Popular Futures
                                </Typography>
                                <div className={"grid grid-cols-3 gap-4 space-y-8 mt-16"}>
                                    {
                                        popularFutures.map((d, i) => (
                                            <div className={"text-center"} key={i}>
                                                <img src={d.img} className={"w-12 h-12 mx-auto object-cover"} alt="" />
                                                <Typography
                                                    variant={"muted"}
                                                    className={"!text-white text-center mt-2"}
                                                >
                                                    { d.label }
                                                </Typography>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-4"}>
                            <div className={"bg-black px-4 py-20 rounded-lg shadow-[10px_10px_20px_0px_rgba(0,0,0,0.3)] h-full"}>
                                <RealTimeUpdate/>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-4"}>
                            <div className={"bg-black p-4 rounded-lg shadow-[10px_10px_20px_0px_rgba(0,0,0,0.3)] lg:mt-10"}>
                                <div className={"grid grid-cols-2 gap-4"}>
                                    {
                                        listAry.map((d, i) => (
                                            <div key={i}
                                                 className={"bg-[#18203B] py-4 px-3 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105"}
                                            >
                                                <Link href={d.path}>
                                                    <ul>
                                                        {
                                                            d.children.map((c, ci) => (
                                                                <li key={ci}
                                                                    className={"mt-4 flex items-center rounded-lg first:mt-0"}>
                                                                    <img src={c.img} className={"object-cover"} alt=""/>
                                                                    <Typography variant={"muted"}
                                                                                className={"!text-xs !text-[#B5BAC9] ml-2"}
                                                                    >
                                                                        {c.label}
                                                                    </Typography>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                    <div className={"mt-1"}>
                                                        <Typography
                                                            variant={"muted"}
                                                            className={"!text-white text-center mt-2"}
                                                        >
                                                            {d.title}
                                                        </Typography>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={"flex justify-center mt-10 lg:mt-24"}>
                            <Button className={"bg-white text-theme-active cursor-pointer hover:bg-white"}>
                                {t("left.btnText")}
                            </Button>
                            <Button
                                className={"bg-transparent ml-4 text-white border cursor-pointer hover:bg-transparent"}>
                                {t("left.more")}
                            </Button>
                        </div>
                        <div>
                            <Typography variant={"muted"} className={"!text-white text-center mx-auto mt-8"}>
                                {t("left.description2")}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

const OtherPricing = () => {
    const t = useTranslations("Pages.home.pricing");
    const locale = useLocale();
    const cardsWrapRef = React.useRef<HTMLDivElement | null>(null);
    const isEn = locale === "en";

    const CryptoAry = [
        {imageNumber: "1", name: "Bitcoin"},
        {imageNumber: "2", name: "Ethereum"},
        {imageNumber: "3", name: "Ripple"},
    ];

    const CommodityAry = [
        {imageNumber: "1", name: "XAU USD"},
        {imageNumber: "1", name: "XAG/USD"},
        {imageNumber: "1", name: "WTI"},
    ];

    const ForexAry = [
        {imageNumber: "1", name: "EUR/USD"},
        {imageNumber: "2", name: "GBP/USD" },
        { imageNumber: "3", name: "GBP/JPY" },
    ];

    const StockAry = [
        { imageNumber: "1", name: "S&P 500" },
        { imageNumber: "2", name: "Nasdaq 100" },
        { imageNumber: "3", name: "Dow Jones" },
    ];

    return (
        <section ref={cardsWrapRef}  className={"bg-[linear-gradient(270deg,_#000C35_37%,_#1F3A93_100%)]"}>
            <Container>
                <div className={"grid gap-4 grid-cols-12 lg:py-10"}>
                    <div className={"flex-1 col-span-12 lg:col-span-7"}>
                        <div className={"flex flex-col mt-8 lg:mt-16"}>
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount: 0.5}}
                                className={"flex flex-col h-full"}
                            >
                                <Typography variant={"h3"} className={"!text-white max-w-3xl"}>
                                    {t("left.title1")}
                                </Typography>

                                <Typography variant={"h4"} className={"font-medium !text-white mt-6"}>
                                    {t("left.title2")}
                                </Typography>
                                <Typography variant={"h4"} className={"font-medium !text-white"}>
                                    {t("left.title3")}
                                </Typography>
                                <Typography className={"!text-white text-base max-w-3xl mt-10"}>
                                    {t("left.description2")}
                                </Typography>

                                <div className={"mt-10 lg:mt-27"}>
                                    <Button className={"bg-white text-theme-active cursor-pointer hover:bg-white"}>
                                        {t("left.btnText")}
                                    </Button>

                                    {
                                        isEn && (
                                            <Button className={"bg-transparent ml-4 text-white border cursor-pointer hover:bg-transparent"}>
                                                {t("left.more")}
                                            </Button>
                                        )
                                    }
                                </div>

                                <Typography variant={"muted"} className={"!text-white mt-12 lg:mt-40"}>
                                    {t("left.fromText")}
                                </Typography>
                            </motion.div>
                        </div>
                    </div>
                    <div className={"flex-1 col-span-12 lg:col-span-5"}>
                        <header>
                            <Typography className={"font-normal !text-white"}>
                                {t("right.title")}
                            </Typography>
                        </header>
                        <section className={"mt-10 h-[calc(100%-84px)]"}>
                            <div className={"h-full grid grid-cols-1 md:grid-cols-2 gap-6"}>
                                <div className={"h-full bg-[rgba(123,130,154,0.4)] rounded-lg px-4 py-6"}
                                     data-anim="from-top">
                                    <div className={"flex items-center"}>
                                        <Typography className={"!text-white"}>
                                            {t("right.crypto")}
                                        </Typography>
                                        <div className={"ml-auto flex items-center"}>
                                            <Counter
                                                from={10}
                                                to={0}
                                                duration={1.2}
                                                decimals={1}
                                                trigger={cardsWrapRef}
                                            />
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white !text-xs ml-2"}
                                            >
                                                {t("right.commission")}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={"mt-6"}>
                                        {
                                            CryptoAry.map((d, index) => (
                                                <div className={"flex my-4"} key={index}>
                                                    <Image
                                                        src={`/images/home/crypto-${d.imageNumber}.svg`}
                                                        width={20}
                                                        height={20}
                                                        alt={"icon"}
                                                        title={"icon"}
                                                    />
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white !text-xs ml-2"}
                                                    >
                                                        {d.name}
                                                    </Typography>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className={""}>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
                                        >
                                            {t("right.more")}
                                        </Typography>
                                        <div className={"mt-4"}>
                                            <Typography
                                                className={"!text-white"}
                                            >
                                                {t("right.prompt")}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className={"h-full bg-[rgba(123,130,154,0.4)] rounded-lg px-4 py-6"}
                                     data-anim="from-top">
                                    <div className={"flex items-center"}>
                                        <Typography className={"!text-white"}>
                                            {t("right.commodity")}
                                        </Typography>
                                        <div className={"ml-auto flex items-center"}>
                                            <Counter
                                                from={10}
                                                to={0}
                                                duration={1.2}
                                                decimals={1}
                                                trigger={cardsWrapRef}
                                            />
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white !text-xs ml-2"}
                                            >
                                                {t("right.commission")}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={"mt-6"}>
                                        {
                                            CommodityAry.map((d, index) => (
                                                <div className={"flex my-4"} key={index}>
                                                    <Image
                                                        src={`/images/home/commodity-${d.imageNumber}.svg`}
                                                        width={20}
                                                        height={20}
                                                        alt={"icon"}
                                                        title={"icon"}
                                                    />
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white !text-xs ml-2"}
                                                    >
                                                        {d.name}
                                                    </Typography>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className={""}>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
                                        >
                                            {t("right.more")}
                                        </Typography>
                                        <div className={"mt-4"}>
                                            <Typography
                                                className={"!text-white"}
                                            >
                                                {t("right.prompt")}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className={"h-full bg-[rgba(123,130,154,0.4)] rounded-lg px-4 py-6"}
                                     data-anim="from-bottom">
                                    <div className={"flex items-center"}>
                                        <Typography className={"!text-white"}>
                                            {t("right.forex")}
                                        </Typography>
                                        <div className={"ml-auto flex items-center"}>
                                            <Counter
                                                from={10}
                                                to={0}
                                                duration={1.2}
                                                decimals={1}
                                                trigger={cardsWrapRef}
                                            />
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white !text-xs ml-2"}
                                            >
                                                {t("right.commission")}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={"mt-6"}>
                                        {
                                            ForexAry.map((d, index) => (
                                                <div className={"flex my-4"} key={index}>
                                                    <Image
                                                        src={`/images/home/forex-${d.imageNumber}.svg`}
                                                        width={20}
                                                        height={20}
                                                        alt={"icon"}
                                                        title={"icon"}
                                                    />
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white !text-xs ml-2"}
                                                    >
                                                        {d.name}
                                                    </Typography>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className={""}>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
                                        >
                                            {t("right.more")}
                                        </Typography>
                                        <div className={"mt-4"}>
                                            <Typography
                                                className={"!text-white"}
                                            >
                                                {t("right.prompt")}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className={"h-full bg-[rgba(123,130,154,0.4)] rounded-lg px-4 py-6"}
                                     data-anim="from-bottom">
                                    <div className={"flex items-center"}>
                                        <Typography className={"!text-white"}>
                                            {t("right.index")}
                                        </Typography>
                                        <div className={"ml-auto flex items-center"}>
                                            <Counter
                                                from={10}
                                                to={0}
                                                duration={1.2}
                                                decimals={1}
                                                trigger={cardsWrapRef}
                                            />
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white !text-xs ml-2"}
                                            >
                                                {t("right.commission")}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={"mt-6"}>
                                        {
                                            StockAry.map((d, index) => (
                                                <div className={"flex my-4"} key={index}>
                                                    <Image
                                                        src={`/images/home/crypto-${d.imageNumber}.svg`}
                                                        width={20}
                                                        height={20}
                                                        alt={"icon"}
                                                        title={"icon"}
                                                    />
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white !text-xs ml-2"}
                                                    >
                                                        {d.name}
                                                    </Typography>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className={""}>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
                                        >
                                            {t("right.more")}
                                        </Typography>
                                        <div className={"mt-4"}>
                                            <Typography
                                                className={"!text-white"}
                                            >
                                                {t("right.prompt")}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </section>
    )
}

const Pricing = () => {
    const t = useTranslations("Pages.home.pricing");
    const locale = useLocale();
    const isEn = locale === "en";

    return isEn ? <EnglishPricing/> : <OtherPricing/>
}

export default Pricing;