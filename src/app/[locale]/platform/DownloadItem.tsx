"use client";
import * as React from 'react'
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classnames from "classnames";
gsap.registerPlugin(ScrollTrigger);
import Container from "@/components/Container";

type Props = {
    direction: string;
    title: string;
    desc: string;
    downloadText: string;
    imageUrl: string;
}

const DownloadItem = (props: Props) => {
    const { direction = "left", title, desc, downloadText, imageUrl } = props;
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const leftRef = React.useRef<HTMLDivElement>(null);
    const rightRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        // 如果是移动端，就直接返回，不执行动画
        if (isMobile) return;

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

        return () => {
            ctx.revert()
        };
    }, []);


    return (
        <section className={classnames(["py-16 xl:py-30", {
            "bg-theme-light-bg": direction === "right"
        }])} ref={sectionRef}>
            <Container>
                <div className={'grid grid-cols-12 gap-8'}>
                    <div className={classnames(["col-span-12 lg:col-span-6", {
                        "order-1": direction === "left",
                        "order-2": direction === "right",
                    }])} ref={leftRef}>
                        <Typography
                            variant={"h3"}
                            className={"mt-16 lg:mt-0"}
                        >
                            {title}
                        </Typography>
                        <Typography variant={"p"} className={"mt-10"}>
                            {desc}
                        </Typography>
                        <div className={"mt-10"}>
                            <Button className={"bg-theme-active hover:bg-theme-active-hover"}>
                                {downloadText}
                            </Button>
                        </div>
                    </div>
                    <div className={classnames(["col-span-12 lg:col-span-6", {
                        "order-2": direction === "left",
                        "order-1": direction === "right",
                    }])} ref={rightRef}>
                        <img
                            src={imageUrl}
                            className={"w-full h-full object-cover mx-auto"}
                            alt="exhibition"
                            title={"exhibition"}
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default DownloadItem;