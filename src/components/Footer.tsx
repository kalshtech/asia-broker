"use client";
import React from "react";
import Image from "next/image";
import classNames from "classnames";
import {
    Phone,
    Mail,
    Facebook,
    Twitter,
    Youtube,
    Instagram
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import {useLocale, useTranslations} from "next-intl";


type Props = {
    className?: string
}

const Footer = (props: Props) => {
    const t = useTranslations('Footer');
    const locale = useLocale();
    const { className } = props;

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

    return (
        <footer className={classNames(["bg-theme-deep-bg px-4 pt-10 lg:px-30", className])}>
            <div>
                <Image src={RenderTransparentLogo()} width={208} height={58} alt={"logo"} />
            </div>
            <div>
                <div className={"grid grid-cols-12 gap-6"}>
                    <div className={"col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4"}>
                        <Separator className={"!bg-[#5C6379] my-4"}/>
                        <div className={"flex flex-col"}>
                            <Typography className={"!text-white !text-base !font-medium"}>
                                { t("contact.title") }
                            </Typography>
                            <div className={"flex flex-col !mt-4"}>
                                <div className={"flex items-center"}>
                                    <Phone size={"20"} className={"!text-white !text-base"}/>
                                    <a className={"!ml-2 !text-white !text-base hover:!text-active"}
                                          href={"tel:+64 21 0224 7369"}
                                    >
                                        (NZ) +64 21 0224 7369
                                    </a>
                                </div>
                                <Typography className={"!text-white !text-xs !ml-6 !mt-1"}>
                                    { t("contact.phone") }
                                </Typography>
                            </div>
                            <div className={"flex flex-col !mt-4"}>
                                <div className={"flex items-center"}>
                                    <Phone size={"20"} className={"!text-white !text-base"}/>
                                    <a className={"!ml-2 !text-white !text-base hover:!text-active"}
                                          href={"tel:+852 3957 0742"}
                                    >
                                        (HK) +852 3957 0742
                                    </a>
                                </div>
                            </div>
                            <div className={"flex flex-col !mt-4"}>
                                <div className={"flex items-center"}>
                                    <Mail size={"20"} className={"!text-white !text-base"}/>
                                    <a className={"!ml-2 !text-white !text-base hover:!text-active"}
                                          href={"mailto:global@afttmarkets.com"}
                                    >
                                        global@afttmarkets.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8"}>
                        <Separator className={"!bg-[#5C6379] my-4"}/>
                        <div className={"flex flex-col"}>
                            <Typography className={"!text-white !text-base !font-medium"}>
                                { t("future.title") }
                            </Typography>
                        </div>
                        <div className={"flex flex-col !mt-4"}>
                            <div className={"flex !items-center"}>
                                <Image width={34} height={22} className={"!w-[34px] !h-[22px]"} alt={"australia"} src={"/images/footer/australia.png"} />
                                <Typography className={"!ml-4 !text-white !text-base"}>
                                    { t("future.australia") }
                                </Typography>
                            </div>
                            <div className={"flex !items-center !mt-4"}>
                                <Image width={34} height={22} className={"!w-[34px] !h-[22px]"} alt={"australia"} src={"/images/footer/vin.png"} />
                                <Typography className={"!ml-4 !text-white !text-base"}>
                                    { t("future.vin") }
                                </Typography>
                            </div>
                            <div className={"flex !items-center !mt-4"}>
                                <Image width={34} height={22} className={"!w-[34px] !h-[22px]"} alt={"australia"} src={"/images/footer/hongkong.png"} />
                                <Typography className={"!ml-4 !text-white !text-base"}>
                                    { t("future.hk") }
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col"}>
                <div className={"grid grid-cols-12 gap-6"}>
                    <div className={"col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-4"}>
                        <Separator className={"!bg-[#5C6379] my-4"} />
                        <div className={"flex flex-col"}>
                            <Typography className={"!text-white !text-base !font-medium"}>
                                { t("login.title") }
                            </Typography>
                            <a className={"!text-white !text-base underline !mt-4"}
                               href={"https://client.afttmarkets.com"}
                               target={"_blank"}
                            >
                                { t("login.mt5") }
                            </a>
                            <a className={"!text-white !text-base !mt-4 underline"}
                               href={"https://client.afttmarkets.com/register"}
                               target={"_blank"}
                            >
                                { t("login.partner") }
                            </a>
                        </div>
                    </div>
                    <div className={"col-span-12 xs:col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-8"}>
                        <Separator className={"!bg-[#5C6379] my-4"} />
                        <div className={"flex flex-col"}>
                            <Typography className={"!text-white !text-base !font-medium"}>
                                { t("join-us.title") }
                            </Typography>
                            <div className={"flex !mt-6"}>
                                {/*<Link href={"https://client.afttmarkets.com/register"} target={"_blank"} underline>*/}
                                {/*    <Facebook className={"!text-white text-3xl"} />*/}
                                {/*</Link>*/}
                                {/*<Link className={"!ml-8"} href={"https://client.afttmarkets.com/register"} target={"_blank"} underline>*/}
                                {/*    <Twitter className={"!text-white text-3xl"} />*/}
                                {/*</Link>*/}
                                {/*<Link className={"!ml-8"} href={"https://client.afttmarkets.com/register"} target={"_blank"} underline>*/}
                                {/*    <Youtube className={"!text-white text-3xl"} />*/}
                                {/*</Link>*/}
                                {/*<Link className={"!ml-8"} href={"https://client.afttmarkets.com/register"} target={"_blank"} underline>*/}
                                {/*    <Instagram className={"!text-white text-3xl"} />*/}
                                {/*</Link>*/}
                                {/*<Link className={"!ml-8"} href={"https://client.afttmarkets.com/register"} target={"_blank"} underline>*/}
                                {/*    <DiscordOutlined className={"!text-white text-3xl"} />*/}
                                {/*</Link>*/}
                                <a href={"https://api.whatsapp.com/send?phone=85297412403"} target={"_blank"}>
                                    {/*<WhatsAppOutlined className={"!text-white text-3xl"} />*/}
                                    <span role="img"
                                          aria-label="whats-app"
                                          className="anticon anticon-whats-app !text-white text-3xl"
                                    >
                                        <svg
                                            viewBox="64 64 896 896"
                                            focusable="false"
                                            data-icon="whats-app"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <defs>
                                                <style/>
                                            </defs>
                                            <path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-.4-13.7-.4-21.1-.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path>
                                            <path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3a444.35 444.35 0 00-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9a445.35 445.35 0 00-142 96.5c-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9A449.4 449.4 0 00112 714v152a46 46 0 0046 46h152.1A449.4 449.4 0 00510 960h2.1c59.9 0 118-11.6 172.7-34.3a444.48 444.48 0 00142.8-95.2c41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5.3-60.9-11.5-120-34.8-175.6zm-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-.6 99.6-39.7 192.9-110.1 262.7z"></path>
                                        </svg>
                                    </span>
                                </a>
                                <a className={"!ml-8"} href={"https://t.me/aftsocialtrading"} target={"_blank"}>
                                    <img src="/images/telegram.svg" className={"w-[30px] h-[30px"} alt="telegram"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Separator className={"!bg-[#5C6379] my-4"}/>
            <div className={"flex flex-col"}>
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
                        { t("risks.list.3-content") }
                    </Typography>
                </div>
                <div className={"flex flex-col !mt-6"}>
                    <Typography className={"!text-white !text-base !font-medium"}>
                        { t("risks.list.4-title") }
                    </Typography>
                    <Typography className={"!text-white !text-base !mt-2"}>
                        { t("risks.list.4-content") }
                    </Typography>
                </div>
            </div>
            <div className={"flex !my-4"}>
                <Typography className={"!text-[#7C808E] !text-base !mt-2"}>
                    © 2025 Asia Future Trading
                </Typography>
            </div>
            <div className={"flex"}>
                <Image className={"mx-auto"} src={"/images/footer/large-logo.png"} width={2400} height={320} alt={"logo"} />
            </div>
        </footer>
    )
}

export default Footer;