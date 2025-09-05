import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "@/components/common/Banner";
import Markets from "./Markets";
import Commission from "@/components/common/Commission";
import MoreMarkets from "@/components/common/MoreMarkets";
import Guide from "./Guide";
import Profession from "./Profession";
import FAQSection from "@/components/common/QuestionAnswer";
import JoinCommunity from "@/components/common/JoinCommunity";

export default async function Page() {
    const t = await getTranslations("Pages.products.forex");
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
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{t("qa.ul.li5.text-1")}</li>
                        <li>{t("qa.ul.li5.text-2")}</li>
                        <li>{t("qa.ul.li5.text-3")}</li>
                        <li>{t("qa.ul.li5.text-4")}</li>
                    </ul>
                    <p className="text-sm">
                        {t("qa.ul.li5.prompt")}
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
                        <li>{t("qa.ul.li6.text-2")}</li>
                    </ul>
                </div>
            ),
        },
    ];
    return (
        <div>
            <Banner
                title={t("banner.title")}
                description={t("banner.description")}
                imageUrl={"bg-[url(/images/products/forex-background.png)]"}
                midst={t("banner.midst")}
            />
            <Markets/>
            <Commission
                theme={"dark"}
                title={t("commission.title")}
                desc={t("commission.desc")}
                more={t("commission.more")}
                imageUrl={"bg-[url(/images/products/forex-kline-background.png)]"}
            />
            <MoreMarkets
                title={t("moreMarket.title")}
                desc={t("moreMarket.desc")}
                btnText={t("moreMarket.btnText")}
                imageUrl={"bg-[url(/images/products/forex-market-background.png)]"}
            />
            <Guide/>
            <Profession/>
            <FAQSection data={QA_DATA} />
            <JoinCommunity/>
        </div>
    )
}