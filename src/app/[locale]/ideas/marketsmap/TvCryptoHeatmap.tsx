"use client";

import { useEffect, useRef } from "react";

type Props = {
    width?: number | string;              // 可用 "100%" 或像素
    height?: number;                      // 像素
    locale?: string;                      // "zh_CN" | "en" | ...
    colorTheme?: "light" | "dark";
    configOverride?: Record<string, any>; // 完全覆盖原生配置（可选）
};

export default function TvForexHeatmap(props: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const {
        width = "100%",
        height = 520,
        locale = "en",
        colorTheme = "light",
        configOverride,
    } = props;

    useEffect(() => {
        if (!ref.current) return;
        ref.current.innerHTML = ""; // 避免重复挂载

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js";

        const baseConfig = {
            width,
            height,
            colorTheme,
            locale,
            hasTopBar: true,
            isDataSetEnabled: false,
            isZoomEnabled: true,
            hasSymbolTooltip: true,
            isMonoSize: false,
        };

        script.innerHTML = JSON.stringify(
            configOverride ? { ...baseConfig, ...configOverride } : baseConfig
        );

        ref.current.appendChild(script);

        return () => {
            if (ref.current) ref.current.innerHTML = "";
        };
    }, [width, height, locale, colorTheme, configOverride]);

    return (
        <div className="tradingview-widget-container" ref={ref}>
            <div className="tradingview-widget-container__widget" />
        </div>
    );
}
