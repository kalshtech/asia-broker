"use client";
import * as React from 'react'
import Container from "@/components/Container";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import GeneralLinkBtn from "@/components/button/GeneralLinkBtn";

gsap.registerPlugin(ScrollTrigger);

const Subscribe = () => {
    const t = useTranslations("Pages.ideas.calendar.subscribe");
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const leftRef = React.useRef<HTMLDivElement>(null);
    const rightRef = React.useRef<HTMLDivElement>(null);

    const ulAry = [
        { text: t("ul.li1") },
        { text: t("ul.li2") },
        { text: t("ul.li3") }
    ]

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

    return (
        <section ref={sectionRef} className={"bg-theme-light-bg"}>
            <Container>
                <div className={"flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8"}>
                    <div className={"col-span-1"} ref={leftRef}>
                        <div className={"flex-1 py-4 lg:py-12"}>
                            <ul>
                                {
                                    ulAry.map((item, index) => (
                                        <li key={index} className={"my-6 flex items-start"}>
                                            <CircleCheck className={"min-w-5 min-h-5 w-5 h-5 mt-1"}/>
                                            <Typography variant={"p"} className={"ml-2"}>
                                                {item.text}
                                            </Typography>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={"flex justify-center lg:justify-start"}>
                            {/*<GeneralLinkBtn*/}
                            {/*    text={t("watch")}*/}
                            {/*    path={"/ideas/professional"}*/}
                            {/*    theme={"active-solid"}*/}
                            {/*/>*/}
                            <GeneralLinkBtn
                                text={t("register")}
                                path={"/ideas/professional"}
                                theme={"active-hollow"}
                            />
                        </div>
                    </div>
                    <div className={"col-span-1 mt-4 lg:mt-0"}>
                        <img src="/images/ideas/calendar-subscribe.png" className={"w-full h-full object-cover"}
                             alt=""/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Subscribe;