"use client";
import * as React from "react";
import {motion, Variants} from "framer-motion";
import {Typography} from "@/components/ui/typography";
import {useTranslations, useLocale} from "next-intl";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterBtn from "@/components/RegisterBtn";
import Container from "@/components/Container";
import { Star } from "lucide-react"
import dynamic from 'next/dynamic';

const TrustpilotWidget = dynamic(
    () => import('@/components/TrustpilotWidget'),
    { ssr: false } // 再保险：这个组件完全不走 SSR，彻底杜绝水合不一致
);

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Cooperator = () => {
    const [rating, setRating] = React.useState(4)
    const t = useTranslations("Pages.home.cooperator");
    const [ tabActive, setTabActive ] = React.useState("trader");
    const locale = useLocale();

    const RenderTrustpilot = () => {
        if(locale === "ja") {
            return (
                <div className="trustpilot-widget" data-locale="ja-JP" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="680278ce15b91e8838c4f5cb" data-style-height="52px" data-style-width="100%" data-token="fde10f6a-09e3-4f0e-a5d7-96f7e49aea0e">
                    <a href="https://jp.trustpilot.com/review/afttmarkets.com" target="_blank" rel="noopener">
                        <img src="/images/home/Trustpilot.png" className={"w-30"} alt=""/>
                    </a>
                </div>
            )
        }

        return (
            <div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="680278ce15b91e8838c4f5cb" data-style-height="52px" data-style-width="100%" data-token="ba496371-27c0-4e55-bfd5-d8451c8cd38a">
                <a href="https://www.trustpilot.com/review/afttmarkets.com" target="_blank" rel="noopener">
                    <img src="/images/home/Trustpilot.png" className={"w-30"} alt=""/>
                </a>
            </div>
        )
    }

    return (
        <section className={"py-16 xl:p-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography variant={"h3"} className={"text-center"}>
                        {t("title")}
                    </Typography>
                    <Typography variant={"muted"} className={"text-center mt-6"}>
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"mx-auto mt-6"}>
                    <RenderTrustpilot/>
                    <div className={"mt-2"}>
                        <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                    key={i}
                                    onClick={() => setRating(i)}
                                    className={`h-6 w-6 cursor-pointer transition-colors ${
                                        i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={"mt-10"}>
                    <div className={"flex flex-col items-center"}>
                        <Tabs defaultValue="trader"
                              onValueChange={(value) => setTabActive(value)}
                        >
                            <TabsList className={"h-10 rounded-full"}>
                                <TabsTrigger
                                    value="trader"
                                    className={"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer rounded-full"}
                                >
                                    {t("tabs.trader")}
                                </TabsTrigger>
                                <TabsTrigger
                                    value="partners"
                                    className={"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer rounded-full"}
                                >
                                    {t("tabs.partners")}
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                        <div className={"mt-10 text-center"}>
                            <Typography variant={"h6"}>
                                {t(`${tabActive}.title`)}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"max-w-3xl mx-auto mt-6"}
                            >
                                {t(`${tabActive}.desc`)}
                            </Typography>
                        </div>
                        <div className={"mt-16"}>
                            <RegisterBtn text={t(`${tabActive}.btn`)}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Cooperator;