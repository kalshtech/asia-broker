"use client";
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import Container from "@/components/Container";
import {useTranslations, useLocale} from "next-intl";
import {Typography} from "@/components/ui/typography";
import StartTradingBtn from "@/components/StartTradingBtn";
import RegisterBtn from "@/components/RegisterBtn";
import TitleReveal from "@/components/TitleReveal";
import classnames from "classnames";

const EnglishSwiper = () => {
    const t = useTranslations("Pages.home.swiper");
    const ary = [
        { urlImage: "bg-[url('/images/home/en-swiper-1.png')]", theme: "dark", title: t("1.title1"), desc1: t("1.description1"), desc2: t("1.description2") },
        { urlImage: "bg-[url('/images/home/en-swiper-2.png')]", theme: "dark", title: t("2.title1"), desc1: t("2.title2"), desc2: t("2.description1") },
        { urlImage: "bg-[url('/images/home/en-swiper-3.png')]", theme: "light", title: t("3.title1"), desc1: t("3.title2"), desc2: t("3.description1") },
        { urlImage: "bg-[url('/images/home/en-swiper-4.png')]", theme: "dark", title: t("4.title1"), desc1: t("4.title2"), desc2: t("4.description1") },
        { urlImage: "bg-[url('/images/home/en-swiper-5.png')]", theme: "dark", title: t("5.title1"), desc1: t("5.title2"), desc2: t("5.description1") },
        { urlImage: "bg-[url('/images/home/en-swiper-6.png')]", theme: "dark", title: t("6.title1"), desc1: t("6.title2"), desc2: t("6.description1") },
        { urlImage: "bg-[url('/images/home/en-swiper-7.png')]", theme: "light", title: t("7.title1"), desc1: t("7.title2"), desc2: t("7.description1") },
    ];
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
                modules={[Autoplay, Pagination]}
                className="en-my-swiper h-full"
            >
                {
                    ary.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={classnames([item.urlImage, "h-full bg-cover bg-center"])}>
                                <div className={"py-4 lg:py-20"}>
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
                                                variant={"h4"}
                                                className={classnames(["text-center font-normal mt-6", {
                                                    "!text-white": item.theme === "dark",
                                                    "!text-black": item.theme === "light",
                                                }])}
                                            >
                                                {item.desc1}
                                            </Typography>
                                            <Typography
                                                variant={"p"}
                                                className={classnames(["text-center font-normal mt-6", {
                                                    "!text-[#979797]": item.theme === "dark",
                                                    "!text-[#999999]": item.theme === "light",
                                                }])}
                                            >
                                                {item.desc2}
                                            </Typography>
                                            <div className={"mt-10 justify-center flex"}>
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

const OtherSwiper = () => {
    const t = useTranslations("Pages.home.swiper");
    const local = useLocale();
    const isEn = local === "en";

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
                modules={[Autoplay, Pagination]}
                className="my-swiper h-full"
            >
                <SwiperSlide>
                    <div className={"h-full bg-[url('/images/home/swiper-1.png')] bg-cover bg-center"}>
                        <div className={"flex flex-1 px-4 lg:px-30 h-full"}>
                            {
                                isEn ? (
                                    <Container>
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <TitleReveal isActive title={t("1.title1")}/>
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
                                    </Container>
                                ) : (
                                    <Container>
                                        <div className={"flex-1 flex justify-center flex-col"}>
                                            <div>
                                                <Typography variant={"h1"}>
                                                    {t("1.title1")}
                                                </Typography>
                                                <Typography variant={"h1"}>
                                                    {t("1.title2")}
                                                </Typography>
                                            </div>
                                            <div className={"mt-8"}>
                                                <Typography variant={"h3"}>
                                                    {t("1.title3")}
                                                </Typography>
                                                <Typography variant={"h3"}>
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
                                    </Container>
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
                                            <TitleReveal isActive title={t("2.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"} className={"!text-[#666666]"}>
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
                                            <TitleReveal title={t("2.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"}>
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
                                            <TitleReveal isActive title={t("3.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"} className={"!text-[#666666]"}>
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
                                            <TitleReveal title={t("3.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"}>
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
                                            <TitleReveal isActive title={t("4.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"} className={"!text-[#666666]"}>
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
                                            <TitleReveal title={t("4.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"}>
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
                                            <TitleReveal isActive title={t("5.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"} className={"!text-[#666666]"}>
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
                                            <TitleReveal title={t("5.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"}>
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
                                            <TitleReveal isActive title={t("6.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"} className={"!text-[#666666]"}>
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
                                            <TitleReveal title={t("6.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"}>
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
                                            <TitleReveal isActive title={t("7.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"} className={"!text-[#666666]"}>
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
                                            <TitleReveal title={t("7.title1")}/>
                                        </div>
                                        <div className={"mt-8"}>
                                            <Typography variant={"h3"}>
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
    )
}

const HomeSwiper = () => {
    const local = useLocale();
    const isEn = local === "en";

    return (
        <section>
            { isEn ? <EnglishSwiper/> : <OtherSwiper/> }
        </section>
    )
}

export default HomeSwiper;