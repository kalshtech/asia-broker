"use client";
import { useEffect, useRef } from "react";
type HeatmapProps = {
    width?: number | string;
    height?: number;
    locale?: string;            // 例如 "zh_CN" | "en"
    colorTheme?: "light" | "dark";
    configOverride?: Record<string, any>;
};

export default function TvStockHeatmap({
                                           width = "100%",
                                           height = 520,
                                           locale = "en",
                                           colorTheme = "light",
                                           configOverride,
                                       }: HeatmapProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 清理旧实例（路由返回/热更新时避免重复插入）
        if (!containerRef.current) return;
        containerRef.current.innerHTML = "";
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";

        // 最常用配置；如需自定义，传 configOverride 覆盖
        const baseConfig = {
            // 数据源（常见：S&P 500 / NASDAQ / NYSE 等）
            dataSource: "S&P 500",
            grouping: "sector",          // 行业分组
            blockSize: "market_cap",     // 按市值占比
            blockColor: "change",        // 颜色按涨跌
            locale,
            colorTheme,
            width,
            height,
            showSymbolTooltip: true,
            showSymbolLogo: true,
            // 其它可选项：dateRange, customColorPalette, borderRadius, legend…
        };

        script.innerHTML = JSON.stringify(
            configOverride ? { ...baseConfig, ...configOverride } : baseConfig
        );

        containerRef.current.appendChild(script);

        // 卸载时清理
        return () => {
            if (containerRef.current) containerRef.current.innerHTML = "";
        };
    }, [width, height, locale, colorTheme, configOverride]);

    // TradingView 要求有这个容器结构
    return (
        <div className="tradingview-widget-container" ref={containerRef}>
            <div className="tradingview-widget-container__widget" />
        </div>
    );
}
