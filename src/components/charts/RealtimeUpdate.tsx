import React, { useRef, useEffect } from "react";
import {createChart, IChartApi, LineSeries, CandlestickSeries, CandlestickData} from "lightweight-charts";

let randomFactor = 25 + Math.random() * 25;
const samplePoint = (i: any) =>
    i *
    (0.5 +
        Math.sin(i / 1) * 0.2 +
        Math.sin(i / 2) * 0.4 +
        Math.sin(i / randomFactor) * 0.8 +
        Math.sin(i / 50) * 0.5) +
    200 +
    i * 2;

function generateData(
    numberOfCandles = 500,
    updatesPerCandle = 5,
    startAt = 100
) {
    const createCandle = (val: any, time: any) => ({
        time,
        open: val,
        high: val,
        low: val,
        close: val,
    });

    const updateCandle = (candle: any, val: any) => ({
        time: candle.time,
        close: val,
        open: candle.open,
        low: Math.min(candle.low, val),
        high: Math.max(candle.high, val),
    });

    randomFactor = 25 + Math.random() * 25;
    const date = new Date(Date.UTC(2018, 0, 1, 12, 0, 0, 0));
    const numberOfPoints = numberOfCandles * updatesPerCandle;
    const initialData = [];
    const realtimeUpdates = [];
    let lastCandle;
    let previousValue = samplePoint(-1);
    for (let i = 0; i < numberOfPoints; ++i) {
        if (i % updatesPerCandle === 0) {
            date.setUTCDate(date.getUTCDate() + 1);
        }
        const time = date.getTime() / 1000;
        let value = samplePoint(i);
        const diff = (value - previousValue) * Math.random();
        value = previousValue + diff;
        previousValue = value;
        if (i % updatesPerCandle === 0) {
            const candle = createCandle(value, time);
            lastCandle = candle;
            if (i >= startAt) {
                realtimeUpdates.push(candle);
            }
        } else {
            const newCandle = updateCandle(lastCandle, value);
            lastCandle = newCandle;
            if (i >= startAt) {
                realtimeUpdates.push(newCandle);
            } else if ((i + 1) % updatesPerCandle === 0) {
                initialData.push(newCandle);
            }
        }
    }

    return {
        initialData,
        realtimeUpdates,
    };
}


const RealTimeUpdate: React.FC<any> = ({ data }) => {
    const MAX_BARS = 80; // ✅ 想显示多少根就在这里改

    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);

    const dataRef = useRef<CandlestickData[]>([]);

    const chartOptions = {
        autoSize: true,
        layout: {
            textColor: "black",
            background: { type: "solid", color: "transparent" },
            attributionLogo: false,
        },
        grid: {
            vertLines: { visible: false },
            horzLines: { visible: false },
        },
        timeScale: { visible: false },
        rightPriceScale: { visible: false },
        handleScale: false,
        handleScroll: false,
        height: 400,
    };

    const handleResizeHandler = () => {
        requestAnimationFrame(() => {
            if (!chartRef.current) return;
            chartRef.current.timeScale().fitContent();
        });
    };

    useEffect(() => {
        if (!chartContainerRef.current) return;

        chartRef.current = createChart(chartContainerRef.current, chartOptions as any);

        const series = chartRef.current.addSeries(CandlestickSeries, {
            upColor: "#26a69a",
            downColor: "#ef5350",
            borderVisible: false,
            wickUpColor: "#26a69a",
            wickDownColor: "#ef5350",
        });

        const data = generateData(2500, 20, 1000);
        const initData = data.initialData.slice(-MAX_BARS);

        dataRef.current = initData;
        series.setData(initData);

        chartRef.current.timeScale().fitContent();

        function* getNextRealtimeUpdate(realtimeData: any) {
            for (const dataPoint of realtimeData) {
                yield dataPoint;
            }
            return null;
        }
        const streamingDataProvider = getNextRealtimeUpdate(data.realtimeUpdates);

        const intervalID = setInterval(() => {
            const update = streamingDataProvider.next();
            if (update.done) {
                clearInterval(intervalID);
                return;
            }

            const newBar = update.value;

            // 当前已经在图上的数据
            const current = dataRef.current;
            const last = current[current.length - 1];

            // ① 情况一：时间相同 => 说明是同一根K线的“最新报价”，直接替换最后一根
            if (last && last.time === newBar.time) {
                const replaced = [...current.slice(0, -1), newBar];
                dataRef.current = replaced;
                series.update(newBar); // 这里用 update 就好
                return;
            }

            // ② 情况二：时间往后走了 => 是真正的新K线
            const appended = [...current, newBar];

            if (appended.length > MAX_BARS) {
                const sliced = appended.slice(-MAX_BARS);
                dataRef.current = sliced;
                // 因为删了前面的，就要重新 setData
                series.setData(sliced);
            } else {
                dataRef.current = appended;
                series.update(newBar);
            }
        }, 100);

        window.addEventListener("resize", handleResizeHandler);

        return () => {
            chartRef.current?.remove();
            window.removeEventListener("resize", handleResizeHandler);
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div ref={chartContainerRef} />
    );
}


export default RealTimeUpdate;