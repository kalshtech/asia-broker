"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import classnames from "classnames";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

export type GlossaryItem = {
    term: string;
    translation?: string;
    href?: string;
};

const ALPHABET: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

export function getFirstLetterKey(text: string): string {
    if (!text) return "#";
    const ch = text.trim().charAt(0).toUpperCase();
    return /[A-Z]/.test(ch) ? ch : "#";
}

export function normalizeQuery(s: string): string {
    return (s || "").toLowerCase();
}

export function filterItems(items: GlossaryItem[], q: string): GlossaryItem[] {
    const nq = normalizeQuery(q);
    if (!nq) return items;
    return items.filter((it) => `${it.term} ${it.translation ?? ""}`.toLowerCase().includes(nq));
}

export function computeLettersWithData(items: GlossaryItem[]): Set<string> {
    const s = new Set<string>();
    items.forEach((it) => s.add(getFirstLetterKey(it.term)));
    return s;
}

export function groupByLetter(items: GlossaryItem[]): Array<[string, GlossaryItem[]]> {
    const map = new Map<string, GlossaryItem[]>();
    items.forEach((it) => {
        const k = getFirstLetterKey(it.term);
        if (k === "#") return; // skip non A~Z; change to include '#' if desired
        if (!map.has(k)) map.set(k, []);
        map.get(k)!.push(it);
    });
    // sort within each bucket
    ALPHABET.forEach((L) => {
        if (map.has(L)) map.set(L, map.get(L)!.slice().sort((a, b) => a.term.localeCompare(b.term)));
    });
    // return in A..Z order
    return ALPHABET.filter((L) => map.has(L)).map((L) => [L, map.get(L)!] as [string, GlossaryItem[]]);
}

