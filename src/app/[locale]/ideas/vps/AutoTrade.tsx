"use client";
import * as React from 'react'
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const AutoTrade = () => {
    const t = useTranslations("Pages.ideas.vps.autoTrade");
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const leftRef = React.useRef<HTMLDivElement>(null);
    const rightRef = React.useRef<HTMLDivElement>(null);

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
        <section ref={sectionRef} className={"p-30"}>
            <div className={"grid grid-cols-12 gap-8"}>
                <div className={"col-span-6"} >
                    <div className={"flex flex-col"} ref={leftRef}>
                        <Typography
                            variant={"h1"}
                            className={"font-medium"}
                        >
                            { t("title") }
                        </Typography>

                        <Typography
                            variant={"lead"}
                            className={"font-medium mt-10"}
                        >
                            { t("midst") }
                        </Typography>

                        <div className={"mt-10 flex"}>
                            <div className={"w-0.5 h-4 bg-theme-active"}></div>
                            <Typography
                                variant={"small"}
                                className={"font-medium block ml-2"}
                            >
                                { t("desc") }
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className={"col-span-6"}>
                    <div className={"flex-1 flex justify-center"} ref={rightRef}>
                        <Image
                            src={"/images/ideas/vps-globe.png"}
                            width={380}
                            height={320}
                            alt={"globe"}
                            title={"globe"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AutoTrade;