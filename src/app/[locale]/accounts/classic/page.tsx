import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import Standard from "./Standard";
import QuestionAnswer from "@/components/common/QuestionAnswer";
import Velocity from "./Velocity";
import Tools from "@/components/common/Tools";
import Type from "./Type";
import Process from "./Process";
import Explore from "./Explore";

export default async function Page() {
    const t = await getTranslations("Pages.accounts.classic");

    const QA_DATA = [
        {question: t("qa.ul.li1.title"), answer: t("qa.ul.li1.desc")},
        {question: t("qa.ul.li2.title"), answer:t("qa.ul.li2.desc"),},
        {question: t("qa.ul.li3.title"), answer: t("qa.ul.li3.desc"),},
        {question: t("qa.ul.li4.title"), answer: t("qa.ul.li4.desc"),}
    ];
    return (
        <div>
            <Banner/>
            <Standard/>
            <Velocity/>
            <Type/>
            <Process/>
            <Explore/>
            <QuestionAnswer data={QA_DATA} />
            <Tools/>
        </div>
    )
}