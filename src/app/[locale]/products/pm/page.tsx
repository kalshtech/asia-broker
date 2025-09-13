import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "@/components/common/products/Banner";
import Commission from "@/components/common/products/Commission";
import MoreMarkets from "@/components/common/products/MoreMarkets";
import Guide from "@/components/common/Guide";
import FAQSection from "@/components/common/QuestionAnswer";
import JoinCommunity from "@/components/common/JoinCommunity";
import Markets from "@/components/common/products/Markets";

export default async function Page() {
    const t = await getTranslations("Pages.products.pm");

    const GuideAry = [
        { url: "/images/products/crypto-swiper1.png", title: t("guide.row.col2.span1.title"), description: t("guide.row.col2.span1.desc") },
        { url: "/images/products/crypto-swiper2.png", title: t("guide.row.col2.span2.title"), description: t("guide.row.col2.span2.desc") },
        { url: "/images/products/crypto-swiper3.png", title: t("guide.row.col2.span3.title"), description: t("guide.row.col2.span3.desc") },
    ];

    const mainList = [
        { symbol: "XAUUSD", name: "" },
        { symbol: "XAUCNH", name: "" },
        { symbol: "XAUHKD", name: "" },
        { symbol: "LAUHKD", name: "" },
        { symbol: "RKGCNH", name: "" },
        { symbol: "XAUEUR", name: "" },
        { symbol: "XAUJPY", name: "" },
        { symbol: "XAUTHB", name: "" },
        { symbol: "XAUAUD", name: "" },
        { symbol: "XAUGBP", name: "" },
        { symbol: "XAUSGD", name: "" },
        { symbol: "XAGUSD", name: "" },
        { symbol: "XAGEUR", name: "" },
        { symbol: "XAGSGD", name: "" },
        { symbol: "XPTUSD", name: "" },
        { symbol: "XPDUSD", name: "" },
    ];

    const secondList = [
        { symbol: "XCUUSD", name: "" },
        { symbol: "XALUSD", name: "" },
        { symbol: "XZNUSD", name: "" },
        { symbol: "XNIUSD", name: "" },
        { symbol: "XPBUSD", name: "" },
    ]

    const marketTabList = [
        { label: t("markets.btn.main"), value: "main" },
        { label: t("markets.btn.second"), value: "second" }
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
            answer: (
                <div className="text-muted-foreground leading-[28px] space-y-3">
                    <p>
                        {t("qa.ul.li4.desc")}
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{t("qa.ul.li4.text-1")}</li>
                        <li>{t("qa.ul.li4.text-2")}</li>
                        <li>{t("qa.ul.li4.text-3")}</li>
                    </ul>
                    <p className="text-sm">
                        {t("qa.ul.li4.prompt")}
                    </p>
                </div>
            )
        },
        {
            question: t("qa.ul.li5.title"),
            answer: t("qa.ul.li5.desc"),
        },
        {
            question: t("qa.ul.li6.title"),
            answer: t("qa.ul.li6.desc"),
        },
    ];

    return (
        <div>
            <Banner
                title={t("banner.title")}
                description={t("banner.desc")}
                midst={t("banner.midst")}
                imageUrl={"bg-[url(/images/products/pm-background.png)]"}
            />
            <Markets
                mainRaw={mainList}
                secondRaw={secondList}
                tabList={marketTabList}
                title={t("markets.title")}
                desc={t("markets.desc")}
                trade={t("markets.trade")}
            />
            <Commission
                title={t("commission.title")}
                desc={t("commission.desc")}
                more={t("commission.more")}
                theme={"light"}
                imageUrl={"bg-[url(/images/products/pm-commission-background.png)]"}
            />
            <MoreMarkets
                title={t("moreMarket.title")}
                desc={t("moreMarket.desc")}
                midst={t("moreMarket.midst")}
                btnText={t("moreMarket.btnText")}
                imageUrl={"bg-[url(/images/products/pm-market-background.png)]"}
            />

            <Guide
                title={t("guide.title")}
                left={{ title: t("guide.row.col1.title"), desc: t("guide.row.col1.desc"), more: t("guide.row.col1.more") }}
                prevEl={"crypto-custom-prev"}
                nextEl={"crypto-custom-next"}
                ary={GuideAry}
            />
            <FAQSection data={QA_DATA} />
            <JoinCommunity/>
        </div>
    )
}