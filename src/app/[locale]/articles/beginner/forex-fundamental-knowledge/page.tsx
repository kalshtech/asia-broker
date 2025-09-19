import * as React from 'react';
import { getTranslations } from "next-intl/server";
import ArticleDetails from "@/components/article/Details";
import { Typography } from "@/components/ui/typography";

export default async function Page() {
    const t = await getTranslations("Articles.beginner.forex-fundamental-knowledge");

    const sections = [
        {
            id: "appendix",
            title: t("section1.title"),
            content: <Typography>{ t("section1.desc") }</Typography>
        },
        {
            id: "type",
            title: t("section2.title"),
            content: (
                <div>
                    <Typography>
                        {t("section2.desc")}
                    </Typography>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section2.ul.li1-strong")}</strong>
                            <Typography className={"block"}>
                                {t("section2.ul.li1-text")}
                            </Typography>
                        </li>
                        <li>
                            <strong>{t("section2.ul.li2-strong")}</strong>
                            <Typography className={"block"}>
                                {t("section2.ul.li2-text")}
                            </Typography>
                        </li>
                        <li>
                            <strong>{t("section2.ul.li3-strong")}</strong>
                            <ul className="list-disc mt-4 pl-5 space-y-1">
                                <li><strong>{t("section2.ul.li3-li1-strong")}</strong>{t("section2.ul.li3-li1-text")}
                                </li>
                                <li><strong>{t("section2.ul.li3-li2-strong")}</strong>{t("section2.ul.li3-li2-text")}
                                </li>
                                <li><strong>{t("section2.ul.li3-li3-strong")}</strong>{t("section2.ul.li3-li3-text")}
                                </li>
                            </ul>

                            <Typography className={"block mt-8"}>
                                {t("section2.ul.li3-demo")}
                            </Typography>

                            <ul className="list-disc mt-4 pl-5 space-y-1">
                                <li>{t("section2.ul.li3-demo1")}</li>
                                <li>{t("section2.ul.li3-demo2")}</li>
                                <li>{t("section2.ul.li3-demo3")}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "unit",
            title: t("section3.title"),
            content: (
                <div>
                    <Typography>
                        {t("section3.desc")}
                    </Typography>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section3.ul.li1-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section3.ul.li1-text1")}</li>
                                <li>{t("section3.ul.li1-text2")}</li>
                                <li>{t("section3.ul.li1-text3")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section3.ul.li2-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section3.ul.li2-text1")}</li>
                                <li>{t("section3.ul.li2-text2")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section3.ul.li3-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section3.ul.li3-text1")}</li>
                                <li>{t("section3.ul.li3-text2")}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "margin",
            title: t("section4.title"),
            content: (
                <div>
                    <Typography>
                        {t("section4.desc")}
                    </Typography>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section4.ul.li1-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section4.ul.li1-text1")}</li>
                                <li>{t("section4.ul.li1-text2")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section4.ul.li2-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section4.ul.li2-text1")}</li>
                                <li>{t("section4.ul.li2-text2")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section4.ul.li3-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section4.ul.li3-text1")}</li>
                            </ul>
                        </li>
                    </ul>
                    <Typography className={"block mt-4"}>
                        {t("section4.prompt")}
                    </Typography>
                </div>
            )
        },
        {
            id: "order-type",
            title: t("section5.title"),
            content: (
                <div>
                    <Typography>
                        {t("section5.desc")}
                    </Typography>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section5.ul.li1-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section5.ul.li1-text1")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section5.ul.li2-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section5.ul.li2-text1")}</li>
                                <li>{t("section5.ul.li2-text2")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section5.ul.li3-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section5.ul.li3-text1")}</li>
                                <li>{t("section5.ul.li3-text2")}</li>
                            </ul>
                        </li>
                    </ul>
                    <Typography className={"block mt-4"}>
                        {t("section5.prompt")}
                    </Typography>
                </div>
            )
        },
        {
            id: "time-feature",
            title: t("section6.title"),
            content: (
                <div>
                    <Typography>
                        {t("section6.desc")}
                    </Typography>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section6.ul.li1-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section6.ul.li1-text1")}</li>
                                <li>{t("section6.ul.li1-text2")}</li>
                                <li>{t("section6.ul.li1-text3")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section6.ul.li2-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section6.ul.li2-text1")}</li>
                                <li>{t("section6.ul.li2-text2")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section6.ul.li3-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section6.ul.li3-text1")}</li>
                                <li>{t("section6.ul.li3-text2")}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "cost",
            title: t("section7.title"),
            content: (
                <div>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section7.ul.li1-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section7.ul.li1-text1")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section7.ul.li2-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section7.ul.li2-text1")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section7.ul.li3-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section7.ul.li3-text1")}</li>
                                <li>{t("section7.ul.li3-text2")}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "risks",
            title: t("section8.title"),
            content: (
                <div>
                    <Typography>
                        {t("section8.desc")}
                    </Typography>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section8.ul.li1-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section8.ul.li1-text1")}</li>
                                <li>{t("section8.ul.li1-text2")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section8.ul.li2-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section8.ul.li2-text1")}</li>
                                <li>{t("section8.ul.li2-text2")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section8.ul.li3-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section8.ul.li3-text1")}</li>
                                <li>{t("section8.ul.li3-text2")}</li>
                            </ul>
                        </li>
                    </ul>
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
                        <li>
                            <strong>{t("section9.ul.li4-strong")}</strong>
                            <ul className="list-none my-2 pl-5 space-y-1">
                                <li>{t("section9.ul.li4-text1")}</li>
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
                    <Typography className={"block my-4"}>
                        { t("summary.desc1") }
                    </Typography>
                    <Typography className={"block my-4"}>
                        { t("summary.desc2") }
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