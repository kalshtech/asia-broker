import * as React from "react";
import Banner from "./Banner";
import AD from "./AD";
import Rates from "./Rates";
import FAQSection from "@/components/common/QuestionAnswer";
import { useTranslations } from "next-intl";
import Reward from "@/components/home/Reward";
import Guide from "@/components/common/Guide";
import BulletinCenter from "./BulletinCenter"
import Process from "@/components/common/Process";
import Download from "./Download";

export default function Home() {
    const forexT = useTranslations("Pages.products.forex");
    const t = useTranslations("Pages.jpHome");

    const processAry =   [
        { title: t("process.row.col1.title"), desc: t("process.row.col1.desc") },
        { title: t("process.row.col2.title"), desc: t("process.row.col2.desc")  },
        { title: t("process.row.col3.title"), desc: t("process.row.col3.desc")  }
    ];

    const GuideAry =  [
        { url: "/images/products/forex-swiper1.png", title: forexT("guide.row.col2.span1.title"), description: forexT("guide.row.col2.span1.desc") },
        { url: "/images/products/forex-swiper2.png", title: forexT("guide.row.col2.span2.title"), description: forexT("guide.row.col2.span2.desc") },
        { url: "/images/products/forex-swiper3.png", title: forexT("guide.row.col2.span3.title"), description: forexT("guide.row.col2.span3.desc") },
    ];

    const QA_DATA = [
        {
            question: t("qa.ul.li1.title"),
            answer: t("qa.ul.li1.desc"),
        },
        {
            question: t("qa.ul.li2.title"),
            answer: t("qa.ul.li2.desc"),
        },
        {
            question: t("qa.ul.li3.title"),
            answer: t("qa.ul.li3.desc"),
        }
    ]

    return (
        <div>
            <Banner/>
            <AD/>
            <Rates/>
            <Download/>
            <Process
                title={t("process.title")}
                desc={t("process.desc")}
                ary={processAry}
            />
            <BulletinCenter/>
            <Guide
                title={forexT("guide.title")}
                left={{ title: forexT("guide.row.col1.title"), desc: forexT("guide.row.col1.desc"), more: forexT("guide.row.col1.more") }}
                prevEl={"forex-custom-prev"}
                nextEl={"forex-custom-next"}
                ary={GuideAry}
            />
            <Reward/>
            <FAQSection data={QA_DATA} />
        </div>
    );
}
