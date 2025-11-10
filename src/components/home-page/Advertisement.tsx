"use client";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations, useLocale } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { motion, Variants } from "framer-motion";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import Container from "@/components/Container";
import { Link } from "@/i18n/navigation";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

type ItemProps = {
    ImageNumber: string | number;
    title: string;
    description: string;
    url: string;
    path: string;
}

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const SwiperSlideItem = (props: ItemProps) => {
    return (
        <Link href={props.path} target={"_blank"}>
            <div className={`${props.url} bg-center bg-cover w-auto h-100 rounded-lg`}>
                <div className={"flex flex-col h-full cursor-pointer justify-end relative p-4 xl:px-6 xl:py-8"}>
                    <div className={""}>
                        <Typography variant={"h6"} className={"font-medium !text-white transition"}>
                            {props.title}
                        </Typography>
                    </div>
                    <div className={"mt-4"}>
                        <Typography
                            variant={"muted"}
                            className={"!text-white"}
                        >
                            {props.description}
                        </Typography>
                    </div>
                </div>
            </div>
        </Link>
    )
}

const Advertisement = () => {
    const t = useTranslations("Pages.home.advertisement");
    const locale = useLocale();

    const ary = [
        {
            ImageNumber: "2",
            title: t("2.title"),
            description: t("2.description"),
            url: `bg-[url('/images/home/advertisement2.webp')]`,
            path: "/platform"
        },
        {
            ImageNumber: "3",
            title: t("3.title"),
            description: t("3.description"),
            url: `bg-[url('/images/home/advertisement3.webp')]`,
            path: "/accounts/vic"
        },
        {
            ImageNumber: "4",
            title: t("4.title"),
            description: t("4.description"),
            url: `bg-[url('/images/home/advertisement4.webp')]`,
            path: "/ideas/vps"
        },
        {
            ImageNumber: "5",
            title: t("5.title"),
            description: t("5.description"),
            url: `bg-[url('/images/home/advertisement5.webp')]`,
            path: "/accounts/earn"
        },
        {
            ImageNumber: "6",
            title: t("6.title"),
            description: t("6.description"),
            url: `bg-[url('/images/home/advertisement6.webp')]`,
            path: "/accounts/platinum"
        },
    ];

    return (
        <section className={"py-16 xl:p-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                   <div className={"flex justify-center items-end"}>
                       <Typography variant={"h3"} className={"text-center ml-2"}>
                           <span className={"text-theme-active text-4xl lg:text-6xl mr-2"}>0</span>
                           { t("title") }
                       </Typography>
                   </div>
                </motion.div>

                <div className={"mt-4 xl:mt-16"}>
                    <div className={"grid grid-cols-12 gap-4 xl:gap-9"}>
                        <div className={"col-span-12 lg:col-span-4 xl:col-span-3"}>
                            <div className={`bg-[url('/images/home/advertisement1.webp')] bg-center bg-cover w-auto h-100 rounded-lg`}>
                                <div
                                    className={"flex flex-col h-full cursor-pointer relative px-3 py-8 xl:px-6 xl:py-16"}>
                                    <div
                                        className={"bg-[rgba(0,0,0,0.42)] justify-center rounded-lg flex flex-col w-full h-full top-0 left-0 transition absolute px-4 xl:px-6 py-8 xl:py-16"}>
                                        <div>
                                            <Typography
                                                variant={"h6"}
                                                className={"font-medium !text-white"}
                                            >
                                                {t("1.title")}
                                            </Typography>
                                        </div>
                                        <div className={"mt-4"}>
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white"}
                                            >
                                                {t("1.description")}
                                            </Typography>
                                        </div>
                                        <div className={"mt-8"}>
                                            <GeneralLinkBtn
                                                text={t("1.btn")}
                                                theme={"active-solid"}
                                                isLink
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-8 xl:col-span-9"}>
                            <Swiper
                                slidesPerView={3.5}
                                spaceBetween={36}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={{
                                    prevEl: ".advertisement-custom-prev",
                                    nextEl: ".advertisement-custom-next",
                                }}
                                modules={[Navigation]}
                                breakpoints={{
                                    320: {slidesPerView: 1.5, spaceBetween: 24,},
                                    600: {slidesPerView: 2.2, spaceBetween: 24,},
                                    900: {slidesPerView: 2.2, spaceBetween: 36,},
                                    1200: {slidesPerView: 3.2, spaceBetween: 36,},
                                }}
                                className="mySwiper"
                            >
                                {
                                    ary.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <SwiperSlideItem {...item} />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                    <div className={"mt-4"}>
                        <div className={"flex justify-end"}>
                            <CircleChevronLeft className={"advertisement-custom-prev mr-2 cursor-pointer"}/>
                            <CircleChevronRight className={"advertisement-custom-next ml-2 cursor-pointer"}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Advertisement;