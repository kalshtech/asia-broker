// app/components/ChartClient.tsx (Client Component)
"use client";

import { useEffect, useRef } from "react";
import {
    createChart,
    type IChartApi,
    LineSeries,
} from "lightweight-charts";


export default function ChartClient({data, height = 420, chartOptions, seriesOptions,}: { data: any; height?: number; chartOptions?: any; seriesOptions?: any; }) {
    const ref = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const chart = createChart(ref.current, chartOptions || {});
        chartRef.current = chart;

        // 右侧价格轴边距（你原来的设置）
        if (chartOptions?.rightPriceScale?.scaleMargins) {
            chart.applyOptions({
                rightPriceScale: chartOptions.rightPriceScale,
            });
        }

        const series = chart.addSeries(LineSeries, seriesOptions || { lineWidth: 2, color: "#FF770F" });
        series.setData(data);
        chart.timeScale().fitContent();

        return () => chart.remove();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [height, JSON.stringify(seriesOptions), JSON.stringify(chartOptions)]);

    return <div ref={ref} style={{ height }} className="w-full rounded-xl border" />;
}
