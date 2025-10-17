"use client";
import * as React from 'react'
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import gsap from "gsap";
import Container from "@/components/Container";

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const Reasons = () => {
    const t = useTranslations("Pages.platform.reasons");
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const leftRef = React.useRef<HTMLDivElement>(null);
    const rightRef = React.useRef<HTMLDivElement>(null);

    const professionalAry = [
        { title: t("ul.li-title1"), desc: t("ul.li-desc1") },
        { title: t("ul.li-title2"), desc: t("ul.li-desc2") },
        { title: t("ul.li-title3"), desc: t("ul.li-desc3") },
    ];

    const fairnessAry = [
        { title: t("fairnessUl.li-title1"), desc: t("fairnessUl.li-desc1") },
        { title: t("fairnessUl.li-title2"), desc: t("fairnessUl.li-desc2") },
    ];

    const safeAry = [
        { title: t("risk.li-title1"), desc: t("risk.li-desc1") },
        { title: t("risk.li-title2"), desc: t("risk.li-desc2") },
    ];

    React.useEffect(() => {
        // 如果用户偏好减少动效，则直接显示
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
            gsap.set([leftRef.current, rightRef.current], { opacity: 1, x: 0 });
            return;
        }

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",   // 进入视口 25% 时触发
                    once: true,         // 只执行一次
                },
                defaults: { duration: 0.9, ease: "power3.out" },
            });

            tl.from(leftRef.current,  { x: -80, opacity: 0 })
                .from(rightRef.current, { x:  80, opacity: 0 }, "<+=0.1"); // 与左侧几乎同时
        }, sectionRef);

        return () => ctx.revert();
    }, []);
    return  (
        <section ref={sectionRef} className={"py-4 lg:py-30"}>
            <Container>
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Typography
                        variant={"h3"}
                        className={"font-medium text-center"}
                    >
                        {t("title")}
                    </Typography>
                    <Typography
                        variant={"muted"}
                        className={"text-center mx-auto mt-8"}
                    >
                        {t("desc")}
                    </Typography>
                </motion.div>
                <div className={"grid grid-cols-12 gap-4 mt-4 lg:mt-16"}>
                    <div className={"col-span-12 lg:col-span-6"} ref={leftRef}>
                        <div className={""}>
                            <Typography variant={"large"}>
                                {t("professional")}
                            </Typography>
                            <ul className={"mt-6"}>
                                {
                                    professionalAry.map((item, index) => (
                                        <li className={"flex items-start my-4"} key={index}>
                                        <span
                                            className={"mt-2.5 w-[5px] h-[5px] block bg-theme-active rounded-full"}></span>
                                            <div className={"ml-3"}>
                                                <Typography variant={"small"}>
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    className={"mt-2"}
                                                    variant={"muted"}
                                                >
                                                    {item.desc}
                                                </Typography>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className={"mt-10"}>
                            <Typography variant={"large"}>
                                {t("fairness")}
                            </Typography>
                            <ul className={"mt-6"}>
                                {
                                    fairnessAry.map((item, index) => (
                                        <li className={"flex items-start my-4"} key={index}>
                                        <span
                                            className={"mt-2.5 w-[5px] h-[5px] block bg-theme-active rounded-full"}></span>
                                            <div className={"ml-3"}>
                                                <Typography variant={"small"}>
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    className={"mt-2"}
                                                    variant={"muted"}
                                                >
                                                    {item.desc}
                                                </Typography>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className={"mt-10"}>
                            <Typography variant={"large"}>
                                {t("safe")}
                            </Typography>
                            <ul className={"mt-6"}>
                                {
                                    safeAry.map((item, index) => (
                                        <li className={"flex items-start my-4"} key={index}>
                                        <span
                                            className={"mt-2.5 w-[5px] h-[5px] block bg-theme-active rounded-full"}></span>
                                            <div className={"ml-3"}>
                                                <Typography variant={"small"}>
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    className={"mt-2"}
                                                    variant={"muted"}
                                                >
                                                    {item.desc}
                                                </Typography>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"} ref={rightRef}>
                        <div>
                            <img src="/images/platform/reasons-cell.png"
                                 alt="reasons-cell"
                                 title={"reasons-cell"}
                                 className={"w-full h-full object-cover"}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Reasons;