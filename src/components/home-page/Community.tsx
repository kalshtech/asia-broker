"use client";
import React from "react";
import {useTranslations} from "next-intl";
import {Typography} from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
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

const Community = () => {
    const t = useTranslations("Pages.home.community");

    return (
        <section className={"py-16 xl:p-30 bg-theme-light-bg"}>
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
                <div className={"grid grid-cols-12 gap-4 xl:gap-6 mt-8 xl:mt-16"}>
                    <div className={"col-span-12 lg:col-span-3"}>
                        <div className={"hidden xl:block bg-[url('/images/home/communitybg1.png')] h-full bg-cover bg-center bg-no-repeat p-6"}>
                            <div className={"flex h-full flex-1 flex-col"}>
                                <div className={"flex flex-col pb-20 pt-20 h-full lg:pt-120"}>
                                    <div className={"flex flex-col"}>
                                        <Typography variant={"muted"} className={"!text-white font-medium"}>
                                            {t("row.1.desc1")}
                                        </Typography>
                                        <Typography variant={"muted"} className={"mt-8 !text-white"}>
                                            {t("row.1.desc2")}
                                        </Typography>
                                    </div>
                                    <div className={"text-center mt-10"}>
                                        <GeneralLinkBtn
                                            text={t("row.1.link")}
                                            path={"/corporation/contact"}
                                            theme={"active-solid"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div className={"h-full bg-[url('/images/mobile/communitybg2.png')] xl:bg-[url('/images/home/communitybg2.png')] bg-cover bg-center bg-no-repeat py-16 px-6 lg:p-6"}>
                            <div className={"flex flex-1 h-full flex-col"}>
                                <div className={"flex-col flex h-full justify-center items-center"}>
                                    <Typography
                                        variant={"h5"}
                                        className={"font-medium !text-white"}
                                    >
                                        {t("row.2.title")}
                                    </Typography>
                                    <Typography variant={"p"}
                                                className={"!text-white text-center max-w-3xl mt-4"}>
                                        {t("row.2.description1")}
                                    </Typography>
                                    <Typography 
                                        variant={"muted"}
                                        className={"!text-white text-center max-w-3xl mt-6"}
                                    >
                                        {t("row.2.description2")}
                                    </Typography>
                                    <div className={"mt-8"}>
                                        <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                                            <img src="/images/home/discord-logo.webp" className={"w-6 h-6 object-cover"} alt=""/>
                                            {t("row.2.btnText")}
                                        </Button>
                                    </div>
                                </div>
                                <div className={"mt-32 lg:mt-auto flex justify-center"}>
                                    <Typography
                                        variant={"muted"}
                                        className={"!text-white text-center text-xs max-w-md mt-5 roboto"}>
                                        {t("row.2.prompt")}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-3"}>
                        <div className={"hidden xl:block bg-[url('/images/home/communitybg3.png')] h-full bg-cover bg-center bg-no-repeat p-6"}>
                            <div className={"flex h-full flex-1 flex-col"}>
                                <div className={"flex flex-col pb-20 pt-20 lg:pt-120"}>
                                    <div className={"flex flex-col"}>
                                        <Typography variant={"p"} className={"!text-white font-medium"}>
                                            {t("row.3.desc1")}
                                        </Typography>
                                        <Typography variant={"muted"} className={"!text-white mt-4"}>
                                            {t("row.3.desc2")}
                                        </Typography>
                                    </div>
                                    <div className={"text-center mt-10"}>
                                        <GeneralLinkBtn
                                            text={t("row.3.explore")}
                                            path={"/mutual/trading-competition"}
                                            theme={"active-solid"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Community;