"use client";
import * as React from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import RealTimeUpdate from "@/components/charts/RealtimeUpdate";
import { Link } from "@/i18n/navigation";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

function Counter({from = 10, to = 0, duration = 1.2, decimals = 0, trigger}: { from?: number; to?: number; duration?: number; decimals?: number; trigger?: any; }) {
    const el = React.useRef<HTMLSpanElement>(null)
    return <span ref={el} className={"text-2xl text-[#3967FF]"}>{from.toFixed ? from.toFixed(decimals) : from}</span>
}

const EnglishPricing = () => {
    const t = useTranslations("Pages.home.pricing");
    const CommonT = useTranslations("Common");
    const cardsWrapRef = React.useRef<HTMLDivElement | null>(null);

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
            title: CommonT("crypto"),
            path: "/products/crypto",
            children: [
                { img: "/images/home/crypto-5.svg", label: "Bitcoin" },
                { img: "/images/home/crypto-6.svg", label: "Ethereum" },
                { img: "/images/home/crypto-4.svg", label: "Solana" }
            ]
        },
        {
            title: CommonT("metals"),
            path: "/products/pm",
            children: [
                { img: "/images/home/gold.svg", label: "XAU/USD" },
                { img: "/images/home/gold.svg", label: "XAG/USD" },
                { img: "/images/home/gold.svg", label: "XPT/USD" }
            ]
        },
        {
            title: CommonT("forex"),
            path: "/products/forex",
            children: [
                { img: "/images/home/forex-4.svg", label: "EUR/USD" },
                { img: "/images/home/forex-5.svg", label: "GBP/JPY" },
                { img: "/images/home/forex-6.svg", label: "AUD/USD" }
            ]
        },
        {
            title: CommonT("energy"),
            path: "/products/energy",
            children: [
                { img: "/images/home/energy1.svg", label: "WTI Crude Oil" },
                { img: "/images/home/energy1.svg", label: "Brent Crude Oil" },
                { img: "/images/home/energy2.svg", label: "Natural Gas" }
            ]
        },
        {
            title: CommonT("usStock"),
            path: "/products/stocks",
            children: [
                { img: "/images/home/stock-2.svg", label: "AAPL" },
                { img: "/images/home/stock-3.svg", label: "TSLA" },
                { img: "/images/home/stock-4.svg", label: "SPY" }
            ]
        },
        {
            title: CommonT("futures"),
            path: "/products/future",
            children: [
                { img: "/images/home/future-1.svg", label: "S&P 500" },
                { img: "/images/home/future-2.svg", label: "Nasdaq 100" },
                { img: "/images/home/future-2.svg", label: "US 10Y Treasury" }
            ]
        }
    ];

    return (
        <section ref={cardsWrapRef}  className={"bg-[linear-gradient(180deg,#000516_0%,#1C327B_48%,#000516_100%)] py-16"}>
            <Container>
                <div>
                    <div>
                        <Typography variant={"h3"} className={"!text-white text-center"}>
                            {t("left.title1")}
                        </Typography>

                        <Typography variant={"h6"} className={"font-normal text-center !text-white mt-6"}>
                            {t("left.title2")}{t("left.title3")}
                        </Typography>
                    </div>

                    <div className={"grid grid-cols-12 gap-4 xl:gap-12 mt-10"}>
                        <div className={"col-span-12 xl:col-span-4"}>
                            <div className={"px-8 py-10 xl:py-20 xl:px-16 xl:bg-black xl:rounded-lg xl:shadow-[10px_10px_20px_0px_rgba(0,0,0,0.3)] xl:mt-10"}>
                                <Typography
                                    variant={"h4"}
                                    className={"!text-white text-center"}
                                >
                                    { t("popular") }
                                </Typography>
                                <div className={"grid grid-cols-3 gap-4 space-y-0 lg:space-y-8 mt-8 lg:mt-12 xl:mt-16"}>
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
                        <div className={"col-span-12 xl:col-span-4"}>
                            <div className={"hidden lg:block bg-black px-4 py-20 rounded-lg shadow-[10px_10px_20px_0px_rgba(0,0,0,0.3)] h-full"}>
                                <RealTimeUpdate/>
                            </div>
                        </div>
                        <div className={"col-span-12 xl:col-span-4"}>
                            <div className={"bg-black p-4 rounded-lg shadow-[10px_10px_20px_0px_rgba(0,0,0,0.3)] xl:mt-10"}>
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
                        <div className={"hidden xl:flex justify-center mt-10 xl:mt-24"}>
                            <GeneralLinkBtn
                                text={t("left.btnText")}
                                path={"/accounts/platinum"}
                            />
                            <GeneralLinkBtn
                                text={t("left.more")}
                                path={"/products/rates"}
                                theme={"light-hollow"}
                                className={"ml-4"}
                            />
                        </div>
                        <div className={"flex justify-center flex-col xl:hidden mt-10 xl:mt-24"}>
                            <GeneralLinkBtn
                                text={t("left.btnText")}
                                path={"/accounts/platinum"}
                                className={"mx-auto"}
                            />
                            <div className={"flex justify-center"}>
                                <GeneralLinkBtn
                                    text={t("left.more")}
                                    path={"/products/rates"}
                                    theme={"share"}
                                    className={"mt-4"}
                                />
                            </div>
                        </div>
                        <div className={"pb-8 xl:pb-0"}>
                            <Typography variant={"muted"} className={"hidden xl:block !text-white text-center mx-auto mt-8"}>
                                {t("left.description2")}
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}


const Pricing = () => {
    return <EnglishPricing/>
}

export default Pricing;