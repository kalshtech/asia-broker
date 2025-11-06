"use client";
import * as React from 'react';
import Container from "@/components/Container"
import { Typography } from "@/components/ui/typography";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn"

export default function () {
    const btnAry = [
        { label: "美国股票", value: "us-stock" },
        { label: "外汇", value: "forex" },
        { label: "商品OTC", value: "otc" },
        { label: "日本股票OTC", value: "jp-otc" },
        { label: "美国期货OTC", value: "us-future-otc" },
        { label: "ETF&基金", value: "etf & fund" },
    ]
    return (
        <div>
            <div className={"max-w-3xl my-4 mx-auto grid grid-cols-6 gap-8"}>
                {
                    btnAry.map((item, i) => (
                        <GeneralLinkBtn
                            key={i}
                            text={item.label}
                            theme={"transparent"}
                            className={"!h-8"}
                        />
                    ))
                }
            </div>
            <div className={"bg-[url(/images/jp/home-banner.webp)] bg-cover bg-center py-24"}>
                <Container>
                    <div className={"grid grid-cols-12 gap-8"}>
                        <div className={"col-span-6"}>
                            <Typography
                                variant={"h1"}
                                className={"!text-white"}
                            >
                                投資家が創る，投資家のためのプラットフォーム
                            </Typography>
                            <Typography
                                variant={"h4"}
                                className={"!text-white mt-6"}
                            >
                                世界の投資家をつなぐ、新しいプラットフォーム。
                            </Typography>

                            <div className={"mt-16"}>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-white"}
                                >
                                    最短1時間で取引を開始できます
                                </Typography>
                                <GeneralLinkBtn
                                    text={"無料口座開設はこちら"}
                                    theme={"active-solid"}
                                    isLink
                                    className={"mt-4"}
                                />
                            </div>

                            <Typography
                                variant={"muted"}
                                className={"mt-10 !text-white"}
                            >
                                ※1 本比較結果は、主要なFX取引ブローカー（TitanFX、XM、Exness、IG、Plus500、SBI証券、松井証券、楽天証券）が公開している実行データおよび実際の取引テスト結果に基づいています。
                                注文執行速度・約定効率・スリッページの総合比較において、当社は平均執行時間および低スリッページ管理の面で優れた水準を示しています。
                                （集計期間：2025年9月～2025年10月／データ出典：実際の口座における取引執行ログの分析結果に基づいています）
                            </Typography>
                        </div>
                        <div className={"col-span-6 relative"}>
                            <img src="/images/jp/home-banner-mobile-phone.webp" className={"absolute max-h-160"} alt="mobile-phone"/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}