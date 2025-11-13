import React from "react";
import { getTranslations } from "next-intl/server";
import Banner from "@/components/common/products/Banner";
import Guide from "@/components/common/Guide";
import FAQSection from "@/components/common/QuestionAnswer";
import JoinCommunity from "@/components/common/JoinCommunity";
import Markets from "@/components/common/products/Markets";
import Profession from "@/components/common/products/Profession";
import Row from "@/components/common/products/Row"
import MetaCommission from "@/components/common/products/MetaCommission";

export default async function Page() {
    const t = await getTranslations("Pages.products.stocks");

    const GuideAry = [
        { url: "/images/products/stocks-swiper1.png", title: t("guide.row.col2.span1.title"), description: t("guide.row.col2.span1.desc") },
        { url: "/images/products/stocks-swiper2.png", title: t("guide.row.col2.span2.title"), description: t("guide.row.col2.span2.desc") },
        { url: "/images/products/stocks-swiper3.png", title: t("guide.row.col2.span3.title"), description: t("guide.row.col2.span3.desc") },
    ];

    const mainList = [
        { symbol: "AA",  name: "" },
        { symbol: "AAPL",  name: "" },
        { symbol: "AMZN",  name: "" },
        { symbol: "AXP",  name: "" },
        { symbol: "BA",  name: "" },
        { symbol: "BAC",  name: "" },
        { symbol: "CAT", name: "" },
        // { symbol: "CSCO", name: "" },
        // { symbol: "CVX", name: "" },
        // { symbol: "DIS", name: "" },
        // { symbol: "EBAY", name: "" },
        // { symbol: "F", name: "" },
        // { symbol: "FDX", name: "" },
        // { symbol: "GE", name: "" },
        // { symbol: "GOOG", name: "" },
        // { symbol: "HD", name: "" },
        // { symbol: "HPQ", name: "" },
        // { symbol: "IBM", name: "" },
        // { symbol: "INTC", name: "" },
        // { symbol: "JNJ", name: "" },
        // { symbol: "JPM", name: "" },
        // { symbol: "KO", name: "" },
        // { symbol: "MCD", name: "" },
        // { symbol: "META", name: "" },
        // { symbol: "MMM", name: "" },
        // { symbol: "MSFT", name: "" },
        // { symbol: "NKE", name: "" },
        // { symbol: "PEP", name: "" },
        // { symbol: "PFE", name: "" },
        // { symbol: "PG", name: "" },
        // { symbol: "T", name: "" },
        // { symbol: "TSLA", name: "" },
        // { symbol: "WMT", name: "" },
        // { symbol: "XOM", name: "" },
    ];

    const marketTabList = [
        { label: t("markets.btn.main"), value: "main" },
        // { label: t("markets.btn.second"), value: "second" },
        // { label: t("markets.btn.other"), value: "other" },
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
            answer: t("qa.ul.li5.desc")
        },
        {
            question: t("qa.ul.li6.title"),
            answer:  (
                <div className="text-muted-foreground leading-[28px] space-y-3">
                    <p>
                        {t("qa.ul.li6.desc")}
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{t("qa.ul.li6.text-1")}</li>
                        <li>{t("qa.ul.li6.text-2")}</li>
                        <li>{t("qa.ul.li6.text-3")}</li>
                        <li>{t("qa.ul.li6.text-4")}</li>
                        <li>{t("qa.ul.li6.text-5")}</li>
                    </ul>
                </div>
            ),
        },
    ];

    return (
        <div>
            <Banner
                title={t("banner.title")}
                description={t("banner.desc")}
                imageUrl={"bg-[url(/images/products/stocks-background-mobile.png)] lg:bg-[url(/images/products/stocks-background.png)]"}
                midst={t("banner.midst")}
            />
            <Markets
                mainRaw={mainList}
                title={t("markets.title")}
                desc={t("markets.desc")}
                trade={t("markets.trade")}
                tabList={marketTabList}
            />
            <Row
                ary={rowAry}
                title={t("professional.title")}
            />
            <MetaCommission
                languageLocal={"Pages.products.stocks"}
                backgroundImage={"bg-[url(/images/products/stocks-commission-background.png)]"}
            />
            <Guide
                title={t("guide.title")}
                left={{ title: t("guide.row.col1.title"), desc: t("guide.row.col1.desc"), more: t("guide.row.col1.more") }}
                prevEl={"crypto-custom-prev"}
                nextEl={"crypto-custom-next"}
                ary={GuideAry}
            />
            <Profession/>
            <FAQSection data={QA_DATA} />
            <JoinCommunity/>
        </div>
    )
}