"use client";
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import {useTranslations, useLocale} from "next-intl";
import {Typography} from "@/components/ui/typography";
import RegisterBtn from "@/components/RegisterBtn";

const HomeSwiper = () => {
    const t = useTranslations("Pages.home.swiper");
    const local = useLocale();
    const isEn = local === "en";

    return (
        <section>
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
                    className="my-swiper h-full"
                >
                    <SwiperSlide>
                        <div className={"h-full bg-[url('/images/home/swiper-1.png')] bg-cover bg-center"}>
                            <div className={"flex flex-1 px-4 lg:px-30 h-full"}>
                                {
                                    isEn ? (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium max-w-3xl ibm-plex-sans !text-theme-active"}
                                                >
                                                    {t("1.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography className={"!text-[#666666]"}>
                                                    {t("1.description1")}
                                                </Typography>
                                                <Typography className={"mt-4 !text-[#666666]"}>
                                                    {t("1.description2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-16 lg:mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium"}
                                                >
                                                    {t("1.title1")}
                                                </Typography>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium"}
                                                >
                                                    {t("1.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-medium"}
                                                >
                                                    {t("1.title3")}
                                                </Typography>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-medium"}
                                                >
                                                    {t("1.title4")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"muted"}
                                                    className={"font-medium"}
                                                >
                                                    {t("1.description1")}
                                                </Typography>
                                                <Typography
                                                    variant={"muted"}
                                                    className={"font-medium"}
                                                >
                                                    {t("1.description2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"h-full bg-[url('/images/home/swiper-2.png')] bg-cover bg-center"}>
                            <div className={"flex flex-1 px-4 lg:px-30 h-full"}>
                                {
                                    isEn ? (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium max-w-3xl !text-theme-active ibm-plex-sans"}
                                                >
                                                    {t("2.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-normal !text-[#666666]"}
                                                >
                                                    {t("2.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    className={"!text-[#666666]"}
                                                >
                                                    {t("2.description1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-16 lg:mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium"}
                                                >
                                                    {t("2.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-medium"}
                                                >
                                                    {t("2.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"h-full bg-[url('/images/home/swiper-3.png')] bg-cover bg-center"}>
                            <div className={"flex flex-1 px-4 lg:px-30 h-full"}>
                                {
                                    isEn ? (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium max-w-4xl ibm-plex-sans !text-theme-active"}
                                                >
                                                    {t("3.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-normal !text-[#666666]"}
                                                >
                                                    {t("3.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography className={"max-w-5xl !text-[#666666]"}
                                                >
                                                    {t("3.description1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-16 lg:mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium"}
                                                >
                                                    {t("3.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-medium"}
                                                >
                                                    {t("3.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"h-full bg-[url('/images/home/swiper-4.png')] bg-cover bg-center"}>
                            <div className={"flex flex-1 px-4 lg:px-30 h-full"}>
                                {
                                    isEn ? (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium max-w-3xl ibm-plex-sans !text-theme-active"}
                                                >
                                                    {t("4.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-normal !text-[#666666]"}
                                                >
                                                    {t("4.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography className={"!text-[#666666]"}>
                                                    {t("4.description1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-16 lg:mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium"}
                                                >
                                                    {t("4.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-medium"}
                                                >
                                                    {t("4.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"h-full bg-[url('/images/home/swiper-5.png')] bg-cover bg-center"}>
                            <div className={"flex flex-1 px-4 lg:px-30 h-full"}>
                                {
                                    isEn ? (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium max-w-4xl ibm-plex-sans !text-theme-active"}
                                                >
                                                    {t("5.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-normal !text-[#666666]"}
                                                >
                                                    {t("5.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    className={"!text-[#666666]"}
                                                >
                                                    {t("5.description1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-16 lg:mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium"}
                                                >
                                                    {t("5.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-medium"}
                                                >
                                                    {t("5.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"h-full bg-[url('/images/home/swiper-6.png')] bg-cover bg-center"}>
                            <div className={"flex flex-1 px-4 lg:px-30 h-full"}>
                                {
                                    isEn ? (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium max-w-4xl ibm-plex-sans !text-theme-active"}
                                                >
                                                    {t("6.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-normal !text-[#666666]"}
                                                >
                                                    {t("6.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography className={"!text-[#666666]"}>
                                                    {t("6.description1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-16 lg:mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium"}
                                                >
                                                    {t("6.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-medium"}
                                                >
                                                    {t("6.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"h-full bg-[url('/images/home/swiper-7.png')] bg-cover bg-center"}>
                            <div className={"flex flex-1 px-4 lg:px-30 h-full"}>
                                {
                                    isEn ? (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium max-w-4xl ibm-plex-sans !text-theme-active"}
                                                >
                                                    {t("7.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-normal !text-[#666666]"}
                                                >
                                                    {t("7.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    className={"!text-[#666666]"}
                                                >
                                                    {t("7.description1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-16 lg:mt-40"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography
                                                    variant={"h1"}
                                                    className={"font-medium "}
                                                >
                                                    {t("7.title1")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"h3"}
                                                    className={"font-medium"}
                                                >
                                                    {t("7.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography
                                                    variant={"muted"}
                                                    className={"font-medium !text-white"}
                                                >
                                                    {t("7.description")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-24"}>
                                                <RegisterBtn/>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default HomeSwiper;