"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Container from "@/components/Container";
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

export default function Vision() {
    const t = useTranslations("Pages.mutual.funding.vision");
    const swiperAry = [
        { imageUrl: "/images/mutual/funding-vision1.png", amount: "$4,521.66", name: "TitanQuantX", country: "United States", countryImageUrl: "/images/mutual/funding-country1.png" },
        { imageUrl: "/images/mutual/funding-vision1.png", amount: "$8,234.77", name: "Carlos Mendoza", country: "Colombia", countryImageUrl: "/images/mutual/funding-country2.png" },
        { imageUrl: "/images/mutual/funding-vision1.png", amount: "$5,892.44", name: "Jabush Okonjo", country: "Nigeria", countryImageUrl: "/images/mutual/funding-country3.png" },
        { imageUrl: "/images/mutual/funding-vision1.png", amount: "$9,127.33", name: "Sam Anderson", country: "United States", countryImageUrl: "/images/mutual/funding-country1.png" },
        { imageUrl: "/images/mutual/funding-vision1.png", amount: "$4,768.92", name: "Federico Ricci", country: "Italy", countryImageUrl: "/images/mutual/funding-country4.png" },
        { imageUrl: "/images/mutual/funding-vision1.png", amount: "$6,234.55", name: "Hassan Karim", country: "Brazil", countryImageUrl: "/images/mutual/funding-country5.png" },
        { imageUrl: "/images/mutual/funding-vision1.png", amount: "$7,453.21", name: "Mike Thompson", country: "United States", countryImageUrl: "/images/mutual/funding-country1.png" },
    ];
    return (
        <section className={"py-4 xl:py-30 bg-[#000515]"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <div className={"flex justify-center"}>
                        <Typography
                            variant={"h3"}
                            className={"text-center !text-white"}
                        >
                            {t("title1")}
                        </Typography>
                        <Typography
                            variant={"h3"}
                            className={"text-center !text-[#1F8BFF] ml-2"}
                        >
                            {t("title2")}
                        </Typography>
                    </div>
                    <Typography
                        variant={"muted"}
                        className={"text-center max-w-3xl mx-auto mt-6 !text-white"}
                    >
                        {t("desc")}
                    </Typography>
                    <div className={"mt-8 lg:mt-16 flex justify-center"}>
                        <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                            {t("join")}
                        </Button>
                    </div>
                </motion.div>
                <div className={"mt-8 lg:mt-16"}>
                    <Swiper
                        slidesPerView={3.5}
                        spaceBetween={32}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            320: {slidesPerView: 1.2, spaceBetween: 16,},
                            600: {slidesPerView: 1.2, spaceBetween: 24,},
                            900: {slidesPerView: 3.5, spaceBetween: 36,},
                        }}
                        modules={[Autoplay]}
                        className="my-swiper h-full"
                    >
                        {
                            swiperAry.map((item, index) => (
                                <SwiperSlide key={index} className={"specially-swiper-card h-full"}>
                                    <div className={"p-6"}>
                                        <div className={"grid grid-cols-12 gap-4"}>
                                            <div className={"col-span-6"}>
                                                <div>
                                                    <Typography
                                                        variant={"h3"}
                                                        className={"font-medium !text-white"}
                                                    >
                                                        {item.amount}
                                                    </Typography>
                                                </div>
                                                <div className={"mt-10"}>
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"font-medium !text-white"}
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                    <div className={"mt-2 flex items-center"}>
                                                        <Typography
                                                            variant={"muted"}
                                                            className={"font-medium !text-white"}
                                                        >
                                                            {item.country}
                                                        </Typography>
                                                        <img src={item.countryImageUrl}
                                                             className={"w-[30px] h-[30px] object-cover ml-4"} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"col-span-6"}>
                                                <img src={item.imageUrl} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className={"mt-16"}>
                    <Typography
                        variant={"muted"}
                        className={"font-medium text-center mx-auto !text-[#999999]"}
                    >
                        {t("prompt")}
                    </Typography>
                </div>
            </Container>
        </section>
    )
}