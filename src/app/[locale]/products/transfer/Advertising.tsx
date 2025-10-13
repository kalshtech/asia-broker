"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}
const Advertising = () => {
    const t = useTranslations("Pages.products.transfer.advertising");
    const imgAry = [
        { imageUrl: "/images/products/transfer-advertising1.png" },
        { imageUrl: "/images/products/transfer-advertising2.png" },
        { imageUrl: "/images/products/transfer-advertising3.png" },
        { imageUrl: "/images/products/transfer-advertising4.png" },
        { imageUrl: "/images/products/transfer-advertising5.png" },
        { imageUrl: "/images/products/transfer-advertising6.png" },
        { imageUrl: "/images/products/transfer-advertising7.png" },
        { imageUrl: "/images/products/transfer-advertising8.png" },
        { imageUrl: "/images/products/transfer-advertising9.png" },
        { imageUrl: "/images/products/transfer-advertising10.png" }
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
                    className={"text-center"}
                >
                    {t("title")}
                </Typography>
            </motion.div>
            <div className={"mt-16 bg-theme-light-bg py-16"}>
                <div className={"grid grid-cols-12 gap-4 lg:gap-16 px-4 lg:px-12"}>
                    <div className={"border-r-2 border-black col-span-12 lg:col-span-6 "}>
                        <Typography
                            variant={"h3"}
                            className={"font-medium"}
                        >
                            {t("row.title")}
                        </Typography>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <Typography
                            variant={"large"}
                            className={"font-normal"}
                        >
                            {t("row.desc")}
                        </Typography>
                    </div>
                </div>
                <div className={"mt-16 bg-theme-light-bg"}>
                    <Swiper
                        slidesPerView={10}
                        spaceBetween={12}
                        loop={true}
                        className="mySwiper w-full"
                        breakpoints={{
                            320: {slidesPerView: 4, spaceBetween: 16,},
                            600: {slidesPerView: 6, spaceBetween: 24,},
                            900: {slidesPerView: 10, spaceBetween: 36,},
                        }}
                    >
                        {
                            imgAry.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={"flex justify-center"}>
                                        <img className={"w-[100px] h-[100px] object-cover"} src={item.imageUrl} alt="img"/>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className={"mt-16 px-12"}>
                    <Typography variant={"muted"}>
                        { t("prompt") }
                    </Typography>
                </div>
            </div>
        </section>
    )
}

export default Advertising;