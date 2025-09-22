import * as React from 'react';
import { getTranslations } from "next-intl/server";
import ArticleDetails from "@/components/article/Details";
import { Typography } from "@/components/ui/typography";

export default async function Page() {
    const t = await getTranslations("Articles.beginner.common-currency");

    const sections = [
        {
            id: "first-essential-lesson",
            title: t("section1.title"),
            content: (
                <div>
                    <Typography>{ t("section1.desc") }</Typography>
                </div>
            )
        },
        {
            id: "excess",
            title: t("section2.title"),
            content: (
                <div>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>
                            <Typography className={"font-medium"}>
                                {t("section2.eur")}
                            </Typography>
                            <ul className="list-none mt-2 space-y-1">
                                <li>
                                    <strong>{t("section2.eur-ul.li1-strong")}</strong>
                                    {t("section2.eur-ul.li1-text")}
                                </li>
                                <li>
                                    <strong>{t("section2.eur-ul.li2-strong")}</strong>
                                    <ul className="list-disc mt-2 pl-5 space-y-1">
                                        <li>{t("section2.eur-ul.li2-text1")}</li>
                                        <li>{t("section2.eur-ul.li2-text2")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t("section2.eur-ul.li3-strong")}</strong>
                                    {t("section2.eur-ul.li3-text")}
                                </li>
                            </ul>
                        </li>
                        <li className={"mt-2"}>
                            <Typography className={"font-medium"}>
                                {t("section2.jpy")}
                            </Typography>
                            <ul className="list-none mt-2 space-y-1">
                                <li>
                                    <strong>{t("section2.jpy-ul.li1-strong")}</strong>
                                    {t("section2.jpy-ul.li1-text")}
                                </li>
                                <li>
                                    <strong>{t("section2.jpy-ul.li2-strong")}</strong>
                                    <ul className="list-disc mt-2 pl-5 space-y-1">
                                        <li>{t("section2.jpy-ul.li2-text1")}</li>
                                        <li>{t("section2.jpy-ul.li2-text2")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t("section2.jpy-ul.li3-strong")}</strong>
                                    {t("section2.jpy-ul.li3-text")}
                                </li>
                            </ul>
                        </li>
                        <li className={"mt-2"}>
                            <Typography className={"font-medium"}>
                                {t("section2.gbp")}
                            </Typography>
                            <ul className="list-none mt-2 space-y-1">
                                <li>
                                    <strong>{t("section2.gbp-ul.li1-strong")}</strong>
                                    {t("section2.gbp-ul.li1-text")}
                                </li>
                                <li>
                                    <strong>{t("section2.gbp-ul.li2-strong")}</strong>
                                    <ul className="list-disc mt-2 pl-5 space-y-1">
                                        <li>{t("section2.gbp-ul.li2-text1")}</li>
                                        <li>{t("section2.gbp-ul.li2-text2")}</li>
                                        <li>{t("section2.gbp-ul.li2-text3")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t("section2.gbp-ul.li3-strong")}</strong>
                                    {t("section2.gbp-ul.li3-text")}
                                </li>
                            </ul>
                        </li>
                        <li className={"mt-2"}>
                            <Typography className={"font-medium"}>
                                {t("section2.chf")}
                            </Typography>
                            <ul className="list-none mt-2 space-y-1">
                                <li>
                                    <strong>{t("section2.chf-ul.li1-strong")}</strong>
                                    {t("section2.chf-ul.li1-text")}
                                </li>
                                <li>
                                    <strong>{t("section2.chf-ul.li2-strong")}</strong>
                                    <ul className="list-disc mt-2 pl-5 space-y-1">
                                        <li>{t("section2.chf-ul.li2-text1")}</li>
                                        <li>{t("section2.chf-ul.li2-text2")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t("section2.chf-ul.li3-strong")}</strong>
                                    {t("section2.chf-ul.li3-text")}
                                </li>
                            </ul>
                        </li>
                        <li className={"mt-2"}>
                            <Typography className={"font-medium"}>
                                {t("section2.cad")}
                            </Typography>
                            <ul className="list-none mt-2 space-y-1">
                                <li>
                                    <strong>{t("section2.cad-ul.li1-strong")}</strong>
                                    {t("section2.cad-ul.li1-text")}
                                </li>
                                <li>
                                    <strong>{t("section2.cad-ul.li2-strong")}</strong>
                                    <ul className="list-disc mt-2 pl-5 space-y-1">
                                        <li>{t("section2.cad-ul.li2-text1")}</li>
                                        <li>{t("section2.cad-ul.li2-text2")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t("section2.cad-ul.li3-strong")}</strong>
                                    {t("section2.cad-ul.li3-text")}
                                </li>
                            </ul>
                        </li>
                        <li className={"mt-2"}>
                            <Typography className={"font-medium"}>
                                {t("section2.adu")}
                            </Typography>
                            <ul className="list-none mt-2 space-y-1">
                                <li>
                                    <strong>{t("section2.adu-ul.li1-strong")}</strong>
                                    {t("section2.adu-ul.li1-text")}
                                </li>
                                <li>
                                    <strong>{t("section2.adu-ul.li2-strong")}</strong>
                                    <ul className="list-disc mt-2 pl-5 space-y-1">
                                        <li>{t("section2.adu-ul.li2-text1")}</li>
                                        <li>{t("section2.adu-ul.li2-text2")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t("section2.adu-ul.li3-strong")}</strong>
                                    {t("section2.adu-ul.li3-text")}
                                </li>
                            </ul>
                        </li>
                        <li className={"mt-2"}>
                            <Typography className={"font-medium"}>
                                {t("section2.nzd")}
                            </Typography>
                            <ul className="list-none mt-2 space-y-1">
                                <li>
                                    <strong>{t("section2.nzd-ul.li1-strong")}</strong>
                                    {t("section2.nzd-ul.li1-text")}
                                </li>
                                <li>
                                    <strong>{t("section2.nzd-ul.li2-strong")}</strong>
                                    <ul className="list-disc mt-2 pl-5 space-y-1">
                                        <li>{t("section2.nzd-ul.li2-text1")}</li>
                                        <li>{t("section2.nzd-ul.li2-text2")}</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>{t("section2.nzd-ul.li3-strong")}</strong>
                                    {t("section2.nzd-ul.li3-text")}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "excess12",
            title: t("section3.title"),
            content: (
                <div>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>
                            <Typography className={"font-medium"}>
                                {t("section3.ul.li1-strong")}
                            </Typography>
                            <ul className="list-none mt-2 space-y-1">
                                <li>
                                    {t("section3.ul.li1-text1")}
                                </li>
                                <li>
                                    {t("section3.ul.li1-text2")}
                                </li>
                            </ul>
                        </li>
                        <li className={"mt-2"}>
                            <Typography className={"font-medium"}>
                                {t("section3.ul.li2-strong")}
                            </Typography>
                            <ul className="list-none mt-2 space-y-1">
                                <li>
                                    {t("section3.ul.li2-text1")}
                                </li>
                                <li>
                                    {t("section3.ul.li2-text2")}
                                </li>
                            </ul>
                        </li>
                        <li className={"mt-2"}>
                            <Typography className={"font-medium"}>
                                {t("section3.ul.li3-strong")}
                            </Typography>
                            <ul className="list-none mt-2 space-y-1">
                                <li>{t("section3.ul.li3-text1")}</li>
                                <li>{t("section3.ul.li3-text2")}</li>
                                <li>{t("section3.ul.li3-text3")}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "summary",
            title: t("summary.title"),
            content: (
                <div>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("summary.ul.li1-strong")}</strong>
                            {t("summary.ul.li1-text")}
                        </li>
                        <li>
                            <strong>{t("summary.ul.li2-strong")}</strong>
                            {t("summary.ul.li2-text")}
                        </li>
                        <li>
                            <strong>{t("summary.ul.li3-strong")}</strong>
                            {t("summary.ul.li3-text")}
                        </li>
                        <li>
                            <strong>{t("summary.ul.li4-strong")}</strong>
                            {t("summary.ul.li4-text")}
                        </li>
                        <li>
                            <strong>{t("summary.ul.li5-strong")}</strong>
                            {t("summary.ul.li5-text")}
                        </li>
                        <li>
                            <strong>{t("summary.ul.li6-strong")}</strong>
                            {t("summary.ul.li6-text")}
                        </li>
                        <li>
                            <strong>{t("summary.ul.li7-strong")}</strong>
                            {t("summary.ul.li7-text")}
                        </li>
                    </ul>
                </div>
            )
        },
    ]

    const articlesAry = [
        {
            imageUrl: "/images/academy/learning-article1.png",
            title: "基于税收尺度的定量研究：地方保护的“衡量”",
            disc: "宏观",
            time: "2025/9/3"
        },
        {
            imageUrl: "/images/academy/learning-article2.png",
            title: "宏观经济深度报告：大财政时代冲击联储独立性...",
            disc: "宏观",
            time: "2025/9/3"
        },
        {
            imageUrl: "/images/academy/learning-article3.png",
            title: "人民币升值：短期催化与长期重估",
            disc: "宏观",
            time: "2025/9/3"
        },
        {
            imageUrl: "/images/academy/learning-article4.png",
            title: "资产配置日报：风云突变",
            disc: "宏观",
            time: "2025/9/3"
        },
        {
            imageUrl: "/images/academy/learning-article5.png",
            title: "债市分析框架之资金面",
            disc: "宏观",
            time: "2025/9/3"
        },
        {imageUrl: "/images/academy/learning-article6.png", title: "盛宴未散 见招拆招", disc: "宏观", time: "2025/9/3" },
    ];

    return (
        <div>
            <ArticleDetails
                sections={sections}
                breadcrumb={{ firstName: "新手学院学习中心", secondName: t("title"), path: "/" }}
                title={t("title")}
                desc={t("desc")}
                time={"2025年9月13日"}
                tags={[{ text: "外汇市场" }, { text: "交易入门" }]}
                articlesAry={articlesAry}
            />
        </div>
    )
}