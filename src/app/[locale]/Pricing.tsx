"use client";
import * as React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import Container from "@/components/Container";
import Image from "next/image";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

function Counter({from = 10, to = 0, duration = 1.2, decimals = 0, trigger}: { from?: number; to?: number; duration?: number; decimals?: number; trigger?: any; }) {
    const el = React.useRef<HTMLSpanElement>(null)
    return <span ref={el} className={"text-2xl text-[#3967FF]"}>{from.toFixed ? from.toFixed(decimals) : from}</span>
}

const Pricing = () => {
    const t = useTranslations("Pages.home.pricing");
    const locale = useLocale();
    const cardsWrapRef = React.useRef<HTMLDivElement | null>(null);
    const isEn = locale === "en";

    const CryptoAry = [
        { imageNumber: "1", name: "Bitcoin" },
        { imageNumber: "2", name: "Ethereum" },
        { imageNumber: "3", name: "Ripple" },
    ];

    const CommodityAry = [
        { imageNumber: "1", name: "XAU USD" },
        { imageNumber: "1", name: "XAG/USD" },
        { imageNumber: "1", name: "WTI" },
    ];

    const ForexAry = [
        { imageNumber: "1", name: "EUR/USD" },
        { imageNumber: "2", name: "GBP/USD" },
        { imageNumber: "3", name: "GBP/JPY" },
    ];

    const StockAry = [
        { imageNumber: "1", name: "S&P 500" },
        { imageNumber: "2", name: "Nasdaq 100" },
        { imageNumber: "3", name: "Dow Jones" },
    ];

    // React.useEffect(() => {
    //     if (!cardsWrapRef.current) return
    //     const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    //     if (reduce) return
    //
    //     const el = cardsWrapRef.current
    //     const fromTop    = el.querySelectorAll<HTMLElement>('[data-anim="from-top"]');
    //     const fromBottom = el.querySelectorAll<HTMLElement>('[data-anim="from-bottom"]');
    //
    //     const tl = gsap.timeline({
    //         defaults: { duration: 0.8, ease: "power3.out" },
    //         scrollTrigger: { trigger: el, start: "top 70%", once: true },
    //     })
    //
    //     tl.from(fromTop, { y: -28, opacity: 0, stagger: 0.08 }, 0);
    //     tl.from(fromBottom, { y: 28, opacity: 0, stagger: 0.08 }, 0);
    //
    //     return () => {
    //         tl.scrollTrigger?.kill()
    //         tl.kill()
    //     }
    // }, []);

    return (
        <section ref={cardsWrapRef}  className={"bg-[linear-gradient(270deg,_#000C35_37%,_#1F3A93_100%)]"}>
            <Container>
                <div className={"grid gap-4 grid-cols-12 py-4 lg:py-10"}>
                    <div className={"flex-1 col-span-12 lg:col-span-7"}>
                        <div className={"flex flex-col mt-8 lg:mt-16"}>
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: true, amount: 0.5}}
                                className={"flex flex-col h-full"}
                            >
                                <Typography variant={"h3"} className={"font-medium !text-white max-w-3xl"}>
                                    {t("left.title1")}
                                </Typography>

                                <Typography variant={"h4"} className={"font-medium !text-white mt-6"}>
                                    {t("left.title2")}
                                </Typography>
                                <Typography variant={"h4"} className={"font-medium !text-white"}>
                                    {t("left.title3")}
                                </Typography>
                                <Typography className={"!text-white text-base max-w-3xl mt-10"}>
                                    {t("left.description2")}
                                </Typography>

                                <div className={"mt-10 lg:mt-27"}>
                                    <Button className={"bg-white text-theme-active cursor-pointer hover:bg-white"}>
                                        {t("left.btnText")}
                                    </Button>

                                    {
                                        isEn && (
                                            <Button className={"bg-transparent ml-4 text-white border cursor-pointer hover:bg-transparent"}>
                                                {t("left.more")}
                                            </Button>
                                        )
                                    }
                                </div>

                                <Typography variant={"muted"} className={"!text-white mt-12 lg:mt-48"}>
                                    {t("left.fromText")}
                                </Typography>
                            </motion.div>
                        </div>
                    </div>
                    <div className={"flex-1 col-span-12 lg:col-span-5"}>
                        <header>
                            <Typography className={"font-normal !text-white"}>
                                {t("right.title")}
                            </Typography>
                        </header>
                        <section className={"mt-10 h-[calc(100%-84px)]"}>
                            <div className={"h-full grid grid-cols-1 md:grid-cols-2 gap-6"}>
                                <div className={"h-full bg-[rgba(123,130,154,0.4)] rounded-lg px-4 py-6"}
                                     data-anim="from-top">
                                    <div className={"flex items-center"}>
                                        <Typography className={"!text-white"}>
                                            {t("right.crypto")}
                                        </Typography>
                                        <div className={"ml-auto flex items-center"}>
                                            <Counter
                                                from={10}
                                                to={0}
                                                duration={1.2}
                                                decimals={1}
                                                trigger={cardsWrapRef}
                                            />
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white !text-xs ml-2"}
                                            >
                                                {t("right.commission")}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={"mt-6"}>
                                        {
                                            CryptoAry.map((d, index) => (
                                                <div className={"flex my-4"} key={index}>
                                                    <Image
                                                        src={`/images/home/crypto-${d.imageNumber}.svg`}
                                                        width={20}
                                                        height={20}
                                                        alt={"icon"}
                                                        title={"icon"}
                                                    />
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white !text-xs ml-2"}
                                                    >
                                                        {d.name}
                                                    </Typography>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className={""}>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
                                        >
                                            {t("right.more")}
                                        </Typography>
                                        <div className={"mt-4"}>
                                            <Typography
                                                className={"!text-white"}
                                            >
                                                {t("right.prompt")}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className={"h-full bg-[rgba(123,130,154,0.4)] rounded-lg px-4 py-6"}
                                     data-anim="from-top">
                                    <div className={"flex items-center"}>
                                        <Typography className={"!text-white"}>
                                            {t("right.commodity")}
                                        </Typography>
                                        <div className={"ml-auto flex items-center"}>
                                            <Counter
                                                from={10}
                                                to={0}
                                                duration={1.2}
                                                decimals={1}
                                                trigger={cardsWrapRef}
                                            />
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white !text-xs ml-2"}
                                            >
                                                {t("right.commission")}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={"mt-6"}>
                                        {
                                            CommodityAry.map((d, index) => (
                                                <div className={"flex my-4"} key={index}>
                                                    <Image
                                                        src={`/images/home/commodity-${d.imageNumber}.svg`}
                                                        width={20}
                                                        height={20}
                                                        alt={"icon"}
                                                        title={"icon"}
                                                    />
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white !text-xs ml-2"}
                                                    >
                                                        {d.name}
                                                    </Typography>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className={""}>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
                                        >
                                            {t("right.more")}
                                        </Typography>
                                        <div className={"mt-4"}>
                                            <Typography
                                                className={"!text-white"}
                                            >
                                                {t("right.prompt")}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className={"h-full bg-[rgba(123,130,154,0.4)] rounded-lg px-4 py-6"}
                                     data-anim="from-bottom">
                                    <div className={"flex items-center"}>
                                        <Typography className={"!text-white"}>
                                            {t("right.forex")}
                                        </Typography>
                                        <div className={"ml-auto flex items-center"}>
                                            <Counter
                                                from={10}
                                                to={0}
                                                duration={1.2}
                                                decimals={1}
                                                trigger={cardsWrapRef}
                                            />
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white !text-xs ml-2"}
                                            >
                                                {t("right.commission")}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={"mt-6"}>
                                        {
                                            ForexAry.map((d, index) => (
                                                <div className={"flex my-4"} key={index}>
                                                    <Image
                                                        src={`/images/home/forex-${d.imageNumber}.svg`}
                                                        width={20}
                                                        height={20}
                                                        alt={"icon"}
                                                        title={"icon"}
                                                    />
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white !text-xs ml-2"}
                                                    >
                                                        {d.name}
                                                    </Typography>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className={""}>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
                                        >
                                            {t("right.more")}
                                        </Typography>
                                        <div className={"mt-4"}>
                                            <Typography
                                                className={"!text-white"}
                                            >
                                                {t("right.prompt")}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className={"h-full bg-[rgba(123,130,154,0.4)] rounded-lg px-4 py-6"}
                                     data-anim="from-bottom">
                                    <div className={"flex items-center"}>
                                        <Typography className={"!text-white"}>
                                            {t("right.index")}
                                        </Typography>
                                        <div className={"ml-auto flex items-center"}>
                                            <Counter
                                                from={10}
                                                to={0}
                                                duration={1.2}
                                                decimals={1}
                                                trigger={cardsWrapRef}
                                            />
                                            <Typography
                                                variant={"muted"}
                                                className={"!text-white !text-xs ml-2"}
                                            >
                                                {t("right.commission")}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={"mt-6"}>
                                        {
                                            StockAry.map((d, index) => (
                                                <div className={"flex my-4"} key={index}>
                                                    <Image
                                                        src={`/images/home/crypto-${d.imageNumber}.svg`}
                                                        width={20}
                                                        height={20}
                                                        alt={"icon"}
                                                        title={"icon"}
                                                    />
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"!text-white !text-xs ml-2"}
                                                    >
                                                        {d.name}
                                                    </Typography>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className={""}>
                                        <Typography
                                            variant={"muted"}
                                            className={"!text-white"}
                                        >
                                            {t("right.more")}
                                        </Typography>
                                        <div className={"mt-4"}>
                                            <Typography
                                                className={"!text-white"}
                                            >
                                                {t("right.prompt")}
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Pricing;