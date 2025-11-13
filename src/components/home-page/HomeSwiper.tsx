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
        <div className={"h-[700px] lg:h-[632px] relative"}>
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
                                <div className={"py-8 lg:py-24"}>
                                    <Container>
                                        <div>
                                            <Typography
                                                variant={"h1"}
                                                className={classnames(["text-center lg:text-left max-w-2xl",{
                                                    "!text-white": item.theme === "dark",
                                                    "!text-black": item.theme === "light",
                                                }])}
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography
                                                variant={"h6"}
                                                className={classnames(["text-center lg:text-left  font-normal mt-6 xl:hidden", {
                                                    "!text-white": item.theme === "dark",
                                                    "!text-black": item.theme === "light",
                                                }])}
                                            >
                                                {item.desc1}{item.desc2}
                                            </Typography>

                                            <Typography
                                                variant={"h4"}
                                                className={classnames(["text-center lg:text-left  font-normal mt-6 hidden xl:block", {
                                                    "!text-white": item.theme === "dark",
                                                    "!text-black": item.theme === "light",
                                                }])}
                                            >
                                                {item.desc1}
                                            </Typography>
                                            <Typography
                                                variant={"p"}
                                                className={classnames(["text-center lg:text-left  font-normal mt-6 hidden !text-white xl:block"])}
                                            >
                                                {item.desc2}
                                            </Typography>
                                            <div className={"mt-8 lg:mt-16 flex justify-center lg:justify-start"}>
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
            <CircleChevronLeft className={"home-swiper-prev w-10 h-10 text-[#999999] hidden lg:block absolute left-10 m-auto top-0 bottom-0 cursor-pointer z-100"}/>
            <CircleChevronRight className={"home-swiper-next w-10 h-10 text-[#999999] hidden lg:block absolute right-10 m-auto top-0 bottom-0 cursor-pointer z-100"}/>
        </div>
    )
}

const HomeSwiper = () => {
    const t = useTranslations("Pages.home.swiper");
    const ary = [
        {
            urlImage: "bg-[url('/images/home/swiper1-mobile.webp')] lg:bg-[url('/images/home/swiper1.webp')]",
            theme: "dark",
            title: t("1.title1"),
            desc1: t("1.description1"),
            desc2: t("1.description2"),
        },
        {
            urlImage: "bg-[url('/images/home/swiper2-mobile.webp')] lg:bg-[url('/images/home/swiper2.webp')]",
            theme: "dark",
            title: t("2.title1"),
            desc1: t("2.title2"),
            desc2: t("2.description1"),
        },
        {
            urlImage: "bg-[url('/images/home/swiper3-mobile.webp')] lg:bg-[url('/images/home/swiper3.webp')]",
            theme: "dark",
            title: t("3.title1"),
            desc1: t("3.title2"),
            desc2: t("3.description1"),
        },
        {
            urlImage: "bg-[url('/images/home/swiper4-mobile.webp')] lg:bg-[url('/images/home/swiper4.webp')]",
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

export default HomeSwiper;