import * as React from "react";
import Banner from "./Banner";
import AD from "./AD";
import Rates from "./Rates";
import FAQSection from "@/components/common/QuestionAnswer";
import { useTranslations } from "next-intl";
import Reward from "@/components/home/Reward";
import Guide from "@/components/common/Guide";
import BulletinCenter from "./BulletinCenter"

export default function Home() {
    const forexT = useTranslations("Pages.products.forex");
    const GuideAry =  [
        { url: "/images/products/forex-swiper1.png", title: forexT("guide.row.col2.span1.title"), description: forexT("guide.row.col2.span1.desc") },
        { url: "/images/products/forex-swiper2.png", title: forexT("guide.row.col2.span2.title"), description: forexT("guide.row.col2.span2.desc") },
        { url: "/images/products/forex-swiper3.png", title: forexT("guide.row.col2.span3.title"), description: forexT("guide.row.col2.span3.desc") },
    ];

    const QA_DATA = [
        {
            question: "在美股投資方面，Asia Future Trading 與其他券商相比有什麼優勢？",
            answer: "我們提供業界極具競爭力的點差與低交易成本，並支援 24 小時交易服務。即使在美國市場開盤的深夜時段，您也可隨時透過 MT5 平台實現交易策略，並享受 7×24 小時的專業客服支援。"
        },
        {
            question: "Asia Future Trading 提供哪些投資產品？",
            answer: "我們的平台涵蓋外匯、貴金屬、能源、指數、美股、ETF 與加密貨幣差價合約（CFD）。一個帳戶即可輕鬆進入全球市場。"
        },
        {
            question: "什麼是「受監管的合規平台」？",
            answer: "Asia Future Trading 持有澳大利亞 ASIC 授權代表牌照（AR No. 001313916），嚴格遵循監管標準，確保交易透明、安全與資金合規。",
        }
    ]

    return (
        <div>
            <Banner/>
            <AD/>
            <Rates/>
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
