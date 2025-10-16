"use client";
import * as React from 'react'
import Image from "next/image";
import { useTranslations } from "next-intl";
import {Typography} from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
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


const GlobalPoints = () => {
    const t = useTranslations("Pages.ideas.vps.globalPoints");
    return (
        <section className={"bg-theme-deep-bg py-4 lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center !text-white"}
                    >
                        {t("title")}
                    </Typography>

                    <Typography
                        variant={"h5"}
                        className={"font-medium text-center mx-auto mt-4 lg:mt-10 !text-white max-w-3xl"}
                    >
                        {t("midst")}
                    </Typography>
                </motion.div>
                <div className={"flex justify-center flex-col mt-6 lg:mt-20"}>
                    <div className={"flex justify-center"}>
                        <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                            {t("btnText")}
                        </Button>
                    </div>

                    <Typography
                        variant={"muted"}
                        className={"font-medium text-center mx-auto mt-4 lg:mt-10 !text-white max-w-3xl"}
                    >
                        {t("muted")}
                    </Typography>
                </div>

                <div className={"grid grid-cols-12 gap-8 my-10 lg:my-18 mx-auto max-w-3xl"}>
                    <div className={"col-span-3"}>
                        <Image
                            width={40}
                            height={40}
                            alt={"avatar"}
                            title={"avatar"}
                            src={"/images/ideas/vps-avatar.png"}
                        />
                    </div>
                    <div className={"col-span-6"}>
                        <div
                            className={"border mt-5 border-solid [border-image:linear-gradient(90deg,rgba(31,58,147,0),rgba(57,103,255,1),rgba(31,58,147,0))_1_1]"}/>
                    </div>
                    <div className={"col-span-3 flex justify-end"}>
                        <Image
                            width={100}
                            height={48}
                            alt={"avatar"}
                            title={"avatar"}
                            src={"/images/ideas/vps-rqunix.png"}
                        />
                    </div>
                </div>

                <div>
                    <img src="/images/ideas/vps-globe-points.png" className={"w-full h-full object-cover"} alt=""/>
                </div>
            </Container>
        </section>
    )
}

export default GlobalPoints;