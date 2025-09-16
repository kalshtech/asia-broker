"use client";

import { useEffect, useRef } from "react";

type Props = {
    width?: number | string;              // 可用 "100%" 或像素
    height?: number;                      // 像素
    locale?: string;                      // "zh_CN" | "en" | ...
    colorTheme?: "light" | "dark";
    transparent?: boolean;
    currencies?: string[];                // 要显示的货币列表
    configOverride?: Record<string, any>; // 完全覆盖原生配置（可选）
    type?: string;
};

export default function TvForexHeatmap(props: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const {
        width = "100%",
        height = 520,
        locale = "en",
        colorTheme = "light",
        transparent = false,
        currencies = ["EUR", "USD", "AUD", "GBP", "NZD", "CAD", "CHF", "JPY", "CNY"],
        configOverride,
        type = "cross"
    } = props;
    useEffect(() => {
        if (!ref.current) return;
        ref.current.innerHTML = ""; // 避免重复挂载

        const crossUrl = "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
        const heatUrl = "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
        const url = type === "cross" ? crossUrl : heatUrl;

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = url;

        const baseConfig = {
            width,
            height,
            currencies,
            isTransparent: transparent,
            colorTheme,
            locale,
        };

        script.innerHTML = JSON.stringify(
            configOverride ? { ...baseConfig, ...configOverride } : baseConfig
        );

        ref.current.appendChild(script);

        return () => {
            if (ref.current) ref.current.innerHTML = "";
        };
    }, [width, height, locale, colorTheme, transparent, currencies, configOverride, type]);

    return (
        <div className="tradingview-widget-container" ref={ref}>
            <div className="tradingview-widget-container__widget" />
        </div>
    );
}
