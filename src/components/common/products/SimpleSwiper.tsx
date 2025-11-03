"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {Typography} from "@/components/ui/typography";
import {CircleChevronLeft, CircleChevronRight} from "lucide-react";
import classnames from "classnames";

const SimpleSwiper = ({ ary, prevEl = ".properly-custom-prev", nextEl = ".properly-custom-next" }: any) => {
    return (
        <>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={36}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation]}
                navigation={{
                    prevEl: `.${prevEl}`,
                    nextEl: `.${nextEl}`,
                }}
                breakpoints={{
                    320: {slidesPerView: 1.2, spaceBetween: 16,},
                    600: {slidesPerView: 1.2, spaceBetween: 24,},
                    900: {slidesPerView: 2.4, spaceBetween: 36,},
                }}
                className="w-full"
            >
                {
                    ary.map((item: any, index: any) => (
                        <SwiperSlide key={index}>
                            <div className={""}>
                                <img
                                    src={item.url}
                                    alt="properly1"
                                    title={"properly1"}
                                    className={"w-full h-full object-cover"}
                                />
                                <div className={"mt-6"}>
                                    <Typography className={"font-semibold"}>
                                        {item.title}
                                    </Typography>
                                    {item.description && (
                                        <Typography variant={"muted"} className={"mt-4"}>
                                            {item.description}
                                        </Typography>
                                    )}

                                    {item.ul && item.ul}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className={"mt-4"}>
                <div className={"flex justify-end"}>
                    <CircleChevronLeft className={classnames([prevEl, "mr-2 cursor-pointer"])}/>
                    <CircleChevronRight className={classnames([nextEl, "ml-2 cursor-pointer"])}/>
                </div>
            </div>
        </>
    )
}

export default SimpleSwiper;