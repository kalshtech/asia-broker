"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Container from "@/components/Container";

type Props = {
    placeholder?: string;
    className?: string;
    value?: string;
    onChange?: (v: string) => void;
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

function SearchBar({ placeholder, className, value, onChange,}: Props) {
    return (
        <div className={["relative max-w-3xl mx-auto", className ?? "",].join(" ")}>
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center">
                <Search className="h-4 w-4" />
            </div>

            <Input
                type="text"
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                placeholder={placeholder}
                className="h-12 pl-14 pr-4 rounded-full bg-white border border-slate-200/80 shadow-sm "
            />
        </div>
    );
}

const Banner = () => {
    const t = useTranslations("Pages.ideas.professional.banner");
    return (
        <section className={"bg-[url(/images/ideas/professional-banner.png)] bg-cover bg-center py-16 xl:py-30 h-[632px]"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h1"}
                        className={"text-center !text-white"}
                    >
                        {t("title1")}
                    </Typography>

                    <Typography
                        variant={"h1"}
                        className={"text-center mt-4 !text-white"}
                    >
                        {t("title2")}
                    </Typography>

                    <Typography
                        variant={"h5"}
                        className={"font-normal text-center mx-auto mt-10 max-w-3xl !text-white"}
                    >
                        {t("desc")}
                    </Typography>
                    <SearchBar placeholder={t("placeholder")} className={"mt-10"}/>
                </motion.div>
            </Container>
        </section>
    );
}

export default Banner;