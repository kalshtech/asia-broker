import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import Introduction from "@/components/common/accounts/Introduction";
import QuestionAnswer from "@/components/common/QuestionAnswer";
import Velocity from "./Velocity";
import Tools from "@/components/common/Tools";
import Type from "./Type";
import Process from "@/components/common/Process";
import Explore from "./Explore";

export default async function Page() {
    const t = await getTranslations("Pages.accounts.classic");
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
        { imageUrl: "/images/accounts/house.png", title: t("standard.row.right.row.col-4-title"), desc: t("standard.row.right.row.col-4-desc") },
        { imageUrl: "/images/accounts/wifi.png", title: t("standard.row.right.row.col-5-title"), desc: t("standard.row.right.row.col-5-desc") },
        { imageUrl: "/images/accounts/signal.png", title: t("standard.row.right.row.col-6-title"), desc: t("standard.row.right.row.col-6-desc") },
    ];

    const processAry =   [
        { title: t("process.step.1.title"), desc: t("process.step.1.desc"), bottom: t("process.step.1.bottom"), url: "https://portal.asiafuturetrading.com/register" },
        { title: t("process.step.2.title"), desc: t("process.step.2.desc"), bottom: t("process.step.2.bottom"), url: "/platform" },
        { title: t("process.step.3.title"), desc: t("process.step.3.desc"), bottom: t("process.step.3.bottom"), url: "https://portal.asiafuturetrading.com/login" },
        { title: t("process.step.4.title"), desc: t("process.step.4.desc"), bottom: t("process.step.4.bottom"), url: "https://portal.asiafuturetrading.com/login" },
    ];

    const QA_DATA = [
        {question: t("qa.ul.li1.title"), answer: t("qa.ul.li1.desc")},
        {question: t("qa.ul.li2.title"), answer: t("qa.ul.li2.desc"),},
        {question: t("qa.ul.li3.title"), answer: t("qa.ul.li3.desc"),},
        {question: t("qa.ul.li4.title"), answer: t("qa.ul.li4.desc"),}
    ];

    return (
        <div>
            <Banner/>
            <Introduction
                rightCol1Desc={t("standard.row.right.row.col-1-desc")}
                rightCol1Title={t("standard.row.right.row.col-1-title")}
                leftTitle={t("standard.row.left.title")}
                leftDesc={t("standard.row.left.desc")}
                title={t("standard.title")}
                liAry={liAry}
                rightRowAry={rightRowAry}
            />
            <Velocity/>
            <Type/>
            <Process
                ary={processAry}
                title={t("process.title")}
            />
            <Explore/>
            <QuestionAnswer data={QA_DATA} />
            <Tools/>
        </div>
    )
}