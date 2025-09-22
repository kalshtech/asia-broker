import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "@/components/common/products/Banner";
import Markets from "@/components/common/products/Markets";
import Professional from "./Professional";
import QuestionAnswer from "@/components/common/QuestionAnswer";
import JoinCommunity from "@/components/common/JoinCommunity";
import Guide from "@/components/common/Guide";
import MoreMarkets from "@/components/common/products/MoreMarkets";

export default async function Page() {
    const t = await getTranslations("Pages.products.future");
    const mainList = [
        { symbol: "6A",  name: "澳元/美元（AUD/USD）期货" },
        { symbol: "6B",  name: "英镑/美元（GBP/USD）期货" },
        { symbol: "6C",  name: "加元/美元（CAD/USD）期货" },
        { symbol: "6E",  name: "欧元/美元（EUR/USD）期货" },
        { symbol: "6J",  name: "日元/美元（JPY/USD）期货" },
        { symbol: "6S",  name: "瑞士法郎/美元（CHF/USD）期货" },
        { symbol: "UC", name: "人民币相关期货（CNH/USD）" }
    ];

    const secondList = [
        { symbol: "ES",  name: "标准普尔500指数期货" },
        { symbol: "MES",  name: "微型标普500指数期货" },
        { symbol: "NQ",  name: "纳斯达克100指数期货" },
        { symbol: "MNQ",  name: "微型纳斯达克100指数期货" },
        { symbol: "YM",  name: "道琼斯30指数期货" },
        { symbol: "MYM",  name: "微型道琼斯指数期货" },
        { symbol: "FDAX", name: "德国DAX指数期货" },
        { symbol: "FDXM", name: "德国小型DAX指数期货" },
        { symbol: "FESX", name: "欧洲Stoxx 50指数期货" },
        { symbol: "HSI", name: "恒生指数期货" },
        { symbol: "MHI", name: "小型恒生指数期货" },
        { symbol: "HHI", name: "恒生中国企业指数期货" },
        { symbol: "HTI", name: "恒生科技指数期货" },
        { symbol: "MCA", name: "中型A股指数期货" },
        { symbol: "MCH", name: "小型A股指数期货" }
    ];

    const otherList = [
        { symbol: "CL",  name: "原油期货" },
        { symbol: "MCL",  name: "微型原油期货" },
        { symbol: "QM",  name: "小型原油期货" },
        { symbol: "NG",  name: "天然气期货" },
        { symbol: "GC",  name: "黄金期货" },
        { symbol: "MGC",  name: "微型黄金期货" },
        { symbol: "QO", name: "小型黄金期货" },
        { symbol: "SI", name: "白银期货" },
        { symbol: "HG", name: "铜期货" },
        { symbol: "PL", name: "铂金期货" },
        { symbol: "PA", name: "钯金期货" }
    ];

    const other4List = [
        { symbol: "ZC",  name: "玉米期货" },
        { symbol: "ZS",  name: "大豆期货" },
        { symbol: "ZM",  name: "豆粕期货" },
        { symbol: "ZL",  name: "豆油期货" },
        { symbol: "ZW",  name: "小麦期货" },
        { symbol: "CN",  name: "中国国债期货" },
        { symbol: "FGBL", name: "德国长期国债（Bund）期货" }
    ];

    const marketTabList = [
        { label: t("markets.btn.main"), value: "main" },
        { label: t("markets.btn.second"), value: "second" },
        { label: t("markets.btn.other"), value: "other" },
        { label: t("markets.btn.other-meta"), value: "other-meta" },
    ];

    const GuideAry = [
        { url: "/images/products/future-swiper1.png", title: t("guide.row.col2.span1.title"), description: t("guide.row.col2.span1.desc") },
        { url: "/images/products/future-swiper2.png", title: t("guide.row.col2.span2.title"), description: t("guide.row.col2.span2.desc") },
        { url: "/images/products/future-swiper3.png", title: t("guide.row.col2.span3.title"), description: t("guide.row.col2.span3.desc") },
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
                        <li>{t("qa.ul.li2.text-4")}</li>
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
                imageUrl={"bg-[url(/images/products/future-banner.png)]"}
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
            />
            <Professional/>
            <MoreMarkets
                title={t("moreMarket.title")}
                desc={t("moreMarket.desc")}
                btnText={t("moreMarket.btnText")}
                imageUrl={"bg-[url(/images/products/future-market-background.png)]"}
            />
            <Guide
                title={t("guide.title")}
                left={{ title: t("guide.row.col1.title"), desc: t("guide.row.col1.desc"), more: t("guide.row.col1.more") }}
                prevEl={"crypto-custom-prev"}
                nextEl={"crypto-custom-next"}
                ary={GuideAry}
            />
            <QuestionAnswer data={QA_DATA} />
            <JoinCommunity/>
        </div>
    )
}