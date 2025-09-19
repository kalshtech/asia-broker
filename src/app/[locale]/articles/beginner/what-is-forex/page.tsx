import * as React from 'react';
import { getTranslations } from "next-intl/server";
import ArticleDetails from "@/components/article/Details";
import { Typography } from "@/components/ui/typography";

export default async function Page() {
    const t = await getTranslations("Articles.beginner.what-is-forex");

    const sections = [
        {
            id: "appendix",
            title: t("section1.title"),
            content: (
                <div>
                    <Typography>{ t("section1.desc1") }</Typography>
                    <Typography className={"block mt-4"}>{ t("section1.desc2") }</Typography>
                </div>
            )
        },
        {
            id: "what-is-forex",
            title: t("section2.title"),
            content: (
                <div>
                    <Typography>
                        {t("section2.desc")}
                    </Typography>
                    <Typography className={"block mt-4"}>
                        {t("section2.prompt")}
                    </Typography>
                    <ul className="list-disc mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section2.ul.li1-strong")}</strong>
                            <Typography>
                                {t("section2.ul.li1-text")}
                            </Typography>
                        </li>
                        <li>
                            <strong>{t("section2.ul.li2-strong")}</strong>
                            <Typography>
                                {t("section2.ul.li2-text")}
                            </Typography>
                        </li>
                    </ul>
                    <Typography className={"block mt-4"}>
                        {t("section2.tips")}
                    </Typography>
                </div>
            )
        },
        {
            id: "fundamental",
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
                                <li>
                                    <strong>{t("section3.ul.li1-text1-strong")}</strong>
                                    {t("section3.ul.li1-text1")}
                                </li>
                                <li>
                                    <strong>{t("section3.ul.li1-text2-strong")}</strong>
                                    {t("section3.ul.li1-text2")}
                                </li>
                                <li>
                                    <strong>{t("section3.ul.li1-text3-strong")}</strong>
                                    {t("section3.ul.li1-text3")}
                                </li>
                                <li>
                                    <strong>{t("section3.ul.li1-text4-strong")}</strong>
                                    {t("section3.ul.li1-text4")}
                                </li>
                                <li>
                                    <strong>{t("section3.ul.li1-text5-strong")}</strong>
                                    {t("section3.ul.li1-text5")}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section3.ul.li2-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>
                                    <strong>{t("section3.ul.li2-text1-strong")}</strong>
                                    {t("section3.ul.li2-text1")}
                                </li>
                                <li>
                                    <strong>{t("section3.ul.li2-text2-strong")}</strong>
                                    {t("section3.ul.li2-text2")}
                                </li>
                                <li>
                                    <strong>{t("section3.ul.li2-text3-strong")}</strong>
                                    {t("section3.ul.li2-text3")}
                                </li>
                                <li>
                                    <strong>{t("section3.ul.li2-text4-strong")}</strong>
                                    {t("section3.ul.li2-text4")}
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section3.ul.li3-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>
                                    <strong>{t("section3.ul.li3-text1-strong")}</strong>
                                    {t("section3.ul.li3-text1")}
                                </li>
                                <li>
                                    <strong>{t("section3.ul.li3-text2-strong")}</strong>
                                    {t("section3.ul.li3-text2")}
                                </li>
                                <li>
                                    <strong>{t("section3.ul.li3-text3-strong")}</strong>
                                    {t("section3.ul.li3-text3")}
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "why",
            title: t("section4.title"),
            content: (
                <div>
                    <Typography>
                        {t("section4.desc")}
                    </Typography>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section4.ul.li1-strong")}</strong>
                            <div>{t("section4.ul.li1-text1")}</div>
                        </li>
                        <li>
                            <strong>{t("section4.ul.li2-strong")}</strong>
                            <div>{t("section4.ul.li2-text1")}</div>
                        </li>
                        <li>
                            <strong>{t("section4.ul.li3-strong")}</strong>
                            <div>{t("section4.ul.li3-text1")}</div>
                        </li>
                        <li>
                            <strong>{t("section4.ul.li4-strong")}</strong>
                            <div>{t("section4.ul.li4-text1")}</div>
                        </li>
                    </ul>
                    <Typography className={"block mt-4"}>
                        {t("section4.prompt")}
                    </Typography>
                </div>
            )
        },
        {
            id: "elementary",
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
                                <li>{t("section5.ul.li1-text2")}</li>
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
                        <li>
                            <strong>{t("section5.ul.li4-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section5.ul.li4-text1")}</li>
                                <li>{t("section5.ul.li4-text2")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section5.ul.li5-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section5.ul.li5-text1")}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "advantages-risks",
            title: t("section6.title"),
            content: (
                <div>
                    <ul className="list-decimal mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section6.ul.li1-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section6.ul.li1-text1")}</li>
                                <li>{t("section6.ul.li1-text2")}</li>
                                <li>{t("section6.ul.li1-text3")}</li>
                                <li>{t("section6.ul.li1-text4")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section6.ul.li2-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section6.ul.li2-text1")}</li>
                                <li>{t("section6.ul.li2-text2")}</li>
                                <li>{t("section6.ul.li2-text3")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section6.ul.li3-strong")}</strong>
                            <ul className="list-disc my-2 pl-5 space-y-1">
                                <li>{t("section6.ul.li3-text1")}</li>
                                <li>{t("section6.ul.li3-text2")}</li>
                                <li>{t("section6.ul.li3-text3")}</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "who",
            title: t("section7.title"),
            content: (
                <div>
                    <Typography>
                        { t("section7.desc") }
                    </Typography>
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
                            </ul>
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: "qa",
            title: t("section8.title"),
            content: (
                <div>
                    <ul className="list-none mt-4 pl-5 space-y-1">
                        <li>
                            <strong>{t("section8.ul.li1-strong")}</strong>
                            <ul className="list-none my-2 pl-5 space-y-1">
                                <li>{t("section8.ul.li1-text1")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section8.ul.li2-strong")}</strong>
                            <ul className="list-none my-2 pl-5 space-y-1">
                                <li>{t("section8.ul.li2-text1")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section8.ul.li3-strong")}</strong>
                            <ul className="list-none my-2 pl-5 space-y-1">
                                <li>{t("section8.ul.li3-text1")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section8.ul.li4-strong")}</strong>
                            <ul className="list-none my-2 pl-5 space-y-1">
                                <li>{t("section8.ul.li4-text1")}</li>
                            </ul>
                        </li>
                        <li>
                            <strong>{t("section8.ul.li5-strong")}</strong>
                            <ul className="list-none my-2 pl-5 space-y-1">
                                <li>{t("section8.ul.li5-text1")}</li>
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
                        {t("summary.desc1")}
                    </Typography>
                    <Typography className={"block my-4"}>
                        { t("summary.desc2") }
                    </Typography>
                    <Typography className={"block my-4"}>
                        { t("summary.desc3") }
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