import * as React from 'react';
import { getTranslations } from "next-intl/server";
import HeatCharts from "./HeatCharts";
import {redirect} from "next/navigation";
import Interpretation from "./Interpretation";
import MarketBanner from "./MarketBanner";
import Tools from "@/components/common/Tools"

type Props = {
    params: { locale: string };
    searchParams: Record<string, string | string[] | undefined>;
};


export default async function Page({ params, searchParams }: Props) {
    const { locale } = await params;
    const search = await searchParams;
    // 读取现有查询，缺哪个补哪个（保留已有，避免覆盖）
    const tab = typeof search.tab === "string" ? search.tab : undefined;
    const type = typeof search.type === "string" ? search.type : undefined;

    if (!tab || !type) {
        const sp = new URLSearchParams();

        sp.set("tab", tab ?? "Overview");
        sp.set("type", type ?? "cross");

        // 如有其他查询参数也要保留，可把它们一并写入 sp
        redirect(`/${locale}/ideas/marketsmap?${sp.toString()}`);
    }

    return (
        <div>
            <MarketBanner/>
            <HeatCharts />
            <Interpretation/>
            <Tools/>
        </div>
    )
}