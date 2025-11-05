"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Banner = () => {
    const t = useTranslations("Pages.platform.banner");
    const CommonT = useTranslations("Common");
    const downloadAry = [
        { imageUrl: "/images/platform/windows.png", url: "https://document.afttjp.com/AFTT_setup.exe", download: t("download"), vision: t("ul.windows") },
        { imageUrl: "/images/platform/apple.png", url: "https://download.mql5.com/cdn/web/metaquotes.ltd/mt5/MetaTrader5.pkg.zip?utm_source=support.metaquotes.net&utm_campaign=download.mt5.macos", download: t("download"), vision: t("ul.macos") },
        { imageUrl: "/images/platform/apple.png", url: "https://download.metatrader.com/cdn/mobile/mt5/ios?server=AsiaFutureTrading-Server", download: t("download"), vision: t("ul.ios") },
        { imageUrl: "/images/platform/android.png", url: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/metatrader5.apk?utm_source=www.metatrader5.com&utm_campaign=install.metaquotes", download: t("download"), vision: t("ul.android") },
        { imageUrl: "/images/platform/webtrade.png", url: "https://app.afttmarkets.com/", download: t("launch"), vision: t("ul.webtrader") },
    ];
    return (
        <section className={"bg-[url(/images/platform/banner-background-mobile.png)] xl:bg-[url(/images/platform/banner-background.png)] bg-cover bg-center py-16 lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h1"}
                        className={"text-center !text-white"}
                    >
                        {t("title1")}
                    </Typography>
                    <Typography
                        variant={"h1"}
                        className={"text-center !text-white mt-2"}
                    >
                        {t("title2")}
                    </Typography>
                    <Typography
                        variant={"large"}
                        className={"font-medium text-center mx-auto !text-white mt-10"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"flex justify-center mt-10"}>
                    <GeneralLinkBtn
                        text={CommonT("register")}
                        theme={"active-solid"}
                        isLink
                    />
                </div>

                <div className={"flex justify-center mt-10"}>
                    <img src="/images/platform/logo&mt5.png" className={"w-[260px] "} alt="logo&mt5"
                         title={"logo&mt5"}/>
                </div>

                <div className={"mt-24"}>
                    <div className={"grid lg:grid-cols-3 xl:grid-cols-5 gap-4"}>
                        {
                            downloadAry.map((item, index) => (
                                <div key={index} className={"flex flex-1 border bg-[#2D2D2D]/40 rounded-lg cursor-pointer"}>
                                    <a href={item.url} className={"flex flex-1 py-4 px-8 items-center"} target={"_blank"}>
                                        <img src={item.imageUrl} className={"w-[30px] h-[30px]"} alt={item.vision}/>
                                        <div className={"flex flex-col ml-4"}>
                                            <Typography variant={"small"} className={"text-white"}>
                                                {item.download}
                                            </Typography>
                                            <Typography variant={"large"} className={"font-normal text-white mt-1"}>
                                                {item.vision}
                                            </Typography>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner;