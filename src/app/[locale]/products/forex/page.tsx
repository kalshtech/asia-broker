import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "@/components/common/products/Banner";
import Markets from "@/components/common/products/Markets";
import Row from "@/components/common/products/Row"
import Guide from "@/components/common/Guide";
import Profession from "@/components/common/products/Profession";
import FAQSection from "@/components/common/QuestionAnswer";
import JoinCommunity from "@/components/common/JoinCommunity";
import MetaCommission from "@/components/common/products/MetaCommission";
import { Typography } from "@/components/ui/typography";
import { ExternalLink } from "lucide-react";


export default async function Page() {
    const t = await getTranslations("Pages.products.forex");

    const mainList = [
        { symbol: "EURUSD", ticker: "EUR/USD", name: "Euro - U.S. Dollar" },
        { symbol: "USDJPY", ticker: "USD/JPY", name: "U.S. Dollar - Japanese Yen" },
        { symbol: "GBPUSD", ticker: "GBP/USD", name: "British Pound Sterling - U.S. Dollar" },
        { symbol: "USDCHF", ticker: "USD/CHF", name: "U.S. Dollar - Swiss Franc" },
        { symbol: "AUDUSD", ticker: "AUD/USD", name: "Australian Dollar - U.S. Dollar" },
        { symbol: "NZDUSD", ticker: "NZD/USD", name: "New Zealand Dollar - U.S. Dollar" },
        { symbol: "USDCAD", ticker: "USD/CAD", name: "U.S. Dollar - Canadian Dollar" },
    ];

    const secondList = [
        { symbol: "AUDCAD", ticker: "AUD/CAD", name: "Australian Dollar - Canadian Dollar" },
        { symbol: "AUDCHF", ticker: "AUD/CHF", name: "Australian Dollar - Swiss Franc" },
        { symbol: "AUDJPY", ticker: "AUD/JPY", name: "Australian Dollar - Japanese Yen" },
        { symbol: "AUDNZD", ticker: "AUD/NZD", name: "Australian Dollar - New Zealand Dollar" },
        { symbol: "CADCHF", ticker: "CAD/CHF", name: "Canadian Dollar - Swiss Franc" },
        { symbol: "CADJPY", ticker: "CAD/JPY", name: "Canadian Dollar - Japanese Yen" },
        { symbol: "CHFJPY", ticker: "CHF/JPY", name: "Swiss Franc - Japanese Yen" },
        { symbol: "EURAUD", ticker: "EUR/AUD", name: "Euro - Australian Dollar" },
        { symbol: "EURCAD", ticker: "EUR/CAD", name: "Euro - Canadian Dollar" },
        { symbol: "EURCHF", ticker: "EUR/CHF", name: "Euro - Swiss Franc" },
        { symbol: "EURGBP", ticker: "EUR/GBP", name: "Euro - British Pound Sterling" },
        { symbol: "EURJPY", ticker: "EUR/JPY", name: "Euro - Japanese Yen" },
        { symbol: "EURNZD", ticker: "EUR/NZD", name: "Euro - New Zealand Dollar" },
        { symbol: "GBPAUD", ticker: "GBP/AUD", name: "British Pound Sterling - Australian Dollar" },
        { symbol: "GBPCAD", ticker: "GBP/CAD", name: "British Pound Sterling - Canadian Dollar" },
        { symbol: "GBPCHF", ticker: "GBP/CHF", name: "British Pound Sterling - Swiss Franc" },
        { symbol: "GBPJPY", ticker: "GBP/JPY", name: "British Pound Sterling - Japanese Yen" },
        { symbol: "GBPNZD", ticker: "GBP/NZD", name: "British Pound Sterling - New Zealand Dollar" },
        { symbol: "NZDCAD", ticker: "NZD/CAD", name: "New Zealand Dollar - Canadian Dollar" },
        { symbol: "NZDCHF", ticker: "NZD/CHF", name: "New Zealand Dollar - Swiss Franc" },
        { symbol: "NZDJPY", ticker: "NZD/JPY", name: "New Zealand Dollar - Japanese Yen" },
    ]

    const otherList = [
        { symbol: "EURHUF", ticker: "EUR/HUF", name: "Euro - Hungarian Forint" },
        { symbol: "EURPLN", ticker: "EUR/PLN", name: "Euro - Polish Złoty" },
        { symbol: "EURTRY", ticker: "EUR/TRY", name: "Euro - Turkish Lira" },
        { symbol: "USDCNH", ticker: "USD/CNH", name: "U.S. Dollar - Chinese Yuan (Offshore)" },
        { symbol: "USDHKD", ticker: "USD/HKD", name: "U.S. Dollar - Hong Kong Dollar" },
        { symbol: "USDSGD", ticker: "USD/SGD", name: "U.S. Dollar - Singapore Dollar" },
        { symbol: "USDCZK", ticker: "USD/CZK", name: "U.S. Dollar - Czech Koruna" },
        { symbol: "USDDKK", ticker: "USD/DKK", name: "U.S. Dollar - Danish Krone" },
        { symbol: "USDHUF", ticker: "USD/HUF", name: "U.S. Dollar - Hungarian Forint" },
        { symbol: "USDMXN", ticker: "USD/MXN", name: "U.S. Dollar - Mexican Peso" },
        { symbol: "USDNOK", ticker: "USD/NOK", name: "U.S. Dollar - Norwegian Krone" },
        { symbol: "USDPLN", ticker: "USD/PLN", name: "U.S. Dollar - Polish Złoty" },
        { symbol: "USDRUB", ticker: "USD/RUB", name: "U.S. Dollar - Russian Ruble" },
        { symbol: "USDTRY", ticker: "USD/TRY", name: "U.S. Dollar - Turkish Lira" },
        { symbol: "USDSEK", ticker: "USD/SEK", name: "U.S. Dollar - Swedish Krona" },
        { symbol: "USDZAR", ticker: "USD/ZAR", name: "U.S. Dollar - South African Rand" },
    ];

    const marketTabList = [
        { label: t("markets.btn.main"), value: "main" },
        { label: t("markets.btn.second"), value: "second" },
        { label: t("markets.btn.other"), value: "other" },
    ];


    const rowAry = [
        { imageUrl: "/images/products/future-professional1.png", title: t("professional.row.col1.title"), desc: t("professional.row.col1.desc") },
        { imageUrl: "/images/products/future-professional2.png", title: t("professional.row.col2.title"), desc: t("professional.row.col2.desc") },
        { imageUrl: "/images/products/future-professional3.png", title: t("professional.row.col3.title"), desc: t("professional.row.col3.desc") },
        { imageUrl: "/images/products/future-professional4.png", title: t("professional.row.col4.title"), desc: t("professional.row.col4.desc") },
    ];
    
    const QA_DATA = [
        {
            question: t("qa.ul.li1.title"),
            answer: t("qa.ul.li1.desc")
        },
        {
            question: t("qa.ul.li2.title"),
            answer: t("qa.ul.li2.desc"),
        },
        {
            question: t("qa.ul.li3.title"),
            answer: t("qa.ul.li3.desc"),
        },
        {
            question: t("qa.ul.li4.title"),
            answer: t("qa.ul.li4.desc"),
        },
        {
            question: t("qa.ul.li5.title"),
            answer: (
                <div className="text-muted-foreground leading-[28px] space-y-3">
                    <p>
                        {t("qa.ul.li5.desc")}
                    </p>
                    <p className="text-sm">
                        <a href="/" className={"underline"}>
                            {t("qa.ul.li5.prompt")}
                        </a>
                    </p>
                </div>
            ),
        },
        {
            question: t("qa.ul.li6.title"),
            answer: (
                <div className="text-muted-foreground leading-[28px] space-y-3">
                    <p>{t("qa.ul.li6.desc")}</p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{t("qa.ul.li6.text-1")}</li>
                    </ul>
                </div>
            ),
        },
    ];

    const GuideAry =  [
        { url: "/images/products/forex-swiper1.png", title: t("guide.row.col2.span1.title"), description: t("guide.row.col2.span1.desc") },
        { url: "/images/products/forex-swiper2.png", title: t("guide.row.col2.span2.title"), description: t("guide.row.col2.span2.desc") },
        { url: "/images/products/forex-swiper3.png", title: t("guide.row.col2.span3.title"), description: t("guide.row.col2.span3.desc") },
    ];

    return (
        <div>
            <Banner
                title={t("banner.title")}
                description={t("banner.description")}
                imageUrl={"bg-[url(/images/products/forex-background-mobile.png)] xl:bg-[url(/images/products/forex-background.png)]"}
                midst={t("banner.midst")}
            />
            <Markets
                mainRaw={mainList}
                secondRaw={secondList}
                otherRaw={otherList}
                tabList={marketTabList}
                title={t("markets.title")}
                trade={t("markets.trade")}
                desc={t("markets.desc")}
            />
            <Row
                ary={rowAry}
                title={t("professional.title")}
            >
                <div>
                    <Typography
                        variant={"muted"}
                        className={"max-w-2xl text-center mx-auto mt-10"}
                    >
                        { t("professional.desc") }
                    </Typography>
                    <div className={"mt-4 mx-auto text-center flex flex-col xl:flex-row justify-center"}>
                        <a href="/" className={"text-sm font-medium flex ml-2 justify-center items-center"}>
                            <Typography variant={"muted"} className={"pr-1"}>
                                { t("professional.link1") }
                            </Typography>
                            <Typography variant={"muted"}>
                                { t("professional.link2") }
                            </Typography>
                            <ExternalLink className={"w-4 ml-2"} />
                        </a>
                    </div>
                </div>
            </Row>
            <MetaCommission
                languageLocal={"Pages.products.forex"}
                backgroundImage={"bg-[url(/images/products/forex-kline-background.png)]"}
            />
            <Guide
                title={t("guide.title")}
                left={{ title: t("guide.row.col1.title"), desc: t("guide.row.col1.desc"), more: t("guide.row.col1.more") }}
                prevEl={"forex-custom-prev"}
                nextEl={"forex-custom-next"}
                ary={GuideAry}
            />
            <Profession/>
            <FAQSection data={QA_DATA} />
            <JoinCommunity/>
        </div>
    )
}