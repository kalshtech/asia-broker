"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from "swiper/modules";
import {CircleChevronLeft, CircleChevronRight} from "lucide-react";
import Container from "@/components/Container";
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Celebrity = () => {
    const t = useTranslations("Pages.mutual.trading-competition.celebrity");
    const CommonT = useTranslations("Common");

    const ary = [
        { avatar: "/images/mutual/competition-avatar1.png", name: "TitanQuantX", growth: "49.0306", copy: "1,289", type: "VIC", position: "1" },
        { avatar: "/images/mutual/competition-avatar2.png", name: "SailAlpha", growth: "31.5874", copy: "986", type: "Platinum", position: "2" },
        { avatar: "/images/mutual/competition-avatar3.png", name: "WaveMasterFX", growth: "29.7012", copy: "843", type: "Classic", position: "3" },
        { avatar: "/images/mutual/competition-avatar4.png", name: "TitanQuantX", growth: "26.1178", copy: "715", type: "VIC", position: "4" },
        { avatar: "/images/mutual/competition-avatar5.png", name: "SailAlpha", growth: "22.5349", copy: "652", type: "Platinum", position: "5" },
    ];

    const renderPositionImgUrl = (position: string) => {
        switch (position) {
            case "1":
                return "/images/mutual/competition-1.png";
            case "2":
                return "/images/mutual/competition-2.png";
            case "3":
                return "/images/mutual/competition-3.png";
            case "4":
                return "/images/mutual/competition-4.png";
            default:
                return "/images/mutual/competition-4.png"
        }
    }

    const renderPositionText = (position: string) => {
        switch (position) {
            case "1":
                return CommonT("rankOfMonthly-1");
            case "2":
                return CommonT("rankOfMonthly-2");
            case "3":
                return CommonT("rankOfMonthly-3");
            case "4":
                return CommonT("rankOfMonthly-4");
            case "5":
                return CommonT("rankOfMonthly-5");
        }
    }

    return (
        <section className={"py-4 xl:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"text-center !text-white"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"text-center mx-auto mt-8 !text-white"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mt-4 lg:mt-16"}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={36}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            prevEl: ".celebrity-custom-prev",
                            nextEl: ".celebrity-custom-next",
                        }}
                        breakpoints={{
                            320: {slidesPerView: 1.1, spaceBetween: 16,},
                            600: {slidesPerView: 1.1, spaceBetween: 24,},
                            900: {slidesPerView: 3, spaceBetween: 36,},
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            ary.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className={"specially-reward-card rounded-2xl py-10 px-6"}>
                                        <div className={"flex items-center"}>
                                            <img
                                                src={item.avatar}
                                                className={"w-10 h-10 object-cover"}
                                                alt=""
                                            />
                                            <Typography className={"font-medium !text-white ml-2"}>
                                                {item.name}
                                            </Typography>
                                            <Button className={"ml-auto bg-black/5 hover:bg-black/10"}>
                                                <img src={renderPositionImgUrl(item.position)}
                                                     className={"w-5 h-5 object-cover"} alt=""/>
                                                <span>{renderPositionText(item.position)}</span>
                                            </Button>
                                        </div>
                                        <div className={"flex items-center mt-4"}>
                                            <span className={"text-white"}>{t("growth")}</span>
                                            <Typography
                                                variant={"large"}
                                                className={"font-medium !text-white"}
                                            >
                                                {item.growth}
                                            </Typography>
                                        </div>
                                        <div className={"flex items-center mt-4"}>
                                            <span className={"text-white"}>{t("copy")}</span>
                                            <Typography
                                                variant={"large"}
                                                className={"font-medium !text-white"}
                                            >
                                                {item.copy}
                                            </Typography>
                                        </div>
                                        <div className={"flex items-center mt-4"}>
                                            <span className={"text-white"}>{t("type")}</span>
                                            <Typography
                                                variant={"large"}
                                                className={"font-medium !text-white"}
                                            >
                                                {item.type}
                                            </Typography>
                                        </div>
                                        <div className={"mt-12"}>
                                            <Button
                                                className={"!text-white bg-theme-active hover:bg-theme-active"}>
                                                {t("quickly")}
                                            </Button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className={"mt-4 lg:mt-16"}>
                    <div className={"flex justify-center"}>
                        <CircleChevronLeft className={"celebrity-custom-prev mr-2 text-white cursor-pointer"}/>
                        <CircleChevronRight className={"celebrity-custom-next ml-2 text-white cursor-pointer"}/>
                    </div>
                </div>
                <div className={"mt-4 lg:mt-16"}>
                    <Typography
                        variant={"muted"}
                        className={"!text-white max-w-2xl text-center mx-auto"}
                    >
                        {t("prompt")}
                    </Typography>
                </div>
            </Container>
        </section>
    )
}

export default Celebrity;