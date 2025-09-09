import React, { useRef, useEffect } from "react";
import {createChart, IChartApi, LineSeries} from "lightweight-charts";

const MiniChart: React.FC<any> = ({ data }) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);

    const chartOptions = {
        width: 128,
        height: 48,
        layout: {
            textColor: 'black',
            background: { type: 'solid', color: 'transparent' },
            attributionLogo: false
        },
        grid: {
            vertLines: { visible: false, },
            horzLines: { visible: false, },
        },
        timeScale: { visible: false, },
        rightPriceScale: { visible: false, },
        handleScale: false,
        handleScroll: false,
    };

    useEffect(() => {
        if (!chartContainerRef.current) return;

        chartRef.current = createChart(chartContainerRef.current, chartOptions as any);
        chartRef.current.applyOptions({
            rightPriceScale: {
                scaleMargins: { top: 0.3, bottom: 0.25 },
            },
            crosshair: {
                horzLine: { visible: false, labelVisible: false },
                vertLine: { visible: false, labelVisible: false }
            }
        });

        const areaSeries = chartRef.current.addSeries(LineSeries, {
            lineWidth: 2,
            color: "#FF770F",
            crosshairMarkerVisible: false,
            priceLineVisible: false
        });

        areaSeries.setData(data);
        chartRef.current?.timeScale().fitContent();


        return () => {
            chartRef.current?.remove();
        };
    }, [data]);

    return (
        <div ref={chartContainerRef} />
    );
}


export default MiniChart;