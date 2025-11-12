import React from "react";
import { getTranslations } from "next-intl/server";
import Stream from "@/components/common/Stream";
import RowTable from "@/components/common/RowTable";
import FAQSection from "@/components/common/QuestionAnswer";
import Tools from "@/components/common/Tools";
import Banner from "@/components/common/products/Banner";
import Row from "@/components/common/products/Row";
import CommodityItems from "./CommodityItems";
import {TableCell, TableRow} from "@/components/ui/table";
import Enhance from "./Enhance";
import Statement from "./Statement";
import Standard from "./Standard";
import Profession from "@/components/common/products/Profession";
import { Link } from "@/i18n/navigation";
import { ArrowRight  } from 'lucide-react';

export default async function Page() {
    const t = await getTranslations("Pages.products.rates");
    const NavT = await getTranslations("Navigation")

    const rowAry = [
        { imageUrl: "/images/products/rates-mechanism1.png", title: t("mechanism.row.col1.title"), desc: t("mechanism.row.col1.desc") },
        { imageUrl: "/images/products/rates-mechanism2.png", title: t("mechanism.row.col2.title"), desc: t("mechanism.row.col2.desc") },
        { imageUrl: "/images/products/rates-mechanism3.png", title: t("mechanism.row.col3.title"), desc: t("mechanism.row.col3.desc") },
    ];

    const StreamUlAry = [
        { text: t("stream.row.col1.ul.li1") },
        { text: t("stream.row.col1.ul.li2") },
        { text: t("stream.row.col1.ul.li3") }
    ];

    const tableHead = [
        { text: t("table.head.type") },
        { text: t("table.head.introduction") },
        { text: "" },
    ];

    const tableData = [
        { type: NavT("menu.products.row.col-1.ul.li1"), introduction: t("table.prompt1") },
        { type: NavT("menu.products.row.col-1.ul.li2"), introduction: t("table.prompt2") },
        { type: NavT("menu.products.row.col-1.ul.li3"), introduction: t("table.prompt3") },
        { type: NavT("menu.products.row.col-1.ul.li4"), introduction: t("table.prompt4") },
        { type: NavT("menu.products.row.col-1.ul.li5"), introduction: t("table.prompt5") },
        { type: NavT("menu.products.row.col-1.ul.li6"), introduction: t("table.prompt6") }
    ]

    const QA_DATA = [
        {
            question: t("qa.ul.li1.title"),
            answer: t("qa.ul.li1.desc")
        },
        {
            question: t("qa.ul.li2.title"),
            answer: t("qa.ul.li2.desc")
        },
        {
            question: t("qa.ul.li3.title"),
            answer: t("qa.ul.li3.desc")
        },
        {
            question: t("qa.ul.li4.title"),
            answer: t("qa.ul.li4.desc")
        }
    ];
    return (
        <div>
            <Banner
                title={t("banner.title")}
                description={t("banner.desc")}
                imageUrl={"bg-[url('/images/home/swiper2-mobile.webp')] xl:bg-[url(/images/products/rates-banner.png)]"}
                midst={t("banner.midst")}
                colorTheme={"light"}
            />
            <Row
                ary={rowAry}
                title={t("mechanism.title")}
                title1={t("mechanism.title1")}
                prompt={t("mechanism.row.col3.prompt")}
            />

            <div className={"bg-theme-light-bg"}>
                <Stream
                    title={t("stream.title")}
                    desc={t("stream.desc")}
                    col1={{ title: t("stream.row.col1.title"), desc: t("stream.row.col1.desc"), prompt1: t("stream.row.col1.prompt1"), prompt2: t("stream.row.col1.prompt2"), ulAry: StreamUlAry }}
                    col2={{ backgroundUrl: "bg-[url(/images/products/rates-stream.png)]", isShowMore: false }}
                />
            </div>

            <div>
                <div className={"hidden xl:block"}>
                    <RowTable
                        title={t("table.title")}
                        rowHeadAry={tableHead}
                        overview
                        overviewText={t("table.overview")}
                    >
                        {
                            tableData.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell className={"py-4"}>
                                        { item.type }
                                    </TableCell>
                                    <TableCell className={"py-4"}>
                                        { item.introduction }
                                    </TableCell>
                                    <TableCell className={"py-4"}>
                                        <Link href={"/"} className={"flex items-center text-theme-active"}>
                                            { t("table.details") }
                                            <ArrowRight className={"ml-2"} />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </RowTable>
                </div>
                <div className={"xl:hidden"}>
                    <CommodityItems/>
                </div>
            </div>

            <Enhance/>
            <Statement/>
            <Profession/>
            <Standard/>
            <FAQSection data={QA_DATA} />
            <Tools/>
        </div>
    )
}