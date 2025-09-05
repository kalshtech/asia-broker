"use client";
import React, {useState} from "react";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import RegisterBtn from "@/components/RegisterBtn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {CircleChevronLeft, CircleChevronRight} from "lucide-react";
import SimpleSwiper from "@/components/common/SimpleSwiper";


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
                        <Typography>{t("right.swiper2.1.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography>{t("right.swiper2.1.ul.2")}</Typography>
                    </li>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography> {t("right.swiper2.1.ul.3")}</Typography>
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
                        <Typography>{t("right.swiper2.2.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography>{t("right.swiper2.2.ul.2")}</Typography>
                    </li>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography> {t("right.swiper2.2.ul.3")}</Typography>
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
                        <Typography>{t("right.swiper2.3.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography>{t("right.swiper2.3.ul.2")}</Typography>
                    </li>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography> {t("right.swiper2.3.ul.3")}</Typography>
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
                        <Typography>{t("right.swiper2.4.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography>{t("right.swiper2.4.ul.2")}</Typography>
                    </li>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography> {t("right.swiper2.4.ul.3")}</Typography>
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
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography>{t("right.swiper3.1.ul.1")}</Typography>
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
                        <Typography>{t("right.swiper3.2.ul.1")}</Typography>
                    </li>
                    <li className={"flex items-center"}>
                        <span className={"w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"}/>
                        <Typography>{t("right.swiper3.2.ul.2")}</Typography>
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
                        <span className={"w-1 h-1 min-w-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography>{t("right.swiper3.3.ul.1")}</Typography>
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
                        <span className={"w-1 min-w-1 h-1 mr-2 block bg-theme-active-hover rounded-full"} />
                        <Typography>{t("right.swiper3.4.ul.1")}</Typography>
                    </li>
                </ul>
            )
        },
    ];

    const handleChangeTabActive = (value: string) => {
        setTabActive(value);
    }

    return (
        <section className={"py-4 px-4 lg:py-30 lg:pl-30"}>
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
                    { t("title") }
                </Typography>

                <Typography
                    variant={"lead"}
                    className={"text-center mt-6"}
                >
                    {t("description")}
                </Typography>
            </motion.div>

            <div className={"mt-16"}>
                <div className={"grid grid-cols-12 gap-4 lg:gap-12"}>
                    <div className={"col-span-12 lg:col-span-2"}>
                        <Typography variant={"h4"} className={"font-medium"}>
                            {t("left.title")}
                        </Typography>
                        <Typography variant={"p"} className={"mt-2"}>
                            {t("left.desc")}
                        </Typography>

                        <div className={"mt-12"}>
                            <RegisterBtn/>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-10"}>
                        <div className={"w-full"}>
                            {tabActive === "classic" && <SimpleSwiper ary={oneAry}/>}
                            {tabActive === "gold" && <SimpleSwiper ary={twoAry}/>}
                            {tabActive === "vic" && <SimpleSwiper ary={threeAry}/>}
                        </div>
                    </div>
                </div>
                <div className={"mt-4"}>
                    <div className={"flex justify-end"}>
                        <CircleChevronLeft className={"properly-custom-prev mr-2 cursor-pointer"}/>
                        <CircleChevronRight className={"properly-custom-next ml-2 cursor-pointer"}/>
                    </div>
                </div>
            </div>


            <div className={"flex justify-center mt-4 lg:mt-20"}>
                <Tabs value={tabActive} onValueChange={handleChangeTabActive}>
                    <TabsList>
                        <TabsTrigger
                            value="classic"
                            className={"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}
                        >
                            { t("tabs.classic") }
                        </TabsTrigger>
                        <TabsTrigger
                            value="gold"
                            className={"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}
                        >
                            { t("tabs.gold") }
                        </TabsTrigger>
                        <TabsTrigger value="vic" className={"data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"}>
                            { t("tabs.vic") }
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </section>
    )
}

export default Properly;
