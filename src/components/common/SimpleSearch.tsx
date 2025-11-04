"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useTranslations } from "next-intl";
import { params_search_symbol } from "@/params/api";
import {http} from "@/utils/http";

type Option = { currency: string; exchange: string; exchangeFullName: string; name: string; symbol: string };

type Props = {
    /** 触发搜索的最小输入长度 */
    minChars?: number;
    /** 去抖时间（毫秒） */
    debounceMs?: number;
    emptyText?: string;
    className?: string;
    onSelect?: (opt: Option) => void;
    placeholder?: string;
    onChange?: (value: string) => void;
};

export default function SimpleRemoteSearch(props: Props) {
    const t = useTranslations("Common");
    const { minChars = 1, debounceMs = 300, emptyText = "No Data", className, onChange, onSelect, placeholder = t("search-placeholder") } = props;
    const [query, setQuery] = useState("");
    const [display, setDisplay] = useState(""); // 选中后回填
    const [options, setOptions] = useState<Option[]>([]);
    const [loading, setLoading] = useState(false);
    const [isFocused, setFocused] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const abortRef = useRef<AbortController | null>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isOpen = !!query && isFocused;       // 只有有值 + 聚焦时显示

    // 发起请求
    const doSearch = async (q: string) => {
        if (abortRef.current) abortRef.current.abort();
        const ac = new AbortController();
        abortRef.current = ac;

        try {
            setErr(null);
            setLoading(true);
            const params = { ...params_search_symbol.params, query: encodeURIComponent(q) };
            const result = await http.get(params_search_symbol.url, { params });

            if(result.data.status === 0) {
                const data = await result.data.data;
                setOptions(data);
            }
        } catch (e: any) {
            if (e.name !== "AbortError") setErr(e.message || "请求失败");
        } finally {
            setLoading(false);
        }
    };

    // 去抖搜索
    // useEffect(() => {
    //     if (timerRef.current) clearTimeout(timerRef.current);
    //     if (query.length < minChars) {
    //         setOptions([]);
    //         setLoading(false);
    //         setErr(null);
    //         return;
    //     }
    //
    //     timerRef.current = setTimeout(() => doSearch(query), debounceMs);
    //
    //     const onDocDown = (e: MouseEvent) => {
    //         if (!wrapRef.current) return;
    //         if (!wrapRef.current.contains(e.target as Node)) {
    //             setFocused(false);
    //         }
    //     };
    //
    //     document.addEventListener("mousedown", onDocDown);
    //     return () => {
    //         if (timerRef.current) clearTimeout(timerRef.current);
    //         abortRef.current?.abort();
    //         document.removeEventListener("mousedown", onDocDown)
    //     };
    // }, [query, minChars, debounceMs]);

    const handlePick = (opt: Option) => {
        setDisplay(opt.symbol);
        setQuery(""); // 选中后清空查询以隐藏列表
        setFocused(false);
        onSelect?.(opt);
    };

    return (
        <div ref={wrapRef} className={`relative max-w-3xl mx-auto ${className ?? ""}`}>
            <Input
                value={display || query}
                placeholder={placeholder}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e) => {
                    setDisplay("");        // 进入搜索模式
                    setQuery(e.target.value);
                    setFocused(true);
                    onChange?.(e.target.value);
                }}
                className={"border rounded-full bg-[#F2F5FF] border-theme-active h-[56px]"}
            />

            <Button className={"absolute !h-[52px] w-24 bg-theme-active hover:bg-theme-active-hover right-1 top-0.5"}>
                { t("search") }
            </Button>

            {/*{*/}
            {/*    isOpen && (*/}
            {/*        <div className="absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-md border bg-white p-2 text-sm shadow-md">*/}
            {/*            { loading && <div className="px-2 py-1"> { t("searching") }</div> }*/}
            {/*            {*/}
            {/*                !loading && err && (*/}
            {/*                    <div className="px-2 py-1 text-red-500">{ t("error") }：{err}</div>*/}
            {/*                )*/}
            {/*            }*/}
            {/*            {*/}
            {/*                !loading && !err && options.length === 0 && (*/}
            {/*                    <div className="px-2 py-1 text-muted-foreground">{emptyText}</div>*/}
            {/*                )*/}
            {/*            }*/}
            {/*            {!loading && !err &&*/}
            {/*                options.map((opt) => (*/}
            {/*                    <div*/}
            {/*                        key={opt.symbol}*/}
            {/*                        onMouseDown={(e) => {*/}
            {/*                            e.preventDefault();*/}
            {/*                            handlePick(opt);*/}
            {/*                        }}*/}
            {/*                        onClick={() => handlePick(opt)}*/}
            {/*                        className="cursor-pointer rounded px-2 py-1 hover:bg-accent"*/}
            {/*                    >*/}
            {/*                        <div className={"flex items-center"}>*/}
            {/*                            <Typography variant={"h6"}>{opt.symbol}</Typography>*/}
            {/*                            <Typography className={"ml-2"} variant={"muted"}>{opt.name}</Typography>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                ))}*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*}*/}
        </div>
    );
}
