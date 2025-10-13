"use client";
import Image from "next/image";
import { useRouter, usePathname, Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Typography } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { MoveRight, Globe, AlignJustify, X, ChevronRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from "react";

const { locales } = routing;

const PackageMenuItem = (props: any) => {
    const [open, setOpen] = useState(false)
    return props.ary.map((item: any, index: number) => (
        <NavigationMenuItem key={index}>
            <NavigationMenuTrigger
                onClick={(e) => {
                    e.preventDefault()
                    setOpen((prev) => !prev)
                }}
                className={"hover:!bg-transparent data-[state=open]:!bg-transparent hover:!text-theme-active data-[state=open]:!text-theme-active"}
            >
                { item.title }
            </NavigationMenuTrigger>
            {
                open && (
                    <NavigationMenuContent className={"!fixed !w-full !top-[64px] !rounded-none !border-0 !m-0 !shadow-none py-12 px-26"}>
                        <main className={"grid grid-cols-12 gap-4"}>
                            <div className={"col-span-10 grid grid-cols-12 gap-12"}>
                                {
                                    item.children.map((c_d: any, c_i: number) => (
                                        <div className={item.colSpan} key={c_i}>
                                            <div>
                                                <Typography
                                                    variant={"h6"}
                                                    className={"mx-4"}
                                                >
                                                    { c_d.title }
                                                </Typography>
                                                { c_d.desc && (
                                                    <Typography
                                                        variant={"muted"}
                                                        className={"mt-2 mx-4"}
                                                    >
                                                        {c_d.desc}
                                                    </Typography>
                                                ) }
                                                <Separator className={"my-4 mx-4 bg-theme-light-bg"}/>
                                            </div>
                                            <div>
                                                <ul>
                                                    {
                                                        c_d.ul.map((ul_d: any, ul_i: any) => (
                                                            <li key={ul_i} className={"group/menu-active my-2 p-4 hover:rounded-md hover:bg-[#EEF2FF]"}>
                                                                <Link
                                                                    href={ul_d.path}
                                                                    className={"text-theme-active hover:text-theme-active-hover"}
                                                                    onClick={() => setOpen(false)}
                                                                >
                                                                    <div className={"flex items-center"}>
                                                                        <Typography variant={"large"}>
                                                                            {ul_d.label}
                                                                        </Typography>
                                                                        { ul_d.icon && ul_d.icon }
                                                                        <MoveRight className={"ml-auto hidden group-hover/menu-active:block"} />
                                                                    </div>

                                                                    { ul_d.desc && (
                                                                        <Typography variant={"muted"} className={"mt-2"}>
                                                                            {ul_d.desc}
                                                                        </Typography>
                                                                    ) }
                                                                </Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={"col-span-2"}>
                                <div className={"w-full p-4 bg-theme-light-bg rounded-lg"}>
                                    <div className={"relative"}>
                                        <img className={"w-full h-full"} src={item.btnImg} alt=""/>
                                        <Button className={"absolute bottom-4 left-4 m-auto right-4 bg-theme-active hover:bg-theme-active-hover"}>
                                            <Link
                                                href={item.btnPath}
                                                className={"w-full h-full"}
                                            >
                                                { item.btn }
                                            </Link>
                                        </Button>
                                    </div>
                                    <div className={"mt-4"}>
                                        <Typography
                                            variant={"muted"}
                                        >
                                            { item.description }
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </NavigationMenuContent>
                )
            }
        </NavigationMenuItem>
    ))
}

const Navigation = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Navigation");
    const [open, setOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [listOpen, setListOpen] = useState(false);

    const [responsiveList, setResponsiveList] = useState<any>([]);

    const localAry = [
        { value: "en", label: "English", country: t("countries.en") },
        { value: "zh-cn", label: "中文简体", country: t("countries.zh-cn") },
        { value: "zh-tw", label: "中文繁體", country: t("countries.zh-tw") },
        { value: "ja", label: "日本語", country: t("countries.ja") },
        { value: "ko", label: "한국어", country: t("countries.ko") },
        { value: "th", label: "ภาษาไทย", country: t("countries.th") },
        { value: "ms", label: "Melayu", country: t("countries.ms") },
        { value: "id", label: "Indonesian", country: t("countries.id") },
        { value: "vi", label: "Tiếng Việt", country: t("countries.vi") },
    ];

    const ary = [
        {
            children: [
                // 产品
                {
                    title: t("menu.products.title"),
                    description: t("menu.products.description"),
                    btn: t("menu.products.btn"),
                    btnPath: "/",
                    btnImg: "/images/navigation/product.png",
                    colSpan: "col-span-4",
                    children: [
                        {
                            title: t("menu.products.row.col-1.title"),
                            ul: [
                                { label: t("menu.products.row.col-1.ul.li1"), path: "/products/forex" },
                                { label: t("menu.products.row.col-1.ul.li2"), path: "/products/pm" },
                                { label: t("menu.products.row.col-1.ul.li3"), path: "/products/energy" },
                                { label: t("menu.products.row.col-1.ul.li4"), path: "/products/stocks" },
                                { label: t("menu.products.row.col-1.ul.li5"), path: "/products/future" },
                                { label: t("menu.products.row.col-1.ul.li6"), path: "/products/crypto" },
                            ]
                        },
                        {
                            title: t("menu.products.row.col-2.title"),
                            ul: [
                                // { label: t("menu.products.row.col-2.ul.li1"), path: "/" },
                                // { label: t("menu.products.row.col-2.ul.li2"), path: "/" },
                                { label: t("menu.products.row.col-2.ul.li3"), path: "/products/rates" },
                                // { label: t("menu.products.row.col-2.ul.li4"), path: "/" },
                            ]
                        },
                        {
                            title: t("menu.products.row.col-3.title"),
                            ul: [
                                { label: t("menu.products.row.col-3.ul.li1"), path: "/products/transfer" },
                                // { label: t("menu.products.row.col-3.ul.li2"), path: "/" },
                                // { label: t("menu.products.row.col-3.ul.li3"), path: "/" },
                            ]
                        }
                    ]
                },
                // 交易平台
                {
                    title: t("menu.platforms.title"),
                    description: t("menu.platforms.description"),
                    btn: t("menu.platforms.btn"),
                    btnPath: "/",
                    btnImg: "/images/navigation/platform.png",
                    colSpan: "col-span-4",
                    children: [
                        {
                            title: t("menu.platforms.row.col-1.title"),
                            ul: [
                                { label: t("menu.platforms.row.col-1.ul.li1"), path: "/platform" },
                                { label: t("menu.platforms.row.col-1.ul.li2"), path: "/platform" }
                            ]
                        },
                        {
                            title: t("menu.platforms.row.col-2.title"),
                            ul: [
                                { label: t("menu.platforms.row.col-2.ul.li1"), path: "/platform" },
                                { label: t("menu.platforms.row.col-2.ul.li2"), path: "/platform" }
                            ]
                        },
                        {
                            title: t("menu.platforms.row.col-3.title"),
                            ul: [
                                { label: t("menu.platforms.row.col-3.ul.li1"), path: "/platform" }
                            ]
                        }
                    ]
                },
                // 交易账户
                {
                    title: t("menu.account.title"),
                    description: t("menu.account.description"),
                    btn: t("menu.account.btn"),
                    btnPath: "/",
                    btnImg: "/images/navigation/account.png",
                    colSpan: "col-span-4",
                    children: [
                        {
                            title: t("menu.account.row.col-1.title"),
                            ul: [
                                { label: t("menu.account.row.col-1.ul.li1"), desc: t("menu.account.row.col-1.ul.desc1"), path: "/accounts/classic" },
                                { label: t("menu.account.row.col-1.ul.li2"), desc: t("menu.account.row.col-1.ul.desc2"), path: "/accounts/platinum" },
                                { label: t("menu.account.row.col-1.ul.li3"), desc: t("menu.account.row.col-1.ul.desc3"), path: "/accounts/vic" }
                            ]
                        },
                        {
                            title: t("menu.account.row.col-2.title"),
                            ul: [
                                {
                                    label: t("menu.account.row.col-2.ul.li1"),
                                    desc: t("menu.account.row.col-2.ul.desc1"),
                                    icon: (
                                        <img src="/images/navigation/seed.svg" className={"w-4 h-4 ml-2"} alt=""/>
                                    ),
                                    path: "/accounts/profit"
                                }
                            ]
                        },
                        // {
                        //     title: t("menu.account.row.col-3.title"),
                        //     ul: [
                        //         { label: t("menu.account.row.col-3.ul.li1"), desc: t("menu.account.row.col-3.ul.desc1"), path: "/" }
                        //     ]
                        // }
                    ]
                },
                // CFD新手学院
                {
                    title: t("menu.beginner.title"),
                    description: t("menu.beginner.description"),
                    btn: t("menu.beginner.btn"),
                    btnPath: "/",
                    btnImg: "/images/navigation/beginner.png",
                    colSpan: "col-span-4",
                    children: [
                        // {
                        //     title: t("menu.beginner.row.col-1.title"),
                        //     ul: [
                        //         { label: t("menu.beginner.row.col-1.ul.li1"), desc: t("menu.beginner.row.col-1.ul.desc1"), path: "/" },
                        //         { label: t("menu.beginner.row.col-1.ul.li2"), desc: t("menu.beginner.row.col-1.ul.desc2"), path: "/" },
                        //         { label: t("menu.beginner.row.col-1.ul.li3"), desc: t("menu.beginner.row.col-1.ul.desc3"), path: "/" },
                        //         { label: t("menu.beginner.row.col-1.ul.li4"), desc: t("menu.beginner.row.col-1.ul.desc4"), path: "/" },
                        //         { label: t("menu.beginner.row.col-1.ul.li5"), desc: t("menu.beginner.row.col-1.ul.desc5"), path: "/" }
                        //     ]
                        // },
                        // {
                        //     title: t("menu.beginner.row.col-2.title"),
                        //     ul: [
                        //         { label: t("menu.beginner.row.col-2.ul.li1"), desc: t("menu.beginner.row.col-2.ul.desc1"), path: "/" },
                        //         { label: t("menu.beginner.row.col-2.ul.li2"), desc: t("menu.beginner.row.col-2.ul.desc2"), path: "/" },
                        //     ]
                        // },
                        {
                            title: t("menu.beginner.row.col-3.title"),
                            ul: [
                                { label: t("menu.beginner.row.col-3.ul.li1"), desc: t("menu.beginner.row.col-3.ul.desc1"), path: "/academy/learning" },
                                { label: t("menu.beginner.row.col-3.ul.li2"), desc: t("menu.beginner.row.col-3.ul.desc2"), path: "/academy/document" }
                            ]
                        }
                    ]
                },
                // 交易灵感
                {
                    title: t("menu.inspiration.title"),
                    description: t("menu.inspiration.description"),
                    btn: t("menu.inspiration.btn"),
                    btnPath: "/",
                    btnImg: "/images/navigation/inspiration.png",
                    colSpan: "col-span-4",
                    children: [
                        {
                            title: t("menu.inspiration.row.col-1.title"),
                            desc: t("menu.inspiration.row.col-1.desc"),
                            ul: [
                                { label: t("menu.inspiration.row.col-1.ul.li1"), path: "/ideas/calendar" },
                                { label: t("menu.inspiration.row.col-1.ul.li2"), path: "/ideas/calculator" },
                                { label: t("menu.inspiration.row.col-1.ul.li3"), path: "/ideas/vps" },
                                { label: t("menu.inspiration.row.col-1.ul.li4"), path: "/ideas/marketsmap" },
                            ]
                        },
                        {
                            title: t("menu.inspiration.row.col-2.title"),
                            desc: t("menu.inspiration.row.col-2.desc"),
                            ul: [
                                { label: t("menu.inspiration.row.col-2.ul.li1"), path: "/ideas/professional" },
                                // { label: t("menu.inspiration.row.col-2.ul.li2"), desc: t("menu.inspiration.row.col-2.ul.desc2"), path: "/" },
                            ]
                        },
                        // {
                        //     title: t("menu.inspiration.row.col-3.title"),
                        //     desc: t("menu.inspiration.row.col-3.desc"),
                        //     ul: [
                        //         { label: t("menu.inspiration.row.col-3.ul.li1"), path: "/" },
                        //         { label: t("menu.inspiration.row.col-3.ul.li2"), path: "/" },
                        //         { label: t("menu.inspiration.row.col-3.ul.li3"), path: "/" },
                        //         { label: t("menu.inspiration.row.col-3.ul.li4"), path: "/" },
                        //         { label: t("menu.inspiration.row.col-3.ul.li5"), path: "/" }
                        //     ]
                        // }
                    ]
                },
                // 客户支持
                {
                    title: t("menu.support.title"),
                    description: t("menu.support.description"),
                    btn: t("menu.support.btn"),
                    btnPath: "/",
                    btnImg: "/images/navigation/support.png",
                    colSpan: "col-span-6",
                    children: [
                        {
                            title: t("menu.support.row.col-1.title"),
                            ul: [
                                { label: t("menu.support.row.col-1.ul.li1"), path: "/" }
                            ]
                        },
                        {
                            title: t("menu.support.row.col-2.title"),
                            ul: [
                                { label: t("menu.support.row.col-2.ul.li1"), path: "/" },
                            ]
                        }
                    ]
                },
                // 公司
                {
                    title: t("menu.corporation.title"),
                    description: t("menu.corporation.description"),
                    btn: t("menu.corporation.btn"),
                    btnPath: "/",
                    btnImg: "/images/navigation/corporation.png",
                    colSpan: "col-span-12",
                    children: [
                        {
                            title: t("menu.corporation.row.col-1.title"),
                            ul: [
                                { label: t("menu.corporation.row.col-1.ul.li1"), path: "/corporation/about" },
                                { label: t("menu.corporation.row.col-1.ul.li2"), path: "/corporation/careers" },
                                // { label: t("menu.corporation.row.col-1.ul.li3"), path: "/" },
                                { label: t("menu.corporation.row.col-1.ul.li4"), path: "/corporation/contact" },
                                // { label: t("menu.corporation.row.col-1.ul.li5"), path: "/" }
                            ]
                        }
                    ]
                },
                // doublewin
                {
                    title: t("menu.doublewin.title"),
                    description: t("menu.doublewin.description"),
                    btn: t("menu.doublewin.btn"),
                    btnPath: "/",
                    btnImg: "/images/navigation/doublewin.png",
                    colSpan: "col-span-12",
                    children: [
                        {
                            title: t("menu.doublewin.row.col-1.title"),
                            ul: [
                                {
                                    label: t("menu.doublewin.row.col-1.ul.li1"),
                                    desc: t("menu.doublewin.row.col-1.ul.desc1"),
                                    path: "/mutual/trading-competition"
                                },
                                // {
                                //     label: t("menu.doublewin.row.col-1.ul.li2"),
                                //     desc: t("menu.doublewin.row.col-1.ul.desc2"),
                                //     path: "/"
                                // },
                                {
                                    label: t("menu.doublewin.row.col-1.ul.li3"),
                                    desc: t("menu.doublewin.row.col-1.ul.desc3"),
                                    path: "/mutual/funding"
                                },
                                // {
                                //     label: t("menu.doublewin.row.col-1.ul.li4"),
                                //     desc: t("menu.doublewin.row.col-1.ul.desc4"),
                                //     path: "/",
                                //     icon: (
                                //         <img src="/images/navigation/arrow-top-right.svg" className={"w-4 h-4 ml-2"} alt=""/>
                                //     ),
                                // },
                            ]
                        }
                    ]
                }
            ]
        }
    ]

    const RenderNavigationLogo = () => {
        switch (locale) {
            case "ja":
                return "/images/logo/jr/logo.png";
            case "zh-tw":
                return "/images/logo/zh-hant/logo.png";
            case "zh-cn":
                return "/images/logo/zh-hans/logo.png";
            default:
                return "/images/logo/en/logo.png";
        }
    }

    const getLangText = (lang: string = "en") => {
        switch (lang) {
            case "en":
                return "English";
            case "zh-cn":
                return "中文简体"
            case "zh-tw":
                return "中文繁體"
            case "ja":
                return "日本語";
            case "ko":
                return "한국어";
            case "th":
                return "ภาษาไทย"
            case "ms":
                return "Melayu"
            case "id":
                return "Indonesian"
            case "vi":
                return "Tiếng Việt"
            default:
                return "English";
        }
    }

    const handleToggleLang = ({ key }: any) => {
        const params = new URLSearchParams(window.location.search);
        const query: Record<string, string> = {};
        params.forEach((value, key) => query[key] = value);
        router.push({ pathname, query }, { locale: key });
    }

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setDrawerOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <div id={"navigation"} className={"h-[64px] flex z-1000 fixed bg-white w-full px-4 lg:px-8 xl:lg:px-30"}>
            <NavigationMenu viewport={false}>
                <Link href={`/`} className={"cursor-pointer"}>
                    <Image src={RenderNavigationLogo()}
                           alt={"logo"}
                           className={"w-auto h-auto"}
                           width={128}
                           height={40}
                           priority={true}
                    />
                </Link>
                <NavigationMenuList className={"ml-8 hidden lg:flex"}>
                    {
                        ary.map((item, index) => (
                            <PackageMenuItem ary={item.children} key={index}/>
                        ))
                    }
                </NavigationMenuList>
            </NavigationMenu>
            <div className={"ml-auto flex items-center"}>
                <div className={"items-center flex"}>
                    <NavigationMenu viewport={false} className={"hidden lg:flex"}>
                        <NavigationMenuList>
                            <NavigationMenuItem value={"local"}>
                                <NavigationMenuTrigger
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setOpen((prev) => !prev)
                                    }}
                                    className={"flex justify-center items-center hover:!bg-transparent data-[state=open]:!bg-transparent hover:!text-theme-active data-[state=open]:!text-theme-active"}>
                                    <div className={"flex items-center"}>
                                        <Globe/>
                                        <Typography className={"ml-1"}>
                                            {getLangText(locale)}
                                        </Typography>
                                    </div>
                                </NavigationMenuTrigger>
                                {
                                    open && (
                                        <NavigationMenuContent
                                            className={"!fixed !w-full !top-[64px] !rounded-none !border-0 !m-0 !shadow-none py-12 px-30"}>
                                            <div>
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8 cursor-pointer">
                                                    {
                                                        localAry.map((item, index) => (
                                                            <li className="flex items-start gap-4"
                                                                key={index}
                                                                onClick={() => handleToggleLang({key: item.value})}
                                                            >
                                                                <div
                                                                    className="h-[30px] w-[30px] overflow-hidden grid place-items-center">
                                                                    <img src={`/images/countries/${item.value}.png`}
                                                                         alt={item.value} title={item.value}/>
                                                                </div>
                                                                <div className="leading-[18px] flex flex-col">
                                                                    <Typography>
                                                                        {item.label}
                                                                    </Typography>
                                                                    <Typography
                                                                        variant={"muted"}
                                                                        className={"mt-1"}
                                                                    >
                                                                        {item.country}
                                                                    </Typography>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </NavigationMenuContent>
                                    )
                                }
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button
                        className={"mr-4 px-6 ml-4 lg:px-8 rounded-full bg-transparent hover:bg-transparent border border-theme-active text-theme-active cursor-pointer"}>
                        登录
                    </Button>
                    <Button className={"bg-theme-active rounded-full cursor-pointer hover:bg-theme-active-hover"}>
                        开设账户
                    </Button>
                    {
                        !drawerOpen ?
                            <AlignJustify className={"block lg:hidden ml-4"} onClick={() => setDrawerOpen(true)}/>
                            : <X className={"block lg:hidden ml-4"} onClick={() => setDrawerOpen(false)}/>
                    }
                </div>
            </div>

            <div
                aria-hidden
                onClick={() => setDrawerOpen(false)}
                className={[
                    "fixed inset-0 bg-black/50 transition-opacity duration-300",
                    drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none",
                ].join(" ")}
            />


            <aside
                role="dialog"
                aria-modal="true"
                aria-label="drawer"
                className={[
                    "fixed right-0 top-0 z-50 h-full w-full",
                    "bg-white border-l shadow-xl",
                    "transition-transform duration-300 ease-out will-change-transform",
                    drawerOpen ? "translate-x-0" : "translate-x-full",
                ].join(" ")}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <div className={"flex"} onClick={() => setLangOpen(true)}>
                        <Globe/>
                        <h2 className="text-base font-semibold ml-2">
                            {getLangText(locale)}
                        </h2>
                    </div>
                    <button
                        onClick={() => setDrawerOpen(false)}
                        className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
                        aria-label="close"
                    >
                        <X/>
                    </button>

                </div>

                <div className="p-4 space-y-3 text-sm">
                    <ul>
                        {ary[0].children.map((item, index) => (
                            <li key={index} className={"border-b py-4 flex text-theme-active"} onClick={() => {
                                setResponsiveList(item.children);
                                setListOpen(true);
                            }}>
                                <Typography variant={"muted"} className={"!text-theme-active"}>{item.title}</Typography>
                                <ChevronRight className={"ml-auto"}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/* 语言Drawer */}
            <aside
                role="dialog"
                aria-modal="true"
                aria-label="drawer"
                className={[
                    "fixed right-0 top-0 z-50 h-full w-full",
                    "bg-white border-l shadow-xl",
                    "transition-transform duration-300 ease-out will-change-transform",
                    langOpen ? "translate-x-0" : "translate-x-full",
                ].join(" ")}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <div className={"flex items-center"}>
                        <Globe/>
                        <h2 className="text-base font-semibold ml-2">
                            {getLangText(locale)}
                            <span>(当前语言)</span>
                        </h2>
                    </div>
                    <button
                        onClick={() => setLangOpen(false)}
                        className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
                        aria-label="close"
                    >
                        <X/>
                    </button>

                </div>

                <div className="p-4 space-y-3 text-sm">
                    <ul>
                        {localAry.filter(d => d.value !== locale).map((item, index) => (
                            <li key={index}
                                className={"border-b py-4 flex items-center"}
                                onClick={() => handleToggleLang({key: item.value})}
                            >
                                <img
                                    src={`/images/countries/${item.value}.png`}
                                    className={"w-[30px] h-[30px]"}
                                    alt={item.value}
                                    title={item.value}
                                />
                                <Typography variant={"muted"} className={"ml-2"}>{item.label}</Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/*列表*/}
            <aside
                role="dialog"
                aria-modal="true"
                aria-label="drawer"
                className={[
                    "fixed right-0 top-0 z-50 h-full w-full",
                    "bg-white border-l shadow-xl",
                    "transition-transform duration-300 ease-out will-change-transform",
                    listOpen ? "translate-x-0" : "translate-x-full",
                ].join(" ")}
            >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <div className={"flex items-center"} onClick={() => setListOpen(false)}>
                        <ArrowLeft/>
                        <h2 className="text-base ml-2">
                            Back
                        </h2>
                    </div>
                    <button
                        onClick={() => setListOpen(false)}
                        className="rounded-md p-2 text-slate-600 hover:bg-slate-100"
                        aria-label="close"
                    >
                        <X/>
                    </button>

                </div>

                <div className="p-4 space-y-3 text-sm">
                    <div>
                        {
                            responsiveList.map((item: any, index: number) => (
                                <div key={index} className={"my-4"}>
                                    <Typography
                                        variant={"muted"}
                                        className={"text-[#4b5563] border-b pb-4"}
                                    >
                                        { item.title }
                                    </Typography>
                                    <div>
                                        <ul className={"mt-3"}>
                                            {
                                                item.ul.map((uItem:any, uIndex: number) => (
                                                    <li key={uIndex} className={"py-3"}>
                                                        <Link
                                                            href={uItem.path}
                                                            className={"text-theme-active"}
                                                        >
                                                            { uItem.label }
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </aside>
        </div>
    )
}


export default Navigation;