const CoreTerms = () => {
    const t = useTranslations("Pages.academy.learning.core");

    const DEMO: GlossaryItem[] = [
        { term: "Algorithmic Trading", translation: "（算法交易）", href: "/glossary/algorithmic-trading" },
        { term: "Arbitrage", translation: "（套利）", href: "/glossary/arbitrage" },
        { term: "Asian Session", translation: "（亚洲时段）" },
        { term: "Ask Price", translation: "（卖出价）" },
        { term: "Ask Price", translation: "（卖出价）" },
        { term: "Ask Price", translation: "（卖出价）" },
        { term: "Ask Price", translation: "（卖出价）" },
        { term: "Bid Price", translation: "（买入价）" },
        { term: "Base Currency", translation: "（基础货币）" },
        { term: "Bearish", translation: "（看空）" },
        { term: "Bullish", translation: "（看多）" }
    ];

    const [ tabActive, setTabActive ] = React.useState<string>("term");
    const [q, setQ] = React.useState("");
    const [activeLetter, setActiveLetter] = React.useState<string | null>(null);
    const searched = React.useMemo(() => filterItems(DEMO, q), [DEMO, q]);
    const lettersWithData = React.useMemo(() => computeLettersWithData(searched), [searched]);

    React.useEffect(() => {
        if (activeLetter && !lettersWithData.has(activeLetter)) {
            setActiveLetter(null);
        }
    }, [lettersWithData, activeLetter]);

    const filtered = React.useMemo(() => {
        if (!activeLetter) return searched.slice().sort((a, b) => a.term.localeCompare(b.term));
        return searched
            .filter((it) => getFirstLetterKey(it.term) === activeLetter)
            .sort((a, b) => a.term.localeCompare(b.term));
    }, [searched, activeLetter]);

    const groupedEntries = React.useMemo(() => {
        if (activeLetter) return [] as Array<[string, GlossaryItem[]]>;
        return groupByLetter(searched);
    }, [searched, activeLetter]);

    const handleToggleTabActive = (active: string) => {
        setTabActive(active);
    }

    return (
        <section className={"p-4 lg:p-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"text-center mt-8 "}
                    >
                        {t("desc")}
                    </Typography>
                    <div className={"mt-12 flex justify-center"}>
                        <Button className={"px-8 h-10 rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                            {t("explore")}
                        </Button>
                    </div>
                </motion.div>
                <div className={"mt-10"}>
                    <header className={"flex"}>
                        <div className={"cursor-pointer"} onClick={() => handleToggleTabActive("term")}>
                            <Typography variant={"muted"} className={classnames([{
                                "text-theme-active": tabActive === "term"
                            }])}>
                                {t("btn.term")}
                            </Typography>
                            <Separator className={classnames(["mt-2", {
                                "bg-theme-active": tabActive === "term"
                            }])}/>
                        </div>
                        <div className={"ml-12 cursor-pointer"} onClick={() => handleToggleTabActive("theme")}>
                            <Typography variant={"muted"} className={classnames([{
                                "text-theme-active": tabActive === "theme"
                            }])}>
                                {t("btn.theme")}
                            </Typography>
                            <Separator className={classnames(["mt-2", {
                                "bg-theme-active": tabActive === "theme"
                            }])}/>
                        </div>
                    </header>
                    <div className={"mt-10 relative"}>
                        <Input
                            className={"bg-theme-light-bg py-4 px-4 !text-base lg:!text-lg lg:py-7 lg:px-8"}
                            placeholder={t("placeholder")}
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                        />
                        {q && (
                            <X className={"absolute cursor-pointer right-4 top-4"} onClick={() => setQ("")}/>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 border-b pb-4 mt-10">
                        {ALPHABET.map((L) => {
                            const enabled = lettersWithData.has(L);
                            const isActive = activeLetter === L;
                            return (
                                <Button
                                    key={L}
                                    variant={isActive ? "default" : "ghost"}
                                    className={`h-6 w-6 lg:h-10 lg:w-10 p-0 text-lg ${!enabled ? "text-muted-foreground/50 cursor-not-allowed" : ""}`}
                                    disabled={!enabled}
                                    onClick={() => {
                                        if (!enabled) return;
                                        setActiveLetter((prev) => (prev === L ? null : L));
                                    }}
                                    aria-pressed={isActive}
                                >
                                    {L}
                                </Button>
                            );
                        })}
                    </div>

                    {searched.length === 0 && (
                        <Typography
                            variant={"muted"}
                            className={"py-10 text-center text-sm text-muted-foreground"}
                        >
                            {t("searchNodata")}
                        </Typography>
                    )}

                    {searched.length > 0 && (
                        <section className="space-y-8 mt-10">
                            {activeLetter ? (
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Typography variant={"h3"}>{activeLetter}</Typography>
                                        <Badge variant="secondary">{filtered.length} {t("item")}</Badge>
                                    </div>
                                    {filtered.length === 0 ? (
                                        <Typography
                                            variant={"muted"}
                                            className={"py-10 text-center text-sm text-muted-foreground"}
                                        >
                                            {t("nodata")}
                                        </Typography>
                                    ) : (
                                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                            {filtered.map((it, itIndex) => (
                                                <div key={itIndex}>
                                                    <Link href={"/"}>
                                                        <Typography
                                                            variant={"muted"}
                                                            className={"!text-theme-active font-medium"}
                                                        >
                                                            {it.term} {`${it.translation}`}
                                                        </Typography>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {groupedEntries.map(([letter, list]) => (
                                        <div key={letter} className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <Typography variant={"h3"}>{letter}</Typography>
                                                <Badge variant="secondary">{list.length} {t("item")}</Badge>
                                            </div>
                                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                                {list.map((it, itIndex) => (
                                                    <div key={itIndex}>
                                                        <Link href={"/"}>
                                                            <Typography
                                                                variant={"muted"}
                                                                className={"!text-theme-active font-medium"}
                                                            >
                                                                {it.term} {`${it.translation}`}
                                                            </Typography>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                            <Separator/>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    )}
                </div>
            </Container>
        </section>
    )
}

export default CoreTerms;