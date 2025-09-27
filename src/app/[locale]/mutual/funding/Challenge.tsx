"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import classnames from "classnames";
import Star from "lucide-react";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

type TabItemProps = {
  title: string;
  ary: Array<{label: string; value: string; showStar?: boolean}>;
};

const TabItemWrap = (props: TabItemProps) => {
    const { title, ary } = props;
    const [ tabActive, setTabActive ] = React.useState(ary[0].value);
    return (
        <div className={"my-4"}>
            <div>
                <Typography
                    variant={"small"}
                    className={"!text-white"}
                >
                    { title }
                </Typography>
            </div>
            <div className={"mt-4 space-x-4 space-y-4"}>
                {
                    ary.map((item, index) => (
                        <Button
                            key={index}
                            className={classnames(["bg-[#24325D] hover:bg-[#24325D] relative h-10 px-8", {
                                "bg-gradient-to-l from-[#1F8BFF] to-[#1F3A93]": tabActive === item.value,
                                "top-1": item.showStar
                            }])}
                            onClick={() => setTabActive(item.value)}
                        >
                            <div className={classnames(["flex items-center"])}>
                                {
                                    item.showStar && (
                                        <img
                                            src="/images/mutual/funding-challenge-star.png"
                                            className={"w-5 h-5  object-cover"}
                                            alt=""
                                        />
                                    )
                                }
                                <span>{item.label}</span>
                            </div>
                        </Button>
                    ))
                }
            </div>
        </div>
    )
}

export default function Challenge() {
    const t = useTranslations("Pages.mutual.funding.challenge");
    const rowRightColBrief = [
        { left: "Platform", right: "Asia Future Trading MT5" },
        { left: "Market", right: "Forex" },
        { left: "Balance", right: "$100,000" },
        { left: "Max Drawdown", right: "4%" },
        { left: "Payout Share", right: "80%" }
    ];

    const challenges = [
        {
            title: "1.Choose Your Market",
            list:  [
                { label: "Forex", value: "forex" },
                { label: "Futures", value: "futures" },
                { label: "Crypto", value: "crypto" }
            ]
        },
        {
            title: "2.Select Your Balance",
            list:  [
                { label: "$5,000", value: "5000" },
                { label: "$10,000", value: "10000" },
                { label: "$25,000", value: "25000" },
                { label: "$50,000", value: "50000" },
                { label: "$100,000", value: "100000", showStar: true },
                { label: "$200,000", value: "200000" },
                { label: "$400,000", value: "400000" },
                { label: "$500,000", value: "500000" },
            ]
        },
        {
            title: "3.Select Your Percentage",
            list:  [
                { label: "4%", value: "0.04", showStar: true },
                { label: "6%", value: "0.06" },
                { label: "8%", value: "0.08" },
                { label: "10%", value: "0.1" },
                { label: "14%", value: "0.14" }
            ]
        },
        {
            title: "4.Select Your Payout Share",
            list:  [
                { label: "80%", value: "0.8", showStar: true },
                { label: "90%", value: "0.9" },
                { label: "100%", value: "1" }
            ]
        }
    ];

    return (
        <section className={"px-4 lg:px-30 pt-8 pb-8 lg:pt-0 lg:pb-30 bg-[#000515]"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center !text-white"}
                >
                    {t("title")}
                </Typography>
                <Typography
                    variant={"muted"}
                    className={"font-medium text-center mx-auto mt-4 !text-white"}
                >
                    {t("desc")}
                </Typography>
            </motion.div>
            <div className={"mt-16"}>
                <div className={"grid grid-cols-12"}>
                    <div className={"col-span-12 lg:col-span-8"}>
                        <div className={"bg-gradient-to-l from-[#1F3A93] to-[#09122D] py-12 px-8 lg:rounded-l-3xl h-full lg:border border-[#4F5670] border-r-0"}>
                            <div className={""}>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col1.title")}
                                </Typography>
                            </div>
                            <div className={"mt-6"}>
                                {
                                    challenges.map((item, index) => (
                                        <TabItemWrap
                                            title={item.title}
                                            key={index}
                                            ary={item.list}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-4"}>
                        <div
                            className={"bg-[#0E1941] py-12 px-8 lg:rounded-r-3xl h-full lg:border border-[#4F5670] border-l-0"}>
                            <div className={""}>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium !text-white"}
                                >
                                    {t("row.col2.title")}
                                </Typography>
                            </div>
                            <div className={"mt-6"}>
                                {
                                    rowRightColBrief.map((item, index) => (
                                        <div key={index} className={"flex items-center my-4"}>
                                            <span className={"text-[#8A90A4] text-sm"}>
                                                { item.left }
                                            </span>
                                            <Separator className={"!w-30 mx-2"} />
                                            <span className={"text-white text-sm"}>
                                                { item.right }
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={"mt-16"}>
                                <Typography
                                    variant={"h4"}
                                    className={"font-medium text-center !text-white"}
                                >
                                    Price
                                </Typography>
                                <Typography
                                    variant={"h1"}
                                    className={"font-bold text-center mt-4 !text-[#1F8BFF]"}
                                >
                                    $198
                                </Typography>
                                <div className={"mt-10 flex justify-center"}>
                                    <Button className={"px-8 h-10 rounded-full bg-white text-black hover:bg-white"}>
                                        { t("row.col2.buy") }
                                    </Button>
                                    <Button className={"px-8 h-10 ml-4 rounded-full border bg-transparent text-white hover:bg-transparent"}>
                                        { t("row.col2.more") }
                                    </Button>
                                </div>
                            </div>
                            <div className={"mt-16"}>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium !text-white"}
                                >
                                    { t("row.col2.desc1") }
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"font-medium !text-white mt-6"}
                                >
                                    { t("row.col2.desc2") }
                                </Typography>

                                <Typography
                                    variant={"large"}
                                    className={"font-medium !text-white mt-6"}
                                >
                                    { t("row.col2.desc3") }
                                </Typography>

                                <Typography
                                    variant={"muted"}
                                    className={"font-medium !text-[#999] mt-6"}
                                >
                                    { t("row.col2.desc4") }
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}