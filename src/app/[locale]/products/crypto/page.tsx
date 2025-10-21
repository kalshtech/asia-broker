import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "@/components/common/products/Banner";
import MoreMarkets from "@/components/common/products/MoreMarkets";
import Guide from "@/components/common/Guide";
import FAQSection from "@/components/common/QuestionAnswer";
import JoinCommunity from "@/components/common/JoinCommunity";
import Markets from "@/components/common/products/Markets";
import Profession from "@/components/common/products/Profession";
import MetaProfession from "@/components/common/products/MetaProfession";
import MetaCommission from "@/components/common/products/MetaCommission";
import MetaMoreMarkets from "@/components/common/products/MetaMoreMarkets";

export default async function Page() {
    const t = await getTranslations("Pages.products.crypto");

    const GuideAry = [
        { url: "/images/products/crypto-swiper1.png", title: t("guide.row.col2.span1.title"), description: t("guide.row.col2.span1.desc") },
        { url: "/images/products/crypto-swiper2.png", title: t("guide.row.col2.span2.title"), description: t("guide.row.col2.span2.desc") },
        { url: "/images/products/crypto-swiper3.png", title: t("guide.row.col2.span3.title"), description: t("guide.row.col2.span3.desc") },
    ];

    const mainForexList = [
        { symbol: "BTCUSD", ticker: "BTC/USD", name: "" },
        { symbol: "ETHUSD", ticker: "ETH/USD", name: "" },
        { symbol: "SOLUSD", ticker: "SOL/USD", name: "" },
        { symbol: "AVAXUSD", ticker: "AVAX/USD", name: "" },
        { symbol: "ADAUSD", ticker: "ADA/USD", name: "" },
        { symbol: "ATOMUSD", ticker: "ATOM/USD", name: "" },
        { symbol: "LTCUSD", ticker: "LTC/USD", name: "" },
        { symbol: "BCHUSD", ticker: "BCH/USD", name: "" },
        { symbol: "TONUSD", ticker: "TON/USD", name: "" },
        { symbol: "APTUSD", ticker: "APT/USD", name: "" },
        { symbol: "TRXUSD", ticker: "TRX/USD", name: "" },
        { symbol: "EOSUSD", ticker: "EOS/USD", name: "" },
    ];

    const secondForexList = [
        { symbol: "BNBUSD", ticker: "BNB/USD", name: "" },
        { symbol: "OKBUSD", ticker: "OKB/USD", name: "" },
        { symbol: "HTUSD", ticker: "HT/USD", name: "" },
        { symbol: "BITUSD", ticker: "BIT/USD", name: "" },
        { symbol: "LDOUSD", ticker: "LDO/USD", name: "" },
        { symbol: "UNIUSD", ticker: "UNI/USD", name: "" },
        { symbol: "FILUSD", ticker: "FIL/USD", name: "" },
        { symbol: "BATUSD", ticker: "BAT/USD", name: "" },
        { symbol: "XRPUSD", ticker: "XRP/USD", name: "" },
        { symbol: "XLMUSD", ticker: "XLM/USD", name: "" },
        { symbol: "LINKUSD", ticker: "LINK/USD", name: "" },
        { symbol: "PYTHUSD", ticker: "PYTH/USD", name: "" }
    ]

    const otherForexList = [
        { symbol: "DOGEUSD", ticker: "DOGE/USD", name: "" },
        { symbol: "SHIBUSD", ticker: "SHIB/USD", name: "" },
        { symbol: "PEPEUSD", ticker: "PEPE/USD", name: "" },
        { symbol: "WIFUSD", ticker: "WIF/USD", name: "" },
        { symbol: "FLOKIUSD", ticker: "FLOKI/USD", name: "" },
        { symbol: "TRUMPUSD", ticker: "TRUMP/USD", name: "" },
        { symbol: "XMRUSD", ticker: "XMR/USD", name: "" },
        { symbol: "ZECUSD", ticker: "ZEC/USD", name: "" },
        { symbol: "DASHUSD", ticker: "DASH/USD", name: "" }
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
            answer: (
                <div className="text-muted-foreground leading-[28px] space-y-3">
                    <p>
                        {t("qa.ul.li3.desc")}
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{t("qa.ul.li3.text-1")}</li>
                        <li>{t("qa.ul.li3.text-2")}</li>
                        <li>{t("qa.ul.li3.text-3")}</li>
                    </ul>
                    <p className="text-sm">
                        {t("qa.ul.li3.prompt")}
                    </p>
                </div>
            ),
        },
        {
            question: t("qa.ul.li4.title"),
            answer: t("qa.ul.li4.desc"),
        },
        {
            question: t("qa.ul.li5.title"),
            answer: t("qa.ul.li5.desc"),
        },
        {
            question: t("qa.ul.li6.title"),
            answer: (
                <div className="text-muted-foreground leading-[28px] space-y-3">
                    <p>{t("qa.ul.li6.desc")}</p>
                    <p>{t("qa.ul.li6.prompt")}</p>
                </div>
            ),
        },
    ];

    return (
        <div>
            <Banner
                title={t("banner.title")}
                midst={t("banner.midst")}
                description={t("banner.description")}
                imageUrl={"bg-[url(/images/products/crypto-background.png)]"}
            />
            <Markets
                mainRaw={mainForexList}
                secondRaw={secondForexList}
                otherRaw={otherForexList}
                tabList={marketTabList}
                title={t("markets.title")}
                desc={t("markets.desc")}
                trade={t("markets.trade")}
            />
            <MetaProfession
                rowAry={rowAry}
                title={t("professional.title")}
            />
            <MetaCommission
                languageLocal={"Pages.products.crypto"}
                backgroundImage={"bg-[url(/images/products/stocks-commission-background.png)]"}
                isShowOpenBtn={false}
            />
            <MetaMoreMarkets
                languageLocal={"Pages.products.crypto"}
                backgroundImage={"bg-[url(/images/products/stocks-market-background.png)]"}
            />

            <Guide
                title={t("guide.title")}
                left={{
                    title: t("guide.row.col1.title"),
                    midst: t("guide.row.col1.midst"),
                    desc: t("guide.row.col1.desc"),
                    more: t("guide.row.col1.more")
                }}
                prevEl={"crypto-custom-prev"}
                nextEl={"crypto-custom-next"}
                ary={GuideAry}
            />
            <Profession/>
            <FAQSection data={QA_DATA}/>
            <JoinCommunity/>
        </div>
    )
}