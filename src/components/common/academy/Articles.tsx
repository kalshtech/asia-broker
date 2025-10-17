"use client";
import * as React from 'react'
import {motion, Variants} from "framer-motion";
import {useTranslations} from "next-intl";
import {Typography} from "@/components/ui/typography";
import BaseArticle from "@/components/article/Base";
import { Input } from "@/components/ui/input";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Container from "@/components/Container";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import { Search } from "lucide-react";

const fadeInUp: Variants = {
    hidden: {opacity: 0, y: -20},
    visible: {
        opacity: 1,
        y: 0,
        transition: {duration: 0.8, ease: 'easeOut'},
    },
}

type Props = {
    showSearch?: boolean;
};

const Articles = (props: Props) => {
    const ArticlesT = useTranslations("Articles.beginner");
    const t = useTranslations("Pages.academy.learning.articles");
    const navigationT = useTranslations("Navigation");
    const commonT = useTranslations("Common");
    const [query, setQuery] = React.useState("");
    const { showSearch = false } = props;

    const stageAry = [
        {label: t("stage.before"), value: "before"},
        {label: t("stage.order"), value: "order"},
        {label: t("stage.operating"), value: "operating"},
        {label: t("stage.control"), value: "control"},
        {label: t("stage.functions"), value: "functions"},
    ];

    const themeAry = [
        {label: t("theme.forex"), value: "forex"},
        {label: t("theme.crypto"), value: "crypto"},
        {label: t("theme.metal"), value: "metal"},
        {label: t("theme.stock"), value: "stock"},
        {label: t("theme.future"), value: "future"},
        {label: t("theme.energy"), value: "energy"},
        {label: t("theme.beginner"), value: "beginner"},
        {label: t("theme.operationalGuide"), value: "operationalGuide"},
        {label: t("theme.trade"), value: "trade"},
        {label: t("theme.indices"), value: "indices"},
        {label: t("theme.weekView"), value: "weekView"},
        {label: t("theme.study"), value: "study"},
        {label: t("theme.interpretation"), value: "interpretation"},
        {label: t("theme.configuration"), value: "configuration"},
    ];

    const articlesAry = [
        {
            imageUrl: "/images/academy/learning-article1.png",
            title: ArticlesT("common-currency.title"),
            disc: "宏观",
            time: "2025/9/3",
            href: "/articles/beginner/common-currency"
        },
        {
            imageUrl: "/images/academy/learning-article2.png",
            title: ArticlesT("trading-mechanism.title"),
            disc: "宏观",
            time: "2025/9/3",
            href: "/articles/beginner/trading-mechanism"
        },
        {
            imageUrl: "/images/academy/learning-article3.png",
            title: ArticlesT("leverage-and-margin.title"),
            disc: "宏观",
            time: "2025/9/3",
            href: "/articles/beginner/leverage-and-margin"
        },
        {
            imageUrl: "/images/academy/learning-article4.png",
            title: ArticlesT("explain-rates.title"),
            disc: "宏观",
            time: "2025/9/3",
            href: "/articles/beginner/explain-rates"
        },
        {
            imageUrl: "/images/academy/learning-article5.png",
            title: ArticlesT("what-is-forex.title"),
            disc: "宏观",
            time: "2025/9/3",
            href: "/articles/beginner/what-is-forex"
        },
        {
            imageUrl: "/images/academy/learning-article6.png",
            title: ArticlesT("forex-vs-stock.title"),
            disc: "宏观",
            time: "2025/9/3",
            href: "/articles/beginner/forex-vs-stock"
        },
        {
            imageUrl: "/images/academy/learning-article2.png",
            title: ArticlesT("forex-fundamental-knowledge.title"),
            disc: "宏观",
            time: "2025/9/3",
            href: "/articles/beginner/forex-fundamental-knowledge"
        },
        {
            imageUrl: "/images/academy/learning-article3.png",
            title: ArticlesT("forex-basic-analysis.title"),
            disc: "宏观",
            time: "2025/9/3",
            href: "/articles/beginner/forex-basic-analysis"
        },
        {
            imageUrl: "/images/academy/learning-article1.png",
            title: ArticlesT("common-mistakes.title"),
            disc: "宏观",
            time: "2025/9/3",
            href: "/articles/beginner/common-mistakes"
        },
    ];

    const filteredArticles = React.useMemo(() => {
        const lowerQuery = query.toLowerCase()
        return articlesAry.filter(article =>
            article.title.toLowerCase().includes(lowerQuery)
        )
    }, [query])


    return (
        <section className={"py-4 lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center"}
                    >
                        {t("title")}
                    </Typography>
                </motion.div>

                {
                    showSearch && (
                        <div className={"mt-16"}>
                            <div className={"grid grid-cols-12 gap-4"}>
                                <div className={"col-span-12 lg:col-span-6"}>
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/academy/learning">
                                                    {navigationT("menu.beginner.row.col-3.ul.li1")}
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>
                                            <BreadcrumbSeparator/>
                                            <BreadcrumbItem>
                                                <BreadcrumbLink href="/academy/document">
                                                    {navigationT("menu.beginner.row.col-3.ul.li2")}
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </div>
                                <div className={"col-span-12 flex justify-end lg:col-span-6"}>
                                    <div className="flex items-center bg-[#F6F6F6] border border-[#E6E6E6] gap-2 rounded-full pl-8 pr-4 py-2 w-full max-w-md">
                                        <Search className={"text-[#999999]"}/>
                                        <Input
                                            type="text"
                                            placeholder={commonT("search-articles")}
                                            onChange={(e) => setQuery(e.target.value)}
                                            className="border-none outline-0 pl-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                <div className={"mt-16"}>
                    <div className={""}>
                        <Typography variant={"muted"}>
                            {t("stage.title")}
                        </Typography>
                        <div className={"flex flex-wrap gap-4 mt-6"}>
                            {
                                stageAry.map((item, index) => (
                                    <div
                                        className={"bg-theme-light-bg rounded-full cursor-pointer text-[#666666] text-sm px-3 py-1 lg:px-6 lg:py-3"}
                                        key={index}>
                                    {item.label}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={"mt-6"}>
                        <Typography variant={"muted"}>
                            {t("theme.title")}
                        </Typography>
                        <div className={"flex flex-wrap gap-4 mt-6"}>
                            {
                                themeAry.map((item, index) => (
                                    <div
                                        className={"bg-theme-light-bg rounded-full cursor-pointer text-[#666666] text-sm px-3 py-1 lg:px-6 lg:py-3"}
                                        key={index}>
                                        {item.label}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {
                        filteredArticles.length > 0 ? (
                            <div className={"grid mt-6 gap-4 lg:gap-8 grid-cols-2 lg:grid-cols-3"}>
                                {
                                    filteredArticles.map((item, index) => (
                                        <BaseArticle key={index} {...item} />
                                    ))
                                }
                            </div>
                        ) : (
                            <div className={"p-30 text-gray-500 grid-cols-1 text-center text-sm"}>
                                {commonT("no-articles")}
                            </div>
                        )
                    }

                    <div className={"mt-16"}>
                        <div className={"flex justify-center items-center text-theme-active cursor-pointer"}>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious/>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext/>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Articles;