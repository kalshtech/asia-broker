import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import AutoTrade from "./AutoTrade";
import LocalServer from "./LocalServer";
import Running from "./Running";
import GlobalPoints from "./GlobalPoints";
import Subscribe from "./Subscribe";
import QuestionAnswer from "@/components/common/QuestionAnswer";
import Tools from "@/components/common/Tools";

export default async function Page() {
    const t = await getTranslations("Pages.ideas.vps");

    const QA_DATA = [
        {
            question: t("qa.ul.li1.title"),
            answer: t("qa.ul.li1.desc")
        },
        {
            question: t("qa.ul.li2.title"),
            answer:t("qa.ul.li2.desc"),
        },
        {
            question: t("qa.ul.li3.title"),
            answer: t("qa.ul.li3.desc"),
        }
    ];
    return (
        <div>
            <Banner/>
            <AutoTrade/>
            <LocalServer/>
            <Running/>
            <GlobalPoints/>
            <Subscribe/>
            <QuestionAnswer data={QA_DATA}/>
            <Tools/>
        </div>
    )
}