import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import Permission from "./Permission";
import Route from "./Route";
import Stream from "./Stream";
import Custom from "./Custom";
import BankCards from "./BankCards";
import Experience from "./Experience";
import TableComponent from "./TableComponent";
import Support from "@/components/common/accounts/Support";
import Process from "@/components/common/Process";
import QuestionAnswer from "@/components/common/QuestionAnswer";
import Tools from "@/components/common/Tools";
import Credit from "@/components/common/accounts/Credit";

export default async function Page() {
    const t = await getTranslations("Pages.accounts.vic");

    const processAry =   [
        { title: t("process.step.1.title"), desc: t("process.step.1.desc"), bottom: t("process.step.1.bottom") },
        { title: t("process.step.2.title"), desc: t("process.step.2.desc"), bottom: t("process.step.2.bottom") },
        { title: t("process.step.3.title"), desc: t("process.step.3.desc"), bottom: t("process.step.3.bottom") },
        { title: t("process.step.4.title"), desc: t("process.step.4.desc"), bottom: t("process.step.4.bottom") },
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
            answer: t("qa.ul.li6.desc"),
        },
        {
            question: t("qa.ul.li6.title"),
            answer: t("qa.ul.li6.desc"),
        },
        {
            question: t("qa.ul.li7.title"),
            answer: t("qa.ul.li7.desc"),
        }
    ];
    return (
        <div>
            <Banner/>
            <Permission/>
            <Route/>
            <Stream/>
            <Custom/>
            <Credit number={"50,000"} className={"bg-gradient-to-b from-[#FFFFFF] to-[#ABC2DC]"} typeText={t("credit.account")} />
            <BankCards/>
            <Support/>
            <Experience/>
            <TableComponent></TableComponent>
            <Process title={t("process.title")} ary={processAry} />
            <QuestionAnswer data={QA_DATA} />
            <Tools/>
        </div>
    )
}