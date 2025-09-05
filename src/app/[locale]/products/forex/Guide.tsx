"use client";
import * as React from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import {useTranslations} from "next-intl";
import { Button } from "@/components/ui/button";
import SimpleSwiper from "@/components/common/SimpleSwiper";
import {CircleChevronLeft, CircleChevronRight} from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Guide = () => {
    const t = useTranslations("Pages.products.forex.guide");
    const oneAry = [
        { url: "/images/products/forex-swiper1.png", title: t("row.col2.span1.title"), description: t("row.col2.span1.desc") },
        { url: "/images/products/forex-swiper2.png", title: t("row.col2.span2.title"), description: t("row.col2.span2.desc") },
        { url: "/images/products/forex-swiper3.png", title: t("row.col2.span3.title"), description: t("row.col2.span3.desc") },
    ];
    return (
        <section className={"lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    {t("title")}
                </Typography>
            </motion.div>
            <div className={"grid grid-cols-12 gap-4 mt-16"}>
                <div className={"col-span-12 lg:col-span-2"}>
                    <Typography
                        variant={"h3"}
                        className={"font-medium"}
                    >
                        {t("row.col1.title")}
                    </Typography>
                    <Typography variant={"muted"} className={"mt-8"}>
                        {t("row.col1.desc")}
                    </Typography>
                    <div className={"mt-10"}>
                        <Button className={"bg-theme-active hover:bg-theme-active-hover rounded-full"}>
                            {t("row.col1.more")}
                        </Button>
                    </div>
                </div>
                <div className={"col-span-12 lg:col-span-10"}>
                    <div className={"w-full"}>
                        <SimpleSwiper ary={oneAry} prevEl={".forex-custom-prev"} nextEl={".forex-custom-next"} />
                    </div>
                </div>
            </div>
            <div className={"mt-4"}>
                <div className={"flex justify-end"}>
                    <CircleChevronLeft className={"forex-custom-prev mr-2 cursor-pointer"}/>
                    <CircleChevronRight className={"forex-custom-next ml-2 cursor-pointer"}/>
                </div>
            </div>
        </section>
    )
}

export default Guide;

