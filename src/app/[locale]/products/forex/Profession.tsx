"use client";
import * as React from "react";
import {Typography} from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { useTranslations } from "next-intl";
import classnames from "classnames";
import { Button } from "@/components/ui/button";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Profession = () => {
    const t = useTranslations("Pages.products.forex.profession");
    const [ tabActive, setTabActive ] = React.useState("forex");

    const cols = [
        { label: t("row.col1.title"), value: "forex", img: "/images/products/profession-forex.png", children: {  title: t("row.col1.title"), desc1: t("row.col1.desc1"), desc2: t("row.col1.desc2"), btnText: t("row.col1.btnText")  } },
        { label: t("row.col2.title"), value: "crypto", img: "/images/products/profession-crypto.png", children: {  title: t("row.col2.title"), desc1: t("row.col2.desc1"), desc2: t("row.col2.desc2"), btnText: t("row.col2.btnText")  } },
        { label: t("row.col3.title"), value: "metals", img: "/images/products/profession-metals.png", children: {  title: t("row.col3.title"), desc1: t("row.col3.desc1"), desc2: t("row.col3.desc2"), btnText: t("row.col3.btnText")  } },
        { label: t("row.col4.title"), value: "energy", img: "/images/products/profession-energy.png", children: {  title: t("row.col4.title"), desc1: t("row.col4.desc1"), btnText: t("row.col4.btnText")  } },
        { label: t("row.col5.title"), value: "stock&etf", img: "/images/products/profession-stock&etf.png", children: {  title: t("row.col5.title"), desc1: t("row.col5.desc1"), desc2: t("row.col5.desc2"), btnText: t("row.col5.btnText")  } },
        { label: t("row.col6.title"), value: "future", img: "/images/products/profession-future.png", children: {  title: t("row.col6.title"), desc1: t("row.col6.desc1"), desc2: t("row.col6.desc2"), btnText: t("row.col6.btnText")  } },
    ]

    const activeChildren = cols.find(item => item.value === tabActive)?.children;
    const activeImageUrl = cols.find(item => item.value === tabActive)?.img;

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

                <Typography
                    variant={"lead"}
                    className={"text-center mt-6"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mx-30 mt-16"}>
                <div className={"w-full relative h-[560px]"}>
                    <div className={"w-full grid grid-cols-12 h-full border border-[#E6E6E6] relative"}>
                        {
                            cols.map((item, index) => (
                                <div key={index}
                                     className={classnames(["col-span-2 h-full cursor-pointer border-r border-[#E6E6E6] relative hover:backdrop-blur-[10px] hover:bg-[rgba(0,86,255,.05)] hover:after:top-0 hover:after:left-0 hover:after:w-full hover:after:absolute hover:after:h-1 hover:after:bg-theme-active", {
                                        "bg-[rgba(0,86,255,.05)] backdrop-blur-[10px] after:top-0 after:left-0 after:w-full after:absolute after:h-1 after:bg-theme-active": tabActive === item.value
                                     }])}
                                     onClick={() => setTabActive(item.value)}
                                >
                                    <header className={"py-8 flex justify-center"}>
                                        <Typography className={"text-theme-active font-medium"}>
                                            { item.label }
                                        </Typography>
                                    </header>
                                </div>
                            ))
                        }
                    </div>
                    <div className={"absolute left-0 m-auto top-0 bottom-0 h-full flex justify-center items-center pointer-events-none"}>
                        <div className={"w-full p-8 h-auto"}>
                            <div className={"flex flex-col"}>
                                <Typography variant={"h2"} className={"font-medium"}>
                                    { activeChildren?.title }
                                </Typography>
                                <Typography variant={"p"} className={"font-medium max-w-xl mt-2"}>
                                    { activeChildren?.desc1 }
                                </Typography>
                                {
                                    activeChildren?.desc2 && (
                                        <Typography
                                            variant={"p"}
                                            className={"font-medium max-w-xl mt-2"}
                                        >
                                            { activeChildren?.desc2 }
                                        </Typography>
                                    )
                                }

                               <div className={"mt-10"}>
                                   <Button className={"rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                                       { activeChildren?.btnText }
                                   </Button>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className={"absolute right-0 m-auto top-0 bottom-0 h-full flex justify-center items-center pointer-events-none -z-10"}>
                        <img src={activeImageUrl} className={"h-120 mt-20"} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profession;