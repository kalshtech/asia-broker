"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { params_quote_query } from "@/params/api";

type Option = { value: string; label: string };

type Props = {
    /** 远程接口地址，如 /api/search */
    endpoint: string;
    /** 触发搜索的最小输入长度 */
    minChars?: number;
    /** 去抖时间（毫秒） */
    debounceMs?: number;
    /** 占位符与文案 */
    placeholder?: string;
    emptyText?: string;
    className?: string;
    onSelect?: (opt: Option) => void;
};

export default function SimpleRemoteSearch(props: Props) {
    const { endpoint, minChars = 1, debounceMs = 300, placeholder = "Search…", emptyText = "No Data", className, onSelect } = props;
    const [query, setQuery] = useState("");
    const [display, setDisplay] = useState(""); // 选中后回填
    const [options, setOptions] = useState<Option[]>([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const abortRef = useRef<AbortController | null>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showList = query.length >= minChars; // 只在有输入时显示

    // 发起请求
    const doSearch = async (q: string) => {
        if (abortRef.current) abortRef.current.abort();
        const ac = new AbortController();
        abortRef.current = ac;

        try {
            setErr(null);
            setLoading(true);
            const url = `${endpoint}?q=${encodeURIComponent(q)}`;
            const res = await fetch(url, { signal: ac.signal, cache: "no-store" });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data: Option[] = await res.json();
            setOptions(data);
        } catch (e: any) {
            if (e.name !== "AbortError") setErr(e.message || "请求失败");
        } finally {
            setLoading(false);
        }
    };

    // 去抖搜索
    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (query.length < minChars) {
            setOptions([]);
            setLoading(false);
            setErr(null);
            return;
        }
        timerRef.current = setTimeout(() => doSearch(query), debounceMs);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            abortRef.current?.abort();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, endpoint, minChars, debounceMs]);

    const handlePick = (opt: Option) => {
        setDisplay(opt.label);
        setQuery(""); // 选中后清空查询以隐藏列表
        onSelect?.(opt);
    };

    return (
        <div className={`relative max-w-3xl mx-auto ${className ?? ""}`}>
            <Input
                value={display || query}
                placeholder={placeholder}
                onChange={(e) => {
                    setDisplay("");        // 进入搜索模式
                    setQuery(e.target.value);
                }}
                className={"border rounded-full border-theme-active h-[56px]"}
            />

            <Button className={"absolute h-[52px] w-24 rounded-full right-1 top-0.5"}>搜索</Button>

            {/* 下拉：只在 query 满足最小长度时显示 */}
            {showList && (
                <div className="absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-md border bg-white p-2 text-sm shadow-md">
                    {loading && <div className="px-2 py-1">搜索中…</div>}
                    {!loading && err && (
                        <div className="px-2 py-1 text-red-500">错误：{err}</div>
                    )}
                    {!loading && !err && options.length === 0 && (
                        <div className="px-2 py-1 text-muted-foreground">{emptyText}</div>
                    )}
                    {!loading &&
                        !err &&
                        options.map((opt) => (
                            <div
                                key={opt.value}
                                onClick={() => handlePick(opt)}
                                className="cursor-pointer rounded px-2 py-1 hover:bg-accent"
                            >
                                {opt.label}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}
