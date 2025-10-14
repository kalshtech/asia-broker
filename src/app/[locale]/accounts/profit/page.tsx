import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import Mechanism from "./Mechanism";
import Rates from "./Rates";
import Profit from "./Profit";
import MockCalculator from "./MockCalculator";
import Values from "./Values";
import Advance from "./Advance"
import QuestionAnswer from "@/components/common/QuestionAnswer";
import Tools from "@/components/common/Tools";


export default async function Page() {
    const t = await getTranslations("Pages.accounts.profit");
    const QA_DATA = [
        {question: t("qa.ul.li1.title"), answer: t("qa.ul.li1.desc")},
        {question: t("qa.ul.li2.title"), answer: t("qa.ul.li2.desc")},
        {question: t("qa.ul.li3.title"), answer: t("qa.ul.li3.desc")},
        {question: t("qa.ul.li4.title"), answer: t("qa.ul.li4.desc")},
        {question: t("qa.ul.li5.title"), answer: t("qa.ul.li5.desc")},
        {question: t("qa.ul.li6.title"), answer: t("qa.ul.li6.desc")},
    ]
    return (
        <div>
            <Banner/>
            <Mechanism/>
            <Rates/>
            <Profit/>
            <MockCalculator/>
            <Values/>
            <Advance/>
            <QuestionAnswer data={QA_DATA} />
            <Tools/>
        </div>
    )
}