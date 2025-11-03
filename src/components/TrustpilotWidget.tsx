// app/components/TrustpilotWidget.tsx 或 components/TrustpilotWidget.tsx
'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
    interface Window {
        Trustpilot?: { loadFromElement: (el: Element, resize: boolean) => void };
    }
}

type Props = {
    locale?: string;               // e.g. 'en-US', 'ja-JP', 'zh-CN'
    businessUnitId: string;        // 你的 Trustpilot Business Unit ID
    templateId: string;            // 你的模板 ID
    height?: string;               // e.g. '24px', '150px'
    width?: string;                // e.g. '100%', '300px'
    theme?: 'light' | 'dark';
};

export default function TrustpilotWidget({
                                             locale = 'en-US',
                                             businessUnitId,
                                             templateId,
                                             height = '24px',
                                             width = '100%',
                                             theme = 'light',
                                         }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    // 防止 React 严格模式或多次渲染重复初始化
    const init = () => {
        if (!ref.current) return;
        if (typeof window !== 'undefined' && window.Trustpilot?.loadFromElement) {
            window.Trustpilot.loadFromElement(ref.current, true);
        }
    };

    useEffect(() => {
        // 如果脚本已经加载完成，直接尝试初始化一次
        init();
    }, []);

    return (
        <>
            {/* 关键点：让脚本在页面可交互（hydrate 完）后再加载，避免水合前改 DOM */}
            <Script
                src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                strategy="afterInteractive"
                onLoad={init}
            />
            {/* 这个容器由 Trustpilot 脚本在客户端接管并填充 */}
            <div
                ref={ref}
                className="trustpilot-widget"
                data-locale={locale}
                data-template-id={templateId}
                data-businessunit-id={businessUnitId}
                data-style-height={height}
                data-style-width={width}
                data-theme={theme}
                // 如果第三方会直接替换内部 HTML，这个标志能压制 React 的水合告警
                suppressHydrationWarning
            />
        </>
    );
}
