import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "@/components/common/products/Banner";
import Markets from "@/components/common/products/Markets";
import QuestionAnswer from "@/components/common/QuestionAnswer";
import JoinCommunity from "@/components/common/JoinCommunity";
import Guide from "@/components/common/Guide";
import Row from "@/components/common/products/Row";
import Profession from "@/components/common/products/Profession";
import MetaCommission from "@/components/common/products/MetaCommission";

export default async function Page() {
    const t = await getTranslations("Pages.products.future");
    const mainList = [
        { symbol: "6A", name: "AUD/USD Futures" },
        { symbol: "6B", name: "GBP/USD Futures" },
        { symbol: "6C", name: "CAD/USD Futures" },
        { symbol: "6E", name: "EUR/USD Futures" },
        { symbol: "6J", name: "JPY/USD Futures" },
        { symbol: "6S", name: "CHF/USD Futures" },
        { symbol: "UC", name: "CNH/USD Futures" }
    ];

    const secondList = [
        { symbol: "ES", name: "S&P 500 Index Futures" },
        { symbol: "MES", name: "Micro S&P 500 Index Futures" },
        { symbol: "NQ", name: "Nasdaq-100 Index Futures" },
        { symbol: "MNQ", name: "Micro Nasdaq-100 Index Futures" },
        { symbol: "YM", name: "Dow Jones Index Futures" },
        { symbol: "MYM", name: "Micro Dow Jones Index Futures" },
        { symbol: "FDAX", name: "German DAX Index Futures" },
        // { symbol: "FDXM", name: "Mini DAX Index Futures" },
        // { symbol: "FESX", name: "EURO STOXX 50 Index Futures" },
        // { symbol: "HSI", name: "Hang Seng Index Futures" },
        // { symbol: "MHI", name: "Mini Hang Seng Index Futures" },
        // { symbol: "HHI", name: "Hang Seng China Enterprises Index Futures" },
        // { symbol: "HTI", name: "Hang Seng Tech Index Futures" },
        // { symbol: "MCA", name: "Mid-Cap A-Share Index Futures" },
        // { symbol: "MCH", name: "Small-Cap A-Share Index Futures" }
    ];

    const otherList = [
        { symbol: "CL", name: "Crude Oil Futures" },
        { symbol: "MCL", name: "Micro Crude Oil Futures" },
        { symbol: "QM", name: "Mini Crude Oil Futures" },
        { symbol: "NG", name: "Natural Gas Futures" },
        { symbol: "GC", name: "Gold Futures" },
        { symbol: "MGC", name: "Micro Gold Futures" },
        { symbol: "QO", name: "Mini Gold Futures" },
        { symbol: "SI", name: "Silver Futures" },
        { symbol: "HG", name: "Copper Futures" },
        { symbol: "PL", name: "Platinum Futures" },
        { symbol: "PA", name: "Palladium Futures" }
    ];

    const other4List = [
        { symbol: "ZC", name: "Corn Futures" },
        { symbol: "ZS", name: "Soybean Futures" },
        { symbol: "ZM", name: "Soybean Meal Futures" },
        { symbol: "ZL", name: "Soybean Oil Futures" },
        { symbol: "ZW", name: "Wheat Futures" },
        { symbol: "CN", name: "China Government Bond Futures" },
        { symbol: "FGBL", name: "German Bund Futures" }
    ];

    const marketTabList = [
        { label: t("markets.btn.main"), value: "main" },
        { label: t("markets.btn.second"), value: "second" },
        // { label: t("markets.btn.other"), value: "other" },
        // { label: t("markets.btn.other-meta"), value: "other-meta" },
    ];

    const GuideAry = [
        { url: "/images/products/future-swiper1.png", title: t("guide.row.col2.span1.title"), description: t("guide.row.col2.span1.desc") },
        { url: "/images/products/future-swiper2.png", title: t("guide.row.col2.span2.title"), description: t("guide.row.col2.span2.desc") },
        { url: "/images/products/future-swiper3.png", title: t("guide.row.col2.span3.title"), description: t("guide.row.col2.span3.desc") },
    ];

    const rowAry = [
        { imageUrl: "/images/products/future-professional1.png", title: t("professional.row.col1.title"), midst: t("professional.row.col1.midst"), desc: t("professional.row.col1.desc") },
        { imageUrl: "/images/products/future-professional2.png", title: t("professional.row.col2.title"), midst: t("professional.row.col2.midst"), desc: t("professional.row.col2.desc") },
        { imageUrl: "/images/products/future-professional3.png", title: t("professional.row.col3.title"), midst: t("professional.row.col3.midst"), desc: t("professional.row.col3.desc") },
        { imageUrl: "/images/products/future-professional4.png", title: t("professional.row.col4.title"), midst: t("professional.row.col4.midst"), desc: t("professional.row.col4.desc") },
    ];

    const QA_DATA = [
        {
            question: t("qa.ul.li1.title"),
            answer: t("qa.ul.li1.desc")
        },
        {
            question: t("qa.ul.li2.title"),
            answer:  (
                <div className="text-muted-foreground leading-[28px] space-y-3">
                    <p>
                        {t("qa.ul.li2.desc")}
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{t("qa.ul.li2.text-1")}</li>
                        <li>{t("qa.ul.li2.text-2")}</li>
                        <li>{t("qa.ul.li2.text-3")}</li>
                    </ul>
                    <p>
                        {t("qa.ul.li2.prompt")}
                    </p>
                </div>
            ),
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
        }
    ];


    return (
        <div>
            <Banner
                title={t("banner.title")}
                description={t("banner.desc")}
                imageUrl={"bg-[url(/images/products/future-banner-mobile.png)] xl:bg-[url(/images/products/future-banner.png)]"}
                midst={t("banner.midst")}
            />
            <Markets
                mainRaw={mainList}
                secondRaw={secondList}
                otherRaw={otherList}
                other4Raw={other4List}
                tabList={marketTabList}
                title={t("markets.title")}
                desc={t("markets.desc")}
                trade={t("markets.trade")}
                type={"future"}
                placeholder={t("markets.search")}
            />
            <Row ary={rowAry} title={t("professional.title")} />
            <MetaCommission
                languageLocal={"Pages.products.future"}
                backgroundImage={"bg-[url(/images/products/forex-kline-background.png)]"}
                isShowCommission={false}
            />
            <Guide
                title={t("guide.title")}
                left={{ title: t("guide.row.col1.title"), desc: t("guide.row.col1.desc"), more: t("guide.row.col1.more") }}
                prevEl={"crypto-custom-prev"}
                nextEl={"crypto-custom-next"}
                ary={GuideAry}
            />
            <Profession/>
            <QuestionAnswer data={QA_DATA} />
            <JoinCommunity/>
        </div>
    )
}