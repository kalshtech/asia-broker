import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner"
import Infrastructure from "./Infrastructure";
import Principle from "./Principle";
import Introduction from "@/components/common/corporation/Introduction";
import Offices from "./Offices";
import SetOut from "./SetOut";
import Hire from "./Hire";
import QuestionAnswer from "@/components/common/QuestionAnswer";
import Tools from "@/components/common/Tools";

export default async function Page() {
    const t = await getTranslations("Pages.corporation.careers");
    const QA_DATA = [
        {question: t("qa.ul.li1.title"), answer: t("qa.ul.li1.desc")},
        {question: t("qa.ul.li2.title"), answer: t("qa.ul.li2.desc"),},
        {question: t("qa.ul.li3.title"), answer: t("qa.ul.li3.desc"),},
    ];
    return (
        <div>
            <Banner/>
            <Infrastructure/>
            <Principle/>
            <Offices/>
            <Introduction/>
            <Hire/>
            <SetOut/>
            <QuestionAnswer data={QA_DATA} />
            <Tools/>
        </div>
    )
}