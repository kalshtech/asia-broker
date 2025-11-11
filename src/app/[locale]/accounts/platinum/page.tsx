import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import Introduction from "@/components/common/accounts/Introduction";
import Exclusive from "./Exclusive";
import Environment from "./Environment";
import Credit from "@/components/common/accounts/Credit";
import Support from "@/components/common/accounts/Support";
import Guide from "@/components/common/Guide";
import Tools from "@/components/common/Tools";
import QuestionAnswer from "@/components/common/QuestionAnswer";
import TableComponent from "./TableComponent";
import Process from "@/components/common/Process";
import VIC from "./VIC";

export default async function Page() {
    const t = await getTranslations("Pages.accounts.platinum");

    const liAry = [
        { label: t("standard.row.left.ul.li1") },
        { label: t("standard.row.left.ul.li2") },
        { label: t("standard.row.left.ul.li3") },
        { label: t("standard.row.left.ul.li4") },
        { label: t("standard.row.left.ul.li5") },
        { label: t("standard.row.left.ul.li6") },
    ];

    const rightRowAry = [
        { imageUrl: "/images/accounts/lightning.png", title: t("standard.row.right.row.col-2-title"), desc: t("standard.row.right.row.col-2-desc") },
        { imageUrl: "/images/accounts/line.png", title: t("standard.row.right.row.col-3-title"), desc: t("standard.row.right.row.col-3-desc") },
        { imageUrl: "/images/accounts/profession-line.png", title: t("standard.row.right.row.col-4-title"), desc: t("standard.row.right.row.col-4-desc") },
        { imageUrl: "/images/accounts/clouds.png", title: t("standard.row.right.row.col-5-title"), desc: t("standard.row.right.row.col-5-desc") },
        { imageUrl: "/images/accounts/credit.png", title: t("standard.row.right.row.col-6-title"), desc: t("standard.row.right.row.col-6-desc") },
    ];

    const GuideAry = [
        { url: "/images/accounts/platinum-swiper1.png", title: t("guide.row.col2.span1.title"), description: t("guide.row.col2.span1.desc") },
        { url: "/images/accounts/platinum-swiper2.png", title: t("guide.row.col2.span2.title"), description: t("guide.row.col2.span2.desc") },
        { url: "/images/accounts/platinum-swiper3.png", title: t("guide.row.col2.span3.title"), description: t("guide.row.col2.span3.desc") },
    ];

    const processAry =   [
        { title: t("process.step.1.title"), desc: t("process.step.1.desc"), bottom: t("process.step.1.bottom"), url: "https://portal.asiafuturetrading.com/register" },
        { title: t("process.step.2.title"), desc: t("process.step.2.desc"), bottom: t("process.step.2.bottom"), url: "/platform" },
        { title: t("process.step.3.title"), desc: t("process.step.3.desc"), bottom: t("process.step.3.bottom"), url: "https://portal.asiafuturetrading.com/login" },
        { title: t("process.step.4.title"), desc: t("process.step.4.desc"), bottom: t("process.step.4.bottom"), url: "https://portal.asiafuturetrading.com/login" },
    ];

    const QA_DATA = [
        {
            question: t("qa.ul.li1.title"),
            answer: (
                <div className="space-y-3">
                    <ul className="space-y-1">
                        <li>{t("qa.ul.li1.text-1")}</li>
                        <li>{t("qa.ul.li1.text-2")}</li>
                    </ul>
                </div>
            )
        },
        {
            question: t("qa.ul.li2.title"),
            answer: (
                <div className="space-y-3">
                    <ul className="space-y-1">
                        <li>{t("qa.ul.li2.text-1")}</li>
                        <li>{t("qa.ul.li2.text-2")}</li>
                    </ul>
                </div>
            ),
        },
        {
            question: t("qa.ul.li3.title"),
            answer: (
                <div className="space-y-3">
                    <ul className="space-y-1">
                        <li>{t("qa.ul.li3.text-1")}</li>
                        <li>{t("qa.ul.li3.text-2")}</li>
                    </ul>
                </div>
            ),
        },
        {
            question: t("qa.ul.li4.title"),
            answer: (
                <div className="space-y-3">
                    <ul className="space-y-1">
                        <li>{t("qa.ul.li4.text-1")}</li>
                        <li>{t("qa.ul.li4.text-2")}</li>
                    </ul>
                </div>
            ),
        },
        {
            question: t("qa.ul.li5.title"),
            answer: (
                <div className="space-y-3">
                    <p>
                        {t("qa.ul.li5.text-1")}
                    </p>
                    <ul className="space-y-1">
                        <li>{t("qa.ul.li5.text-2")}</li>
                        <li>{t("qa.ul.li5.text-3")}</li>
                        <li>{t("qa.ul.li5.text-4")}</li>
                        <li>{t("qa.ul.li5.text-5")}</li>
                    </ul>
                </div>
            ),
        },
        {
            question: t("qa.ul.li6.title"),
            answer: (
                <div className="space-y-3">
                    <ul className="space-y-1">
                        <li>{t("qa.ul.li6.text-1")}</li>
                        <li>{t("qa.ul.li6.text-2")}</li>
                    </ul>
                </div>
            ),
        }
    ];

    return (
        <div>
            <Banner/>
            <Introduction
                rightCol1Desc={t("standard.row.right.row.col-1-desc")}
                rightCol1Title={t("standard.row.right.row.col-1-title")}
                leftTitle={t("standard.row.left.title")}
                title={t("standard.title")}
                desc={t("standard.desc")}
                liAry={liAry}
                rightRowAry={rightRowAry}
            />
            <Exclusive/>
            <Environment/>
            <Credit number={"3,000"} className={"bg-gradient-to-b from-[#FFFFFF] to-[#D3C5B6]"} typeText={t("credit.account")} />
            <Support/>
            <Guide
                title={t("guide.title")}
                left={{
                    title: t("guide.row.col1.title"),
                    more: t("guide.row.col1.more"),
                    muted: t("guide.row.col1.muted"),
                }}
                prevEl={"crypto-custom-prev"}
                nextEl={"crypto-custom-next"}
                ary={GuideAry}
            />
            <TableComponent/>
            <Process ary={processAry} title={t("process.title")} />
            <VIC/>
            <QuestionAnswer data={QA_DATA} />
            <Tools/>
        </div>
    )
}