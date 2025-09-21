import * as React from 'react';
import { getTranslations } from "next-intl/server";
import ArticleDetails from "@/components/article/Details";
import { Typography } from "@/components/ui/typography";

export default async function Page() {
    const t = await getTranslations("Articles.beginner.explain-rates");

    const sections = [
        {
            id: "first-essential-lesson",
            title: t("section1.title"),
            content: (
                <div>
                    <Typography>{ t("section1.desc1") }</Typography>
                    <Typography className={"block"}>{ t("section1.desc2") }</Typography>
                </div>
            )
        },
        {
            id: "elementary",
            title: t("section2.title"),
            content: (
                <div>
                    <Typography>{ t("section2.desc") }</Typography>
                    <ul className="list-disc mt-2 pl-5 space-y-1">
                        <li>
                            {t("section2.ul.li1-text")}
                        </li>
                        <li>
                            {t("section2.ul.li2-text")}
                        </li>
                    </ul>
                    <div className={"mt-2"}>
                        <strong>{t("section2.ul.li3-strong")}</strong>
                        {t("section2.ul.li3-text")}
                    </div>
                </div>
            )
        },
        {
            id: "core",
            title: t("section3.title"),
            content: (
                <div>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section3.ul.li1-strong")}</strong>
                            <div>{t("section3.ul.li1-text")}</div>
                        </li>
                        <li>
                            <strong>{t("section3.ul.li2-strong")}</strong>
                            <div>{t("section3.ul.li2-text")}</div>
                        </li>
                        <li>
                            <strong>{t("section3.ul.li3-strong")}</strong>
                            <div>{t("section3.ul.li3-text1")}</div>
                            <div>{t("section3.ul.li3-text2")}</div>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "influence",
            title: t("section4.title"),
            content: (
                <div>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section4.ul.li1-strong")}</strong>
                            <div>{t("section4.ul.li1-text1")}</div>
                            <div>{t("section4.ul.li1-text2")}</div>
                        </li>
                        <li>
                            <strong>{t("section4.ul.li2-strong")}</strong>
                            <div>{t("section4.ul.li2-text1")}</div>
                            <div>{t("section4.ul.li2-text2")}</div>
                        </li>
                        <li>
                            <strong>{t("section4.ul.li3-strong")}</strong>
                            <div>{t("section4.ul.li3-text1")}</div>
                            <div>{t("section4.ul.li3-text2")}</div>
                        </li>
                        <li>
                            <strong>{t("section4.ul.li4-strong")}</strong>
                            <div>{t("section4.ul.li4-text1")}</div>
                            <div>{t("section4.ul.li4-text2")}</div>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "political-factor",
            title: t("section5.title"),
            content: (
                <div>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section5.ul.li1-strong")}</strong>
                            <div>{t("section5.ul.li1-text1")}</div>
                            <div>{t("section5.ul.li1-text2")}</div>
                        </li>
                        <li>
                            <strong>{t("section5.ul.li2-strong")}</strong>
                            <div>{t("section5.ul.li2-text1")}</div>
                            <div>{t("section5.ul.li2-text2")}</div>
                            <div>{t("section5.ul.li2-text3")}</div>
                        </li>
                        <li>
                            <strong>{t("section5.ul.li3-strong")}</strong>
                            <div>{t("section5.ul.li3-text1")}</div>
                            <div>{t("section5.ul.li3-text2")}</div>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "marketable-psychology",
            title: t("section6.title"),
            content: (
                <div>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section6.ul.li1-strong")}</strong>
                            <div>{t("section6.ul.li1-text")}</div>
                        </li>
                        <li>
                            <strong>{t("section6.ul.li2-strong")}</strong>
                            <div>{t("section6.ul.li2-text")}</div>
                        </li>
                        <li>
                            <strong>{t("section6.ul.li3-strong")}</strong>
                            <div>{t("section6.ul.li3-text")}</div>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "basic-theory",
            title: t("section7.title"),
            content: (
                <div>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section7.ul.li1-strong")}</strong>
                            <div>{t("section7.ul.li1-text")}</div>
                        </li>
                        <li>
                            <strong>{t("section7.ul.li2-strong")}</strong>
                            <div>{t("section7.ul.li2-text")}</div>
                        </li>
                        <li>
                            <strong>{t("section7.ul.li3-strong")}</strong>
                            <div>{t("section7.ul.li3-text")}</div>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "case-analysis",
            title: t("section8.title"),
            content: (
                <div>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section8.ul.li1-strong")}</strong>
                            {t("section8.ul.li1-text")}
                        </li>
                        <li>
                            <strong>{t("section8.ul.li2-strong")}</strong>
                            {t("section8.ul.li2-text")}
                        </li>
                        <li>
                            <strong>{t("section8.ul.li3-strong")}</strong>
                            {t("section8.ul.li3-text")}
                        </li>
                    </ul>
                    <Typography className={"mt-4 block"}>
                        {t("section8.prompt")}
                    </Typography>
                </div>
            )
        },
        {
            id: "qa",
            title: t("section9.title"),
            content: (
                <div>
                    <ul className="list-none mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section9.ul.li1-strong")}</strong>
                            <ul className="list-none my-2 pl-5 space-y-1">
                                <li>{t("section9.ul.li1-text1")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section9.ul.li2-strong")}</strong>
                            <ul className="list-none my-2 pl-5 space-y-1">
                                <li>{t("section9.ul.li2-text1")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section9.ul.li3-strong")}</strong>
                            <ul className="list-none my-2 pl-5 space-y-1">
                                <li>{t("section9.ul.li3-text1")}</li>
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
                    <Typography>
                        { t("summary.desc") }
                    </Typography>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>{t("summary.ul.li1")}</li>
                        <li>{t("summary.ul.li2")}</li>
                    </ul>
                    <Typography className={"block my-4"}>
                        { t("summary.end") }
                    </Typography>
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
        { imageUrl: "/images/academy/learning-article2.png", title: "宏观经济深度报告：大财政时代冲击联储独立性...", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article3.png", title: "人民币升值：短期催化与长期重估", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article4.png", title: "资产配置日报：风云突变", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article5.png", title: "债市分析框架之资金面", disc: "宏观", time: "2025/9/3" },
        { imageUrl: "/images/academy/learning-article6.png", title: "盛宴未散 见招拆招", disc: "宏观", time: "2025/9/3" },
    ];

    return (
        <div>
            <ArticleDetails
                sections={sections}
                breadcrumb={{ firstName: "新手学院学习中心", secondName: t("title"), path: "/" }}
                title={t("title")}
                time={"2025年9月13日"}
                tags={[{ text: "外汇市场" }, { text: "交易入门" }]}
                articlesAry={articlesAry}
            />
        </div>
    )
}