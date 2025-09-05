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
import { MoveRight, Globe } from 'lucide-react';

const { locales } = routing;

const PackageMenuItem = (props: any) => {
    return props.ary.map((item: any, index: number) => (
        <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className={"hover:!bg-transparent data-[state=open]:!bg-transparent hover:!text-theme-active data-[state=open]:!text-theme-active"}>
                { item.title }
            </NavigationMenuTrigger>
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
        </NavigationMenuItem>
    ))
}

const Navigation = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations("Navigation");


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
                                { label: t("menu.products.row.col-1.ul.li3"), path: "/" },
                                { label: t("menu.products.row.col-1.ul.li4"), path: "/" },
                                { label: t("menu.products.row.col-1.ul.li5"), path: "/" },
                                { label: t("menu.products.row.col-1.ul.li6"), path: "/products/crypto" },
                            ]
                        },
                        {
                            title: t("menu.products.row.col-2.title"),
                            ul: [
                                { label: t("menu.products.row.col-2.ul.li1"), path: "/" },
                                { label: t("menu.products.row.col-2.ul.li2"), path: "/" },
                                { label: t("menu.products.row.col-2.ul.li3"), path: "/" },
                                { label: t("menu.products.row.col-2.ul.li4"), path: "/" },
                            ]
                        },
                        {
                            title: t("menu.products.row.col-3.title"),
                            ul: [
                                { label: t("menu.products.row.col-3.ul.li1"), path: "/" },
                                { label: t("menu.products.row.col-3.ul.li2"), path: "/" },
                                { label: t("menu.products.row.col-3.ul.li3"), path: "/" },
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
                                { label: t("menu.platforms.row.col-1.ul.li1"), path: "/" },
                                { label: t("menu.platforms.row.col-1.ul.li2"), path: "/" }
                            ]
                        },
                        {
                            title: t("menu.platforms.row.col-2.title"),
                            ul: [
                                { label: t("menu.platforms.row.col-2.ul.li1"), path: "/" },
                                { label: t("menu.platforms.row.col-2.ul.li2"), path: "/" }
                            ]
                        },
                        {
                            title: t("menu.platforms.row.col-3.title"),
                            ul: [
                                { label: t("menu.platforms.row.col-3.ul.li1"), path: "/" }
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
                                { label: t("menu.account.row.col-1.ul.li1"), desc: t("menu.account.row.col-1.ul.desc1"), path: "/" },
                                { label: t("menu.account.row.col-1.ul.li2"), desc: t("menu.account.row.col-1.ul.desc2"), path: "/" },
                                { label: t("menu.account.row.col-1.ul.li3"), desc: t("menu.account.row.col-1.ul.desc3"), path: "/" }
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
                                    path: "/"
                                }
                            ]
                        },
                        {
                            title: t("menu.account.row.col-3.title"),
                            ul: [
                                { label: t("menu.account.row.col-3.ul.li1"), desc: t("menu.account.row.col-3.ul.desc1"), path: "/" }
                            ]
                        }
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
                        {
                            title: t("menu.beginner.row.col-1.title"),
                            ul: [
                                { label: t("menu.beginner.row.col-1.ul.li1"), desc: t("menu.beginner.row.col-1.ul.desc1"), path: "/" },
                                { label: t("menu.beginner.row.col-1.ul.li2"), desc: t("menu.beginner.row.col-1.ul.desc2"), path: "/" },
                                { label: t("menu.beginner.row.col-1.ul.li3"), desc: t("menu.beginner.row.col-1.ul.desc3"), path: "/" },
                                { label: t("menu.beginner.row.col-1.ul.li4"), desc: t("menu.beginner.row.col-1.ul.desc4"), path: "/" },
                                { label: t("menu.beginner.row.col-1.ul.li5"), desc: t("menu.beginner.row.col-1.ul.desc5"), path: "/" }
                            ]
                        },
                        {
                            title: t("menu.beginner.row.col-2.title"),
                            ul: [
                                { label: t("menu.beginner.row.col-2.ul.li1"), desc: t("menu.beginner.row.col-2.ul.desc1"), path: "/" },
                                { label: t("menu.beginner.row.col-2.ul.li2"), desc: t("menu.beginner.row.col-2.ul.desc2"), path: "/" },
                            ]
                        },
                        {
                            title: t("menu.beginner.row.col-3.title"),
                            ul: [
                                { label: t("menu.beginner.row.col-3.ul.li1"), desc: t("menu.beginner.row.col-3.ul.desc1"), path: "/" }
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
                                { label: t("menu.inspiration.row.col-1.ul.li1"), path: "/" },
                                { label: t("menu.inspiration.row.col-1.ul.li2"), path: "/" },
                                { label: t("menu.inspiration.row.col-1.ul.li3"), path: "/" },
                                { label: t("menu.inspiration.row.col-1.ul.li4"), path: "/" },
                            ]
                        },
                        {
                            title: t("menu.inspiration.row.col-2.title"),
                            desc: t("menu.inspiration.row.col-2.desc"),
                            ul: [
                                { label: t("menu.inspiration.row.col-2.ul.li1"), path: "/" },
                                { label: t("menu.inspiration.row.col-2.ul.li2"), desc: t("menu.inspiration.row.col-2.ul.desc2"), path: "/" },
                            ]
                        },
                        {
                            title: t("menu.inspiration.row.col-3.title"),
                            desc: t("menu.inspiration.row.col-3.desc"),
                            ul: [
                                { label: t("menu.inspiration.row.col-3.ul.li1"), path: "/" },
                                { label: t("menu.inspiration.row.col-3.ul.li2"), path: "/" },
                                { label: t("menu.inspiration.row.col-3.ul.li3"), path: "/" },
                                { label: t("menu.inspiration.row.col-3.ul.li4"), path: "/" },
                                { label: t("menu.inspiration.row.col-3.ul.li5"), path: "/" }
                            ]
                        }
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
                                { label: t("menu.corporation.row.col-1.ul.li1"), path: "/" },
                                { label: t("menu.corporation.row.col-1.ul.li2"), path: "/" },
                                { label: t("menu.corporation.row.col-1.ul.li3"), path: "/" },
                                { label: t("menu.corporation.row.col-1.ul.li4"), path: "/" },
                                { label: t("menu.corporation.row.col-1.ul.li5"), path: "/" }
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
                                    path: "/"
                                },
                                { label: t("menu.doublewin.row.col-1.ul.li2"), desc: t("menu.doublewin.row.col-1.ul.desc2"), path: "/" },
                                { label: t("menu.doublewin.row.col-1.ul.li3"), desc: t("menu.doublewin.row.col-1.ul.desc3"), path: "/" },
                                {
                                    label: t("menu.doublewin.row.col-1.ul.li4"),
                                    desc: t("menu.doublewin.row.col-1.ul.desc4"),
                                    path: "/",
                                    icon: (
                                        <img src="/images/navigation/arrow-top-right.svg" className={"w-4 h-4 ml-2"} alt=""/>
                                    ),
                                },
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
                            <PackageMenuItem ary={item.children} key={index} />
                        ))
                    }
                </NavigationMenuList>
            </NavigationMenu>
            <div className={"ml-auto flex items-center"}>
                <div className={"flex items-center"}>
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={"flex justify-center items-center hover:!bg-transparent data-[state=open]:!bg-transparent hover:!text-theme-active data-[state=open]:!text-theme-active"}>
                                    <div className={"flex items-center"}>
                                        <Globe/>
                                        <Typography className={"ml-1"}>
                                            { getLangText(locale) }
                                        </Typography>
                                    </div>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className={"!fixed !w-full !top-[64px] !rounded-none !border-0 !m-0 !shadow-none py-12 px-30"}>
                                    <div>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8 cursor-pointer">
                                            {
                                                localAry.map((item, index) => (
                                                    <li className="flex items-start gap-4"
                                                        key={index}
                                                        onClick={() => handleToggleLang({ key: item.value })}
                                                    >
                                                        <div className="h-[30px] w-[30px] overflow-hidden grid place-items-center">
                                                            <img src={`/images/countries/${item.value}.png`} alt={item.value} title={item.value}/>
                                                        </div>
                                                        <div className="leading-[18px] flex flex-col">
                                                            <Typography>
                                                                { item.label }
                                                            </Typography>
                                                            <Typography
                                                                variant={"muted"}
                                                                className={"mt-1"}
                                                            >
                                                                { item.country }
                                                            </Typography>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button
                        className={"mr-4 px-6 lg:px-8 rounded-full bg-transparent hover:bg-transparent border border-theme-active text-theme-active cursor-pointer"}>
                        登录
                    </Button>
                    <Button className={"bg-theme-active rounded-full cursor-pointer hover:bg-theme-active-hover"}>
                        开设账户
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default Navigation;