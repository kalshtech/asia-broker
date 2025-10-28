"use client";
import React, {useState} from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import RegisterBtn from "@/components/RegisterBtn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SimpleSwiper from "@/components/common/products/SimpleSwiper";
import {Button} from "@/components/ui/button";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Properly = () => {
    const t = useTranslations("Pages.home.properly");
    const [ tabActive, setTabActive ] = useState<string>("classic");

    const oneAry = [
        { url: "/images/home/properly1.png", title: t("right.swiper1.1.title"), description: t("right.swiper1.1.description") },
        { url: "/images/home/properly2.png", title: t("right.swiper1.2.title"), description: t("right.swiper1.2.description") },
        { url: "/images/home/properly3.png", title: t("right.swiper1.3.title"), description: t("right.swiper1.3.description") },
        { url: "/images/home/properly4.png", title: t("right.swiper1.4.title"), description: t("right.swiper1.4.description") },
    ];

    const twoAry = [
        {
            url: "/images/home/properly5.png",
            title: t("right.swiper2.1.title"),
            ul: (
                <ul className={"mt-2"}>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography variant={"muted"}>{t("right.swiper2.1.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography variant={"muted"}>{t("right.swiper2.1.ul.2")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper2.1.ul.3")}</Typography>
                    </li>
                </ul>
            )
        },
        {
            url: "/images/home/properly6.png",
            title: t("right.swiper2.2.title"),
            ul: (
                <ul className={"mt-2"}>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography variant={"muted"}>{t("right.swiper2.2.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography variant={"muted"}>{t("right.swiper2.2.ul.2")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper2.2.ul.3")}</Typography>
                    </li>
                </ul>
            )
        },
        {
            url: "/images/home/properly7.png",
            title: t("right.swiper2.3.title"),
            ul: (
                <ul className={"mt-2"}>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography variant={"muted"}>{t("right.swiper2.3.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography variant={"muted"}>{t("right.swiper2.3.ul.2")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper2.3.ul.3")}</Typography>
                    </li>
                </ul>
            )
        },
        {
            url: "/images/home/properly8.png",
            title: t("right.swiper2.4.title"),
            ul: (
                <ul className={"mt-2"}>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography variant={"muted"}>{t("right.swiper2.4.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography variant={"muted"}>{t("right.swiper2.4.ul.2")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}> {t("right.swiper2.4.ul.3")}</Typography>
                    </li>
                </ul>
            )
        },
    ];

    const threeAry = [
        {
            url: "/images/home/properly9.png",
            title: t("right.swiper3.1.title"),
            ul: (
                <ul className={"mt-2"}>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper3.1.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper3.1.ul.2")}</Typography>
                    </li>
                </ul>
            )
        },
        {
            url: "/images/home/properly10.png",
            title: t("right.swiper3.2.title"),
            ul: (
                <ul className={"mt-2"}>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper3.2.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper3.2.ul.2")}</Typography>
                    </li>
                </ul>
            )
        },
        {
            url: "/images/home/properly11.png",
            title: t("right.swiper3.3.title"),
            ul: (
                <ul className={"mt-2"}>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 min-w-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper3.3.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 h-1 min-w-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper3.3.ul.2")}</Typography>
                    </li>
                </ul>
            )
        },
        {
            url: "/images/home/properly12.png",
            title: t("right.swiper3.4.title"),
            ul: (
                <ul className={"mt-2"}>
                    <li className={"flex items-center"}>
                        <span className={"w-1 min-w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper3.4.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 min-w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper3.4.ul.2")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 min-w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper3.4.ul.3")}</Typography>
                    </li>
                    <li className={"flex items-center mt-1"}>
                        <span className={"w-1 min-w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography variant={"muted"}>{t("right.swiper3.4.ul.4")}</Typography>
                    </li>
                </ul>
            )
        },
    ];

    const handleChangeTabActive = (value: string) => {
        setTabActive(value);
    }

    return (
        <section className={"lg:py-30 lg:pl-30"}>
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

                    <Typography className={"text-center mt-6"}>
                        {t("description")}
                    </Typography>
                </motion.div>

                <div className={"mt-8 lg:mt-16"}>
                    <div className={"grid grid-cols-12 gap-4 lg:gap-12"}>
                        <div className={"col-span-12 lg:col-span-3"}>
                            <Typography variant={"h4"}>
                                {t(`left.${tabActive}.name`)}
                            </Typography>
                            <Typography className={"font-medium mt-2"}>
                                {t(`left.${tabActive}.title`)}
                            </Typography>
                            <Typography className={"mt-2"}>
                                {t(`left.${tabActive}.desc`)}
                            </Typography>

                            <div className={"mt-6 lg:mt-12 flex justify-center lg:justify-start flex-row lg:flex-col"}>
                                <RegisterBtn/>
                                <div>
                                    <Button className={"ml-4 lg:ml-0 lg:mt-4 border text-theme-active bg-transparent hover:bg-transparent border-theme-active"}>
                                        {t("explore")}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-9"}>
                            <div className={"w-full"}>
                                {tabActive === "classic" &&
                                    <SimpleSwiper prevEl={"test-custom-prev"} nextEl={"test-custom-next"}
                                                  ary={oneAry}/>}
                                {tabActive === "platinum" &&
                                    <SimpleSwiper prevEl={"test-custom-prev"} nextEl={"test-custom-next"}
                                                  ary={twoAry}/>}
                                {tabActive === "vic" &&
                                    <SimpleSwiper prevEl={"test-custom-prev"} nextEl={"test-custom-next"}
                                                  ary={threeAry}/>}
                            </div>
                        </div>
                    </div>
                </div>


                <div className={"flex justify-center mt-4 lg:mt-20"}>
                    <Tabs value={tabActive} onValueChange={handleChangeTabActive}>
                        <TabsList className={"h-10 rounded-full"}>
                            <TabsTrigger
                                value="classic"
                                className={"data-[state=active]:bg-primary cursor-pointer data-[state=active]:text-primary-foreground"}
                            >
                                {t("tabs.classic")}
                            </TabsTrigger>
                            <TabsTrigger
                                value="platinum"
                                className={"data-[state=active]:bg-primary cursor-pointer data-[state=active]:text-primary-foreground"}
                            >
                                {t("tabs.platinum")}
                            </TabsTrigger>
                            <TabsTrigger
                                value="vic"
                                className={"data-[state=active]:bg-primary cursor-pointer data-[state=active]:text-primary-foreground"}
                            >
                                {t("tabs.vic")}
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </Container>
        </section>
    )
}

export default Properly;
