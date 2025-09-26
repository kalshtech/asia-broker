import * as React from 'react';
import {getTranslations} from "next-intl/server";
import Banner from "./Banner";
import Vision from "./Vision";
import Plan from "./Plan";
import Challenge from "./Challenge";
import Row from "@/components/common/products/Row";
import Advantages from "./Advantages";
import QuestionAnswer from "@/components/common/QuestionAnswer";
import Tools from "@/components/common/Tools";

export default async function Page() {
    const t = await getTranslations("Pages.mutual.funding");
    const rowAry = [
        { imageUrl: "/images/mutual/funding-withdrawal1.png", title: t("withdrawal.row.col1.title"), desc: t("withdrawal.row.col1.desc") },
        { imageUrl: "/images/mutual/funding-withdrawal2.png", title: t("withdrawal.row.col2.title"), desc: t("withdrawal.row.col2.desc") },
        { imageUrl: "/images/mutual/funding-withdrawal3.png", title: t("withdrawal.row.col3.title"), desc: t("withdrawal.row.col3.desc") },
    ];

    const QA_DATA = [
        {question: t("qa.ul.li1.title"), answer: t("qa.ul.li1.desc")},
        {question: t("qa.ul.li2.title"), answer: t("qa.ul.li2.desc"),},
        {question: t("qa.ul.li3.title"), answer: t("qa.ul.li3.desc"),},
        {question: t("qa.ul.li4.title"), answer: t("qa.ul.li4.desc"),},
        {question: t("qa.ul.li5.title"), answer: t("qa.ul.li5.desc"),}
    ];


    return (
        <div>
            <Banner/>
            <Vision/>
            <Plan/>
            <Challenge/>
            <Row
                theme={"dark"}
                ary={rowAry}
                title={t("withdrawal.title")}
                challengeText={t("withdrawal.challenge")}
                isShowBtn={true}
            />
            <Advantages/>
            <QuestionAnswer
                data={QA_DATA}
                isShowBtn={true}
                btn1Text={t("qa.join")}
                btn2Text={t("qa.view")}
            />
            <Tools/>
        </div>
    )
}