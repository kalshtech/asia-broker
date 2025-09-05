"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";

type ItemProps = {
    ImageNumber: string | number;
    title: string;
    description: string;
    details: string,
    url: string
}

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const SwiperSlideItem = (props: ItemProps) => {
    const CommonT = useTranslations("Common");
    return (
        <div className={`${props.url} bg-center bg-cover w-auto h-100 rounded-lg`} >
            <div className={"flex flex-col h-full cursor-pointer group relative px-3 py-8 lg:px-6 lg:py-16"}>
                <div className={"mt-auto group-hover:hidden"}>
                    <Typography
                        variant={"h6"}
                        className={"!text-white transition group-hover:!text-red-500"}
                    >
                        {props.title}
                    </Typography>
                </div>
                <div className={"mt-4 group-hover:hidden"}>
                    <Typography
                        variant={"muted"}
                        className={"!text-white"}
                    >
                        {props.description}
                    </Typography>
                </div>
                <div className={"opacity-0 bg-[rgba(0,0,0,0.42)] justify-center rounded-lg flex flex-col w-full h-full top-0 left-0 transition absolute px-6 py-16 group-hover:opacity-100"}>
                    <div>
                        <Typography
                            variant={"h6"}
                            className={"!text-white"}
                        >
                            {props.title}
                        </Typography>
                    </div>
                    <div className={"mt-4"}>
                        <Typography
                            variant={"muted"}
                            className={"!text-white"}
                        >
                            {props.details}
                        </Typography>
                    </div>
                    <div className={"mt-4"}>
                        <Button className={"bg-theme-active hover:bg-theme-active-hover cursor-pointer"}>
                            { CommonT("view") }
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Advertisement = () => {
    const t = useTranslations("Pages.home.advertisement");
    const CommonT = useTranslations("Common");
    const ary = [
        { ImageNumber: "2", title: t("1.title"), description: t("1.description"), details: t("1.details"), url: "bg-[url('/images/home/advertisement-2.png')]" },
        { ImageNumber: "3", title: t("1.title"), description: t("1.description"), details: t("1.details"), url: "bg-[url('/images/home/advertisement-3.png')]" },
        { ImageNumber: "4", title: t("1.title"), description: t("1.description"), details: t("1.details"), url: "bg-[url('/images/home/advertisement-4.png')]" },
        { ImageNumber: "5", title: t("1.title"), description: t("1.description"), details: t("1.details"), url: "bg-[url('/images/home/advertisement-5.png')]" },
        { ImageNumber: "6", title: t("1.title"), description: t("1.description"), details: t("1.details"), url: "bg-[url('/images/home/advertisement-6.png')]" },
    ];

    return (
        <section className={"p-4 lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    {t("title")}
                </Typography>
            </motion.div>

            <div className={"mt-4 lg:mt-16"}>
                <div className={"grid grid-cols-12 gap-8"}>
                    <div className={"col-span-2"}>
                        <div className={`bg-[url('/images/home/advertisement-1.png')] bg-center bg-cover w-auto h-100 rounded-lg`}>
                            <div className={"flex flex-col h-full cursor-pointer relative px-3 py-8 lg:px-6 lg:py-16"}>
                                <div
                                    className={"bg-[rgba(0,0,0,0.42)] justify-center rounded-lg flex flex-col w-full h-full top-0 left-0 transition absolute px-6 py-16"}>
                                    <div>
                                        <Typography
                                            variant={"h6"}
                                            className={"!text-white"}
                                        >
                                            { t("1.title") }
                                        </Typography>
                                    </div>
                                    <div className={"mt-4"}>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
                                        >
                                            { t("1.details") }
                                        </Typography>
                                    </div>
                                    <div className={"mt-4"}>
                                        <Button
                                            className={"bg-theme-active hover:bg-theme-active-hover cursor-pointer"}>
                                            { CommonT("view") }
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-10"}>
                        <Swiper
                            slidesPerView={4.5}
                            spaceBetween={36}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={{
                                prevEl: ".advertisement-custom-prev",
                                nextEl: ".advertisement-custom-next",
                            }}
                            modules={[Navigation]}
                            breakpoints={{
                                320: {slidesPerView: 2.5, spaceBetween: 16,},
                                600: {slidesPerView: 2.5, spaceBetween: 24,},
                                900: {slidesPerView: 4.5, spaceBetween: 36,},
                            }}
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
                <div className={"mt-4"}>
                    <div className={"flex justify-end"}>
                        <CircleChevronLeft className={"advertisement-custom-prev mr-2 cursor-pointer"} />
                        <CircleChevronRight className={"advertisement-custom-next ml-2 cursor-pointer"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advertisement;