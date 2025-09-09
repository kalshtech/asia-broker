"use client";
import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {Typography} from "@/components/ui/typography";
import {useTranslations} from "next-intl";
import {motion, Variants} from "framer-motion";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react"
import JoinCommunity from "@/components/common/JoinCommunity";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Tools = () => {
    const t = useTranslations("Common.tools");
    const ary1 = [
        { image: "/images/common/calendar.png", title: t("row.calendar.title"), desc: t("row.calendar.desc") },
        { image: "/images/common/calculation.png", title: t("row.calculation.title"), desc: t("row.calculation.desc") },
        { image: "/images/common/servers.png", title: t("row.servers.title"), desc: t("row.servers.desc") },
    ];

    const ary2 = [
        { image: "/images/common/hot-charts.png", title: t("row.hot-charts.title"), desc: t("row.hot-charts.desc") },
        { image: "/images/common/ideas.png", title: t("row.ideas.title"), desc: t("row.ideas.desc") },
    ];
    return (
        <section className={"p-30 bg-theme-deep-bg"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium !text-white text-center"}
                >
                    { t("title") }
                </Typography>
            </motion.div>
            <div className={"mt-20"}>
                <div className={"grid grid-cols-12 gap-8"}>
                    {
                        ary1.map((item, index) => (
                            <div className={"col-span-4"} key={index}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            <img className={"w-10 h-10"} src={item.image} alt=""/>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Typography variant={"large"}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant={"muted"} className={"mt-4"}>
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                    <CardFooter className={"flex justify-end cursor-pointer"}>
                                        <ArrowRight/>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))
                    }
                </div>

                <div className={"grid grid-cols-12 gap-8 mt-10"}>
                    {
                        ary2.map((item, index) => (
                            <div className={"col-span-6"} key={index}>
                                <Card>
                                    <CardHeader>
                                        <CardTitle>
                                            <img className={"w-10 h-10"} src={item.image} alt=""/>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Typography variant={"large"}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant={"muted"} className={"mt-4"}>
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                    <CardFooter className={"flex justify-end cursor-pointer"}>
                                        <ArrowRight/>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={"mt-28"}>
                <JoinCommunity theme={"light"} />
            </div>
        </section>
    )
}

export default Tools;
