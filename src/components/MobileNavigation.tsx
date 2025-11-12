"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";

type RawChild = { label: string; path: string };
type RawGroup = { title: string; ul: RawChild[] };
type RawSection = {
    title: string;
    description?: string;
    btn?: string;
    btnPath?: string;
    btnImg?: string;
    colSpan?: string;
    children: RawGroup[];
};

type FlatSection = Omit<RawSection, "children"> & {
    children: RawChild[];
};

type Props = {
    data: RawSection[];            // 传入你的原始 ary
    dedupeByPath?: boolean;        // 可选：是否按 path 去重
    defaultOpenAll?: boolean;      // 可选：是否默认展开所有大类
};

// ---------- 扁平化工具 ----------
function flattenSection(section: RawSection, dedupeByPath: boolean): FlatSection {
    const merged = section.children.flatMap((g) => g.ul || []);

    const children = dedupeByPath
        ? Array.from(new Map(merged.map((item) => [item.path, item])).values())
        : merged;

    return { ...section, children };
}

function transformRaw(data: RawSection[], dedupeByPath: boolean): FlatSection[] {
    return data.map((sec) => flattenSection(sec, dedupeByPath));
}

export default function NavigationFromRaw({data, dedupeByPath = false, defaultOpenAll = false,}: Props) {
    const pathname = usePathname();
    const flat = transformRaw(data, dedupeByPath);

    return (
        <div className="grid grid-cols-1 gap-2">
            {flat.map((section, i) => (
                <div key={i} className="space-y-3">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue={defaultOpenAll ? `section-${i}` : undefined}
                        className="w-full"
                    >
                        <AccordionItem value={`section-${i}`} className="!border-b !border-[#5C6379]">
                            <AccordionTrigger>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-white"}
                                >
                                    {section.title}
                                </Typography>
                            </AccordionTrigger>
                            <AccordionContent>
                                <nav className="flex flex-col">
                                    {section.children.map((item, index) => {
                                        const active = pathname === item.path;
                                        return (
                                            <Link
                                                key={index}
                                                href={item.path}
                                                aria-current={active ? "page" : undefined}
                                                className={[
                                                    "group flex items-center justify-between rounded-md py-2 text-sm transition !text-white",
                                                    active
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                                ].join(" ")}
                                            >
                                                <span className="truncate">{item.label}</span>
                                                <ChevronRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            ))}
        </div>
    );
}
