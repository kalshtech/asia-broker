"use client";

import { useEffect, useRef } from "react";
import {
    createChart,
    type IChartApi,
    LineSeries,
} from "lightweight-charts";
import {params_historical_chart} from "@/params/api";
import {http} from "@/utils/http";

type Props = {
    symbol?: string;
    height?: number;
};


export default function MinuteChart({ symbol = "EURUSD", height = 420 }: Props) {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);

    const chartOptions = {
        layout: {
            textColor: 'black',
            background: { type: 'solid', color: 'white' },
            attributionLogo: false
        },
        localization: {
            locale: "en-US",
            dateFormat: 'yyyy-MM-dd'
        },
        handleScale: false,
        handleScroll: false,
    };

    const handleLoadData = async () => {
        if (!chartRef.current) return;

        const klineParams = {
            ...params_historical_chart.params,
            symbol: "XAUUSD",
            timeframe: "1day"
        };

        const areaSeries = chartRef.current.addSeries(LineSeries, {
            lineWidth: 2,
            color: "#FF770F"
        });

        const klineResult = await http.get(params_historical_chart.url, { params: klineParams });
        const KlineData = await klineResult.data.data.filter((d: any, index: number) => index < 100).reverse();
        const data = KlineData.map(((d: any) => {
            return {
                // time: new Date(d.date).getTime(),
                // time: dayjs(d.date).format("YYYY-MM-DD"),
                time: d.date.split(" ")[0],
                value: d.close
            }
        }));

        areaSeries.setData(data);
        chartRef.current?.timeScale().fitContent();
    }

    useEffect(() => {
        if (!chartContainerRef.current) return;

        chartRef.current = createChart(chartContainerRef.current, chartOptions as any);
        chartRef.current.applyOptions({
            rightPriceScale: {
                scaleMargins: { top: 0.3, bottom: 0.25 },
            }
        });

        handleLoadData();
        return () => {
            chartRef.current?.remove();
        };
    }, []);

    return (
        <div className="w-full">
            <div ref={chartContainerRef} style={{ height }}/>
        </div>
    );
}
