"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import Container from "@/components/Container";

const Step = () => {
    const t = useTranslations("Pages.corporation.about.step");
    const ary = [
        { imageUrl: "/images/corporation/about-step1.png", title: t("row.col1.title"), year: t("row.col1.year") },
        { imageUrl: "/images/corporation/about-step2.png", title: t("row.col2.title"), year: t("row.col2.year") },
        { imageUrl: "/images/corporation/about-step3.png", title: t("row.col3.title"), year: t("row.col3.year") },
        { imageUrl: "/images/corporation/about-step4.png", title: t("row.col4.title"), year: t("row.col4.year") },
        { imageUrl: "/images/corporation/about-step5.png", title: t("row.col5.title"), year: t("row.col5.year") },
    ];
    return (
        <section className={"bg-theme-light-bg py-16 xl:py-30"}>
            <Container>
                <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10"}>
                    {
                        ary.map((item, index) => (
                            <div key={index} className={"flex flex-col items-center"}>
                                <div className={"h-44 sm:h-52 lg:h-56 w-full flex items-center justify-center"}>
                                    <img
                                        src={item.imageUrl}
                                        className="max-h-full max-w-full object-contain"
                                        alt="step"
                                        title={"step1"}
                                    />
                                </div>
                                <div
                                    className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent"/>
                                <div className="mt-4 text-center w-full">
                                    <p className="text-sm text-muted-foreground line-clamp-2 min-h-[40px]">{item.title}</p>
                                    <p className="text-2xl font-semibold tracking-wide">{item.year}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default Step;