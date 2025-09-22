"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEventListener } from "usehooks-ts";
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Swiper, SwiperSlide } from 'swiper/react';
import BaseArticle from "@/components/article/Base";
import * as React from "react";
import {Navigation} from "swiper/modules";
import {CircleChevronLeft, CircleChevronRight} from "lucide-react";

type Props = {
    sections: Array<{ id: string; title: string; content: any }>;
    breadcrumb: {
        path: string;
        firstName: string;
        secondName: string;
    };
    title: string;
    time: string;
    tags: Array<{ text: string }>;
    articlesAry: Array<{ imageUrl: string; title: string; disc: string; time: string }>
    desc?: string
}

export default function ArticleDetails(props: Props) {
    const { sections, breadcrumb, title, time, tags, articlesAry, desc } = props;
    const t = useTranslations("Articles");
    const sectionsAry: Array<{ id: string; title: string; content: any }>= useMemo(() => sections, []);
    const [activeId, setActiveId] = useState<string>(sections[0]?.id);
    const headingRefs = useRef<Record<string, HTMLElement | null>>({});
    const scrollLock = useRef(false);
    const scrollTimeout = useRef<number | null>(null);

    const shareAry = [
        { imgUrl: "/images/articles/twitter.png", path: "/" },
        { imgUrl: "/images/articles/ins.png", path: "/" },
        { imgUrl: "/images/articles/facebook.png", path: "/" }
    ];

    // 初始化 refs
    useEffect(() => {
        sectionsAry.forEach((s) => {
            headingRefs.current[s.id] = document.getElementById(s.id);
        });
    }, [sectionsAry]);

    // ScrollSpy（IO）
    useEffect(() => {
        const nodes = sectionsAry.map((s) => headingRefs.current[s.id]).filter(Boolean) as HTMLElement[];
        if (!nodes.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (scrollLock.current) return; // 点击滚动锁定期：忽略 IO 更新
                const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) setActiveId(visible[0].target.id);
            },
            { root: null, threshold: [0.6, 0.25], rootMargin: "-10% 0px -60% 0px" }
        );

        nodes.forEach((n) => observer.observe(n));
        return () => observer.disconnect();
    }, [sections]);

    // 更精准：监听 scrollend（支持的浏览器）以解锁
    useEventListener?.("scrollend", () => {
        if (scrollLock.current) scrollLock.current = false;
    });

    // 点击目录 -> 平滑滚动
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        scrollLock.current = true;
        if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);

        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveId(id);
        history.replaceState(null, "", `#${id}`);

        // 回退：如浏览器不支持 scrollend，则用超时兜底
        scrollTimeout.current = window.setTimeout(() => {
            scrollLock.current = false;
        }, 800);
    };

    return (
        <div className="mx-auto p-30">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[388px_minmax(0,1fr)]">
                <aside className="sticky top-34 self-start">
                    <div className={""}>
                        <img src="/images/logo/en/dark.png" className={"h-[30px] object-cover"} alt=""/>
                        <div className={"mt-8"}>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href={breadcrumb.path}>
                                            { breadcrumb.firstName }
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage>
                                            { breadcrumb.secondName }
                                        </BreadcrumbPage>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div className={"bg-background mt-20"}>
                        <div className="font-medium">
                            {t("content")}
                        </div>
                        <ScrollArea className="h-[60vh] mt-6">
                            <nav className="py-2">
                                {sectionsAry.map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => scrollTo(s.id)}
                                        className={cn(
                                            "w-full text-left px-4 py-2 transition-all text-[#666] border-l-2 cursor-pointer",
                                            activeId === s.id ? "border-primary text-foreground font-medium" : ""
                                        )}
                                        aria-current={activeId === s.id ? "true" : undefined}
                                    >
                                        {s.title}
                                    </button>
                                ))}
                            </nav>
                        </ScrollArea>
                    </div>
                </aside>

                <article className="prose prose-zinc max-w-none dark:prose-invert">
                    <header className="mb-6">
                        <Typography
                            variant={"h1"}
                            className={"font-medium"}
                        >
                            {title}
                        </Typography>

                        {
                            desc && (
                                <Typography
                                    variant={"large"}
                                    className={"font-normal mt-8"}
                                >
                                    {desc}
                                </Typography>
                            )
                        }

                        <div className={"flex mt-4"}>
                            {
                                tags.map((item, i) => (
                                    <div
                                        className={"py-2 px-4 text-xs text-[#666] cursor-pointer bg-theme-light-bg rounded-full ml-4 first:ml-0"}
                                        key={i}>
                                        {item.text}
                                    </div>
                                ))
                            }
                        </div>
                        <Typography
                            variant={"muted"}
                            className={"mt-4 !text-[#666666]"}
                        >
                            {time}
                        </Typography>
                    </header>
                    {sectionsAry.map((s) => (
                        <section key={s.id} aria-labelledby={`${s.id}-title`} className={"my-8"}>
                            <h2 id={s.id} className="scroll-mt-24 text-xl font-semibold tracking-tight">{s.title}</h2>
                            <div className="mt-3 text-base leading-7">{s.content}</div>
                        </section>
                    ))}
                    <div>
                        <Separator/>
                        <Typography
                            variant={"muted"}
                            className={"mt-4 !text-[#666666]"}
                        >
                            {t("disclaimer")}
                        </Typography>
                        <Typography
                            variant={"muted"}
                            className={"mt-4 !text-[#666666]"}
                        >
                            {t("prompt")}
                        </Typography>
                        <Typography
                            variant={"muted"}
                            className={"mt-4 !text-[#666666]"}
                        >
                            {t("share")}
                        </Typography>
                        <div className={"flex mt-6"}>
                            {
                                shareAry.map((item, index) => (
                                    <Link key={index} href={item.path} className={"ml-4 first:ml-0"}>
                                        <img src={item.imgUrl} className={"w-10 h-10"} alt="" />
                                    </Link>
                                ))
                            }
                        </div>
                        <Separator className={"my-8"} />
                    </div>
                </article>
            </div>
            <div className={"mt-16"}>
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center"}
                >
                    {t("relation")}
                </Typography>
                <div className={"mt-16"}>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={36}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".article-details-custom-prev",
                            nextEl: ".article-details-custom-next",
                        }}
                        className="mySwiper w-full"
                    >
                        {
                            articlesAry.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <BaseArticle {...item} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className={"mt-4"}>
                    <div className={"flex justify-end"}>
                        <CircleChevronLeft className={"article-details-custom-prev mr-2 cursor-pointer"}/>
                        <CircleChevronRight className={"article-details-custom-next ml-2 cursor-pointer"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
