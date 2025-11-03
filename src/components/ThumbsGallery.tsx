'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Thumbs, FreeMode, Keyboard, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {useTranslations} from "next-intl";
import {Typography} from "@/components/ui/typography";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";


type Props = {
    initialIndex?: number;
    onIndexChange?: (active: number) => void;
};

export default function ThumbsGallery({ initialIndex = 1, onIndexChange }: Props) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const t = useTranslations("Pages.home.competition");

    const items = [
        { title: t("rows.1.title"), prize: "$10,000", period: t("week"), cta: t("rows.1.join") },
        { title: t("rows.2.title"), prize: "$500,000", period: t("month"), cta: t("rows.2.join") },
        { title: t("rows.3.title"), prize: "$1,000,000", period: t("month"), cta: t("rows.3.join") },
        { title: t("rows.4.title"), prize: "$1,000,000", period: t("climate"), cta: t("rows.4.join") },
    ];

    return (
        <div className="w-full mx-auto">
            <div className="relative">
                <Swiper
                    modules={[Navigation, Thumbs, Keyboard, A11y]}
                    loop
                    keyboard={{ enabled: true }}
                    initialSlide={initialIndex}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                    onBeforeInit={(swiper) => {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    onSlideChange={(swiper) => {
                        onIndexChange?.(swiper.realIndex); // realIndex 忽略 loop 复制
                    }}
                    className="rounded-2xl overflow-hidden"
                >
                    {items.map((it, i) => (
                        <SwiperSlide key={i}>
                            <div className="flex h-full flex-col bg-[url(/images/home/competition-background.png)]">
                                <Typography
                                    variant={"h4"}
                                    className={"text-center mt-4"}
                                >
                                    {it.title}
                                </Typography>
                                {it.prize && (
                                    <>
                                        <div className="mt-6 flex-1">
                                            <Typography
                                                variant={"muted"}
                                                className={"block text-center"}
                                            >
                                                {t("pool")}
                                            </Typography>
                                            <Typography
                                                variant={"h4"}
                                                className={"text-center mt-4"}
                                            >
                                                {it.prize}
                                            </Typography>
                                            <Typography
                                                variant={"muted"}
                                                className={"text-center mt-4"}
                                            >
                                                {t("period")}
                                            </Typography>
                                            <Typography
                                                variant={"h4"}
                                                className={"text-center mt-4"}
                                            >
                                                {it.period}
                                            </Typography>
                                            <div className="mt-8 flex justify-center">
                                                <GeneralLinkBtn
                                                    text={it.cta ?? "visit"}
                                                    path={"/mutual/trading-competition"}
                                                    theme={"dark-solid"}
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    ref={prevRef}
                    aria-label="Previous"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 rounded-full bg-theme-active text-white"
                >
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </button>
                <button
                    ref={nextRef}
                    aria-label="Next"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 rounded-full bg-theme-active text-white"
                >
                    <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </button>
            </div>

            <Swiper
                modules={[FreeMode, Thumbs]}
                onSwiper={setThumbsSwiper}
                watchSlidesProgress
                freeMode
                slidesPerView={4}
                spaceBetween={4}
                loop
                centeredSlides={false}
                slideToClickedSlide
                className="mt-8"
            >
                {items.map((item, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full p-2 border rounded-sm">
                            <Typography variant={"muted"} className={"text-xs text-center"}>
                                { item.title }
                            </Typography>
                            <div className="pointer-events-none absolute inset-0 ring-2 ring-transparent swiper-slide-thumb-active:ring-blue-500"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
