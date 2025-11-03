import React from "react";
import { getTranslations } from "next-intl/server";
import Banner from "@/components/common/products/Banner";
import Row from "@/components/common/products/Row";
import Advertising from "./Advertising";
import Cards from "./Cards";
import Process from "@/components/common/Process";
import AssetsSafe from "./AssetsSafe";
import Start from "@/components/common/Start";
import FAQSection from "@/components/common/QuestionAnswer";
import Tools from "@/components/common/Tools";

export default async function Page() {
    const t = await getTranslations("Pages.products.transfer");
    const rowAry = [
        { imageUrl: "/images/products/transfer-professional1.png", title: t("professional.row.col1.title"), desc: t("professional.row.col1.desc") },
        { imageUrl: "/images/products/transfer-professional2.png", title: t("professional.row.col2.title"), desc: t("professional.row.col2.desc") },
        { imageUrl: "/images/products/transfer-professional3.png", title: t("professional.row.col3.title"), desc: t("professional.row.col3.desc") },
        { imageUrl: "/images/products/transfer-professional4.png", title: t("professional.row.col4.title"), desc: t("professional.row.col4.desc") },
    ];

    const processAry = [
      { title: t("process.row.col1.title"), desc: t("process.row.col1.desc"), bottom: t("process.row.col1.bottom") },
      { title: t("process.row.col2.title"), desc: t("process.row.col2.desc"), bottom: t("process.row.col2.bottom") },
      { title: t("process.row.col3.title"), desc: t("process.row.col3.desc"), bottom: t("process.row.col3.bottom") },
    ];

    const QA_DATA = [
        {
            question: t("qa.ul.li1.title"),
            answer: (
                <div className="text-muted-foreground leading-[28px] space-y-3">
                    <ul className="list-disc pl-6 space-y-1">
                        <li>{t("qa.ul.li1.text-1")}</li>
                        <li>{t("qa.ul.li1.text-2")}</li>
                        <li>{t("qa.ul.li1.text-3")}</li>
                    </ul>
                </div>
            ),
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
                    </ul>
                </div>
            ),
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
                        <li>{t("qa.ul.li3.text-4")}</li>
                        <li>{t("qa.ul.li3.text-5")}</li>
                    </ul>
                </div>
            ),
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
                    </ul>
                </div>
            ),
        },
        {
            question: t("qa.ul.li5.title"),
            answer: t("qa.ul.li5.desc")
        },
        {
            question: t("qa.ul.li6.title"),
            answer: (
                <div className="text-muted-foreground leading-[28px] space-y-3">
                    <p>
                        {t("qa.ul.li6.desc")}
                    </p>
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
                description={t("banner.desc")}
                imageUrl={"bg-[url(/images/products/transfer-banner-mobile.png)] xl:bg-[url(/images/products/transfer-banner.png)]"}
                midst={t("banner.midst")}
                transfer
            />
            <Row
                ary={rowAry}
                title={t("professional.title")}
            />
            <Advertising/>
            <Cards/>
            <Process
                ary={processAry}
                title={t("process.title")}
            />
            <AssetsSafe/>
            <Start/>
            <FAQSection data={QA_DATA} />
            <Tools/>
        </div>
    )
}