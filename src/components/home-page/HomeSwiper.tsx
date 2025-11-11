"use client";
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay, Navigation} from 'swiper/modules';
import Container from "@/components/Container";
import {useTranslations} from "next-intl";
import {Typography} from "@/components/ui/typography";
import classnames from "classnames";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";
import {CircleChevronLeft, CircleChevronRight} from "lucide-react";

const CustomBanner = ({ ary }: { ary: any }) => {
    const t = useTranslations("Common");
    return (
        <div className={"h-120 lg:h-[632px] relative"}>
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
                navigation={{
                    prevEl: ".home-swiper-prev",
                    nextEl: ".home-swiper-next",
                }}
                modules={[Autoplay, Pagination, Navigation]}
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
                                                className={classnames([{
                                                    "!text-white": item.theme === "dark",
                                                    "!text-black": item.theme === "light",
                                                }])}
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography
                                                variant={"h6"}
                                                className={classnames(["font-normal mt-6 xl:hidden", {
                                                    "!text-white": item.theme === "dark",
                                                    "!text-black": item.theme === "light",
                                                }])}
                                            >
                                                {item.desc1}{item.desc2}
                                            </Typography>

                                            <Typography
                                                variant={"h4"}
                                                className={classnames(["font-normal mt-6 hidden xl:block", {
                                                    "!text-white": item.theme === "dark",
                                                    "!text-black": item.theme === "light",
                                                }])}
                                            >
                                                {item.desc1}
                                            </Typography>
                                            <Typography
                                                variant={"p"}
                                                className={classnames(["font-normal mt-6 hidden xl:block", {
                                                    "!text-[#979797]": item.theme === "dark",
                                                    "!text-[#999999]": item.theme === "light",
                                                }])}
                                            >
                                                {item.desc2}
                                            </Typography>
                                            <div className={"mt-16"}>
                                                <GeneralLinkBtn
                                                    text={t("startTrade")}
                                                    theme={"active-solid"}
                                                    tradeType={"login"}
                                                    isLink
                                                />
                                                <GeneralLinkBtn
                                                    text={t("register")}
                                                    isLink
                                                    theme={item.theme === "dark" ? "light-hollow" : "active-hollow"}
                                                    className={classnames(["ml-4"])}
                                                />
                                            </div>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <CircleChevronLeft className={"home-swiper-prev w-10 h-10 text-[#999999] absolute left-10 m-auto top-0 bottom-0 cursor-pointer z-1000"}/>
            <CircleChevronRight className={"home-swiper-next w-10 h-10 text-[#999999] absolute right-10 m-auto top-0 bottom-0 cursor-pointer z-1000"}/>
        </div>
    )
}

const EnglishSwiper = () => {
    const t = useTranslations("Pages.home.swiper");
    const ary = [
        {
            urlImage: "bg-[url('/images/home/swiper1.webp')]",
            theme: "light",
            title: t("1.title1"),
            desc1: t("1.description1"),
            desc2: t("1.description2"),
        },
        {
            urlImage: "bg-[url('/images/home/swiper2.webp')]",
            theme: "light",
            title: t("2.title1"),
            desc1: t("2.title2"),
            desc2: t("2.description1"),
        },
        {
            urlImage: "bg-[url('/images/home/swiper3.webp')]",
            theme: "light",
            title: t("3.title1"),
            desc1: t("3.title2"),
            desc2: t("3.description1"),
        },
        {
            urlImage: "bg-[url('/images/home/swiper4.webp')]",
            theme: "dark",
            title: t("4.title1"),
            desc1: t("4.title2"),
            desc2: t("4.description1")
        }
    ];

    return (
        <CustomBanner ary={ary}/>
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