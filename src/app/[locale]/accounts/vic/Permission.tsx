"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import { motion, Variants } from "framer-motion";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";


const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}


const Permission = () => {
    const t = useTranslations("Pages.accounts.vic.permission");
    const ary = [
        { title: t("swiper.span1.title"), description: t("swiper.span1.desc"), url: "bg-[url('/images/accounts/permission-swiper1.png')]" },
        { title: t("swiper.span2.title"), description: t("swiper.span2.desc"), url: "bg-[url('/images/accounts/permission-swiper2.png')]" },
        { title: t("swiper.span3.title"), description: t("swiper.span3.desc"), url: "bg-[url('/images/accounts/permission-swiper3.png')]" },
        { title: t("swiper.span4.title"), description: t("swiper.span4.desc"), url: "bg-[url('/images/accounts/permission-swiper4.png')]" },
        { title: t("swiper.span5.title"), description: t("swiper.span5.desc"), url: "bg-[url('/images/accounts/permission-swiper5.png')]" },
        { title: t("swiper.span6.title"), description: t("swiper.span6.desc"), url: "bg-[url('/images/accounts/permission-swiper6.png')]" },
    ];
    return (
        <section className={"py-4 lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center"}
                    >
                        {t("title")}
                    </Typography>

                    <Typography
                        variant={"muted"}
                        className={"text-center mt-4"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-16"}>
                    <Swiper
                        slidesPerView={3.5}
                        spaceBetween={36}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            prevEl: ".permission-custom-prev",
                            nextEl: ".permission-custom-next",
                        }}
                        modules={[Navigation]}
                        breakpoints={{
                            320: {slidesPerView: 1.5, spaceBetween: 16,},
                            600: {slidesPerView: 2.5, spaceBetween: 24,},
                            900: {slidesPerView: 4.5, spaceBetween: 36,},
                        }}
                        className="mySwiper"
                    >
                        {
                            ary.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={`${item.url} bg-center bg-cover w-auto h-100 rounded-lg`}>
                                        <div
                                            className={"flex flex-col h-full cursor-pointer group relative px-6"}>
                                            <div className={"mt-10"}>
                                                <Typography
                                                    variant={"h6"}
                                                    className={"!text-white transition"}
                                                >
                                                    {item.title}
                                                </Typography>
                                            </div>
                                            <div className={"mt-4"}>
                                                <Typography
                                                    variant={"muted"}
                                                    className={"!text-white"}
                                                >
                                                    {item.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className={"mt-4"}>
                    <div className={"flex justify-end"}>
                        <CircleChevronLeft className={"permission-custom-prev mr-2 cursor-pointer"}/>
                        <CircleChevronRight className={"permission-custom-next ml-2 cursor-pointer"}/>
                    </div>
                </div>
                <div className={"mt-8 lg:mt-25"}>
                    <Typography variant={"muted"} className={"text-center"}>
                        {t("prompt1")}
                    </Typography>
                    <Typography variant={"muted"} className={"text-center mt-4"}>
                        {t("prompt2")}
                    </Typography>
                </div>
            </Container>
        </section>
    )
}

export default Permission;