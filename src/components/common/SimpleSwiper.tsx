"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {Typography} from "@/components/ui/typography";

const SimpleSwiper = ({ ary, prevEl = ".properly-custom-prev", nextEl = ".properly-custom-next" }: any) => {
    return (
        <Swiper
            slidesPerView={2.5}
            spaceBetween={36}
            loop={true}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation]}
            navigation={{
                prevEl: prevEl,
                nextEl: nextEl,
            }}
            className="mySwiper w-full"
        >
            {
                ary.map((item: any, index: any) => (
                    <SwiperSlide key={index}>
                        <div className={""}>
                            <img src={item.url} alt="properly1" title={"properly1"} className={"w-full h-full object-cover"} />
                            <div className={"mt-6"}>
                                <Typography variant={"h5"}>
                                    { item.title }
                                </Typography>
                                { item.description && (
                                    <Typography variant={"p"} className={"mt-4"}>
                                        { item.description }
                                    </Typography>
                                ) }

                                { item.ul && item.ul }
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default SimpleSwiper;