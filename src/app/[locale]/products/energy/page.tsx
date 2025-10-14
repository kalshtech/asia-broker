import React from "react";
import { getTranslations } from "next-intl/server";
import Banner from "@/components/common/products/Banner";
import MoreMarkets from "@/components/common/products/MoreMarkets";
import Guide from "@/components/common/Guide";
import FAQSection from "@/components/common/QuestionAnswer";
import JoinCommunity from "@/components/common/JoinCommunity";
import Markets from "@/components/common/products/Markets";
import Profession from "@/components/common/products/Profession";
import MetaProfession from "@/components/common/products/MetaProfession";
import MetaCommission from "./MetaCommission";

export default async function Page() {
    const t = await getTranslations("Pages.products.energy");

    const GuideAry = [
        { url: "/images/products/energy-swiper1.png", title: t("guide.row.col2.span1.title"), description: t("guide.row.col2.span1.desc") },
        { url: "/images/products/energy-swiper2.png", title: t("guide.row.col2.span2.title"), description: t("guide.row.col2.span2.desc") },
        { url: "/images/products/energy-swiper3.png", title: t("guide.row.col2.span3.title"), description: t("guide.row.col2.span3.desc") },
    ];

    const mainList = [
        { symbol: "USOIL",  name: "" },
        { symbol: "UKOIL",  name: "" },
        { symbol: "Heating Oil",  name: "" },
    ];

    const sendList = [
        { symbol: "NATGAS", name: "" }
    ]

    const marketTabList = [
        { label: t("markets.btn.main"), value: "main" },
        { label: t("markets.btn.second"), value: "second" }
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
            answer: (
                <div className="text-muted-foreground leading-[28px] space-y-3">
                    <p>
                        {t("qa.ul.li2.desc")}
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{t("qa.ul.li2.text-1")}</li>
                        <li>{t("qa.ul.li2.text-2")}</li>
                        <li>{t("qa.ul.li2.text-3")}</li>
                    </ul>
                </div>
            ),
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
                        <li>{t("qa.ul.li4.text-4")}</li>
                        <li>{t("qa.ul.li4.text-5")}</li>
                    </ul>
                </div>
            ),
        },
        {
            question: t("qa.ul.li5.title"),
            answer:  (
                <div className="text-muted-foreground leading-[28px] space-y-3">
                    <p>
                        {t("qa.ul.li5.desc")}
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{t("qa.ul.li5.text-1")}</li>
                        <li>{t("qa.ul.li5.text-2")}</li>
                        <li>{t("qa.ul.li5.text-3")}</li>
                        <li>{t("qa.ul.li5.text-4")}</li>
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
                imageUrl={"bg-[url(/images/products/energy-background.png)]"}
                midst={t("banner.midst")}
            />
            <Markets
                mainRaw={mainList}
                secondRaw={sendList}
                tabList={marketTabList}
                title={t("markets.title")}
                desc={t("markets.desc")}
                trade={t("markets.trade")}
            />
            <MetaProfession rowAry={rowAry} title={t("professional.title")} />
            <MetaCommission/>
            <MoreMarkets
                title={t("moreMarket.title")}
                desc={t("moreMarket.desc")}
                btnText={t("moreMarket.btnText")}
                imageUrl={"bg-[url(/images/products/energy-market-background.png)]"}
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