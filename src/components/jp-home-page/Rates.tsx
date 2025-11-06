"use client";
import React from "react";
import Container from "@/components/Container";
import { Typography } from "@/components/ui/typography";
export default function () {
    const ary = [
        { title: "0 交易手续费", desc: "涵盖外汇、商品、指数、股票与ETF等全品类CFD产品，无隐藏费用，真实报价透明执行。" },
        { title: "0 入金与出金费用", desc: "支持多币种入金渠道与区域支付方式，平台不收取任何手续费。" },
        { title: "0 隔夜利息¹", desc: "部分账户类型及市场条件下可享受隔夜利息减免，助您灵活持仓更具优势。" },
    ];
    return (
        <div className={"py-16 bg-theme-light-bg"}>
            <Container>
                <div className={"grid grid-cols-12 gap-8"}>
                    <div className={"col-span-6"}>
                        <img src="/images/jp/home-rates.webp" className={"max-h-130 object-cover"} alt=""/>
                    </div>
                    <div className={"col-span-6"}>
                        <div>
                            <Typography
                                variant={"h3"}
                            >
                                业界超低成本 · 轻松开启全球交易
                            </Typography>
                        </div>
                        <div className={"mt-12"}>
                            {
                                ary.map((d, i) => (
                                    <div className={"my-6"} key={i}>
                                        <div className={"flex items-center"}>
                                            <span className={"w-[5px] h-[5px] min-w-[5px] min-h-[5px] bg-theme-active block rounded-full"}/>
                                            <Typography
                                                variant={"h6"}
                                                className={"font-semibold ml-2"}
                                            >
                                                {d.title}
                                            </Typography>
                                        </div>

                                        <div  className={"mt-2"}>
                                            <Typography
                                                variant={"muted"}
                                            >
                                                {d.desc}
                                            </Typography>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={"mt-16"}>
                            <Typography
                                variant={"muted"}
                                className={"!text-[#999999] text-xs"}
                            >
                                ¹ 隔夜利息减免的适用范围可能因市场波动及账户类型而异，请参考各产品详细说明
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}