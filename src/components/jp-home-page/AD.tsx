"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, FreeMode, Autoplay} from "swiper/modules";
import Container from "@/components/Container"

export default function () {
    const logoAry = [
        { imageUrl: "/images/jp/adlogo1.webp" },
        { imageUrl: "/images/jp/adlogo2.webp" },
        { imageUrl: "/images/jp/adlogo3.webp" },
        { imageUrl: "/images/jp/adlogo4.webp" },
        { imageUrl: "/images/jp/adlogo5.webp" },
    ];

    const placeholderAry = [
        { imageUrl: "/images/jp/adplaceholder1.webp" },
        { imageUrl: "/images/jp/adplaceholder2.webp" },
        { imageUrl: "/images/jp/adplaceholder3.webp" },
        { imageUrl: "/images/jp/adplaceholder4.webp" },
    ]

    const data = logoAry;
    const loopData = [...data, ...data, ...data];
    return (
        <div className={"my-24"}>
            <Container className={"w-full"}>
                <div className="overflow-hidden">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        className="logo-marquee w-full"
                        slidesPerView="auto"
                        spaceBetween={36}
                        loop
                        loopAdditionalSlides={data.length}
                        freeMode
                        allowTouchMove={false}
                        centeredSlides={false}
                        speed={12000}
                        autoplay={{delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true}}
                    >
                        {loopData.map((item, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={item.imageUrl}
                                    alt={''}
                                    className="h-24"
                                    loading={i > 8 ? 'lazy' : 'eager'}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </Container>

            <Container className={"w-full mt-24"}>
                <Swiper
                    slidesPerView={3.5}
                    spaceBetween={36}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                    }}
                    navigation={{
                        prevEl: ".advertisement-custom-prev",
                        nextEl: ".advertisement-custom-next",
                    }}
                    modules={[Autoplay, Navigation]}
                    className={"w-full"}
                >
                    {
                        placeholderAry.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.imageUrl} alt=""/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </div>
    )
}

