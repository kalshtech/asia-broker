"use client";
import * as React from 'react'
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import gsap from "gsap";
import Container from "@/components/Container";

const LocalServer = () => {
    const t = useTranslations("Pages.ideas.vps.localServers");
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
        <section ref={sectionRef} className={"bg-theme-deep-bg py-4 lg:py-30"}>
            <Container>
                <div className={"grid grid-cols-12 gap-4 lg:gap-8"}>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div ref={leftRef}
                             className={"flex flex-1 justify-center"}
                        >
                            <Image
                                src={"/images/ideas/vps-servers.png"}
                                width={320}
                                height={380}
                                alt={"servers"}
                                title={"servers"}
                            />
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div className={"flex flex-col"} ref={rightRef}>
                            <Typography
                                variant={"h3"}
                                className={"font-medium !text-white"}
                            >
                                {t("title")}
                            </Typography>

                            <Typography variant={"lead"} className={"font-medium mt-10 !text-white"}>
                                {t("midst")}
                            </Typography>

                            <div className={"mt-10 flex"}>
                                <div className={"w-0.5 h-4 bg-theme-active"}></div>
                                <Typography
                                    variant={"small"}
                                    className={"font-medium ml-2 !text-white"}
                                >
                                    {t("desc")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default LocalServer;