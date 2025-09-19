import * as React from 'react';
import { getTranslations } from "next-intl/server";
import ArticleDetails from "@/components/article/Details";
import { Typography } from "@/components/ui/typography";

export default async function Page() {
    const t = await getTranslations("Articles.beginner.common-mistakes");

    const sections = [
        {
            id: "first-essential-lesson",
            title: t("section1.title"),
            content: <Typography>{ t("section1.desc") }</Typography>
        },
        {
            id: "excess",
            title: t("section2.title"),
            content: (
                <div>
                    <Typography>
                        { t("section2.desc") }
                    </Typography>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section2.ul.li1-strong")}</strong>
                            {t("section2.ul.li1-text")}
                        </li>
                        <li>
                            <strong>{t("section2.ul.li2-strong")}</strong>
                            {t("section2.ul.li2-text")}
                        </li>
                        <li>
                            <strong>{t("section2.ul.li3-strong")}</strong>
                            {t("section2.ul.li3-text")}
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "stop-loss",
            title: t("section3.title"),
            content: (
                <div>
                    <Typography>
                        { t("section3.desc") }
                    </Typography>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section3.ul.li1-strong")}</strong>
                            {t("section3.ul.li1-text")}
                        </li>
                        <li>
                            <strong>{t("section3.ul.li2-strong")}</strong>
                            {t("section3.ul.li2-text")}
                        </li>
                        <li>
                            <strong>{t("section3.ul.li3-strong")}</strong>
                            {t("section3.ul.li3-text")}
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "noise",
            title: t("section4.title"),
            content: (
                <div>
                    <Typography>
                        { t("section4.desc") }
                    </Typography>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section4.ul.li1-strong")}</strong>
                            {t("section4.ul.li1-text")}
                        </li>
                        <li>
                            <strong>{t("section4.ul.li2-strong")}</strong>
                            {t("section4.ul.li2-text")}
                        </li>
                        <li>
                            <strong>{t("section4.ul.li3-strong")}</strong>
                            {t("section4.ul.li3-text")}
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "emotional",
            title: t("section5.title"),
            content: (
                <div>
                    <Typography>
                        { t("section5.desc") }
                    </Typography>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section5.ul.li1-strong")}</strong>
                            {t("section5.ul.li1-text")}
                        </li>
                        <li>
                            <strong>{t("section5.ul.li2-strong")}</strong>
                            {t("section5.ul.li2-text")}
                        </li>
                        <li>
                            <strong>{t("section5.ul.li3-strong")}</strong>
                            {t("section5.ul.li3-text")}
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "ignorance",
            title: t("section6.title"),
            content: (
                <div>
                    <Typography>
                        { t("section6.desc") }
                    </Typography>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section6.ul.li1-strong")}</strong>
                            {t("section6.ul.li1-text")}
                        </li>
                        <li>
                            <strong>{t("section6.ul.li2-strong")}</strong>
                            {t("section6.ul.li2-text")}
                        </li>
                        <li>
                            <strong>{t("section6.ul.li3-strong")}</strong>
                            {t("section6.ul.li3-text")}
                        </li>
                    </ul>
                    <Typography className={"!mt-4 block"}>
                        { t("section6.advance") }
                    </Typography>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section6.ul.li1-strong")}</strong>
                            {t("section6.aul.li1")}
                        </li>
                        <li>
                            <strong>{t("section6.ul.li2-strong")}</strong>
                            {t("section6.aul.li2")}
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
                    <Typography className={"block my-4"}>
                        { t("summary.prompt") }
                    </Typography>
                    <ul className="list-decimal pl-5 space-y-1">
                        <li>{t("summary.ul.li1")}</li>
                        <li>{t("summary.ul.li2")}</li>
                        <li>{t("summary.ul.li3")}</li>
                        <li>{t("summary.ul.li4")}</li>
                        <li>{t("summary.ul.li5")}</li>
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
        {imageUrl: "/images/academy/learning-article2.png", title: "宏观经济深度报告：大财政时代冲击联储独立性...", disc: "宏观", time: "2025/9/3" },
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