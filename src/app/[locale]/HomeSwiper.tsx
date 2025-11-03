"use client";
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import Container from "@/components/Container";
import {useLocale, useTranslations} from "next-intl";
import {Typography} from "@/components/ui/typography";
import StartTradingBtn from "@/components/StartTradingBtn";
import RegisterBtn from "@/components/RegisterBtn";
import classnames from "classnames";

const CustomBanner = ({ ary }: { ary: any }) => {
    return (
        <div className={"h-120 lg:h-[632px]"}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="en-my-swiper h-full"
            >
                {
                    ary.map((item: any, index: number) => (
                        <SwiperSlide key={index}>
                            <div className={classnames([item.urlImage, "h-full bg-cover bg-center"])}>
                                <div className={"py-12 lg:py-24"}>
                                    <Container>
                                        <div>
                                            <Typography
                                                variant={"h1"}
                                                className={classnames(["text-center max-w-3xl mx-auto", {
                                                    "!text-white": item.theme === "dark",
                                                    "!text-black": item.theme === "light",
                                                }])}
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography
                                                variant={"h6"}
                                                className={classnames(["text-center font-normal mt-6 xl:hidden", {
                                                    "!text-white": item.theme === "dark",
                                                    "!text-black": item.theme === "light",
                                                }])}
                                            >
                                                {item.desc1}{item.desc2}
                                            </Typography>

                                            <Typography
                                                variant={"h4"}
                                                className={classnames(["text-center font-normal mt-6 hidden xl:block", {
                                                    "!text-white": item.theme === "dark",
                                                    "!text-black": item.theme === "light",
                                                }])}
                                            >
                                                {item.desc1}
                                            </Typography>
                                            <Typography
                                                variant={"p"}
                                                className={classnames(["text-center font-normal mt-6 hidden xl:block", {
                                                    "!text-[#979797]": item.theme === "dark",
                                                    "!text-[#999999]": item.theme === "light",
                                                }])}
                                            >
                                                {item.desc2}
                                            </Typography>
                                            <div className={"mt-16 justify-center flex"}>
                                                <StartTradingBtn/>
                                                <RegisterBtn className={classnames(["ml-4", {
                                                    "border bg-transparent hover:bg-transparent": item.theme === "dark",
                                                    "border border-theme-active text-theme-active bg-transparent hover:bg-transparent": item.theme === "light",
                                                }])}/>
                                            </div>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

const EnglishSwiper = () => {
    const t = useTranslations("Pages.home.swiper");

    const mobileAry = [
        {
            urlImage: "bg-[url('/images/home/en-swiper-1.png')]",
            theme: "dark",
            title: t("1.title1"),
            desc1: t("1.description1"),
            desc2: t("1.description2"),
            isMobileShow: true
        },
        {
            urlImage: "bg-[url('/images/home/en-swiper-2.png')]",
            theme: "dark",
            title: t("2.title1"),
            desc1: t("2.title2"),
            desc2: t("2.description1"),
            isMobileShow: true
        },
        {
            urlImage: "bg-[url('/images/home/en-swiper-4.png')]",
            theme: "dark",
            title: t("4.title1"),
            desc1: t("4.title2"),
            desc2: t("4.description1"),
            isMobileShow: true
        },
    ];

    const ary = [
        {
            urlImage: "bg-[url('/images/home/en-swiper-1.png')]",
            theme: "dark",
            title: t("1.title1"),
            desc1: t("1.description1"),
            desc2: t("1.description2"),
            isMobileShow: true
        },
        {
            urlImage: "bg-[url('/images/home/en-swiper-2.png')]",
            theme: "dark",
            title: t("2.title1"),
            desc1: t("2.title2"),
            desc2: t("2.description1"),
            isMobileShow: true
        },
        {
            urlImage: "bg-[url('/images/home/en-swiper-3.png')]",
            theme: "light",
            title: t("3.title1"),
            desc1: t("3.title2"),
            desc2: t("3.description1"),
        },
        {
            urlImage: "bg-[url('/images/home/en-swiper-4.png')]",
            theme: "dark",
            title: t("4.title1"),
            desc1: t("4.title2"),
            desc2: t("4.description1"),
            isMobileShow: true
        },
        {
            urlImage: "bg-[url('/images/home/en-swiper-5.png')]",
            theme: "dark",
            title: t("5.title1"),
            desc1: t("5.title2"),
            desc2: t("5.description1")
        },
        {
            urlImage: "bg-[url('/images/home/en-swiper-6.png')]",
            theme: "dark",
            title: t("6.title1"),
            desc1: t("6.title2"),
            desc2: t("6.description1")
        },
        {
            urlImage: "bg-[url('/images/home/en-swiper-7.png')]",
            theme: "light",
            title: t("7.title1"),
            desc1: t("7.title2"),
            desc2: t("7.description1")
        },
    ];



    return (
        <>
            <div className={"xl:hidden"}>
                <CustomBanner ary={mobileAry}/>
            </div>
            <div className={"hidden xl:block h-[632px]"}>
                <CustomBanner ary={ary}/>
            </div>
        </>
    )
}

const HomeSwiper = () => {
    return (
        <section>
            <EnglishSwiper/>
        </section>
    )
}

export default HomeSwiper;