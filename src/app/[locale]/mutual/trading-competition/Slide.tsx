"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper/modules";
import { Button } from "@/components/ui/button";
import {CircleChevronLeft, CircleChevronRight} from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

type ItemProps = {
    title: string;
    desc: string;
    imageUrl: string;
    status: string;
}

const SwiperSlideItem = (props: ItemProps) => {
    return (
        <div className={`${props.imageUrl} bg-center bg-cover w-auto h-70 rounded-lg`}>
            <div className={"flex flex-col h-full p-6"}>
                <div>
                    <Button className={"bg-[#333333]/40 text-[#cacaca] rounded-full hover:bg-[#333333]/40"}>
                        {props.status}
                    </Button>
                </div>
                <Typography
                    variant={"h5"}
                    className={"font-medium mt-auto !text-white"}
                >
                    { props.title }
                </Typography>

                <Typography
                    variant={"muted"}
                    className={"font-medium mt-4 !text-white"}
                >
                    { props.desc }
                </Typography>
            </div>
        </div>
    )
}

const Slide = () => {
    const t = useTranslations("Pages.mutual.trading-competition.slide");
    const ary = [
        {
            imageUrl: "bg-[url('/images/mutual/competition-swiper2.png')]",
            title: t("swiper.item2.title"),
            desc: t("swiper.item2.desc"),
            status: t("end")
        },
        {
            imageUrl: "bg-[url('/images/mutual/competition-swiper3.png')]",
            title: t("swiper.item3.title"),
            desc: t("swiper.item3.desc"),
            status: t("end")
        },
        {
            imageUrl: "bg-[url('/images/mutual/competition-swiper4.png')]",
            title: t("swiper.item4.title"),
            desc: t("swiper.item4.desc"),
            status: t("end")
        },
        {
            imageUrl: "bg-[url('/images/mutual/competition-swiper5.png')]",
            title: t("swiper.item5.title"),
            desc: t("swiper.item5.desc"),
            status: t("end")
        },
    ];
    return (
        <section className={"py-10"}>
            <div className={"px-30"}>
                <Typography
                    variant={"large"}
                    className={"font-medium text-center mx-auto mt-16 !text-white"}
                >
                    {t("desc1")}
                </Typography>
                <Typography
                    variant={"large"}
                    className={"font-medium text-center mx-auto mt-4 !text-white"}
                >
                    {t("desc2")}
                </Typography>

                <Typography
                    variant={"h1"}
                    className={"font-medium text-center mx-auto mt-16 !text-white"}
                >
                    {t("review")}
                </Typography>

                <Typography
                    variant={"h2"}
                    className={"font-medium text-center mx-auto mt-16 !text-white"}
                >
                    {t("total")}
                </Typography>

                <Typography
                    variant={"h1"}
                    className={"font-bold !text-7xl mt-16 text-center !bg-gradient-to-b !from-[#FFFFFF] !to-[#FFC871] !bg-clip-text !text-transparent"}
                >
                    $100,000,000
                </Typography>
            </div>
            <div className={"mt-16 pl-30"}>
                <div className={"grid grid-cols-12 gap-8"}>
                    <div className={"col-span-3"}>
                        <div
                            className={`bg-[url('/images/mutual/competition-swiper1.png')] bg-center bg-cover w-auto h-70 rounded-lg`}>
                            <div className={"flex flex-col h-full p-6"}>
                                <div>
                                    <Button
                                        className={"bg-[#333333]/40 text-[#2CB94A] rounded-full hover:bg-[#333333]/40"}>
                                        {t("progressing")}
                                    </Button>
                                </div>
                                <Typography
                                    variant={"h5"}
                                    className={"font-medium mt-auto !text-white"}
                                >
                                    {t("swiper.item1.title")}
                                </Typography>
                            </div>
                            <div className={"mt-6 text-center"}>
                                <Typography
                                    variant={"large"}
                                    className={"!text-white font-medium"}
                                >
                                    {t("current")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-9"}>
                    <Swiper
                            slidesPerView={3.2}
                            spaceBetween={36}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                prevEl: ".slide-custom-prev",
                                nextEl: ".slide-custom-next",
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {
                                ary.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <SwiperSlideItem {...item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className={"mt-4 px-30"}>
                    <div className={"flex justify-end"}>
                        <Typography
                            variant={"large"}
                            className={"!text-white mr-80 font-medium"}
                        >
                            {t("past")}
                        </Typography>
                        <CircleChevronLeft className={"slide-custom-prev mr-2 text-white cursor-pointer"}/>
                        <CircleChevronRight className={"slide-custom-next ml-2 text-white cursor-pointer"}/>
                    </div>
                </div>
                <div className={"mt-24"}>
                    <Typography
                        variant={"muted"}
                        className={"!text-white text-center max-w-3xl mx-auto"}
                    >
                        {t("prompt")}
                    </Typography>
                </div>
            </div>
        </section>
    )
}

export default Slide;