"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import { motion, Variants } from "framer-motion";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

export default function() {
    const t = useTranslations("Pages.jpHome.bulletin");
    const ary = [
        { title: t("ul.li1"), url: "/images/jp/home-bulletin1.webp" },
        { title: t("ul.li2"), url: "/images/jp/home-bulletin2.webp" },
        { title: t("ul.li3"), url: "/images/jp/home-bulletin3.webp" },
        { title: t("ul.li4"), url: "/images/jp/home-bulletin4.webp" },
        { title: t("ul.li5"), url: "/images/jp/home-bulletin5.webp" }
    ];
    return (
        <section className={"py-16 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"text-center"}
                    >
                        Asia Future Trading 公告中心
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"text-center max-w-3xl mx-auto mt-4"}
                    >
                        追蹤我們的最新市場公告、產品升級與重要通知。
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <Swiper
                        slidesPerView={3.5}
                        spaceBetween={36}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            prevEl: ".permission-custom-prev",
                            nextEl: ".permission-custom-next",
                        }}
                        modules={[Navigation]}
                        breakpoints={{
                            320: {slidesPerView: 1.5, spaceBetween: 16,},
                            600: {slidesPerView: 2.5, spaceBetween: 24,},
                            900: {slidesPerView: 3.5, spaceBetween: 36,},
                            1200: {slidesPerView: 4.5, spaceBetween: 36,},
                        }}
                        className="mySwiper"
                    >
                        {
                            ary.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={``}>
                                        <img src={item.url} alt=""/>
                                        <div className={"flex flex-col h-full cursor-pointer group relative"}>
                                            <div className={"mt-4"}>
                                                <Typography
                                                    variant={"p"}
                                                    className={"transition"}
                                                >
                                                    {item.title}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className={"mt-4"}>
                    <div className={"flex justify-end"}>
                        <CircleChevronLeft className={"permission-custom-prev mr-2 cursor-pointer"}/>
                        <CircleChevronRight className={"permission-custom-next ml-2 cursor-pointer"}/>
                    </div>
                </div>
            </Container>
        </section>
    )
}