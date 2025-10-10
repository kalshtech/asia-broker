"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Brief = () => {
    const t = useTranslations("Pages.corporation.about.brief");
    return (
        <section className={"bg-[url(/images/corporation/about-brief-background.png)] bg-cover bg-center p-4 lg:p-30"}>
            <div className={"max-w-[1400px] mx-auto"}>
                <div className={"flex"}>
                    <Typography variant={"muted"}>
                        { t("text") }
                    </Typography>
                    <a href={"/files/AsiaFutureTrading.pdf"} target={"_blank"} className={"ml-4 underline flex"}>
                        <Typography
                            variant={"muted"}
                        >
                            { t("document") }
                        </Typography>
                        <img
                            src="/images/corporation/about-pdf-logo.png"
                            className={"w-[30px] h-[30px] ml-2"}
                            alt=""
                        />
                    </a>
                </div>
                <div className={"mt-10"}>
                    <img src="/images/corporation/about-brief-pdf.png" className={"max-h-50 object-cover"} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Brief;