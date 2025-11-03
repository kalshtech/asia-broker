"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { params_sofr } from "@/params/api";
import { http } from "@/utils/http";
import dynamic from "next/dynamic";
import Highcharts from "highcharts/highstock";
import { Options, SeriesLineOptions } from "highcharts";
import classnames  from "classnames";
import Container from "@/components/Container";

// 动态加载 React 包装，避免 SSR 报错
const HighchartsReact = dynamic(() => import("highcharts-react-official"), { ssr: false });

// 全局格式：千位空格、关闭导出与版权
Highcharts.setOptions({
    lang: { thousandsSep: " " },
    credits: { enabled: false } as any,
});

// 把 "YYYY-MM-DD" 转成 UTC 时间戳，避免时区偏移
function dateToUTC(d: string) {
    const [y, m, day] = d.split("-").map(Number);
    return Date.UTC(y, (m || 1) - 1, day || 1);
}

// 兜底：如果 newData 缺失，尝试解析 data（string -> json）
function pickPayload(x: any) {
    if (x.newData && x.newData.refRateDt) return x.newData;
    if (x.data) {
        try {
            const j = JSON.parse(x.data);
            // 兼容后端可能的 key 命名
            return {
                refRateDt: j.refRateDt || j.date,
                dailyRate: j.dailyRate ?? j.rate ?? null,
                tradingVolume: j.tradingVolume ?? j.volume ?? null,
            };
        } catch {
            return null;
        }
    }
    return null;
}

function useNormalized(raw: any) {
    // 过滤 & 排序
    const rows = raw
        .map(pickPayload)
        .filter((d: any): d is NonNullable<ReturnType<typeof pickPayload>> => !!d && !!d.refRateDt)
        .sort((a: any, b: any) => a.refRateDt.localeCompare(b.refRateDt));

    const rateData = rows
        .map((d: any) => [dateToUTC(d.refRateDt), d.dailyRate == null ? null : Number(d.dailyRate)]) as [number, number | null][];

    const volData = rows
        .map((d: any) => [dateToUTC(d.refRateDt), d.tradingVolume == null ? null : Number(d.tradingVolume)]) as [number, number | null][];

    const hasVolume = volData.some(([, v]) => v != null && Number.isFinite(v));

    // 左轴范围小垫一点边距（看起来更贴近你截图）
    const yLeftDomain = (() => {
        const vals = rateData.map(([, v]) => (v ?? NaN)).filter(v => Number.isFinite(v)) as number[];
        if (!vals.length) return undefined;
        const min = Math.min(...vals), max = Math.max(...vals);
        const pad = 0.02; // 0.02%
        return [Number((min - pad).toFixed(2)), Number((max + pad).toFixed(2))] as const;
    })();

    return { rateData, volData, hasVolume, yLeftDomain };
}


type Row = { date: string; rate?: number | null; volume?: number | null };

function SOFRHighcharts({ raw, loading = true }: { raw: any, loading: boolean; }) {
    const { rateData, volData, hasVolume, yLeftDomain } = useNormalized(raw);

    const options: Options = React.useMemo(() => ({
        chart: { height: 360, spacing: [10, 16, 10, 16], backgroundColor: "transparent" },
        rangeSelector: {
            enabled: false
            // selected: 0, // 默认 1m
            // inputEnabled: false,
            // buttons: [
            //     { type: "month", count: 1, text: "1m" },
            //     { type: "month", count: 3, text: "3m" },
            //     { type: "year",  count: 1, text: "1y" },
            //     { type: "all",             text: "All" },
            // ],
        },
        navigator: { enabled: false },
        scrollbar: { enabled: false },
        legend: { enabled: true, align: "right", verticalAlign: "top" },
        xAxis: { type: "datetime", tickLength: 0, crosshair: { width: 1 } },
        yAxis: [
            {
                title: { text: "Percent" },
                labels: { formatter() { return (this.value as number).toFixed(2); } },
                opposite: false,
                gridLineColor: "rgba(0,0,0,0.08)",
                ...(yLeftDomain ? { min: yLeftDomain[0], max: yLeftDomain[1] } : {}),
            },
            {
                title: { text: hasVolume ? "$Billions" : "" },
                opposite: true,
                gridLineWidth: 0,
                labels: { formatter() { return Highcharts.numberFormat(this.value as number, 0); } },
            },
        ],
        tooltip: {
            shared: true,
            useHTML: true,
            borderRadius: 8,
            formatter: function () {
                // @ts-ignore
                const pts = this.points as Highcharts.TooltipFormatterContextObject[];
                // @ts-ignore
                const x = this.x as number;
                const dateStr = Highcharts.dateFormat("%A, %b %e, %Y", x);
                let html = `<span>${dateStr}</span>`;
                pts?.forEach(p => {
                    const name = p.series.name;
                    const color = p.color || "#000";
                    const val = name === "SOFR"
                        ? Highcharts.numberFormat(p.y as number, 2)
                        : Highcharts.numberFormat(p.y as number, 0);
                    html += `<br/><span style="color:${color}">●</span> ${name}: <b>${val}</b>`;
                });
                return html;
            },
        },
        plotOptions: {
            series: {
                lineWidth: 3,
                marker: { enabled: true, radius: 3, symbol: "circle" },
                connectNulls: true,
                states: { hover: { lineWidthPlus: 0 } },
                dataGrouping: { enabled: false },
            } as SeriesLineOptions,
        },
        series: [
            { type: "line", name: "SOFR",   data: rateData, yAxis: 0, color: "#1f6ed4", tooltip: { valueDecimals: 2 } },
            ...(hasVolume ? [{ type: "line", name: "Volume", data: volData, yAxis: 1, color: "#000000", tooltip: { valueDecimals: 0 } } as SeriesLineOptions] : []),
        ],
    }), [JSON.stringify(rateData), JSON.stringify(volData), hasVolume, yLeftDomain?.[0], yLeftDomain?.[1]]);

    return (
        <div className={classnames(["rounded-xl border bg-white", {
            "p-4 shadow-sm": !loading
        }])}>
            <HighchartsReact highcharts={Highcharts} constructorType="stockChart" options={options} />
        </div>
    );
}

const Rates = () => {
    const t = useTranslations("Pages.accounts.profit.rates");
    const [raw, setRaw] = React.useState<Row[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true)

    const handleGetData = async () => {
        setLoading(true);
        const result = await http.get(params_sofr.url, {  });
        if(result.data.status === 0) {
            const data = await result.data.data;
            setRaw(data);
            setLoading(false);
        }
    }

    React.useEffect(() => {
        handleGetData();
    }, [])

    return (
        <section className={"bg-theme-light-bg py-16 xl:py-30"}>
            <Container>
                <div className={"grid grid-cols-12 gap-4 lg:gap-20"}>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <Typography variant={"h3"}>
                            {t("title")}
                        </Typography>
                        <Typography variant={"p"} className={"mt-4 lg:mt-8"}>
                            {t("desc1")}
                        </Typography>
                        <Typography variant={"p"} className={"mt-6"}>
                            {t("desc2")}
                        </Typography>
                        <Typography variant={"p"} className={"mt-6"}>
                            {t("desc3")}
                        </Typography>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <Typography variant={"p"}>
                            {t("line-title")}
                        </Typography>
                        <div className={"mt-4 h-80"}>
                            <SOFRHighcharts loading={loading} raw={raw}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Rates;