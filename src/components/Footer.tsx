"use client";
import React from "react";
import Image from "next/image";
import classNames from "classnames";
import {
    Phone,
    Mail
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { useLocale, useTranslations } from "next-intl";
import Container from "@/components/Container";
import { Plus, Minus } from 'lucide-react';
import classnames from "classnames";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import {
    Globe,
    ChevronDown
} from 'lucide-react';
import { languageText } from "@/utils/common";
import {navigationMap} from "@/components/Navigation";
import { Link } from "@/i18n/navigation"
import NavigationAccordion from "./MobileNavigation";

const LS_KEY = 'aft-footer-expanded';

type Props = {
    className?: string;
    onWakeUp?: (switchLang: boolean) => void;
}

const Footer = (props: Props) => {
    const t = useTranslations('Footer');
    const [open, setOpen] = React.useState(true);
    const locale = useLocale();
    const { className, onWakeUp } = props;

    const navigationAry = navigationMap();
    
    const RenderTransparentLogo = () => {
        switch (locale) {
            case "ja":
                return "/images/logo/jr/transparent.png";
            case "zh-tw":
                return "/images/logo/zh-hant/transparent.png";
            case "zh-cn":
                return "/images/logo/zh-hans/transparent.png";
            default:
                return "/images/logo/en/transparent.png";
        }
    }

    const handleOnWakeUp = () => {
        if(onWakeUp) {
            onWakeUp(true)
        }
    }

    React.useEffect(() => {
        const saved = window.localStorage.getItem(LS_KEY);
        if (saved !== null) setOpen(saved === '1');
    }, []);

    React.useEffect(() => {
        window.localStorage.setItem(LS_KEY, open ? '1' : '0');
    }, [open]);

    return (
        <footer>
            <Collapsible open={open} onOpenChange={setOpen} className="relative">
                <div className="relative">
                    <div className="pointer-events-none absolute inset-x-0 -bottom-4 z-20 flex justify-center">
                        <CollapsibleTrigger asChild>
                            <Button
                                size="icon"
                                variant="secondary"
                                className="pointer-events-auto h-7 w-7 rounded-full bg-theme-active text-white hover:bg-theme-active"
                                aria-label={open ? 'open' : 'close'}
                            >
                                {open ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent
                        className={classnames('overflow-hidden bg-[#DBDDE6] data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down')}
                    >
                        <Container className={"p-4"}>
                            <Typography variant={"muted"}>
                                { t("prompt") }
                            </Typography>
                        </Container>
                    </CollapsibleContent>
                </div>
            </Collapsible>
            <div className={classNames(["bg-theme-deep-bg pt-10", className])}>
                <Container>
                    <div className={"grid grid-cols-12 gap-4 lg:gap-8 space-y-4 lg:space-y-0"}>
                        <div className={"col-span-12 lg:col-span-3"}>
                            <div>
                                {/*<Image src={RenderTransparentLogo()} width={208} height={58} alt={"logo"}/>*/}
                                <Image src={"/images/logo/footer-logo.png"} width={140} height={42} alt={"logo"}/>
                            </div>
                            <div className={"mt-8 lg:hidden"}>
                                <div>
                                    <Typography variant={"muted"} className={"!text-[#999]"}>
                                        { t("select-region") }
                                    </Typography>
                                </div>
                                <div className={"mt-4 flex items-center !text-white cursor-pointer"} onClick={() => handleOnWakeUp()}>
                                    <Globe className={"w-5 h-5"}/>
                                    <Typography variant={"muted"} className={"!text-white mx-2"}>
                                        { languageText(locale) }
                                    </Typography>
                                    <ChevronDown className={"w-5 h-5"}/>
                                </div>

                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-3"}>
                            <Typography variant={"muted"} className={"!text-white font-bold"}>
                                {t("contact.title")}
                            </Typography>
                            <div className={"!mt-6"}>
                                <div className={"flex flex-col"}>
                                    <div className={"flex items-center"}>
                                        <Phone size={"20"} className={"!text-[#999] !text-base"}/>
                                        <a className={"!ml-2 !text-[#999] text-sm"}
                                           href={"tel:+61 042 047 1933"}
                                        >
                                            (AU) +61 042 047 1933
                                        </a>
                                    </div>
                                    <Typography className={"!text-[#999] !text-xs !ml-6 !mt-1"}>
                                        {t("contact.phone")}
                                    </Typography>
                                </div>

                                <div className={"flex flex-col mt-6"}>
                                    <div className={"flex items-center"}>
                                        <Mail size={"20"} className={"!text-[#999]"}/>
                                        <a className={"!ml-2 !text-[#999] text-sm hover:!text-active"}
                                           href={"mailto:global@afttmarkets.com"}
                                        >
                                            global@afttmarkets.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-3"}>
                            <Typography variant={"muted"} className={"!text-white font-bold"}>
                                {t("login.title")}
                            </Typography>
                            <div className={"flex flex-col !mt-6"}>
                                <a className={"!text-[#999] text-sm"}
                                   href={"https://client.afttmarkets.com"}
                                   target={"_blank"}
                                >
                                    {t("login.mt5")}
                                </a>
                                <a className={"!text-[#999] text-sm !mt-6"}
                                   href={"https://client.afttmarkets.com/register"}
                                   target={"_blank"}
                                >
                                    {t("login.partner")}
                                </a>
                            </div>
                        </div>
                        <div className={"col-span-12 lg:col-span-3"}>
                            <Typography variant={"muted"} className={"!text-white font-bold"}>
                                {t("join-us.title")}
                            </Typography>
                            <div className={"flex flex-col !mt-6"}>
                                <a href={"https://client.afttmarkets.com/register"}
                                   target={"_blank"}
                                   className={"flex items-center"}
                                >
                                    <img src="/images/footer/facebook.webp" className={"w-5 h-5 object-cover"} alt=""/>
                                    <Typography variant={"muted"} className={"!text-[#999] ml-3"}>
                                        Facebook
                                    </Typography>
                                </a>
                                <a href={"https://client.afttmarkets.com/register"}
                                   target={"_blank"}
                                   className={"flex items-center mt-5"}
                                >
                                    <img src="/images/footer/instagram.webp" className={"w-5 h-5 object-cover"} alt=""/>
                                    <Typography variant={"muted"} className={"!text-[#999] ml-3"}>
                                        Instagram
                                    </Typography>
                                </a>
                                <a href={"https://client.afttmarkets.com/register"}
                                   target={"_blank"}
                                   className={"flex items-center mt-5"}
                                >
                                    <img src="/images/footer/linkedln.webp" className={"w-5 h-5 object-cover"} alt=""/>
                                    <Typography variant={"muted"} className={"!text-[#999] ml-3"}>
                                        Linkedln
                                    </Typography>
                                </a>
                                <a href={"https://client.afttmarkets.com/register"}
                                   target={"_blank"}
                                   className={"flex items-center mt-5"}
                                >
                                    <img src="/images/footer/reddit.webp" className={"w-5 h-5 object-cover"} alt=""/>
                                    <Typography variant={"muted"} className={"!text-[#999] ml-3"}>
                                        Reddit
                                    </Typography>
                                </a>
                                <a href={"https://client.afttmarkets.com/register"}
                                   target={"_blank"}
                                   className={"flex items-center mt-5"}
                                >
                                    <img src="/images/footer/x.webp" className={"w-5 h-5 object-cover"} alt=""/>
                                    <Typography variant={"muted"} className={"!text-[#999] ml-3"}>
                                        X(Twitter)
                                    </Typography>
                                </a>
                                <a href={"https://client.afttmarkets.com/register"}
                                   target={"_blank"}
                                   className={"flex items-center mt-5"}
                                >
                                    <img src="/images/footer/youtube.webp" className={"w-5 h-5 object-cover"} alt=""/>
                                    <Typography variant={"muted"} className={"!text-[#999] ml-3"}>
                                        Youtube
                                    </Typography>
                                </a>
                                <a
                                    href={"https://client.afttmarkets.com/register"}
                                    target={"_blank"}
                                    className={"flex items-center mt-5"}
                                >
                                    <img src="/images/footer/discord.webp" className={"w-5 h-5 object-cover"} alt=""/>
                                    <Typography variant={"muted"} className={"!text-[#999] ml-3"}>
                                        Discord
                                    </Typography>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Separator className={"bg-[#5C6379] my-8"}/>
                    <div className={"lg:hidden"}>
                        <NavigationAccordion data={navigationAry[0].children}/>
                    </div>
                    <div className={"hidden lg:block"}>
                        <div className={"grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8"}>
                            {
                                navigationAry[0].children.map((d, i) => (
                                    <div className={""} key={i}>
                                        <Typography variant={"muted"} className={"!text-white font-bold"}>
                                            { d.title }
                                        </Typography>
                                        {
                                            d.children.map((dItem, dIndex) => (
                                                <div className={"flex flex-col"} key={dIndex}>
                                                    {
                                                        dItem.ul.map((uItem, uIndex) => (
                                                            <Link href={uItem.path} className={"mt-6"} key={uIndex}>
                                                                <Typography variant={"muted"}
                                                                            className={"!text-[#999]"}>
                                                                    {uItem.label}
                                                                </Typography>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={"mt-16"}>
                        <div className={"bg-[rgba(154,157,164,0.16)] py-6 px-4"}>
                            <Typography
                                variant={"muted"}
                                className={"text-center !text-[#999]"}
                            >
                                { t("policy.title") }
                            </Typography>
                        </div>

                        <div className={"mt-8"}>
                            <Typography
                                variant={"muted"}
                                className={"!text-white text-center"}
                            >
                                { t("policy.licence-title") }
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"!text-[#999] text-center mt-4"}
                            >
                                { t("policy.licence-number") }
                            </Typography>
                        </div>
                    </div>
                    <Separator className={"bg-[#5C6379] my-10"}/>
                    <div className={""}>
                        <div className={"flex !items-center"}>
                            <Image width={34} height={22} className={"!w-[34px] !h-[22px]"}
                                   alt={"australia"}
                                   src={"/images/footer/australia.png"}/>
                            <Typography className={"!ml-4 !text-white !text-base"}>
                                {t("future.australia")}
                            </Typography>
                        </div>
                        <div className={"flex !items-center !mt-4"}>
                            <Image width={34} height={22} className={"!w-[34px] !h-[22px]"}
                                   alt={"australia"}
                                   src={"/images/footer/vin.png"}/>
                            <Typography className={"!ml-4 !text-white !text-base"}>
                                {t("future.vin")}
                            </Typography>
                        </div>
                        <div className={"flex flex-col mt-10"}>
                            <div className={"flex flex-col"}>
                                <Typography className={"!text-white !text-base !font-medium"}>
                                    {t("risks.list.1-title")}
                                </Typography>
                                <Typography className={"!text-white !text-base !mt-2"}>
                                    {t("risks.list.1-content")}
                                </Typography>
                            </div>
                            <div className={"flex flex-col !mt-6"}>
                                <Typography className={"!text-white !text-base !font-medium"}>
                                    {t("risks.list.2-title")}
                                </Typography>
                                <Typography className={"!text-white !text-base !mt-2"}>
                                    {t("risks.list.2-content")}
                                </Typography>
                            </div>
                            <div className={"flex flex-col !mt-6"}>
                                <Typography className={"!text-white !text-base !font-medium"}>
                                    {t("risks.list.3-title")}
                                </Typography>
                                <Typography className={"!text-white !text-base !mt-2"}>
                                    {t("risks.list.3-content")}
                                </Typography>
                            </div>
                            <div className={"flex flex-col !mt-6"}>
                                <Typography className={"!text-white !text-base !font-medium"}>
                                    {t("risks.list.4-title")}
                                </Typography>
                                <Typography className={"!text-white !text-base !mt-2"}>
                                    {t("risks.list.4-content")}
                                </Typography>
                            </div>
                        </div>
                        <div className={"flex mt-4 mb-16"}>
                            <Typography className={"!text-[#7C808E] !text-base !mt-2"}>
                                © 2025 Asia Future Trading
                            </Typography>
                        </div>
                        {/*<div className={"flex"}>*/}
                        {/*    <Image className={"mx-auto"} src={"/images/footer/large-logo.png"} width={2400} height={320}*/}
                        {/*           alt={"logo"}/>*/}
                        {/*</div>*/}
                    </div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;